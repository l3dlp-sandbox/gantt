const locale: IGanttLocale = {
	date: {
		month_full: ["Јануари", "Февруари", "Март", "Април", "Мај", "Јуни", "Јули", "Август", "Септември", "Октомври", "Ноември", "Декември"],
		month_short: ["Јан", "Фев", "Мар", "Апр", "Мај", "Јун", "Јул", "Авг", "Сеп", "Окт", "Ное", "Дек"],
		day_full: ["Недела", "Понеделник", "Вторник", "Среда", "Четврток", "Петок", "Сабота"],
		day_short: ["Нед", "Пон", "Вто", "Сре", "Чет", "Пет", "Саб"]
	},
	labels: {
		new_task: "Нова задача",
		icon_save: "Зачувај",
		icon_cancel: "Откажи",
		icon_details: "Детали",
		icon_edit: "Уреди",
		icon_delete: "Избриши",
		confirm_deleting: "Задачата ќе биде трајно избришана, дали сте сигурни?",
		section_description: "Опис",
		section_time: "Временски период",
		section_type: "Тип",
		section_deadline: "Краен рок",
		section_baselines: "Основни линии",
		section_new_resources: "Ресурси",

		/* grid columns */
		column_wbs: "WBS",
		column_text: "Име на задача",
		column_start_date: "Датум на почеток",
		column_duration: "Времетраење",
		column_add: "",

		/* link confirmation */
		link: "Врска",
		confirm_link_deleting: "ќе биде избришана",
		link_start: " (почеток)",
		link_end: " (крај)",

		type_task: "Задача",
		type_project: "Збирна задача",
		type_milestone: "Пресвртница",

		minutes: "Минути",
		hours: "Часа",
		days: "Дена",
		weeks: "Недели",
		months: "Месеци",
		years: "Години",

		/* message popup */
		message_ok: "OK",
		message_cancel: "Откажи",

		/* constraints */
		section_constraint: "Ограничување",
		constraint_type: "Тип на ограничување",
		constraint_date: "Датум на ограничување",
		asap: "Што е можно побрзо",
		alap: "Што е можно подоцна",
		snet: "Започни не порано од",
		snlt: "Започни не подоцна од",
		fnet: "Заврши не порано од",
		fnlt: "Заврши не подоцна од",
		mso: "Мора да започне на",
		mfo: "Мора да заврши на",

		/* resource control */
		resources_add_button: "Додај доделување",
		resources_filter_placeholder: "Пребарај...",
		resources_filter_label: "скриј празни",
		resources_section_placeholder: "Сè уште нема доделувања. Кликнете 'Додај Доделување' за да доделите ресурси.",

		/* empty state screen */
		empty_state_text_link: "Кликнете овде",
		empty_state_text_description: "за да ја креирате вашата прва задача",

		/* baselines control */
		baselines_section_placeholder: "Започнете со додавање нова основна линија",
		baselines_add_button: "Додај основна линија",
		baselines_remove_button: "Отстрани",
		baselines_remove_all_button: "Отстрани ги сите",

		/* deadline control */
		deadline_enable_button: "Постави",
		deadline_disable_button: "Отстрани"
	}
};

export default locale;
