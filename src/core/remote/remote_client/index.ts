// Lightweight JSON-RPC client used by the remote_events plugin.
//
// This is an embedded copy of the standalone "remote-client" npm package
// (MIT, author: Maksim Kozhukh), converted to TypeScript and kept in-tree so
// the gantt build carries no external runtime dependency (which the MIT
// distribution cannot resolve). Behaviour mirrors the upstream package.
//
// Types and the Client live in this single module on purpose: the MIT repo
// generator materializes sources from the build sourcemap, and a separate
// type-only file would be erased at build time and never staged.

export type RemoteFunction<T> = () => Promise<T>;
export type InitCallback = () => void;
export type ResolveCall = (x: any) => void;

export type EventId = {
	id: string;
	name: string;
};

export type EventHandler = {
	id: string;
	handler: Function;
};

export type StringHash = {
	[id: string]: any;
};

export type EventsHash = {
	[id: string]: EventHandler[];
};

export type MethodHash = {
	[id: string]: (MethodHash | RemoteFunction<any>);
};

export interface WrappedCall {
	data: Call;
	status: number;
	resolve: ResolveCall;
	reject: ResolveCall;
}

export interface Response {
	id: string;
	error: any;
	data: any;
}

export interface Call {
	id: string;
	name: string;
	args: any[];
}

export interface ClientConfig {
	url?: string;
	token?: string;
}

export interface APIInfo {
	websocket?: boolean;
	key?: string;
	data: StringHash;
	api: StringHash;
}

export interface RemoteAPI {
	data: StringHash;
	api: MethodHash;
}

// connection modes
const MODE_HTTP = 1;       // not connected, calls go over plain HTTP
const MODE_CONNECTING = 2; // websocket handshake in progress
const MODE_SOCKET = 3;     // websocket open, calls go over the socket

function handleSocket(client: Client, url: string, token: string, ready: InitCallback): WebSocket {
	let surl = url;
	if (surl[0] === "/") {
		surl = document.location.protocol + "//" + document.location.host + url;
	}
	surl = surl.replace(/^http(s|):/, "ws$1:");

	const and = surl.indexOf("?") != -1 ? "&" : "?";
	surl = `${surl}${and}token=${token}&ws=1`;

	const socket = new WebSocket(surl);
	socket.onclose = () => setTimeout(() => client.connect(), 2000);
	socket.onmessage = (ev: MessageEvent) => {
		const pack = JSON.parse(ev.data);
		switch (pack.action) {
			case "result":
				client.result(pack.body, []);
				break;
			case "event":
				client.fire(pack.body.name, pack.body.value);
				break;
			case "start":
				ready();
				break;
			default:
				client.onError(pack.data);
		}
	};
	return socket;
}

export class Client {
	private _url: string | undefined;
	private _token: string;
	private _mode: number;
	private _seed: number;
	private _queue: WrappedCall[];
	data: StringHash;
	api: MethodHash;
	private _events: EventsHash;
	private _socket: WebSocket;

	constructor(config: ClientConfig) {
		const { url, token } = config;
		this._url = url;
		this._token = token;
		this._mode = MODE_HTTP;
		this._seed = 1;
		this._queue = [];

		this.data = {};
		this.api = {};
		this._events = {};
	}

	headers(): { [id: string]: string } {
		return {
			Accept: "application/json",
			"Content-Type": "application/json",
			"Remote-Token": this._token
		};
	}

	fetch<T>(url: string, body?: BodyInit): Promise<T> {
		const req: RequestInit = {
			credentials: "include",
			headers: this.headers()
		};
		if (body) {
			req.method = "POST";
			req.body = body;
		}

		return fetch(url, req).then(res => res.json());
	}

	load(url?: string): Promise<RemoteAPI> {
		if (url) {
			this._url = url;
		}
		return this.fetch<APIInfo>(this._url).then(obj => this.parse(obj));
	}

	parse(obj: APIInfo): RemoteAPI {
		const { key, websocket } = obj;
		if (key !== undefined) {
			this._token = key;
		}

		for (const name in obj.data) {
			this.data[name] = obj.data[name];
		}

		for (const name in obj.api) {
			const sub: MethodHash = this.api[name] = {};
			const cfg = obj.api[name];
			for (const method in cfg) {
				sub[method] = this._wrapper(name + "." + method);
			}
		}

		if (websocket) {
			this.connect();
		}

		return this;
	}

