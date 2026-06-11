import { Client } from "../../remote/remote_client";

export default class RemoteEvents {
	protected _remote: any;
	protected _ready: Promise<any>;

	constructor(url: string, token: string) {
		const remote = new Client({
			url,
			token
		});

		// temporary patch, as we do not want credentials
		remote.fetch = function (url: string, body?: BodyInit) {
			const req: RequestInit = {
				headers: this.headers()
			};
			if (body) {
				req.method = "POST";
				req.body = body;
			}

			return fetch(url, req).then(res => res.json());
		};

		this._ready = remote.load().then(back => (this._remote = back));
	}

	protected ready() {
		return this._ready;
	}

	protected on(name: string | any, handler?: any) {
		this.ready().then(back => {
			if (typeof name === "string") back.on(name, handler);
			else {
				for (const key in name) {
					back.on(key, name[key]);
				}
			}
		});
	}
}
