const locale: IGanttLocale = {
	date: {
		month_full: ["Januar", "Februar", "Mars", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Desember"],
		month_short: ["Jan", "Feb", "Mar", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Des"],
		day_full: ["Sundag", "Måndag", "Tysdag", "Onsdag", "Torsdag", "Fredag", "Laurdag"],
		day_short: ["Sun", "Mån", "Tys", "Ons", "Tor", "Fre", "Lau"]
	},
	labels: {
		new_task: "Ny oppgåve",
		icon_save: "Lagre",
		icon_cancel: "Avbryt",
		icon_details: "Detaljar",
		icon_edit: "Rediger",
		icon_delete: "Slett",
		confirm_deleting: "Oppgåva blir sletta permanent. Er du sikker?",
		section_description: "Skildring",
		section_time: "Tidsrom",
		section_type: "Type",
		section_deadline: "Frist",
		section_baselines: "Grunnlinjer",
		section_new_resources: "Ressursar",

		/* grid columns */
		column_wbs: "WBS",
		column_text: "Oppgåvenamn",
		column_start_date: "Startdato",
		column_duration: "Varigheit",
		column_add: "",

		/* link confirmation */
		link: "Lenkje",
		confirm_link_deleting: "blir sletta",
		link_start: " (start)",
		link_end: " (slutt)",

		type_task: "Oppgåve",
		type_project: "Samandragsoppgåve",
		type_milestone: "Milepåle",

		minutes: "Minutt",
		hours: "Timar",
		days: "Dagar",
		weeks: "Veker",
		months: "Månader",
		years: "År",

		/* message popup */
		message_ok: "OK",
		message_cancel: "Avbryt",

		/* constraints */
		section_constraint: "Avgrensing",
		constraint_type: "Avgrensingstype",
		constraint_date: "Avgrensingsdato",
		asap: "Så tidleg som mogleg",
		alap: "Så seint som mogleg",
		snet: "Ikkje start tidlegare enn",
		snlt: "Ikkje start seinare enn",
		fnet: "Ikkje avslutt tidlegare enn",
		fnlt: "Ikkje avslutt seinare enn",
		mso: "Må starte den",
		mfo: "Må avsluttast den",

		/* resource control */
		resources_add_button: "Legg til tildeling",
		resources_filter_placeholder: "Søk...",
		resources_filter_label: "gøym tomme",
		resources_section_placeholder: "Ingenting er tildelt enno. Klikk på 'Legg til tildeling' for å tildele ressursar.",

		/* empty state screen */
		empty_state_text_link: "Klikk her",
		empty_state_text_description: "for å opprette di første oppgåve",

		/* baselines control */
		baselines_section_placeholder: "Start med å leggje til ei ny grunnlinje",
		baselines_add_button: "Legg til grunnlinje",
		baselines_remove_button: "Fjern",
		baselines_remove_all_button: "Fjern alle",

		/* deadline control */
		deadline_enable_button: "Set",
		deadline_disable_button: "Fjern"
	}
};

export default locale;
