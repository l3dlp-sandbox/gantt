const locale: IGanttLocale = {
	date: {
		month_full: ["Január", "Február", "Marec", "Apríl", "Máj", "Jún", "Júl", "August", "September", "Október", "November", "December"],
		month_short: ["Jan", "Feb", "Mar", "Apr", "Máj", "Jún", "Júl", "Aug", "Sept", "Okt", "Nov", "Dec"],
		day_full: ["Nedeľa", "Pondelok", "Utorok", "Streda", "Štvrtok", "Piatok", "Sobota"],
		day_short: ["Ne", "Po", "Ut", "St", "Št", "Pi", "So"]
	},
	labels: {
		new_task: "Nová úloha",
		icon_save: "Uložiť",
		icon_cancel: "Zrušiť",
		icon_details: "Detail",
		icon_edit: "Edituj",
		icon_delete: "Zmazať",
		confirm_deleting: "Úloha bude natrvalo odstránená. Naozaj?",
		section_description: "Poznámky",
		section_time: "Doba platnosti",
		section_type: "Typ",
		section_deadline: "Termín",
		section_baselines: "Pôvodné plány",
		section_new_resources: "Zdroje",

		/* grid columns */
		column_wbs: "WBS",
		column_text: "Názov úlohy",
		column_start_date: "Začiatok",
		column_duration: "Trvanie",
		column_add: "",

		/* link confirmation */
		link: "Väzba",
		confirm_link_deleting: "bude odstránená",
		link_start: " (začiatok)",
		link_end: " (koniec)",

		type_task: "Úloha",
		type_project: "Súhrnná úloha",
		type_milestone: "Medzník",


		minutes: "Minút",
		hours: "Hodín",
		days: "Dní",
		weeks: "Týždňov",
		months: "Mesiacov",
		years: "Rokov",

		/* message popup */
		message_ok: "OK",
		message_cancel: "Zrušiť",

		/* constraints */
		section_constraint: "Obmedzenie",
		constraint_type: "Typ obmedzenia",
		constraint_date: "Dátum obmedzenia",
		asap: "Čo najskôr",
		alap: "Čo najneskoršie",
		snet: "Nezačína skôr než",
		snlt: "Nezačína neskôr než",
		fnet: "Nekončí skôr než",
		fnlt: "Nekončí neskôr než",
		mso: "Musí začať",
		mfo: "Musí skončiť",

		/* resource control */
		resources_add_button: "Pridať priradenie",
		resources_filter_placeholder: "Hľadať...",
		resources_filter_label: "skryť prázdne",
		resources_section_placeholder: "Zatiaľ nie je nič priradené. Kliknutím na „Pridať priradenie“ priradíte zdroje.",

		/* empty state screen */
		empty_state_text_link: "Kliknite sem",
		empty_state_text_description: "na vytvorenie prvej úlohy",

		/* baselines control */
		baselines_section_placeholder: "Začnite pridávať nový pôvodný plán",
		baselines_add_button: "Pridať pôvodný plán",
		baselines_remove_button: "Odstrániť",
		baselines_remove_all_button: "Odstrániť všetko",

		/* deadline control */
		deadline_enable_button: "Nastaviť",
		deadline_disable_button: "Odstrániť"
	}
};

export default locale;
