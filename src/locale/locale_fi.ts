const locale: IGanttLocale = {
	date: {
		month_full: ["Tammikuu", "Helmikuu", "Maaliskuu", "Huhtikuu", "Toukokuu", "Kes&auml;kuu", "Hein&auml;kuu", "Elokuu", "Syyskuu", "Lokakuu", "Marraskuu", "Joulukuu"],
		month_short: ["Tam", "Hel", "Maa", "Huh", "Tou", "Kes", "Hei", "Elo", "Syy", "Lok", "Mar", "Jou"],
		day_full: ["Sunnuntai", "Maanantai", "Tiistai", "Keskiviikko", "Torstai", "Perjantai", "Lauantai"],
		day_short: ["Su", "Ma", "Ti", "Ke", "To", "Pe", "La"]
	},
	labels: {
		new_task: "Uusi tehtävä",
		icon_save: "Tallenna",
		icon_cancel: "Peruuta",
		icon_details: "Tiedot",
		icon_edit: "Muokkaa",
		icon_delete: "Poista",
		confirm_deleting: "Haluatko varmasti poistaa tehtävän?",
		section_description: "Kuvaus",
		section_time: "Aikajakso",
		section_type: "Tyyppi",
		section_deadline: "Määräaika",
		section_baselines: "Perusaikataulut",
		section_new_resources: "Resurssit",

		/* grid columns */
		column_wbs: "WBS",
		column_text: "Tehtävän nimi",
		column_start_date: "Aloitus",
		column_duration: "Kesto",
		column_add: "",

		/* link confirmation */
		link: "Linkki",
		confirm_link_deleting: "poistetaan",
		link_start: " (alku)",
		link_end: " (loppu)",

		type_task: "Tehtävä",
		type_project: "Yhteenvetotehtävä",
		type_milestone: "Välitavoite",


		minutes: "Minuuttia",
		hours: "Tuntia",
		days: "Päivää",
		weeks: "Viikoa",
		months: "Kuukautta",
		years: "Vuotta",

		/* message popup */
		message_ok: "OK",
		message_cancel: "Peruuta",

		/* constraints */
		section_constraint: "Rajoite",
		constraint_type: "Rajoitustyyppi",
		constraint_date: "Rajoituspäivä",
		asap: "Mahdollisimman pian",
		alap: "Mahdollisimman myöhään",
		snet: "Aloitus aikaisintaan",
		snlt: "Aloitus viimeistään",
		fnet: "Lopetus aikaisintaan",
		fnlt: "Lopetus viimeistään",
		mso: "Alkamisajankohta",
		mfo: "Päättymisajankohta",

		/* resource control */
		resources_add_button: "Lisää määritys",
		resources_filter_placeholder: "Hae...",
		resources_filter_label: "piilota tyhjät",
		resources_section_placeholder: "Ei vielä määrityksiä. Napsauta „Lisää määritys” määrittääksesi resurssit.",

		/* empty state screen */
		empty_state_text_link: "Napsauta tästä",
		empty_state_text_description: "luodaksesi ensimmäisen tehtäväsi",

		/* baselines control */
		baselines_section_placeholder: "Aloita lisäämällä uusi perusaikataulu",
		baselines_add_button: "Lisää perusaikataulu",
		baselines_remove_button: "Poista",
		baselines_remove_all_button: "Poista kaikki",

		/* deadline control */
		deadline_enable_button: "Aseta",
		deadline_disable_button: "Poista"
	}
};

export default locale;
