import env from "./env";
import { GanttStatic } from "../core/common/gantt_types";

export default function isHeadless(gantt: GanttStatic): boolean {
	return env.isNode || !gantt.$root;
};
