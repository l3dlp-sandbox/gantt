const locale: IGanttLocale = {
	date: {
		month_full: ["Januarie", "Februarie", "Maart", "April", "Mei", "Junie", "Julie", "Augustus", "September", "Oktober", "November", "Desember"],
		month_short: ["Jan", "Feb", "Mrt", "Apr", "Mei", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Des"],
		day_full: ["Sondag", "Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrydag", "Saterdag"],
		day_short: ["So", "Ma", "Di", "Wo", "Do", "Vr", "Sa"]
	},
	labels: {
		new_task: "Nuwe taak",
		icon_save: "Stoor",
		icon_cancel: "Kanselleer",
		icon_details: "Besonderhede",
		icon_edit: "Wysig",
		icon_delete: "Verwyder",
		confirm_deleting: "Die taak sal permanent verwyder word, is jy seker?",
		section_description: "Beskrywing",
		section_time: "Tydperk",
		section_type: "Tipe",
		section_deadline: "Sperdatum",
		section_baselines: "Basislyne",
		section_new_resources: "Hulpbronne",

		/* grid columns */
		column_wbs: "WBS",
		column_text: "Taaknaam",
		column_start_date: "Begintyd",
		column_duration: "Duur",
		column_add: "",

		/* link confirmation */
		link: "Skakel",
		confirm_link_deleting: "sal verwyder word",
		link_start: " (begin)",
		link_end: " (einde)",

		type_task: "Taak",
		type_project: "Opsommingstaak",
		type_milestone: "Mylpaal",

		minutes: "Minute",
		hours: "Uur",
		days: "Dae",
		weeks: "Weke",
		months: "Maande",
		years: "Jaar",

		/* message popup */
		message_ok: "OK",
		message_cancel: "Kanselleer",

		/* constraints */
		section_constraint: "Beperking",
		constraint_type: "Beperkingtipe",
		constraint_date: "Beperkingsdatum",
		asap: "So Gou As Moontlik",
		alap: "So Laat As Moontlik",
		snet: "Begin Nie Vroeër As",
		snlt: "Begin Nie Later As",
		fnet: "Voltooi Nie Vroeër As",
		fnlt: "Voltooi Nie Later As",
		mso: "Moet Begin Op",
		mfo: "Moet Voltooi Op",

		/* resource control */
		resources_add_button: "Voeg Toewysing By",
		resources_filter_placeholder: "Soek...",
		resources_filter_label: "versteek leë",
		resources_section_placeholder: "Niks is nog toegewys nie. Klik 'Voeg Toewysing By' om hulpbronne toe te wys.",

		/* empty state screen */
		empty_state_text_link: "Klik Hier",
		empty_state_text_description: "om jou eerste taak te skep",

		/* baselines control */
		baselines_section_placeholder: "Begin deur 'n nuwe basislyn by te voeg",
		baselines_add_button: "Voeg Basislyn By",
		baselines_remove_button: "Verwyder",
		baselines_remove_all_button: "Verwyder Alles",

		/* deadline control */
		deadline_enable_button: "Stel",
		deadline_disable_button: "Verwyder"
	}
};

export default locale;
