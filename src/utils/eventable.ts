import { GanttCallback, HandlerSettings } from "../core/common/gantt_types";

type EventId = string | number;

interface EventStorage {
	(...args: any[]): boolean;
	addEvent(handler: GanttCallback, settings?: HandlerSettings): EventId | false;
	removeEvent(id: EventId): void;
	clear(): void;
}

interface EventHostType {
	_silent_mode: boolean;
	listeners: Record<string, EventStorage>;
}

export interface EventableObject {
	attachEvent(eventName: string, handler: GanttCallback, settings?: HandlerSettings): EventId;
	attachAll(callback: GanttCallback): void;
	callEvent(name: string, eventArguments: any[]): boolean;
	checkEvent(name: string): boolean;
	detachEvent(id?: EventId): void;
	detachAllEvents(): void;
	[key: string]: any;
}

const EventHost = function(this: EventHostType): void {
	this._silent_mode = false;
	this.listeners = {};
};

// Probably, it is obsolete code as it is not used anywhere
EventHost.prototype = {
	_silentStart: function(this: EventHostType): void {
		this._silent_mode = true;
	},
	_silentEnd: function(this: EventHostType): void {
		this._silent_mode = false;
	}
};


const createEventStorage = function(obj: unknown): EventStorage {
	let handlers: Record<string, GanttCallback> = {};
	let index = 0;
	const eventStorage = function(this: unknown, ...args: any[]): boolean | undefined {
		let combinedResult = true;
		for (const i in handlers) {
			const handlerResult = handlers[i].apply(obj, args);
			combinedResult = combinedResult && handlerResult;
		}
		return combinedResult;
	} as EventStorage;

	eventStorage.addEvent = function(handler: GanttCallback, settings?: HandlerSettings): EventId | false {
		if (typeof handler === "function") {
			let handlerId: EventId;
			if (settings && settings.id !== undefined) {
				handlerId = settings.id;
			} else {
				handlerId = index;
				index++;
			}

			if (settings && settings.once) {
				const originalHandler = handler;
				handler = function(): void {
					originalHandler();
					eventStorage.removeEvent(handlerId);
				};
			}

			handlers[String(handlerId)] = handler;
			return handlerId;
		}
		return false;
	};

	eventStorage.removeEvent = function(id: EventId): void {
		delete handlers[String(id)];
	};

	eventStorage.clear = function(): void {
		handlers = {};
	};

	return eventStorage;
};

function makeEventable<T extends Record<string, any>>(obj: T): asserts obj is T & EventableObject {
	const eventHost = new (EventHost as unknown as { new(): EventHostType })();
	const target = obj as T & Partial<EventableObject>;
	target.attachEvent = function(eventName: string, handler: GanttCallback, settings?: HandlerSettings): EventId {
		eventName = "ev_" + eventName.toLowerCase();
		if (!eventHost.listeners[eventName]) {
			eventHost.listeners[eventName] = createEventStorage(this);
		}

		if (settings && settings.thisObject) {
			handler = handler.bind(settings.thisObject);
		}

		const innerId = eventHost.listeners[eventName].addEvent(handler, settings);
		let handlerId: EventId = eventName + ":" + innerId;
		if (settings && settings.id !== undefined) {
			handlerId = settings.id;
		}
		return handlerId;
	};

	target.attachAll = function(callback: GanttCallback): void {
		if (this.attachEvent){
			this.attachEvent("listen_all", callback);
		}
	};

	target.callEvent = function(name: string, eventArguments: any[]): boolean | undefined {
		if (eventHost._silent_mode) return true;

		const handlerName = "ev_" + name.toLowerCase();
		const listeners = eventHost.listeners;
		if (listeners["ev_listen_all"]) {
			listeners["ev_listen_all"].apply(this, [name].concat(eventArguments));
		}

		if (listeners[handlerName]) {
			return listeners[handlerName].apply(this, eventArguments);
		}
		return true;
	};

	target.checkEvent = function(name: string): boolean {
		const listeners = eventHost.listeners;
		return !!listeners["ev_" + name.toLowerCase()];
	};

	target.detachEvent = function(id?: EventId): void {
		if (id !== undefined && id !== null) {
			const listeners = eventHost.listeners;
			for (const i in listeners) {
				listeners[i].removeEvent(id);
			}

			const list = String(id).split(":");
			if (list.length === 2) {
				const eventName = list[0];
				const eventId = list[1];
				if (listeners[eventName]) {
					listeners[eventName].removeEvent(eventId);
				}
			}
		}
	};

	target.detachAllEvents = function(): void {
		for (const name in eventHost.listeners) {
			eventHost.listeners[name].clear();
		}
	};
}

export default makeEventable;
