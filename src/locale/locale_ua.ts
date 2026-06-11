const locale: IGanttLocale = {
	date: {
		month_full: ["Січень", "Лютий", "Березень", "Квітень", "Травень", "Червень", "Липень", "Серпень", "Вересень", "Жовтень", "Листопад", "Грудень"],
		month_short: ["Січ", "Лют", "Бер", "Кві", "Тра", "Чер", "Лип", "Сер", "Вер", "Жов", "Лис", "Гру"],
		day_full: ["Неділя", "Понеділок", "Вівторок", "Середа", "Четвер", "П'ятниця", "Субота"],
		day_short: ["Нед", "Пон", "Вів", "Сер", "Чет", "Птн", "Суб"]
	},
	labels: {
		new_task: "Нове завдання",
		icon_save: "Зберегти",
		icon_cancel: "Відміна",
		icon_details: "Деталі",
		icon_edit: "Редагувати",
		icon_delete: "Вилучити",
		confirm_deleting: "Завдання буде видалено назавжди. Ви впевнені?",
		section_description: "Опис",
		section_time: "Часовий проміжок",
		section_type: "Тип",
		section_deadline: "Крайній термін",
		section_baselines: "Базові плани",
		section_new_resources: "Ресурси",

		/* grid columns */
		column_wbs: "WBS",
		column_text: "Назва завдання",
		column_start_date: "Початок",
		column_duration: "Тривалість",
		column_add: "",

		/* link confirmation */
		link: "Зв'язок",
		confirm_link_deleting: "буде видалено",
		link_start: " (початок)",
		link_end: " (кінець)",

		type_task: "Завдання",
		type_project: "Зведене завдання",
		type_milestone: "Віха",


		minutes: "Хвилин",
		hours: "Годин",
		days: "Днів",
		weeks: "Тижнів",
		months: "Місяців",
		years: "Років",

		/* message popup */
		message_ok: "ОК",
		message_cancel: "Відміна",

		/* constraints */
		section_constraint: "Обмеження",
		constraint_type: "Тип обмеження",
		constraint_date: "Дата обмеження",
		asap: "Якомога раніше",
		alap: "Якомога пізніше",
		snet: "Початок не раніше ніж",
		snlt: "Початок не пізніше ніж",
		fnet: "Завершення не раніше ніж",
		fnlt: "Завершення не пізніше ніж",
		mso: "Фіксований початок",
		mfo: "Фіксоване завершення",

		/* resource control */
		resources_add_button: "Додати призначення",
		resources_filter_placeholder: "Пошук...",
		resources_filter_label: "приховати порожні",
		resources_section_placeholder: "Поки що нічого не призначено. Натисніть «Додати призначення», щоб призначити ресурси.",

		/* empty state screen */
		empty_state_text_link: "Натисніть тут",
		empty_state_text_description: "щоб створити перше завдання",

		/* baselines control */
		baselines_section_placeholder: "Почніть додавати новий базовий план",
		baselines_add_button: "Додати базовий план",
		baselines_remove_button: "Видалити",
		baselines_remove_all_button: "Видалити все",

		/* deadline control */
		deadline_enable_button: "Установити",
		deadline_disable_button: "Видалити"
	}
};

export default locale;
