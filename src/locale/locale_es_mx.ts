const locale: IGanttLocale = {
	date: {
		month_full: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
		month_short: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"],
		day_full: ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"],
		day_short: ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"]
	},
	labels: {
		new_task: "Nueva tarea",
		icon_save: "Guardar",
		icon_cancel: "Cancelar",
		icon_details: "Detalles",
		icon_edit: "Editar",
		icon_delete: "Eliminar",
		confirm_deleting: "La tarea se eliminará permanentemente. ¿Está seguro?",
		section_description: "Descripción",
		section_time: "Período de tiempo",
		section_type: "Tipo",
		section_deadline: "Fecha límite",
		section_baselines: "Líneas base",
		section_new_resources: "Recursos",

		/* grid columns */
		column_wbs: "EDT",
		column_text: "Nombre de la tarea",
		column_start_date: "Fecha de inicio",
		column_duration: "Duración",
		column_add: "",

		/* link confirmation */
		link: "Vínculo",
		confirm_link_deleting: "se eliminará",
		link_start: " (inicio)",
		link_end: " (fin)",

		type_task: "Tarea",
		type_project: "Proyecto",
		type_milestone: "Hito",

		minutes: "Minutos",
		hours: "Horas",
		days: "Días",
		weeks: "Semanas",
		months: "Meses",
		years: "Años",

		/* message popup */
		message_ok: "OK",
		message_cancel: "Cancelar",

		/* constraints */
		section_constraint: "Restricción",
		constraint_type: "Tipo de restricción",
		constraint_date: "Fecha de restricción",
		asap: "Lo antes posible",
		alap: "Lo más tarde posible",
		snet: "Comenzar no antes de",
		snlt: "Comenzar no después de",
		fnet: "Finalizar no antes de",
		fnlt: "Finalizar no después de",
		mso: "Debe comenzar el",
		mfo: "Debe finalizar el",

		/* resource control */
		resources_add_button: "Agregar asignación",
		resources_filter_placeholder: "Buscar...",
		resources_filter_label: "ocultar vacíos",
		resources_section_placeholder: "Todavía no hay asignaciones. Haga clic en 'Agregar asignación' para asignar recursos.",

		/* empty state screen */
		empty_state_text_link: "Haga clic aquí",
		empty_state_text_description: "para crear su primera tarea",

		/* baselines control */
		baselines_section_placeholder: "Empiece agregando una nueva línea base",
		baselines_add_button: "Agregar línea base",
		baselines_remove_button: "Quitar",
		baselines_remove_all_button: "Quitar todo",

		/* deadline control */
		deadline_enable_button: "Establecer",
		deadline_disable_button: "Quitar"
	}
};

export default locale;
