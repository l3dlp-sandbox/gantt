import { GanttStatic, DatastoreMethods, TreeDatastoreMethods } from "../core/common/gantt_types";
import { IGanttConfig } from "../core/common/config";

/**
 * Check the over task or draggble task is placeholder task
 */

interface CustomConfig {
	placeholder_task?: IGanttConfig["placeholder_task"];
	types?: IGanttConfig["types"];
}

export default function isPlaceholderTask(
	id: string | number,
	gantt: GanttStatic | null,
	store: DatastoreMethods & TreeDatastoreMethods,
	config?: IGanttConfig | CustomConfig
): boolean {
	const actualConfig = gantt ? gantt.config : config;
	if (actualConfig && actualConfig.placeholder_task) {
		if (store.exists(id)) {
			const item = store.getItem(id);
			if (item){
				return item.type === actualConfig.types?.placeholder;
			}
		}
	}
	return false;
};