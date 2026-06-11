/*
 @Parcial translation by Vicente Adria Bohigues - vicenteadria@hotmail.com
*/

const locale: IGanttLocale = {
	date: {
		month_full: ["Gener", "Febrer", "Març", "Abril", "Maig", "Juny", "Juliol", "Agost", "Setembre", "Octubre", "Novembre", "Desembre"],
		month_short: ["Gen", "Feb", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Oct", "Nov", "Des"],
		day_full: ["Diumenge", "Dilluns", "Dimarts", "Dimecres", "Dijous", "Divendres", "Dissabte"],
		day_short: ["Dg", "Dl", "Dm", "Dc", "Dj", "Dv", "Ds"]
	},
	labels: {
		new_task: "Nova tasca",
		icon_save: "Guardar",
		icon_cancel: "Cancel·lar",
		icon_details: "Detalls",
		icon_edit: "Editar",
		icon_delete: "Esborrar",
		confirm_deleting: "La tasca s'esborrarà definitivament, continuar ?",
		section_description: "Descripció",
		section_time: "Període de temps",
		section_type: "Tipus",
		section_deadline: "Data límit",
		section_baselines: "Línies de base",
		section_new_resources: "Recursos",

		/* grid columns */
		column_wbs: "WBS",
		column_text: "Nom de la tasca",
		column_start_date: "Data d'inici",
		column_duration: "Durada",
		column_add: "",

		/* link confirmation */
		link: "Enllaç",
		confirm_link_deleting: "se suprimirà",
		link_start: " (inici)",
		link_end: " (final)",

		type_task: "Tasca",
		type_project: "Tasca resum",
		type_milestone: "Fita",


		minutes: "Minuts",
		hours: "Hores",
		days: "Dies",
		weeks: "Setmanes",
		months: "Mesos",
		years: "Anys",

		/* message popup */
		message_ok: "D'acord",
		message_cancel: "Cancel·lar",

		/* constraints */
		section_constraint: "Restricció",
		constraint_type: "Tipus de restricció",
		constraint_date: "Data de restricció",
		asap: "Tan aviat com sigui possible",
		alap: "Tan tard com sigui possible",
		snet: "No començar abans de",
		snlt: "No començar després de",
		fnet: "No finalitzar abans de",
		fnlt: "No finalitzar després de",
		mso: "Ha de començar el",
		mfo: "Ha de finalitzar el",

		/* resource control */
		resources_add_button: "Afegeix assignació",
		resources_filter_placeholder: "Cerca...",
		resources_filter_label: "amaga els buits",
		resources_section_placeholder: "Encara no hi ha cap assignació. Feu clic a «Afegeix assignació» per assignar recursos.",

		/* empty state screen */
		empty_state_text_link: "Feu clic aquí",
		empty_state_text_description: "per crear la vostra primera tasca",

		/* baselines control */
		baselines_section_placeholder: "Comenceu a afegir una nova línia de base",
		baselines_add_button: "Afegeix una línia de base",
		baselines_remove_button: "Suprimeix",
		baselines_remove_all_button: "Suprimeix-ho tot",

		/* deadline control */
		deadline_enable_button: "Defineix",
		deadline_disable_button: "Suprimeix"
	}
};

export default locale;
