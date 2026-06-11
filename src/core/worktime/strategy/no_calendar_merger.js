// No-op calendar merger for the MIT edition. Working-time calendars are
// excluded here (calendar_strategy is aliased to no_work_time), so there are
// no real hour/date intervals to intersect. CalendarManager still constructs a
// merger through mergeCalendars(); this drop-in keeps that path inert by
// returning an empty ("all time is working time") config instead of the full
// intersection logic in work_calendar_merger.js.
function WorkTimeCalendarMerger(){
}

WorkTimeCalendarMerger.prototype = {
	merge: function(){
		return { hours: [], dates: {}, customWeeks: {} };
	}
};

export default WorkTimeCalendarMerger;
