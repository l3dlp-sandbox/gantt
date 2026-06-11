/*
 Partial translation by ARCANGELI CLAUDIO
*/

const locale: IGanttLocale = {
	date: {
		month_full: ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"],
		month_short: ["Gen", "Feb", "Mar", "Apr", "Mag", "Giu", "Lug", "Ago", "Set", "Ott", "Nov", "Dic"],
		day_full: ["Domenica", "Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato"],
		day_short: ["Dom", "Lun", "Mar", "Mer", "Gio", "Ven", "Sab"]
	},
	labels: {
		new_task: "Nuova attività",
		icon_save: "Salva",
		icon_cancel: "Annulla",
		icon_details: "Dettagli",
		icon_edit: "Modifica",
		icon_delete: "Elimina",
		confirm_deleting: "L'attività verrà eliminata definitivamente. Continuare?",
		section_description: "Descrizione",
		section_time: "Periodo di tempo",
		section_type: "Tipo",
		section_deadline: "Scadenza",
		section_baselines: "Linee di base",
		section_new_resources: "Risorse",

		/* grid columns */
		column_wbs: "WBS",
		column_text: "Nome Attività",
		column_start_date: "Inizio",
		column_duration: "Durata",
		column_add: "",

		/* link confirmation */
		link: "Collegamento",
		confirm_link_deleting: "sarà eliminato",
		link_start: " (inizio)",
		link_end: " (fine)",

		type_task: "Attività",
		type_project: "Attività di riepilogo",
		type_milestone: "Attività cardine",


		minutes: "Minuti",
		hours: "Ore",
		days: "Giorni",
		weeks: "Settimane",
		months: "Mesi",
		years: "Anni",

		/* message popup */
		message_ok: "OK",
		message_cancel: "Annulla",

		/* constraints */
		section_constraint: "Vincolo",
		constraint_type: "Tipo di vincolo",
		constraint_date: "Data vincolo",
		asap: "Il più presto possibile",
		alap: "Il più tardi possibile",
		snet: "Iniziare non prima del",
		snlt: "Iniziare non oltre il",
		fnet: "Finire non prima di",
		fnlt: "Finire non oltre il",
		mso: "Deve iniziare il",
		mfo: "Deve finire il",

		/* resource control */
		resources_add_button: "Aggiungi assegnazione",
		resources_filter_placeholder: "Cerca...",
		resources_filter_label: "nascondi vuoti",
		resources_section_placeholder: "Non è ancora stato assegnato nulla. Fai clic su «Aggiungi assegnazione» per assegnare le risorse.",

		/* empty state screen */
		empty_state_text_link: "Fai clic qui",
		empty_state_text_description: "per creare la tua prima attività",

		/* baselines control */
		baselines_section_placeholder: "Inizia aggiungendo una nuova linea di base",
		baselines_add_button: "Aggiungi linea di base",
		baselines_remove_button: "Rimuovi",
		baselines_remove_all_button: "Rimuovi tutto",

		/* deadline control */
		deadline_enable_button: "Imposta",
		deadline_disable_button: "Rimuovi"
	}
};

export default locale;
