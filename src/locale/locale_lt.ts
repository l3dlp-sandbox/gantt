const locale: IGanttLocale = {
	date: {
		month_full: ["Sausis", "Vasaris", "Kovas", "Balandis", "Gegužė", "Birželis", "Liepa", "Rugpjūtis", "Rugsėjis", "Spalis", "Lapkritis", "Gruodis"],
		month_short: ["Sau", "Vas", "Kov", "Bal", "Geg", "Bir", "Lie", "Rgp", "Rgs", "Spa", "Lap", "Grd"],
		day_full: ["Sekmadienis", "Pirmadienis", "Antradienis", "Trečiadienis", "Ketvirtadienis", "Penktadienis", "Šeštadienis"],
		day_short: ["Sk", "Pr", "An", "Tr", "Kt", "Pn", "Št"]
	},
	labels: {
		new_task: "Nauja užduotis",
		icon_save: "Išsaugoti",
		icon_cancel: "Atšaukti",
		icon_details: "Išsami informacija",
		icon_edit: "Redaguoti",
		icon_delete: "Ištrinti",
		confirm_deleting: "Užduotis bus visam laikui ištrinta. Ar tikrai?",
		section_description: "Aprašymas",
		section_time: "Laikotarpis",
		section_type: "Tipas",
		section_deadline: "Terminas",
		section_baselines: "Baziniai planai",
		section_new_resources: "Ištekliai",

		/* grid columns */
		column_wbs: "WBS",
		column_text: "Užduoties pavadinimas",
		column_start_date: "Pradžios data",
		column_duration: "Trukmė",
		column_add: "",

		/* link confirmation */
		link: "Ryšys",
		confirm_link_deleting: "bus ištrintas",
		link_start: " (pradžia)",
		link_end: " (pabaiga)",

		type_task: "Užduotis",
		type_project: "Suvestinė užduotis",
		type_milestone: "Gairė",

		minutes: "Minutės",
		hours: "Valandos",
		days: "Dienos",
		weeks: "Savaitės",
		months: "Mėnesiai",
		years: "Metai",

		/* message popup */
		message_ok: "OK",
		message_cancel: "Atšaukti",

		/* constraints */
		section_constraint: "Apribojimas",
		constraint_type: "Apribojimo tipas",
		constraint_date: "Apribojimo data",
		asap: "Kaip galima anksčiau",
		alap: "Kaip galima vėliau",
		snet: "Pradėti ne anksčiau kaip",
		snlt: "Pradėti ne vėliau kaip",
		fnet: "Baigti ne anksčiau kaip",
		fnlt: "Baigti ne vėliau kaip",
		mso: "Privalo prasidėti",
		mfo: "Privalo baigtis",

		/* resource control */
		resources_add_button: "Pridėti priskyrimą",
		resources_filter_placeholder: "Ieškoti...",
		resources_filter_label: "slėpti tuščius",
		resources_section_placeholder: "Dar nieko nepriskirta. Spustelėkite „Pridėti priskyrimą“, kad priskirtumėte išteklius.",

		/* empty state screen */
		empty_state_text_link: "Spustelėkite čia",
		empty_state_text_description: "kad sukurtumėte pirmąją užduotį",

		/* baselines control */
		baselines_section_placeholder: "Pradėkite pridėdami naują bazinį planą",
		baselines_add_button: "Pridėti bazinį planą",
		baselines_remove_button: "Pašalinti",
		baselines_remove_all_button: "Pašalinti visus",

		/* deadline control */
		deadline_enable_button: "Nustatyti",
		deadline_disable_button: "Pašalinti"
	}
};

export default locale;
