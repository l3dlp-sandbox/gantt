const locale: IGanttLocale = {
	date: {
		month_full: ["Eanáir", "Feabhra", "Márta", "Aibreán", "Bealtaine", "Meitheamh", "Iúil", "Lúnasa", "Meán Fómhair", "Deireadh Fómhair", "Samhain", "Nollaig"],
		month_short: ["Ean", "Fea", "Már", "Aib", "Bea", "Mei", "Iúil", "Lún", "MFó", "DFó", "Sam", "Nol"],
		day_full: ["Dé Domhnaigh", "Dé Luain", "Dé Máirt", "Dé Céadaoin", "Déardaoin", "Dé hAoine", "Dé Sathairn"],
		day_short: ["Dom", "Lua", "Mái", "Céa", "Déa", "Aoi", "Sat"]
	},
	labels: {
		new_task: "Tasc nua",
		icon_save: "Sábháil",
		icon_cancel: "Cealaigh",
		icon_details: "Sonraí",
		icon_edit: "Cuir in Eagar",
		icon_delete: "Scrios",
		confirm_deleting: "Scriosfar an tasc go buan, an bhfuil tú cinnte?",
		section_description: "Cur síos",
		section_time: "Tréimhse ama",
		section_type: "Cineál",
		section_deadline: "Spriocdháta",
		section_baselines: "Bunlínte",
		section_new_resources: "Acmhainní",

		/* grid columns */
		column_wbs: "WBS",
		column_text: "Ainm an taisc",
		column_start_date: "Dáta tosaithe",
		column_duration: "Fad",
		column_add: "",

		/* link confirmation */
		link: "Nasc",
		confirm_link_deleting: "scriosfar é",
		link_start: " (tús)",
		link_end: " (deireadh)",

		type_task: "Tasc",
		type_project: "Tasc achomair",
		type_milestone: "Garsprioc",

		minutes: "Nóiméad",
		hours: "Uair an Chloig",
		days: "Lá",
		weeks: "Seachtain",
		months: "Mhí",
		years: "Bhliana",

		/* message popup */
		message_ok: "OK",
		message_cancel: "Cealaigh",

		/* constraints */
		section_constraint: "Srian",
		constraint_type: "Cineál sriain",
		constraint_date: "Dáta sriain",
		asap: "A Luaithe is Féidir",
		alap: "A Dhéanaí is Féidir",
		snet: "Ná Tosaigh Níos Luaithe Ná",
		snlt: "Ná Tosaigh Níos Déanaí Ná",
		fnet: "Ná Críochnaigh Níos Luaithe Ná",
		fnlt: "Ná Críochnaigh Níos Déanaí Ná",
		mso: "Caithfidh Sé Tosú Ar",
		mfo: "Caithfidh Sé Críochnú Ar",

		/* resource control */
		resources_add_button: "Cuir Sannadh Leis",
		resources_filter_placeholder: "Cuardaigh...",
		resources_filter_label: "folaigh folamh",
		resources_section_placeholder: "Níl aon rud sannta fós. Cliceáil 'Cuir Sannadh Leis' chun acmhainní a shannadh.",

		/* empty state screen */
		empty_state_text_link: "Cliceáil Anseo",
		empty_state_text_description: "chun do chéad tasc a chruthú",

		/* baselines control */
		baselines_section_placeholder: "Tosaigh trí bhunlíne nua a chur leis",
		baselines_add_button: "Cuir Bunlíne Leis",
		baselines_remove_button: "Bain",
		baselines_remove_all_button: "Bain Uile",

		/* deadline control */
		deadline_enable_button: "Socraigh",
		deadline_disable_button: "Bain"
	}
};

export default locale;
