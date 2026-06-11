/*
	Partial translation by Ovidiu Lixandru (http://www.madball.ro)
*/

const locale: IGanttLocale = {
	date: {
		month_full: ["Ianuarie", "Februarie", "Martie", "Aprilie", "Mai", "Iunie", "Iulie", "August", "Septembrie", "Octombrie", "Noiembrie", "Decembrie"],
		month_short: ["Ian", "Feb", "Mar", "Apr", "Mai", "Iun", "Iul", "Aug", "Sep", "Oct", "Nov", "Dec"],
		day_full: ["Duminică", "Luni", "Marți", "Miercuri", "Joi", "Vineri", "Sâmbătă"],
		day_short: ["Du", "Lu", "Ma", "Mi", "Jo", "Vi", "Sa"]
	},
	labels: {
		new_task: "Sarcină nouă",
		icon_save: "Salvează",
		icon_cancel: "Anulează",
		icon_details: "Detalii",
		icon_edit: "Editează",
		icon_delete: "Șterge",
		confirm_deleting: "Activitatea va fi ștearsă permanent. Sigur doriți să continuați?",
		section_description: "Descriere",
		section_time: "Interval",
		section_type: "Tip",
		section_deadline: "Termen limită",
		section_baselines: "Referințe",
		section_new_resources: "Resurse",

		/* grid columns */
		column_wbs: "WBS",
		column_text: "Numele sarcinii",
		column_start_date: "Început",
		column_duration: "Durată",
		column_add: "",

		/* link confirmation */
		link: "Legătură",
		confirm_link_deleting: "va fi ștearsă",
		link_start: " (început)",
		link_end: " (sfârșit)",

		type_task: "Sarcină",
		type_project: "Activitate rezumat",
		type_milestone: "Jalon",


		minutes: "Minute",
		hours: "Ore",
		days: "Zile",
		weeks: "Săptămâni",
		months: "Luni",
		years: "Ani",

		/* message popup */
		message_ok: "OK",
		message_cancel: "Anulează",

		/* constraints */
		section_constraint: "Constrângere",
		constraint_type: "Tip de constrângere",
		constraint_date: "Dată constrângere",
		asap: "Cât de curând posibil",
		alap: "Cât de târziu posibil",
		snet: "Începe nu mai devreme de",
		snlt: "Începe nu mai târziu de",
		fnet: "Se termină nu mai devreme de",
		fnlt: "Se termină nu mai târziu de",
		mso: "Trebuie să înceapă pe",
		mfo: "Trebuie să se termine pe",

		/* resource control */
		resources_add_button: "Adaugă alocare",
		resources_filter_placeholder: "Caută...",
		resources_filter_label: "ascunde goalele",
		resources_section_placeholder: "Nu este alocat încă nimic. Faceți clic pe „Adaugă alocare” pentru a aloca resurse.",

		/* empty state screen */
		empty_state_text_link: "Faceți clic aici",
		empty_state_text_description: "pentru a crea prima dvs. sarcină",

		/* baselines control */
		baselines_section_placeholder: "Începeți prin a adăuga o nouă referință",
		baselines_add_button: "Adaugă referință",
		baselines_remove_button: "Elimină",
		baselines_remove_all_button: "Elimină tot",

		/* deadline control */
		deadline_enable_button: "Setează",
		deadline_disable_button: "Elimină"
	}
};

export default locale;
