function CalendarDisabledTimeStrategy(gantt, argumentsHelper){
	this.argumentsHelper = argumentsHelper;
	this.$gantt = gantt;
	this._worktime = null;
}

CalendarDisabledTimeStrategy.prototype = {
	getWorkHours: function () {
		return [0, 24];
	},
	// Internal accessor used by the timeline scale-projection modes (a Pro
	// feature that relies on working-time calendars). This edition has no
	// working calendar, so report a full working day — projection then degrades
	// to a plain scale instead of throwing. Reaching here means projection /
	// working-time calendars are in use, so warn once (same notice as the Pro
	// render shims, see dummy_layer.js).
	_getWorkHours: function () {
		if (!CalendarDisabledTimeStrategy._warnedNoWorktime) {
			CalendarDisabledTimeStrategy._warnedNoWorktime = true;
			// eslint-disable-next-line no-console
			console.error("You are trying to use a Pro feature (scale projection / working-time calendars) that is not available in this edition of dhtmlxGantt.");
		}
		return [{ start: 0, end: 24 * 60 * 60 }];
	},
	setWorkTime: function () {
		return true;
	},
	unsetWorkTime: function () {
		return true;
	},
	// Config accessors so this strategy is a drop-in for CalendarWorkTimeStrategy
	// when the MIT edition aliases calendar_strategy -> no_work_time: the
	// CalendarManager creates/stores calendars through these, but every
	// calculation stays "all time is working time".
	getConfig: function () {
		return this._worktime;
	},
	_setConfig: function (settings) {
		this._worktime = settings;
	},
	_tryChangeCalendarSettings: function (payload) {
		payload();
		return true;
	},
	isWorkTime: function () {
		return true;
	},
	getClosestWorkTime: function (config) {
		var config = this.argumentsHelper.getClosestWorkTimeArguments.apply(this.argumentsHelper, arguments);
		return config.date;
	},

	calculateDuration: function () {
		var config = this.argumentsHelper.getDurationArguments.apply(this.argumentsHelper, arguments);
		var from = config.start_date,
			to = config.end_date,
			unit = config.unit,
			step = config.step;

		return this._calculateDuration(from, to, unit, step);
	},
	_calculateDuration: function (start, end, unit, step) {
		var dateHelper = this.$gantt.date;
		var fixedUnits = {
			"week": 1000 * 60 * 60 * 24 * 7,
			"day": 1000 * 60 * 60 * 24,
			"hour": 1000 * 60 * 60,
			"minute": 1000 * 60
		};

		var res = 0;
		if (fixedUnits[unit]) {
			res = Math.round((end - start) / (step * fixedUnits[unit]));
		} else {
			var from = new Date(start),
				to = new Date(end);
			while (from.valueOf() < to.valueOf()) {
				res += 1;
				from = dateHelper.add(from, step, unit);
			}

			if (from.valueOf() != end.valueOf()) {
				res += (to - from) / (dateHelper.add(from, step, unit) - from);
			}
		}

		return Math.round(res);
	},

	hasDuration: function () {
		var config = this.argumentsHelper.getDurationArguments.apply(this.argumentsHelper, arguments);
		var from = config.start_date,
			to = config.end_date,
			unit = config.unit;

		if (!unit) {
			return false;
		}
		from = new Date(from);
		to = new Date(to);

		return (from.valueOf() < to.valueOf());
	},

	hasWorkTime: function() {
		return true;
	},

	equals: function(calendar) {
		if(!(calendar instanceof CalendarDisabledTimeStrategy)){
			return false;
		}
		return true;
	},

	calculateEndDate: function () {
		var config = this.argumentsHelper.calculateEndDateArguments.apply(this.argumentsHelper, arguments);

		var start = config.start_date,
			duration = config.duration,
			unit = config.unit,
			step = config.step;

		return this.$gantt.date.add(start, step * duration, unit);
	}
};

export default CalendarDisabledTimeStrategy;