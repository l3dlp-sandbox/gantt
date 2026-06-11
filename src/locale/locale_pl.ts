const locale: IGanttLocale = {
	date: {
		month_full: ["Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec", "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"],
		month_short: ["Sty", "Lut", "Mar", "Kwi", "Maj", "Cze", "Lip", "Sie", "Wrz", "Paź", "Lis", "Gru"],
		day_full: ["Niedziela", "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota"],
		day_short: ["Nie", "Pon", "Wto", "Śro", "Czw", "Pią", "Sob"]
	},
	labels: {
		new_task: "Nowe zadanie",
		icon_save: "Zapisz",
		icon_cancel: "Anuluj",
		icon_details: "Szczegóły",
		icon_edit: "Edytuj",
		icon_delete: "Usuń",
		confirm_deleting: "Zadanie zostanie trwale usunięte. Czy chcesz kontynuować?",
		section_description: "Opis",
		section_time: "Okres czasu",
		section_type: "Typ",
		section_deadline: "Termin ostateczny",
		section_baselines: "Plany bazowe",
		section_new_resources: "Zasoby",

		/* grid columns */
		column_wbs: "WBS",
		column_text: "Nazwa zadania",
		column_start_date: "Rozpoczęcie",
		column_duration: "Czas trwania",
		column_add: "",

		/* link confirmation */
		link: "Powiązanie",
		confirm_link_deleting: "zostanie usunięty",
		link_start: " (początek)",
		link_end: " (koniec)",

		type_task: "Zadanie",
		type_project: "Zadanie sumaryczne",
		type_milestone: "Punkt kontrolny",


		minutes: "Minut",
		hours: "Godzin",
		days: "Dni",
		weeks: "Tygodni",
		months: "Miesiący",
		years: "Lat",

		/* message popup */
		message_ok: "OK",
		message_cancel: "Anuluj",

		/* constraints */
		section_constraint: "Ograniczenie",
		constraint_type: "Typ ograniczenia",
		constraint_date: "Data ograniczenia",
		asap: "Jak najwcześniej",
		alap: "Jak najpóźniej",
		snet: "Rozpocznij nie wcześniej niż",
		snlt: "Rozpocznij nie później niż",
		fnet: "Zakończ nie wcześniej niż",
		fnlt: "Zakończ nie później niż",
		mso: "Musi rozpocząć się",
		mfo: "Musi zakończyć się",

		/* resource control */
		resources_add_button: "Dodaj przydział",
		resources_filter_placeholder: "Szukaj...",
		resources_filter_label: "ukryj puste",
		resources_section_placeholder: "Nic jeszcze nie przydzielono. Kliknij „Dodaj przydział”, aby przydzielić zasoby.",

		/* empty state screen */
		empty_state_text_link: "Kliknij tutaj",
		empty_state_text_description: "aby utworzyć pierwsze zadanie",

		/* baselines control */
		baselines_section_placeholder: "Rozpocznij dodawanie nowego planu bazowego",
		baselines_add_button: "Dodaj plan bazowy",
		baselines_remove_button: "Usuń",
		baselines_remove_all_button: "Usuń wszystko",

		/* deadline control */
		deadline_enable_button: "Ustaw",
		deadline_disable_button: "Usuń"
	}
};

export default locale;
