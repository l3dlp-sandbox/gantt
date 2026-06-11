const locale: IGanttLocale = {
	date: {
		month_full: ["Januar", "Februar", "Mart", "April", "Maj", "Juni", "Juli", "Avgust", "Septembar", "Oktobar", "Novembar", "Decembar"],
		month_short: ["Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Avg", "Sep", "Okt", "Nov", "Dec"],
		day_full: ["Nedjelja", "Ponedjeljak", "Utorak", "Srijeda", "Četvrtak", "Petak", "Subota"],
		day_short: ["Ned", "Pon", "Uto", "Sri", "Čet", "Pet", "Sub"]
	},
	labels: {
		new_task: "Novi zadatak",
		icon_save: "Sačuvaj",
		icon_cancel: "Otkaži",
		icon_details: "Detalji",
		icon_edit: "Uredi",
		icon_delete: "Obriši",
		confirm_deleting: "Zadatak će biti trajno obrisan, jeste li sigurni?",
		section_description: "Opis",
		section_time: "Vremenski period",
		section_type: "Tip",
		section_deadline: "Rok",
		section_baselines: "Osnovne linije",
		section_new_resources: "Resursi",

		/* grid columns */
		column_wbs: "WBS",
		column_text: "Naziv zadatka",
		column_start_date: "Datum početka",
		column_duration: "Trajanje",
		column_add: "",

		/* link confirmation */
		link: "Veza",
		confirm_link_deleting: "će biti obrisana",
		link_start: " (početak)",
		link_end: " (kraj)",

		type_task: "Zadatak",
		type_project: "Zbirni zadatak",
		type_milestone: "Prekretnica",

		minutes: "Minuta",
		hours: "Sati",
		days: "Dana",
		weeks: "Sedmica",
		months: "Mjeseci",
		years: "Godina",

		/* message popup */
		message_ok: "OK",
		message_cancel: "Otkaži",

		/* constraints */
		section_constraint: "Ograničenje",
		constraint_type: "Tip ograničenja",
		constraint_date: "Datum ograničenja",
		asap: "Što je prije moguće",
		alap: "Što je kasnije moguće",
		snet: "Počni ne prije",
		snlt: "Počni ne poslije",
		fnet: "Završi ne prije",
		fnlt: "Završi ne poslije",
		mso: "Mora početi na",
		mfo: "Mora završiti na",

		/* resource control */
		resources_add_button: "Dodaj dodjelu",
		resources_filter_placeholder: "Pretraži...",
		resources_filter_label: "sakrij prazne",
		resources_section_placeholder: "Ništa još nije dodijeljeno. Kliknite na 'Dodaj Dodjelu' da dodijelite resurse.",

		/* empty state screen */
		empty_state_text_link: "Kliknite ovdje",
		empty_state_text_description: "da kreirate svoj prvi zadatak",

		/* baselines control */
		baselines_section_placeholder: "Počnite dodavanjem nove osnovne linije",
		baselines_add_button: "Dodaj osnovnu liniju",
		baselines_remove_button: "Ukloni",
		baselines_remove_all_button: "Ukloni sve",

		/* deadline control */
		deadline_enable_button: "Postavi",
		deadline_disable_button: "Ukloni"
	}
};

export default locale;
