/*
 Partial translation by:
 @Autor Manuel Fernandez Panzuela - www.mfernandez.es
 Jorge Macias (https://disqus.com/by/disqus_bTuZk1voC7)
*/

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
		confirm_deleting: "La tarea se borrará definitivamente. ¿Desea continuar?",
		section_description: "Descripción",
		section_time: "Período",
		section_type: "Tipo",
		section_deadline: "Fecha límite",
		section_baselines: "Líneas base",
		section_new_resources: "Recursos",

		/* grid columns */
		column_wbs: "EDT",
		column_text: "Tarea",
		column_start_date: "Inicio",
		column_duration: "Duración",
		column_add: "",

		/* link confirmation */
		link: "Enlace",
		confirm_link_deleting: "será borrada",
		link_start: " (inicio)",
		link_end: " (fin)",

		type_task: "Tarea",
		type_project: "Tarea de resumen",
		type_milestone: "Hito",


		minutes: "Minutos",
		hours: "Horas",
		days: "Días",
		weeks: "Semanas",
		months: "Meses",
		years: "Años",

		/* message popup */
		message_ok: "Aceptar",
		message_cancel: "Cancelar",

		/* constraints */
		section_constraint: "Restricción",
		constraint_type: "Tipo de restricción",
		constraint_date: "Fecha de restricción",
		asap: "Lo antes posible",
		alap: "Lo más tarde posible",
		snet: "No iniciar antes del",
		snlt: "No iniciar después del",
		fnet: "No finalizar antes del",
		fnlt: "No finalizar más tarde del",
		mso: "Debe iniciarse el",
		mfo: "Debe finalizar el",

		/* resource control */
		resources_add_button: "Agregar asignación",
		resources_filter_placeholder: "Buscar...",
		resources_filter_label: "ocultar vacíos",
		resources_section_placeholder: "Aún no hay nada asignado. Haga clic en «Agregar asignación» para asignar recursos.",

		/* empty state screen */
		empty_state_text_link: "Haga clic aquí",
		empty_state_text_description: "para crear su primera tarea",

		/* baselines control */
		baselines_section_placeholder: "Comience a agregar una nueva línea base",
		baselines_add_button: "Agregar línea base",
		baselines_remove_button: "Eliminar",
		baselines_remove_all_button: "Eliminar todo",

		/* deadline control */
		deadline_enable_button: "Establecer",
		deadline_disable_button: "Eliminar"
	}
};

export default locale;
