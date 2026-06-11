const locale: IGanttLocale = {
	date: {
		month_full: ["Студзень", "Люты", "Сакавік", "Красавік", "Maй", "Чэрвень", "Ліпень", "Жнівень", "Верасень", "Кастрычнік", "Лістапад", "Снежань"],
		month_short: ["Студз", "Лют", "Сак", "Крас", "Maй", "Чэр", "Ліп", "Жнів", "Вер", "Каст", "Ліст", "Снеж"],
		day_full: ["Нядзеля", "Панядзелак", "Аўторак", "Серада", "Чацвер", "Пятніца", "Субота"],
		day_short: ["Нд", "Пн", "Аўт", "Ср", "Чцв", "Пт", "Сб"]
	},
	labels: {
		new_task: "Новае заданне",
		icon_save: "Захаваць",
		icon_cancel: "Адмяніць",
		icon_details: "Дэталі",
		icon_edit: "Змяніць",
		icon_delete: "Выдаліць",
		confirm_deleting: "Падзея будзе выдалена незваротна, працягнуць?",
		section_description: "Апісанне",
		section_time: "Перыяд часу",
		section_type: "Тып",
		section_deadline: "Крайні тэрмін",
		section_baselines: "Базавыя планы",
		section_new_resources: "Рэсурсы",

		/* grid columns */
		column_wbs: "ІСР",
		column_text: "Задача",
		column_start_date: "Пачатак",
		column_duration: "Працяг",
		column_add: "",

		/* link confirmation */
		link: "Сувязь",
		confirm_link_deleting: "будзе выдалена",
		link_start: "(пачатак)",
		link_end: "(канец)",

		type_task: "Задача",
		type_project: "Зводная задача",
		type_milestone: "Вяха",


		minutes: "Хвілін",
		hours: "Гадзіны",
		days: "Дні",
		weeks: "Тыдняў",
		months: "Mесяцаў",
		years: "Гадоў",

		/* message popup */
		message_ok: "OK",
		message_cancel: "Адмяніць",

		/* constraints */
		section_constraint: "Абмежаванне",
		constraint_type: "Тып абмежавання",
		constraint_date: "Дата абмежавання",
		asap: "Як мага раней",
		alap: "Як мага пазней",
		snet: "Пачатак не раней",
		snlt: "Пачатак не пазней",
		fnet: "Завяршэнне не раней",
		fnlt: "Завяршэнне не пазней",
		mso: "Павінен пачацца",
		mfo: "Павінен завяршыцца",

		/* resource control */
		resources_add_button: "Дадаць прызначэнне",
		resources_filter_placeholder: "Пошук...",
		resources_filter_label: "схаваць пустыя",
		resources_section_placeholder: "Пакуль нічога не прызначана. Націсніце «Дадаць прызначэнне», каб прызначыць рэсурсы.",

		/* empty state screen */
		empty_state_text_link: "Націсніце тут",
		empty_state_text_description: "каб стварыць першую задачу",

		/* baselines control */
		baselines_section_placeholder: "Пачніце дадаваць новы базавы план",
		baselines_add_button: "Дадаць базавы план",
		baselines_remove_button: "Выдаліць",
		baselines_remove_all_button: "Выдаліць усе",

		/* deadline control */
		deadline_enable_button: "Усталяваць",
		deadline_disable_button: "Выдаліць"
	}
};

export default locale;