	connect(): void {
		const old = this._socket;
		if (old) {
			this._socket = null;
			old.onclose = function () {};
			old.close();
		}

		this._mode = MODE_CONNECTING;
		this._socket = handleSocket(this, this._url, this._token, () => {
			this._mode = MODE_SOCKET;
			this._send();
			this._resubscribe();
		});
	}

	_wrapper(name: string): RemoteFunction<any> {
		return function (this: Client) {
			const args = [].slice.call(arguments);
			let call: WrappedCall|null = null;

			const result = new Promise((resolve, reject) => {
				call = {
					data: {
						id: this._uid(),
						name,
						args
					},
					status: 1,
					resolve,
					reject
				};
				this._queue.push(call);
			});

			if(call){
				this.onCall(call, result);
			}
			
			if (call && this._mode === MODE_SOCKET) {
				this._send(call);
			} else {
				setTimeout(() => this._send(), 1);
			}

			return result;
		}.bind(this);
	}

	_uid(): string {
		return (this._seed++).toString();
	}

	_send(pack?: WrappedCall): void {
		if (this._mode == MODE_CONNECTING) {
			setTimeout(() => this._send(), 100);
			return;
		}

		const packArray = pack ? [pack] : this._queue.filter(call => call.status === 1);
		if (!packArray.length) {
			return;
		}

		const dataArray = packArray.map(call => {
			call.status = 2;
			return call.data;
		});

		if (this._mode !== MODE_SOCKET) {
			this.fetch<Response[]>(this._url, JSON.stringify(dataArray))
				.catch(err => this.onError(err))
				.then(data => this.result(data, dataArray));
		} else {
			this._socket.send(JSON.stringify({ action: "call", body: dataArray }));
		}
	}

	result(data: Response[]|null, pack: Call[]): void {
		const all: { [id: string]: Response } = {};
		if (data) {
			for (let i = 0; i < data.length; i++) {
				all[data[i].id] = data[i];
			}
		} else {
			for (let i = 0; i < pack.length; i++) {
				all[pack[i].id] = { id: pack[i].id, error: "Network Error", data: null };
			}
		}

		for (let i = this._queue.length - 1; i >= 0; i--) {
			const rcall = this._queue[i];
			const response = all[rcall.data.id];
			if (response) {
				this.onResponse(rcall, response);
				if (response.error) {
					rcall.reject(response.error);
				} else {
					rcall.resolve(response.data);
				}
				this._queue.splice(i, 1);
			}
		}
	}

	on(name: string, handler: Function): EventId {
		const id = this._uid();
		let events = this._events[name];
		const hasEvent = !!events;

		if (!hasEvent) {
			events = this._events[name] = [];
		}
		events.push({ id, handler });

		if (!hasEvent && this._mode == MODE_SOCKET) {
			this._socket.send(JSON.stringify({ action: "subscribe", name }));
		}

		return { name, id };
	}

	_resubscribe(): void {
		if (this._mode == MODE_SOCKET) {
			for (const name in this._events) {
				this._socket.send(JSON.stringify({ action: "subscribe", name }));
			}
		}
	}

	detach(event?: EventId): void {
		if (!event) {
			if (this._mode == MODE_SOCKET) {
				for (const key in this._events) {
					this._socket.send(JSON.stringify({ action: "unsubscribe", key }));
				}
			}
			this._events = {};
			return;
		}

		const { id, name } = event;
		const events = this._events[name];
		if (events) {
			const next = events.filter(e => e.id != id);
			if (next.length) {
				this._events[name] = next;
			} else {
				delete this._events[name];
				if (this._mode == MODE_SOCKET) {
					this._socket.send(JSON.stringify({ action: "unsubscribe", name }));
				}
			}
		}
	}

	fire(name: string, value: any): void {
		const events = this._events[name];
		if (events) {
			for (let i = 0; i < events.length; i++) {
				events[i].handler(value);
			}
		}
	}

	onError(info: any): Response[]|null {
		return null;
	}

	onCall(call: WrappedCall, result: Promise<any>): void {}

	onResponse(call: WrappedCall, result: any): void {}
}
