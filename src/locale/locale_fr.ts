const locale: IGanttLocale = {
	date: {
		month_full: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"],
		month_short: ["Jan", "Fév", "Mar", "Avr", "Mai", "Juin", "Juil", "Aoû", "Sep", "Oct", "Nov", "Déc"],
		day_full: ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"],
		day_short: ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"]
	},
	labels: {
		new_task: "Nouvelle tâche",
		icon_save: "Enregistrer",
		icon_cancel: "Annuler",
		icon_details: "Détails",
		icon_edit: "Modifier",
		icon_delete: "Effacer",
		confirm_deleting: "La tâche sera supprimée définitivement. Voulez-vous continuer ?",

		section_description: "Description",
		section_time: "Période",
		section_type: "Type",
		section_deadline: "Échéance",
		section_baselines: "Bases de référence",
		section_new_resources: "Ressources",

		/* grid columns */
		column_wbs: "OTP",
		column_text: "Nom de la tâche",
		column_start_date: "Début",
		column_duration: "Durée",
		column_add: "",

		/* link confirmation */
		link: "Le lien",
		confirm_link_deleting: "sera supprimé",
		link_start: "(début)",
		link_end: "(fin)",

		type_task: "Tâche",
		type_project: "Tâche récapitulative",
		type_milestone: "Jalon",


		minutes: "Minutes",
		hours: "Heures",
		days: "Jours",
		weeks: "Semaines",
		months: "Mois",
		years: "Ans",

		/* message popup */
		message_ok: "OK",
		message_cancel: "Annuler",

		/* constraints */
		section_constraint: "Contrainte",
		constraint_type: "Type de contrainte",
		constraint_date: "Date de contrainte",
		asap: "Dès que possible",
		alap: "Aussi tard que possible",
		snet: "Démarrer au plus tôt",
		snlt: "Démarrer au plus tard le",
		fnet: "Terminer au plus tôt",
		fnlt: "Terminer au plus tard",
		mso: "Doit démarrer le",
		mfo: "Doit se terminer le",

		/* resource control */
		resources_add_button: "Ajouter une affectation",
		resources_filter_placeholder: "Rechercher...",
		resources_filter_label: "masquer les vides",
		resources_section_placeholder: "Rien n'est encore affecté. Cliquez sur « Ajouter une affectation » pour affecter des ressources.",

		/* empty state screen */
		empty_state_text_link: "Cliquez ici",
		empty_state_text_description: "pour créer votre première tâche",

		/* baselines control */
		baselines_section_placeholder: "Commencez par ajouter une nouvelle ligne de base",
		baselines_add_button: "Ajouter une ligne de base",
		baselines_remove_button: "Supprimer",
		baselines_remove_all_button: "Tout supprimer",

		/* deadline control */
		deadline_enable_button: "Définir",
		deadline_disable_button: "Supprimer"
	}
};

export default locale;
