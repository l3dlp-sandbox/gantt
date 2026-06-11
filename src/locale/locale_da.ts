const locale: IGanttLocale = {
	date: {
		month_full: ["Januar", "Februar", "Marts", "April", "Maj", "Juni", "Juli", "August", "September", "Oktober", "November", "December"],
		month_short: ["Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec"],
		day_full: ["Søndag", "Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "Lørdag"],
		day_short: ["Søn", "Man", "Tir", "Ons", "Tor", "Fre", "Lør"]
	},
	labels: {
		new_task: "Ny opgave",
		icon_save: "Gem",
		icon_cancel: "Annuller",
		icon_details: "Detaljer",
		icon_edit: "Tilret",
		icon_delete: "Slet",
		confirm_deleting: "Opgaven bliver slettet permanent. Er du sikker?",
		section_description: "Beskrivelse",
		section_time: "Tidsperiode",
		section_type: "Type",
		section_deadline: "Deadline",
		section_baselines: "Oprindelige planer",
		section_new_resources: "Ressourcer",

		/* grid columns */
		column_wbs: "WBS",
		column_text: "Opgavenavn",
		column_start_date: "Start",
		column_duration: "Varighed",
		column_add: "",

		/* link confirmation */
		link: "Forbindelse",
		confirm_link_deleting: "vil blive slettet",
		link_start: " (start)",
		link_end: " (slut)",

		type_task: "Opgave",
		type_project: "Hovedopgave",
		type_milestone: "Milepæl",


		minutes: "Minutter",
		hours: "Timer",
		days: "Dage",
		weeks: "Uger",
		months: "Måneder",
		years: "År",

		/* message popup */
		message_ok: "OK",
		message_cancel: "Annuller",

		/* constraints */
		section_constraint: "Begrænsning",
		constraint_type: "Begrænsningstype",
		constraint_date: "Begrænsningsdato",
		asap: "Så hurtigt som muligt",
		alap: "Så sent som muligt",
		snet: "Start tidligst",
		snlt: "Start senest",
		fnet: "Afslut tidligst",
		fnlt: "Afslut senest",
		mso: "Skal starte den",
		mfo: "Skal slutte den",

		/* resource control */
		resources_add_button: "Tilføj tildeling",
		resources_filter_placeholder: "Søg...",
		resources_filter_label: "skjul tomme",
		resources_section_placeholder: "Intet er tildelt endnu. Klik på „Tilføj tildeling“ for at tildele ressourcer.",

		/* empty state screen */
		empty_state_text_link: "Klik her",
		empty_state_text_description: "for at oprette din første opgave",

		/* baselines control */
		baselines_section_placeholder: "Begynd at tilføje en ny oprindelig plan",
		baselines_add_button: "Tilføj oprindelig plan",
		baselines_remove_button: "Fjern",
		baselines_remove_all_button: "Fjern alle",

		/* deadline control */
		deadline_enable_button: "Angiv",
		deadline_disable_button: "Fjern"
	}
};

export default locale;
