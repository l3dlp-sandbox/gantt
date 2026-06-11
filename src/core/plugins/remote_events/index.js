import RemoteEvents from "./remote_events";
import createHandlers from "./handlers";

export default function remoteEvents(gantt) {
	if (!gantt.ext){
		gantt.ext = {};
	}

	gantt.ext.liveUpdates = {
		RemoteEvents,
		remoteUpdates: createHandlers(gantt)
	};
}

