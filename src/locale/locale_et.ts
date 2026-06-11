const locale: IGanttLocale = {
	date: {
		month_full: ["Jaanuar", "Veebruar", "Märts", "Aprill", "Mai", "Juuni", "Juuli", "August", "September", "Oktoober", "November", "Detsember"],
		month_short: ["Jaan", "Veebr", "Mär", "Apr", "Mai", "Juun", "Juul", "Aug", "Sept", "Okt", "Nov", "Dets"],
		day_full: ["Pühapäev", "Esmaspäev", "Teisipäev", "Kolmapäev", "Neljapäev", "Reede", "Laupäev"],
		day_short: ["P", "E", "T", "K", "N", "R", "L"]
	},
	labels: {
		new_task: "Uus ülesanne",
		icon_save: "Salvesta",
		icon_cancel: "Tühista",
		icon_details: "Üksikasjad",
		icon_edit: "Muuda",
		icon_delete: "Kustuta",
		confirm_deleting: "Ülesanne kustutatakse jäädavalt. Kas olete kindel?",
		section_description: "Kirjeldus",
		section_time: "Ajavahemik",
		section_type: "Tüüp",
		section_deadline: "Tähtaeg",
		section_baselines: "Lähteplaanid",
		section_new_resources: "Ressursid",

		/* grid columns */
		column_wbs: "WBS",
		column_text: "Ülesande nimi",
		column_start_date: "Alguskuupäev",
		column_duration: "Kestus",
		column_add: "",

		/* link confirmation */
		link: "Seos",
		confirm_link_deleting: "kustutatakse",
		link_start: " (algus)",
		link_end: " (lõpp)",

		type_task: "Ülesanne",
		type_project: "Kokkuvõttev ülesanne",
		type_milestone: "Verstapost",

		minutes: "Minutit",
		hours: "Tundi",
		days: "Päeva",
		weeks: "Nädalat",
		months: "Kuud",
		years: "Aastat",

		/* message popup */
		message_ok: "OK",
		message_cancel: "Tühista",

		/* constraints */
		section_constraint: "Piirang",
		constraint_type: "Piirangu tüüp",
		constraint_date: "Piirangu kuupäev",
		asap: "Nii kiiresti kui võimalik",
		alap: "Nii hilja kui võimalik",
		snet: "Algus mitte varem kui",
		snlt: "Algus mitte hiljem kui",
		fnet: "Lõpp mitte varem kui",
		fnlt: "Lõpp mitte hiljem kui",
		mso: "Peab algama",
		mfo: "Peab lõppema",

		/* resource control */
		resources_add_button: "Lisa määrang",
		resources_filter_placeholder: "Otsi...",
		resources_filter_label: "peida tühjad",
		resources_section_placeholder: "Midagi pole veel määratud. Ressursside määramiseks klõpsake 'Lisa määrang'.",

		/* empty state screen */
		empty_state_text_link: "Klõpsake siia",
		empty_state_text_description: "et luua oma esimene ülesanne",

		/* baselines control */
		baselines_section_placeholder: "Alustage uue lähteplaani lisamisest",
		baselines_add_button: "Lisa lähteplaan",
		baselines_remove_button: "Eemalda",
		baselines_remove_all_button: "Eemalda kõik",

		/* deadline control */
		deadline_enable_button: "Määra",
		deadline_disable_button: "Eemalda"
	}
};

export default locale;
