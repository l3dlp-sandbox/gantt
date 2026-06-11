const locale: IGanttLocale = {
	date: {
		month_full: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
		month_short: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"],
		day_full: ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"],
		day_short: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"]
	},
	labels: {
		new_task: "Новая задача",
		icon_save: "Сохранить",
		icon_cancel: "Отменить",
		icon_details: "Детали",
		icon_edit: "Изменить",
		icon_delete: "Удалить",
		confirm_deleting: "Задача будет удалена безвозвратно, продолжить?",
		section_description: "Описание",
		section_time: "Период времени",
		section_type: "Тип",
		section_deadline: "Крайний срок",
		section_baselines: "Базовые планы",
		section_new_resources: "Ресурсы",

		/* grid columns */
		column_wbs: "ИСР",
		column_text: "Задача",
		column_start_date: "Начало",
		column_duration: "Длительность",
		column_add: "",

		/* link confirmation */
		link: "Связь",
		confirm_link_deleting: "будет удалена",
		link_start: " (начало)",
		link_end: " (конец)",

		type_task: "Задача",
		type_project: "Суммарная задача",
		type_milestone: "Веха",


		minutes: "Минут",
		hours: "Часов",
		days: "Дней",
		weeks: "Недель",
		months: "Месяцев",
		years: "Лет",

		/* message popup */
		message_ok: "OK",
		message_cancel: "Отменить",

		/* constraints */
		section_constraint: "Ограничение",
		constraint_type: "Тип ограничения",
		constraint_date: "Дата ограничения",
		asap: "Как можно скорее",
		alap: "Как можно позже",
		snet: "Начало не ранее",
		snlt: "Начало не позднее",
		fnet: "Окончание не ранее",
		fnlt: "Окончание не позднее",
		mso: "Фиксированное начало",
		mfo: "Фиксированное окончание",

		/* resource control */
		resources_add_button: "Добавить назначение",
		resources_filter_placeholder: "Поиск...",
		resources_filter_label: "скрыть пустые",
		resources_section_placeholder: "Пока нет назначений. Нажмите «Добавить назначение», чтобы назначить ресурсы.",

		/* empty state screen */
		empty_state_text_link: "Нажмите здесь",
		empty_state_text_description: "чтобы создать первую задачу",

		/* baselines control */
		baselines_section_placeholder: "Начните добавлять новый базовый план",
		baselines_add_button: "Добавить базовый план",
		baselines_remove_button: "Удалить",
		baselines_remove_all_button: "Удалить все",

		/* deadline control */
		deadline_enable_button: "Добавить",
		deadline_disable_button: "Удалить"
	}
};

export default locale;
