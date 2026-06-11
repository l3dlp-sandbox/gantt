/*
 Partial translation by Davor
 http://docs.dhtmlx.com/gantt/desktop__localization.html#comment-2569116291
*/

const locale: IGanttLocale = {
	date: {
		month_full: ["Siječanj", "Veljača", "Ožujak", "Travanj", "Svibanj", "Lipanj", "Srpanj", "Kolovoz", "Rujan", "Listopad", "Studeni", "Prosinac"],
		month_short: ["Sij", "Velj", "Ožu", "Tra", "Svi", "Lip", "Srp", "Kol", "Ruj", "Lis", "Stu", "Pro"],
		day_full: ["Nedjelja", "Ponedjeljak", "Utorak", "Srijeda", "Četvrtak", "Petak", "Subota"],
		day_short: ["Ned", "Pon", "Uto", "Sri", "Čet", "Pet", "Sub"]
	},
	labels: {
		new_task: "Novi Zadatak",
		icon_save: "Spremi",
		icon_cancel: "Odustani",
		icon_details: "Detalji",
		icon_edit: "Uredi",
		icon_delete: "Obriši",
		confirm_deleting: "Zadatak će biti trajno izbrisan, jeste li sigurni?",
		section_description: "Opis",
		section_time: "Vremensko razdoblje",
		section_type: "Tip",
		section_deadline: "Krajnji rok",
		section_baselines: "Osnovni planovi",
		section_new_resources: "Resursi",

		/* grid columns */
		column_wbs: "WBS",
		column_text: "Naziv Zadatka",
		column_start_date: "Datum početka",
		column_duration: "Trajanje",
		column_add: "",

		/* link confirmation */
		link: "Poveznica",
		confirm_link_deleting: "će biti izbrisana",
		link_start: " (početak)",
		link_end: " (kraj)",

		type_task: "Zadatak",
		type_project: "Sažeti zadatak",
		type_milestone: "Prekretnica",

		minutes: "Minuta",
		hours: "Sati",
		days: "Dana",
		weeks: "Tjedana",
		months: "Mjeseci",
		years: "Godina",

		/* message popup */
		message_ok: "OK",
		message_cancel: "Odustani",

		/* constraints */
		section_constraint: "Ograničenje",
		constraint_type: "Vrsta ograničenja",
		constraint_date: "Datum ograničenja",
		asap: "Što je prije moguće",
		alap: "Što je kasnije moguće",
		snet: "Započni ne prije od",
		snlt: "Započni ne kasnije od",
		fnet: "Završi ne prije od",
		fnlt: "Završi ne kasnije od",
		mso: "Mora započeti na",
		mfo: "Mora završiti na",

		/* resource control */
		resources_add_button: "Dodaj dodjelu",
		resources_filter_placeholder: "Pretraži...",
		resources_filter_label: "sakrij prazne",
		resources_section_placeholder: "Još ništa nije dodijeljeno. Kliknite na „Dodaj dodjelu” da biste dodijelili resurse.",

		/* empty state screen */
		empty_state_text_link: "Kliknite ovdje",
		empty_state_text_description: "za stvaranje prvog zadatka",

		/* baselines control */
		baselines_section_placeholder: "Počnite dodavati novi osnovni plan",
		baselines_add_button: "Dodaj osnovni plan",
		baselines_remove_button: "Ukloni",
		baselines_remove_all_button: "Ukloni sve",

		/* deadline control */
		deadline_enable_button: "Postavi",
		deadline_disable_button: "Ukloni"
	}
};

export default locale;
