import * as utils from "../../utils/utils";
import * as helpers from "../../utils/helpers";


function IsWorkTimeArgument(date, unit, task, id, calendar){
	this.date = date;
	this.unit = unit;
	this.task = task;
	this.id = id;
	this.calendar = calendar;
	return this;
}

function ClosestWorkTimeArgument(date, dir, unit, task, id, calendar){
	this.date = date;
	this.dir = dir;
	this.unit = unit;
	this.task = task;
	this.id = id;
	this.calendar = calendar;
	return this;
}

function CalculateEndDateArgument(start_date, duration, unit, step, task, id, calendar){
	this.start_date = start_date;
	this.duration = duration;
	this.unit = unit;
	this.step = step;
	this.task = task;
	this.id = id;
	this.calendar = calendar;
	return this;
}

function GetDurationArgument(start, end, unit, step, task, calendar) {
	this.start_date = start;
	this.end_date = end;
	this.unit = unit !== undefined ? unit : null;
	this.step = step !== undefined ? step : null;
	this.task = task;
	this.calendar = calendar;
	return this;
}

var calendarArgumentsHelper = function(gantt){
	return {
		getWorkHoursArguments: function () {
			var config = arguments[0];
			if (helpers.isDate(config)) {
				config = {
					date: config
				};
			} else {
				config = utils.mixin({}, config);
			}

			if(!helpers.isValidDate(config.date)){
				gantt.assert(false, "Invalid date argument for getWorkHours method");
				throw new Error("Invalid date argument for getWorkHours method");
			}

			return config;
		},
		setWorkTimeArguments: function () {
			return arguments[0];
		},
		unsetWorkTimeArguments: function () {
			return arguments[0];
		},
		isWorkTimeArguments: function () {
			var config = arguments[0];
			if(config instanceof IsWorkTimeArgument){
				return config;
			}

			var processedConfig;
			if (!config.date) {
				//IsWorkTimeArgument(date, unit, task, id, calendar)
				processedConfig = new IsWorkTimeArgument(arguments[0], arguments[1], arguments[2], null, arguments[3]);
			} else {
				processedConfig = new IsWorkTimeArgument(config.date, config.unit, config.task, null, config.calendar);
			}

			processedConfig.unit = processedConfig.unit || gantt.config.duration_unit;

			if(!helpers.isValidDate(processedConfig.date)){
				gantt.assert(false, "Invalid date argument for isWorkTime method");
				throw new Error("Invalid date argument for isWorkTime method");
			}

			return processedConfig;
		},
		getClosestWorkTimeArguments: function (arg) {
			var config = arguments[0];
			if (config instanceof ClosestWorkTimeArgument)
				return config;

			var processedConfig;
			if (helpers.isDate(config)) {
				processedConfig = new ClosestWorkTimeArgument(config);

			} else {
				processedConfig = new ClosestWorkTimeArgument(
					config.date,
					config.dir,
					config.unit,
					config.task,
					null,//config.id,
					config.calendar
				);
			}

			if(config.id){
				processedConfig.task = config;
			}
			processedConfig.dir = config.dir || 'any';
			processedConfig.unit = config.unit || gantt.config.duration_unit;

			if(!helpers.isValidDate(processedConfig.date)){
				gantt.assert(false, "Invalid date argument for getClosestWorkTime method");
				throw new Error("Invalid date argument for getClosestWorkTime method");
			}
			return processedConfig;
		},

		_getStartEndConfig: function (param) {
			var argumentType = GetDurationArgument;
			var config;
			if (param instanceof argumentType)
				return param;

			if (helpers.isDate(param)) {
				// positional. Two shapes:
				//   (start, end, unit, step)     — unit-aware form (unit is a string)
				//   (start, end, task, calendar) — legacy pre-unit form; still used by
				//                                  the facade calculateDuration/_hasDuration
				//                                  and public callers. A task in the unit
				//                                  slot is truthy, so without this branch it
				//                                  survives the `unit || duration_unit`
				//                                  fallback and the calendar strategy does
				//                                  `gantt.date[<task object>]` → TypeError.
				var third = arguments[2];
				if (third && typeof third === "object") {
					config = new argumentType(arguments[0], arguments[1], null, null, third, arguments[3]);
				} else {
					config = new argumentType(arguments[0], arguments[1], arguments[2], arguments[3]);
				}
			} else {
				// object form: thread unit/step through so per-call overrides
				// reach the calendar strategy. Previously the unit/step fields
				// were dropped here and the calendar always used the global
				// `gantt.config.duration_unit`.

				// received a task object as an argument
				// ignore 'unit' and 'step' properties in this case, since it's likely a part of data model of a task
				const isTaskArgument = param.id !== null && param.id !== undefined;

				config = new argumentType(param.start_date, param.end_date, isTaskArgument ? null : param.unit, isTaskArgument ? null : param.step, param.task);
				if (param.id !== null && param.id !== undefined) {
					config.task = param;
				}
			}

			config.unit = config.unit || gantt.config.duration_unit;
			config.step = config.step || gantt.config.duration_step;
			config.start_date = config.start_date || config.start || config.date;

			if(!helpers.isValidDate(config.start_date)){
				gantt.assert(false, "Invalid start_date argument for getDuration method");
				throw new Error("Invalid start_date argument for getDuration method");
			}

			if(!helpers.isValidDate(config.end_date)){
				gantt.assert(false, "Invalid end_date argument for getDuration method");
				throw new Error("Invalid end_date argument for getDuration method");
			}

			return config;
		},

		getDurationArguments: function (start, end, unit, step) {
			return this._getStartEndConfig.apply(this, arguments);
		},

		hasDurationArguments: function (start, end, unit, step) {
			return this._getStartEndConfig.apply(this, arguments);
		},

		calculateEndDateArguments: function (start, duration, unit, step) {
			var config = arguments[0];
			if (config instanceof CalculateEndDateArgument)
				return config;

			var processedConfig;
			//CalculateEndDateArgument(start_date, duration, unit, step, task, id, calendar)
			if (helpers.isDate(config)) {
				processedConfig = new CalculateEndDateArgument(
					arguments[0],
					arguments[1],
					arguments[2],
					undefined,
					arguments[3],
					undefined,
					arguments[4]
				);

			} else {
				processedConfig = new CalculateEndDateArgument(
					config.start_date,
					config.duration,
					config.unit,
					config.step,
					config.task,
					null,//config.id,
					config.calendar
				);
			}
			if(config.id !== null && config.id !== undefined){
				processedConfig.task = config;

				// received a task object as an argument
				// ignore 'unit' and 'step' properties in this case, since it's likely a part of data model of a task
				processedConfig.unit = null;
				processedConfig.step = null;
			}

			processedConfig.unit = processedConfig.unit || gantt.config.duration_unit;
			processedConfig.step = processedConfig.step || gantt.config.duration_step;

			if(!helpers.isValidDate(processedConfig.start_date)){
				gantt.assert(false, "Invalid start_date argument for calculateEndDate method");
				throw new Error("Invalid start_date argument for calculateEndDate method");
			}

			return processedConfig;
		}
	};
};


export default calendarArgumentsHelper;