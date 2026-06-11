const locale: IGanttLocale = {
	date: {
		month_full: ["Janar", "Shkurt", "Mars", "Prill", "Maj", "Qershor", "Korrik", "Gusht", "Shtator", "Tetor", "Nëntor", "Dhjetor"],
		month_short: ["Jan", "Shk", "Mar", "Pri", "Maj", "Qer", "Kor", "Gus", "Sht", "Tet", "Nën", "Dhj"],
		day_full: ["E Diel", "E Hënë", "E Martë", "E Mërkurë", "E Enjte", "E Premte", "E Shtunë"],
		day_short: ["Die", "Hën", "Mar", "Mër", "Enj", "Pre", "Sht"]
	},
	labels: {
		new_task: "Detyrë e re",
		icon_save: "Ruaj",
		icon_cancel: "Anulo",
		icon_details: "Detaje",
		icon_edit: "Ndrysho",
		icon_delete: "Fshij",
		confirm_deleting: "Detyra do të fshihet përgjithmonë, a jeni i sigurt?",
		section_description: "Përshkrimi",
		section_time: "Periudha kohore",
		section_type: "Lloji",
		section_deadline: "Afati",
		section_baselines: "Linjat bazë",
		section_new_resources: "Burime",

		/* grid columns */
		column_wbs: "WBS",
		column_text: "Emri i detyrës",
		column_start_date: "Data e fillimit",
		column_duration: "Kohëzgjatja",
		column_add: "",

		/* link confirmation */
		link: "Lidhje",
		confirm_link_deleting: "do të fshihet",
		link_start: " (fillimi)",
		link_end: " (fundi)",

		type_task: "Detyrë",
		type_project: "Detyrë përmbledhëse",
		type_milestone: "Piketë",

		minutes: "Minutë",
		hours: "Orë",
		days: "Ditë",
		weeks: "Javë",
		months: "Muaj",
		years: "Vite",

		/* message popup */
		message_ok: "OK",
		message_cancel: "Anulo",

		/* constraints */
		section_constraint: "Kufizim",
		constraint_type: "Lloji i kufizimit",
		constraint_date: "Data e kufizimit",
		asap: "Sa më shpejt të jetë e mundur",
		alap: "Sa më vonë të jetë e mundur",
		snet: "Fillo jo më herët se",
		snlt: "Fillo jo më vonë se",
		fnet: "Përfundo jo më herët se",
		fnlt: "Përfundo jo më vonë se",
		mso: "Duhet të fillojë më",
		mfo: "Duhet të përfundojë më",

		/* resource control */
		resources_add_button: "Shto caktim",
		resources_filter_placeholder: "Kërko...",
		resources_filter_label: "fshih bosh",
		resources_section_placeholder: "Asgjë nuk është caktuar ende. Klikoni 'Shto Caktim' për të caktuar burime.",

		/* empty state screen */
		empty_state_text_link: "Kliko këtu",
		empty_state_text_description: "për të krijuar detyrën tuaj të parë",

		/* baselines control */
		baselines_section_placeholder: "Filloni duke shtuar një linjë bazë të re",
		baselines_add_button: "Shto linjë bazë",
		baselines_remove_button: "Hiq",
		baselines_remove_all_button: "Hiqi të gjitha",

		/* deadline control */
		deadline_enable_button: "Vendos",
		deadline_disable_button: "Hiq"
	}
};

export default locale;
