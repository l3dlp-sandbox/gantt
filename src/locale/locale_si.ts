const locale: IGanttLocale = {
	date: {
		month_full: ["Januar", "Februar", "Marec", "April", "Maj", "Junij", "Julij", "Avgust", "September", "Oktober", "November", "December"],
		month_short: ["Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Avg", "Sep", "Okt", "Nov", "Dec"],
		day_full: ["Nedelja", "Ponedeljek", "Torek", "Sreda", "Četrtek", "Petek", "Sobota"],
		day_short: ["Ned", "Pon", "Tor", "Sre", "Čet", "Pet", "Sob"]
	},
	labels: {
		new_task: "Nova naloga",
		icon_save: "Shrani",
		icon_cancel: "Prekliči",
		icon_details: "Podrobnosti",
		icon_edit: "Uredi",
		icon_delete: "Izbriši",
		confirm_deleting: "Opravilo bo izbrisano. Želite nadaljevati?",
		section_description: "Opis",
		section_time: "Časovni okvir",
		section_type: "Vrsta",
		section_deadline: "Rok",
		section_baselines: "Osnovni načrti",
		section_new_resources: "Viri",

		/* grid columns */
		column_wbs: "WBS",
		column_text: "Ime opravila",
		column_start_date: "Začetek",
		column_duration: "Trajanje",
		column_add: "",

		/* link confirmation */
		link: "Povezava",
		confirm_link_deleting: "bo izbrisana",
		link_start: " (začetek)",
		link_end: " (konec)",

		type_task: "Opravilo",
		type_project: "Opravilo povzetka",
		type_milestone: "Mejnik",


		minutes: "Minut",
		hours: "Ur",
		days: "Dni",
		weeks: "Tednov",
		months: "Mesecev",
		years: "Let",

		/* message popup */
		message_ok: "OK",
		message_cancel: "Prekliči",

		/* constraints */
		section_constraint: "Omejitev",
		constraint_type: "Vrsta omejitve",
		constraint_date: "Datum omejitve",
		asap: "Čim prej",
		alap: "Čim pozneje",
		snet: "Ne začni pred",
		snlt: "Začni najpozneje do",
		fnet: "Ne dokončaj pred",
		fnlt: "Dokončaj najpozneje do",
		mso: "Mora se začeti na",
		mfo: "Mora biti zaključeno do",

		/* resource control */
		resources_add_button: "Dodaj dodelitev",
		resources_filter_placeholder: "Išči...",
		resources_filter_label: "skrij prazne",
		resources_section_placeholder: "Nič še ni dodeljeno. Kliknite »Dodaj dodelitev«, da dodelite vire.",

		/* empty state screen */
		empty_state_text_link: "Kliknite tukaj",
		empty_state_text_description: "da ustvarite prvo opravilo",

		/* baselines control */
		baselines_section_placeholder: "Začnite dodajati nov osnovni načrt",
		baselines_add_button: "Dodaj osnovni načrt",
		baselines_remove_button: "Odstrani",
		baselines_remove_all_button: "Odstrani vse",

		/* deadline control */
		deadline_enable_button: "Nastavi",
		deadline_disable_button: "Odstrani"
	}
};

export default locale;
