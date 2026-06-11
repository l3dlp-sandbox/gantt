const locale: IGanttLocale = {
	date: {
		month_full: ["Januar", "Februar", "Mars", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Desember"],
		month_short: ["Jan", "Feb", "Mar", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Des"],
		day_full: ["Søndag", "Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "Lørdag"],
		day_short: ["Søn", "Man", "Tir", "Ons", "Tor", "Fre", "Lør"]
	},
	labels: {
		new_task: "Ny oppgave",
		icon_save: "Lagre",
		icon_cancel: "Avbryt",
		icon_details: "Detaljer",
		icon_edit: "Rediger",
		icon_delete: "Slett",
		confirm_deleting: "Oppgaven vil bli slettet permanent. Er du sikker?",
		section_description: "Beskrivelse",
		section_time: "Tidsperiode",
		section_type: "Type",
		section_deadline: "Tidsfrist",
		section_baselines: "Grunnlinjer",
		section_new_resources: "Ressurser",

		/* grid columns */
		column_wbs: "WBS",
		column_text: "Oppgavenavn",
		column_start_date: "Startdato",
		column_duration: "Varighet",
		column_add: "",

		/* link confirmation */
		link: "Kobling",
		confirm_link_deleting: "vil bli slettet",
		link_start: " (start)",
		link_end: " (slutt)",

		type_task: "Oppgave",
		type_project: "Hovedaktivitet",
		type_milestone: "Milepæl",


		minutes: "Minutter",
		hours: "Timer",
		days: "Dager",
		weeks: "Uker",
		months: "Måneder",
		years: "År",

		/* message popup */
		message_ok: "OK",
		message_cancel: "Avbryt",

		/* constraints */
		section_constraint: "Betingelse",
		constraint_type: "Betingelsestype",
		constraint_date: "Betingelsesdato",
		asap: "Så snart som mulig",
		alap: "Så sent som mulig",
		snet: "Start tidligst",
		snlt: "Start senest",
		fnet: "Ferdig tidligst",
		fnlt: "Ferdig senest",
		mso: "Må starte den",
		mfo: "Må avsluttes den",

		/* resource control */
		resources_add_button: "Legg til tildeling",
		resources_filter_placeholder: "Søk...",
		resources_filter_label: "skjul tomme",
		resources_section_placeholder: "Ingenting er tildelt ennå. Klikk på «Legg til tildeling» for å tildele ressurser.",

		/* empty state screen */
		empty_state_text_link: "Klikk her",
		empty_state_text_description: "for å opprette din første oppgave",

		/* baselines control */
		baselines_section_placeholder: "Begynn å legge til en ny grunnlinje",
		baselines_add_button: "Legg til grunnlinje",
		baselines_remove_button: "Fjern",
		baselines_remove_all_button: "Fjern alle",

		/* deadline control */
		deadline_enable_button: "Angi",
		deadline_disable_button: "Fjern"
	}
};

export default locale;
