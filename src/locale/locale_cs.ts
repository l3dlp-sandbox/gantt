const locale: IGanttLocale = {
	date: {
		month_full: ["Leden", "Únor", "Březen", "Duben", "Květen", "Červen", "Červenec", "Srpen", "Září", "Říjen", "Listopad", "Prosinec"],
		month_short: ["Led", "Ún", "Bře", "Dub", "Kvě", "Čer", "Čec", "Srp", "Září", "Říj", "List", "Pro"],
		day_full: ["Neděle", "Pondělí", "Úterý", "Středa", "Čtvrtek", "Pátek", "Sobota"],
		day_short: ["Ne", "Po", "Út", "St", "Čt", "Pá", "So"]
	},
	labels: {
		new_task: "Nový úkol",
		icon_save: "Uložit",
		icon_cancel: "Zrušit",
		icon_details: "Detail",
		icon_edit: "Edituj",
		icon_delete: "Smazat",
		confirm_deleting: "Úkol bude trvale smazán. Opravdu chcete pokračovat?",
		section_description: "Poznámky",
		section_time: "Časové období",
		section_type: "Typ",
		section_deadline: "Konečný termín",
		section_baselines: "Základní plány",
		section_new_resources: "Zdroje",

		/* grid columns */
		column_wbs: "WBS",
		column_text: "Název úkolu",
		column_start_date: "Zahájení",
		column_duration: "Doba trvání",
		column_add: "",

		/* link confirmation */
		link: "Vazba",
		confirm_link_deleting: "bude smazána",
		link_start: " (začátek)",
		link_end: " (konec)",

		type_task: "Úkol",
		type_project: "Souhrnný úkol",
		type_milestone: "Milník",


		minutes: "Minut",
		hours: "Hodin",
		days: "Dní",
		weeks: "Týdnů",
		months: "Měsíců",
		years: "Let",

		/* message popup */
		message_ok: "OK",
		message_cancel: "Zrušit",

		/* constraints */
		section_constraint: "Omezení",
		constraint_type: "Typ omezení",
		constraint_date: "Datum omezení",
		asap: "Co nejdříve",
		alap: "Co nejpozději",
		snet: "Zahájit po dni (včetně)",
		snlt: "Zahájit před dnem (včetně)",
		fnet: "Dokončit po dni (včetně)",
		fnlt: "Dokončit před dnem (včetně)",
		mso: "Musí být zahájen",
		mfo: "Musí být dokončen",

		/* resource control */
		resources_add_button: "Přidat přiřazení",
		resources_filter_placeholder: "Hledat...",
		resources_filter_label: "skrýt prázdné",
		resources_section_placeholder: "Zatím nic není přiřazeno. Kliknutím na „Přidat přiřazení“ přiřadíte zdroje.",

		/* empty state screen */
		empty_state_text_link: "Klikněte zde",
		empty_state_text_description: "pro vytvoření prvního úkolu",

		/* baselines control */
		baselines_section_placeholder: "Začněte přidávat nový základní plán",
		baselines_add_button: "Přidat základní plán",
		baselines_remove_button: "Odebrat",
		baselines_remove_all_button: "Odebrat vše",

		/* deadline control */
		deadline_enable_button: "Nastavit",
		deadline_disable_button: "Odebrat"
	}
};

export default locale;
