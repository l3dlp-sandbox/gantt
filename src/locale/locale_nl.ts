const locale: IGanttLocale = {
	date: {
		month_full: ["Januari", "Februari", "Maart", "April", "Mei", "Juni", "Juli", "Augustus", "September", "Oktober", "November", "December"],
		month_short: ["Jan", "Feb", "Mrt", "Apr", "Mei", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec"],
		day_full: ["Zondag", "Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag"],
		day_short: ["Zo", "Ma", "Di", "Wo", "Do", "Vr", "Za"]
	},
	labels: {
		new_task: "Nieuwe taak",
		icon_save: "Opslaan",
		icon_cancel: "Annuleren",
		icon_details: "Details",
		icon_edit: "Bewerken",
		icon_delete: "Verwijderen",
		confirm_deleting: "De taak wordt permanent verwijderd. Doorgaan?",
		section_description: "Beschrijving",
		section_time: "Tijdsperiode",
		section_type: "Type",
		section_deadline: "Deadline",
		section_baselines: "Basislijnen",
		section_new_resources: "Middelen",

		/* grid columns */
		column_wbs: "WBS",
		column_text: "Taaknaam",
		column_start_date: "Startdatum",
		column_duration: "Duur",
		column_add: "",

		/* link confirmation */
		link: "Koppeling",
		confirm_link_deleting: "zal worden verwijderd",
		link_start: " (start)",
		link_end: " (einde)",

		type_task: "Taak",
		type_project: "Samenvattingstaak",
		type_milestone: "Mijlpaal",


		minutes: "minuten",
		hours: "uren",
		days: "dagen",
		weeks: "weken",
		months: "maanden",
		years: "jaren",

		/* message popup */
		message_ok: "OK",
		message_cancel: "Annuleren",

		/* constraints */
		section_constraint: "Beperking",
		constraint_type: "Type beperking",
		constraint_date: "Datum van beperking",
		asap: "Zo snel mogelijk",
		alap: "Zo laat mogelijk",
		snet: "Niet eerder beginnen dan",
		snlt: "Niet later beginnen dan",
		fnet: "Niet eerder eindigen dan",
		fnlt: "Niet later eindigen dan",
		mso: "Moet beginnen op",
		mfo: "Moet eindigen op",

		/* resource control */
		resources_add_button: "Toewijzing toevoegen",
		resources_filter_placeholder: "Zoeken...",
		resources_filter_label: "lege verbergen",
		resources_section_placeholder: "Er is nog niets toegewezen. Klik op 'Toewijzing toevoegen' om middelen toe te wijzen.",

		/* empty state screen */
		empty_state_text_link: "Klik hier",
		empty_state_text_description: "om uw eerste taak aan te maken",

		/* baselines control */
		baselines_section_placeholder: "Begin met het toevoegen van een nieuwe basislijn",
		baselines_add_button: "Basislijn toevoegen",
		baselines_remove_button: "Verwijderen",
		baselines_remove_all_button: "Alles verwijderen",

		/* deadline control */
		deadline_enable_button: "Instellen",
		deadline_disable_button: "Verwijderen"
	}
};

export default locale;
