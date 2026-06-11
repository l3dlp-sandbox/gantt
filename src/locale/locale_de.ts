const locale: IGanttLocale = {
	date: {
		month_full: ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"],
		month_short: ["Jan", "Feb", "Mär", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"],
		day_full: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"],
		day_short: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"]
	},
	labels: {
		new_task: "Neue Aufgabe",
		icon_save: "Speichern",
		icon_cancel: "Abbrechen",
		icon_details: "Details",
		icon_edit: "Ändern",
		icon_delete: "Löschen",
		confirm_deleting: "Der Vorgang wird dauerhaft gelöscht. Möchten Sie fortfahren?",
		section_description: "Beschreibung",
		section_time: "Zeitspanne",
		section_type: "Typ",
		section_deadline: "Stichtag",
		section_baselines: "Basispläne",
		section_new_resources: "Ressourcen",

		/* grid columns */
		column_wbs: "PSP",
		column_text: "Vorgangsname",
		column_start_date: "Anfang",
		column_duration: "Dauer",
		column_add: "",

		/* link confirmation */
		link: "Verknüpfung",
		confirm_link_deleting: "werden gelöscht",
		link_start: "(Start)",
		link_end: "(Ende)",

		type_task: "Vorgang",
		type_project: "Sammelvorgang",
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
		constraint_type: "Einschränkungsart",
		constraint_date: "Einschränkungstermin",
		asap: "So früh wie möglich",
		alap: "So spät wie möglich",
		snet: "Nicht früher als starten",
		snlt: "Nicht später als starten",
		fnet: "Beenden Sie nicht früher als",
		fnlt: "Ende nicht später als",
		mso: "Muss beginnen am",
		mfo: "Muss enden am",

		/* resource control */
		resources_add_button: "Zuordnung hinzufügen",
		resources_filter_placeholder: "Suchen...",
		resources_filter_label: "Leeres ausblenden",
		resources_section_placeholder: "Noch nichts zugewiesen. Klicken Sie auf „Zuordnung hinzufügen“, um Ressourcen zuzuweisen.",

		/* empty state screen */
		empty_state_text_link: "Hier klicken",
		empty_state_text_description: "um Ihren ersten Vorgang zu erstellen",

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
