export default function(gantt){
	function getDefaultAutoSchedulingConfig(){
		return {
			enabled: false,
			apply_constraints: false,
			gap_behavior: "preserve",
			descendant_links: false,
			schedule_on_parse: true,
			move_projects: true,
			use_progress: false,

			schedule_from_end: false,
			project_constraint: false,
			show_constraints: false,

			// Per D-28 / D-31: internal transitional flags for the v2 engine
			// rollout. Underscore-prefixed → not part of the public API;
			// wrappers do NOT generate types for them. Phase E (v9.3) removes
			// both flags entirely. Users may opt back to v1 for one release
			// cycle by setting `_engine` / `_analysis_engine` to "v1" — a
			// one-time console.warn fires per gantt instance.
			_engine: "v2",
			_analysis_engine: "v2"
		};
	}

	function getAutoSchedulingConfig() {
		const config = gantt.config;

		// if already using new-style object - return as is
		if (typeof config.auto_scheduling === "object") {

			const schedulingConfig = {...getDefaultAutoSchedulingConfig(), ...config.auto_scheduling};

			// backward compatibility for {mode, strict, move_asap_tasks} properties
			if(schedulingConfig.mode){
				schedulingConfig.apply_constraints = schedulingConfig.mode === "constraints";
				delete schedulingConfig.mode;
			}

			if(schedulingConfig.strict !== undefined){
				schedulingConfig.gap_behavior = schedulingConfig.strict ? "compress" : "preserve";
				delete schedulingConfig.strict;
			}

			if(schedulingConfig.move_asap_tasks !== undefined){
				schedulingConfig.gap_behavior = schedulingConfig.move_asap_tasks ? "compress" : "preserve";
				delete schedulingConfig.move_asap_tasks;
			}
			return schedulingConfig;
		}

		// backward compatibility: build config from old flags
		const enabled = !!config.auto_scheduling;

		return {
			...getDefaultAutoSchedulingConfig(),
			...{
				enabled,
				// `auto_scheduling_compatibility: true` means "schedule like pre-6.1
				// gantt, WITHOUT task constraints" (GS-2083 / GS-3328 — the mapping
				// used to be inverted). Constraint scheduling is the legacy default,
				// so an unset flag resolves to apply_constraints: true.
				apply_constraints: !(config.auto_scheduling_compatibility ?? false),
				gap_behavior: config.auto_scheduling_strict !== true ? "preserve" : "compress",
				descendant_links: config.auto_scheduling_descendant_links ?? false,
				schedule_on_parse: config.auto_scheduling_initial ?? true,
				move_projects: config.auto_scheduling_move_projects ?? true,
				use_progress: config.auto_scheduling_use_progress ?? false,

				schedule_from_end: config.schedule_from_end ?? false,
				project_constraint: config.auto_scheduling_project_constraint ?? false,
				show_constraints: false
			}
		};
	}

	return {
		getDefaultAutoSchedulingConfig,
		getAutoSchedulingConfig
	};
};