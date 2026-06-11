const locale: IGanttLocale = {
	date: {
		month_full: ["Janvāris", "Februāris", "Marts", "Aprīlis", "Maijs", "Jūnijs", "Jūlijs", "Augusts", "Septembris", "Oktobris", "Novembris", "Decembris"],
		month_short: ["Jan", "Feb", "Mar", "Apr", "Mai", "Jūn", "Jūl", "Aug", "Sep", "Okt", "Nov", "Dec"],
		day_full: ["Svētdiena", "Pirmdiena", "Otrdiena", "Trešdiena", "Ceturtdiena", "Piektdiena", "Sestdiena"],
		day_short: ["Sv", "Pr", "Ot", "Tr", "Ce", "Pk", "Se"]
	},
	labels: {
		new_task: "Jauns uzdevums",
		icon_save: "Saglabāt",
		icon_cancel: "Atcelt",
		icon_details: "Detalizēta informācija",
		icon_edit: "Rediģēt",
		icon_delete: "Dzēst",
		confirm_deleting: "Uzdevums tiks neatgriezeniski dzēsts. Vai tiešām?",
		section_description: "Apraksts",
		section_time: "Laika periods",
		section_type: "Tips",
		section_deadline: "Termiņš",
		section_baselines: "Bāzlīnijas",
		section_new_resources: "Resursi",

		/* grid columns */
		column_wbs: "WBS",
		column_text: "Uzdevuma nosaukums",
		column_start_date: "Sākuma datums",
		column_duration: "Ilgums",
		column_add: "",

		/* link confirmation */
		link: "Saite",
		confirm_link_deleting: "tiks dzēsta",
		link_start: " (sākums)",
		link_end: " (beigas)",

		type_task: "Uzdevums",
		type_project: "Kopsavilkuma uzdevums",
		type_milestone: "Atskaites punkts",

		minutes: "Minūtes",
		hours: "Stundas",
		days: "Dienas",
		weeks: "Nedēļas",
		months: "Mēneši",
		years: "Gadi",

		/* message popup */
		message_ok: "OK",
		message_cancel: "Atcelt",

		/* constraints */
		section_constraint: "Ierobežojums",
		constraint_type: "Ierobežojuma tips",
		constraint_date: "Ierobežojuma datums",
		asap: "Pēc iespējas ātrāk",
		alap: "Pēc iespējas vēlāk",
		snet: "Sākt ne agrāk par",
		snlt: "Sākt ne vēlāk par",
		fnet: "Beigt ne agrāk par",
		fnlt: "Beigt ne vēlāk par",
		mso: "Jāsāk",
		mfo: "Jāpabeidz",

		/* resource control */
		resources_add_button: "Pievienot piešķīrumu",
		resources_filter_placeholder: "Meklēt...",
		resources_filter_label: "paslēpt tukšos",
		resources_section_placeholder: "Vēl nekas nav piešķirts. Noklikšķiniet uz 'Pievienot piešķīrumu', lai piešķirtu resursus.",

		/* empty state screen */
		empty_state_text_link: "Noklikšķiniet šeit",
		empty_state_text_description: "lai izveidotu savu pirmo uzdevumu",

		/* baselines control */
		baselines_section_placeholder: "Sāciet, pievienojot jaunu bāzlīniju",
		baselines_add_button: "Pievienot bāzlīniju",
		baselines_remove_button: "Noņemt",
		baselines_remove_all_button: "Noņemt visu",

		/* deadline control */
		deadline_enable_button: "Iestatīt",
		deadline_disable_button: "Noņemt"
	}
};

export default locale;
