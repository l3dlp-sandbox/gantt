const locale: IGanttLocale = {
	date: {
		month_full: ["Януари", "Февруари", "Март", "Април", "Май", "Юни", "Юли", "Август", "Септември", "Октомври", "Ноември", "Декември"],
		month_short: ["Ян", "Фев", "Мар", "Апр", "Май", "Юни", "Юли", "Авг", "Сеп", "Окт", "Ное", "Дек"],
		day_full: ["Неделя", "Понеделник", "Вторник", "Сряда", "Четвъртък", "Петък", "Събота"],
		day_short: ["Нд", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"]
	},
	labels: {
		new_task: "Нова задача",
		icon_save: "Запиши",
		icon_cancel: "Отмени",
		icon_details: "Подробности",
		icon_edit: "Редактиране",
		icon_delete: "Изтриване",
		confirm_deleting: "Задачата ще бъде изтрита окончателно. Сигурни ли сте?",
		section_description: "Описание",
		section_time: "Период",
		section_type: "Тип",
		section_deadline: "Краен срок",
		section_baselines: "Базови линии",
		section_new_resources: "Ресурси",

		/* grid columns */
		column_wbs: "WBS",
		column_text: "Име на задача",
		column_start_date: "Начална дата",
		column_duration: "Продължителност",
		column_add: "",

		/* link confirmation */
		link: "Връзка",
		confirm_link_deleting: "ще бъде изтрита",
		link_start: " (начало)",
		link_end: " (край)",

		type_task: "Задача",
		type_project: "Обобщена задача",
		type_milestone: "Ключов етап",

		minutes: "Минути",
		hours: "Часа",
		days: "Дни",
		weeks: "Седмици",
		months: "Месеца",
		years: "Години",

		/* message popup */
		message_ok: "OK",
		message_cancel: "Отмени",

		/* constraints */
		section_constraint: "Ограничение",
		constraint_type: "Тип ограничение",
		constraint_date: "Дата на ограничението",
		asap: "Възможно най-скоро",
		alap: "Възможно най-късно",
		snet: "Начало не по-рано от",
		snlt: "Начало не по-късно от",
		fnet: "Край не по-рано от",
		fnlt: "Край не по-късно от",
		mso: "Трябва да започне на",
		mfo: "Трябва да завърши на",

		/* resource control */
		resources_add_button: "Добави възлагане",
		resources_filter_placeholder: "Търсене...",
		resources_filter_label: "скрий празните",
		resources_section_placeholder: "Все още няма възлагания. Щракнете върху 'Добави възлагане', за да възложите ресурси.",

		/* empty state screen */
		empty_state_text_link: "Щракнете тук",
		empty_state_text_description: "за да създадете първата си задача",

		/* baselines control */
		baselines_section_placeholder: "Започнете с добавяне на нова базова линия",
		baselines_add_button: "Добави базова линия",
		baselines_remove_button: "Премахни",
		baselines_remove_all_button: "Премахни всички",

		/* deadline control */
		deadline_enable_button: "Задай",
		deadline_disable_button: "Премахни"
	}
};

export default locale;
