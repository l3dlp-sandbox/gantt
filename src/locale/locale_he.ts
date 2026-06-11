const locale: IGanttLocale = {
	date: {
		month_full: ["ינואר", "פברואר", "מרץ", "אפריל", "מאי", "יוני", "יולי", "אוגוסט", "ספטמבר", "אוקטובר", "נובמבר", "דצמבר"],
		month_short: ["ינו", "פבר", "מרץ", "אפר", "מאי", "יונ", "יול", "אוג", "ספט", "אוק", "נוב", "דצמ"],
		day_full: ["ראשון", "שני", "שלישי", "רביעי", "חמישי", "שישי", "שבת"],
		day_short: ["א", "ב", "ג", "ד", "ה", "ו", "ש"]
	},
	labels: {
		new_task: "משימה חדשה",
		icon_save: "שמור",
		icon_cancel: "בטל",
		icon_details: "פרטים",
		icon_edit: "ערוך",
		icon_delete: "מחק",
		confirm_deleting: "המשימה תימחק לצמיתות. להמשיך?",
		section_description: "הסבר",
		section_time: "תקופה",
		section_type: "סוג",
		section_deadline: "תאריך יעד",
		section_baselines: "תוכניות בסיסיות",
		section_new_resources: "משאבים",

		/* grid columns */
		column_wbs: "WBS",
		column_text: "שם המשימה",
		column_start_date: "תאריך התחלה",
		column_duration: "משך",
		column_add: "",

		/* link confirmation */
		link: "קישור",
		confirm_link_deleting: "יימחק",
		link_start: " (התחלה)",
		link_end: " (סיום)",

		type_task: "משימה",
		type_project: "פעילות ערסל",
		type_milestone: "אבן דרך",


		minutes: "דקות",
		hours: "שעות",
		days: "ימים",
		weeks: "שבועות",
		months: "חודשים",
		years: "שנים",

		/* message popup */
		message_ok: "אישור",
		message_cancel: "בטל",

		/* constraints */
		section_constraint: "אילוץ",
		constraint_type: "סוג אילוץ",
		constraint_date: "תאריך אילוץ",
		asap: "בהקדם האפשרי",
		alap: "מאוחר ככל האפשר",
		snet: "התחלה לא לפני",
		snlt: "התחלה לא אחרי",
		fnet: "סיום לא לפני",
		fnlt: "סיום לא אחרי",
		mso: "חייב להתחיל בתאריך",
		mfo: "חייב להסתיים בתאריך",

		/* resource control */
		resources_add_button: "הוסף הקצאה",
		resources_filter_placeholder: "חיפוש...",
		resources_filter_label: "הסתר ריקים",
		resources_section_placeholder: "עדיין לא הוקצה דבר. לחץ על „הוסף הקצאה” כדי להקצות משאבים.",

		/* empty state screen */
		empty_state_text_link: "לחץ כאן",
		empty_state_text_description: "כדי ליצור את המשימה הראשונה שלך",

		/* baselines control */
		baselines_section_placeholder: "התחל להוסיף תוכנית בסיסית חדשה",
		baselines_add_button: "הוסף תוכנית בסיסית",
		baselines_remove_button: "הסר",
		baselines_remove_all_button: "הסר הכל",

		/* deadline control */
		deadline_enable_button: "הגדר",
		deadline_disable_button: "הסר"
	}
};

export default locale;
