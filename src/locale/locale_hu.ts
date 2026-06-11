const locale: IGanttLocale = {
	date: {
		month_full: ["Január", "Február", "Március", "Április", "Május", "Június", "Július", "Augusztus", "Szeptember", "Október", "November", "December"],
		month_short: ["Jan", "Feb", "Már", "Ápr", "Máj", "Jún", "Júl", "Aug", "Sep", "Okt", "Nov", "Dec"],
		day_full: ["Vasárnap", "Hétfő", "Kedd", "Szerda", "Csütörtök", "Péntek", "Szombat"],
		day_short: ["Va", "Hé", "Ke", "Sze", "Csü", "Pé", "Szo"]
	},
	labels: {
		new_task: "Új feladat",
		icon_save: "Mentés",
		icon_cancel: "Mégse",
		icon_details: "Részletek",
		icon_edit: "Szerkesztés",
		icon_delete: "Törlés",
		confirm_deleting: "A feladat törlődik, biztosan folytatja?",
		section_description: "Leírás",
		section_time: "Időszak",
		section_type: "Típus",
		section_deadline: "Határidő",
		section_baselines: "Alaptervek",
		section_new_resources: "Erőforrások",

		/* grid columns */
		column_wbs: "WBS",
		column_text: "Feladat neve",
		column_start_date: "Kezdés",
		column_duration: "Időtartam",
		column_add: "",

		/* link confirmation */
		link: "Kapcsolat",
		confirm_link_deleting: "törlődik",
		link_start: " (kezdet)",
		link_end: " (vége)",

		type_task: "Feladat",
		type_project: "Összefoglaló tevékenység",
		type_milestone: "Mérföldkő",


		minutes: "Perc",
		hours: "Órá",
		days: "Nap",
		weeks: "Hét",
		months: "Hónap",
		years: "Év",

		/* message popup */
		message_ok: "OK",
		message_cancel: "Mégse",

		/* constraints */
		section_constraint: "Kényszer",
		constraint_type: "Kényszer típusa",
		constraint_date: "Kényszer dátuma",
		asap: "Minél hamarabb",
		alap: "Minél később",
		snet: "Kezdés legkorábban",
		snlt: "Kezdés legkésőbb",
		fnet: "Befejezés legkorábban",
		fnlt: "Befejezés legkésőbb",
		mso: "Kezdés ekkor",
		mfo: "Befejezés ekkor",

		/* resource control */
		resources_add_button: "Hozzárendelés hozzáadása",
		resources_filter_placeholder: "Keresés...",
		resources_filter_label: "üresek elrejtése",
		resources_section_placeholder: "Még nincs hozzárendelés. Kattintson a „Hozzárendelés hozzáadása” gombra az erőforrások hozzárendeléséhez.",

		/* empty state screen */
		empty_state_text_link: "Kattintson ide",
		empty_state_text_description: "az első feladat létrehozásához",

		/* baselines control */
		baselines_section_placeholder: "Kezdje új alapterv hozzáadásával",
		baselines_add_button: "Alapterv hozzáadása",
		baselines_remove_button: "Eltávolítás",
		baselines_remove_all_button: "Összes eltávolítása",

		/* deadline control */
		deadline_enable_button: "Beállítás",
		deadline_disable_button: "Eltávolítás"
	}
};

export default locale;
