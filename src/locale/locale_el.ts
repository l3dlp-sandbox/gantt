const locale: IGanttLocale = {
	date: {
		month_full: ["Ιανουάριος", "Φεβρουάριος", "Μάρτιος", "Απρίλιος", "Μάιος", "Ιούνιος", "Ιούλιος", "Αύγουστος", "Σεπτέμβριος", "Οκτώβριος", "Νοέμβριος", "Δεκέμβριος"],
		month_short: ["ΙΑΝ", "ΦΕΒ", "ΜΑΡ", "ΑΠΡ", "ΜΑΙ", "ΙΟΥΝ", "ΙΟΥΛ", "ΑΥΓ", "ΣΕΠ", "ΟΚΤ", "ΝΟΕ", "ΔΕΚ"],
		day_full: ["Κυριακή", "Δευτέρα", "Τρίτη", "Τετάρτη", "Πέμπτη", "Παρασκευή", "Σάββατο"],
		day_short: ["ΚΥ", "ΔΕ", "ΤΡ", "ΤΕ", "ΠΕ", "ΠΑ", "ΣΑ"]
	},
	labels: {
		new_task: "Νέα εργασία",
		icon_save: "Αποθήκευση",
		icon_cancel: "Ακύρωση",
		icon_details: "Λεπτομέρειες",
		icon_edit: "Επεξεργασία",
		icon_delete: "Διαγραφή",
		confirm_deleting: "Η εργασία θα διαγραφεί οριστικά. Θέλετε να συνεχίσετε?",
		section_description: "Περιγραφή",
		section_time: "Χρονική περίοδος",
		section_type: "Τύπος",
		section_deadline: "Προθεσμία",
		section_baselines: "Γραμμές βάσης",
		section_new_resources: "Πόροι",

		/* grid columns */
		column_wbs: "WBS",
		column_text: "Όνομα εργασίας",
		column_start_date: "Έναρξη",
		column_duration: "Διάρκεια",
		column_add: "",

		/* link confirmation */
		link: "Σύνδεση",
		confirm_link_deleting: "θα διαγραφεί",
		link_start: " (έναρξη)",
		link_end: " (λήξη)",

		type_task: "Εργασία",
		type_project: "Εργασία σύνοψης",
		type_milestone: "Ορόσημο",


		minutes: "Λεπτά",
		hours: "Ώρες",
		days: "Ημέρες",
		weeks: "Εβδομάδες",
		months: "Μήνες",
		years: "Έτη",

		/* message popup */
		message_ok: "OK",
		message_cancel: "Ακύρωση",

		/* constraints */
		section_constraint: "Περιορισμός",
		constraint_type: "Τύπος περιορισμού",
		constraint_date: "Ημερομηνία περιορισμού",
		asap: "Το συντομότερο δυνατό",
		alap: "Το αργότερο δυνατό",
		snet: "Έναρξη όχι νωρίτερα από",
		snlt: "Έναρξη το αργότερο",
		fnet: "Λήξη όχι νωρίτερα από",
		fnlt: "Λήξη το αργότερο",
		mso: "Πρέπει να ξεκινήσει στις",
		mfo: "Πρέπει να ολοκληρωθεί στις",

		/* resource control */
		resources_add_button: "Προσθήκη ανάθεσης",
		resources_filter_placeholder: "Αναζήτηση...",
		resources_filter_label: "απόκρυψη κενών",
		resources_section_placeholder: "Δεν έχει ανατεθεί τίποτα ακόμη. Κάντε κλικ στο «Προσθήκη ανάθεσης» για να αναθέσετε πόρους.",

		/* empty state screen */
		empty_state_text_link: "Κάντε κλικ εδώ",
		empty_state_text_description: "για να δημιουργήσετε την πρώτη σας εργασία",

		/* baselines control */
		baselines_section_placeholder: "Ξεκινήστε προσθέτοντας μια νέα γραμμή βάσης",
		baselines_add_button: "Προσθήκη γραμμής βάσης",
		baselines_remove_button: "Αφαίρεση",
		baselines_remove_all_button: "Αφαίρεση όλων",

		/* deadline control */
		deadline_enable_button: "Ορισμός",
		deadline_disable_button: "Αφαίρεση"
	}
};

export default locale;
