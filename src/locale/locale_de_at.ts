const locale: IGanttLocale = {
	date: {
		month_full: ["Jänner", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"],
		month_short: ["Jän", "Feb", "Mär", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"],
		day_full: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"],
		day_short: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"]
	},
	labels: {
		new_task: "Neue Aufgabe",
		icon_save: "Speichern",
		icon_cancel: "Abbrechen",
		icon_details: "Details",
		icon_edit: "Bearbeiten",
		icon_delete: "Löschen",
		confirm_deleting: "Die Aufgabe wird endgültig gelöscht. Sind Sie sicher?",
		section_description: "Beschreibung",
		section_time: "Zeitraum",
		section_type: "Typ",
		section_deadline: "Stichtag",
		section_baselines: "Basispläne",
		section_new_resources: "Ressourcen",

		/* grid columns */
		column_wbs: "PSP",
		column_text: "Aufgabenname",
		column_start_date: "Startzeit",
		column_duration: "Dauer",
		column_add: "",

		/* link confirmation */
		link: "Verknüpfung",
		confirm_link_deleting: "wird gelöscht",
		link_start: " (Anfang)",
		link_end: " (Ende)",

		type_task: "Aufgabe",
		type_project: "Sammelaufgabe",
		type_milestone: "Meilenstein",

		minutes: "Minuten",
		hours: "Stunden",
		days: "Tage",
		weeks: "Wochen",
		months: "Monate",
		years: "Jahre",

		/* message popup */
		message_ok: "OK",
		message_cancel: "Abbrechen",

		/* constraints */
		section_constraint: "Einschränkung",
		constraint_type: "Einschränkungstyp",
		constraint_date: "Einschränkungsdatum",
		asap: "So früh wie möglich",
		alap: "So spät wie möglich",
		snet: "Anfang nicht früher als",
		snlt: "Anfang nicht später als",
		fnet: "Ende nicht früher als",
		fnlt: "Ende nicht später als",
		mso: "Muss anfangen am",
		mfo: "Muss enden am",

		/* resource control */
		resources_add_button: "Zuweisung hinzufügen",
		resources_filter_placeholder: "Suchen...",
		resources_filter_label: "leere ausblenden",
		resources_section_placeholder: "Noch nichts zugewiesen. Klicken Sie auf 'Zuweisung hinzufügen', um Ressourcen zuzuweisen.",

		/* empty state screen */
		empty_state_text_link: "Hier klicken",
		empty_state_text_description: "um Ihre erste Aufgabe zu erstellen",

		/* baselines control */
		baselines_section_placeholder: "Beginnen Sie mit dem Hinzufügen eines neuen Basisplans",
		baselines_add_button: "Basisplan hinzufügen",
		baselines_remove_button: "Entfernen",
		baselines_remove_all_button: "Alle entfernen",

		/* deadline control */
		deadline_enable_button: "Festlegen",
		deadline_disable_button: "Entfernen"
	}
};

export default locale;
