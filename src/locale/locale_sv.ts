/*
	Partial translation by Peter Eriksson
*/

const locale: IGanttLocale = {
	date: {
		month_full: ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"],
		month_short: ["Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec"],
		day_full: ["Söndag", "Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag"],
		day_short: ["Sön", "Mån", "Tis", "Ons", "Tor", "Fre", "Lör"]
	},
	labels: {
		new_task: "Ny uppgift",
		icon_save: "Spara",
		icon_cancel: "Avbryt",
		icon_details: "Detaljer",
		icon_edit: "Ändra",
		icon_delete: "Ta bort",
		confirm_deleting: "Är du säker på att du vill ta bort uppgiften permanent?",
		section_description: "Beskrivning",
		section_time: "Tid",
		section_type: "Typ",
		section_deadline: "Tidsgräns",
		section_baselines: "Baslinjer",
		section_new_resources: "Resurser",

		/* grid columns */
		column_wbs: "WBS",
		column_text: "Uppgiftsnamn",
		column_start_date: "Start",
		column_duration: "Varaktighet",
		column_add: "",

		/* link confirmation */

		link: "Länk",
		confirm_link_deleting: "kommer att tas bort",
		link_start: " (start)",
		link_end: " (slut)",
		type_task: "Uppgift",
		type_project: "Sammanfattningsaktivitet",
		type_milestone: "Milstolpe",

		minutes: "Minuter",
		hours: "Timmar",
		days: "Dagar",
		weeks: "Veckor",
		months: "Månader",
		years: "År",

		/* message popup */
		message_ok: "OK",
		message_cancel: "Avbryt",

		/* constraints */
		section_constraint: "Villkor",
		constraint_type: "Villkorstyp",
		constraint_date: "Villkorsdatum",
		asap: "Så snart som möjligt",
		alap: "Så sent som möjligt",
		snet: "Starta tidigast",
		snlt: "Starta senast",
		fnet: "Avsluta tidigast",
		fnlt: "Avsluta senast",
		mso: "Måste starta",
		mfo: "Måste avslutas",

		/* resource control */
		resources_add_button: "Lägg till tilldelning",
		resources_filter_placeholder: "Sök...",
		resources_filter_label: "dölj tomma",
		resources_section_placeholder: "Ingenting har tilldelats ännu. Klicka på ”Lägg till tilldelning” för att tilldela resurser.",

		/* empty state screen */
		empty_state_text_link: "Klicka här",
		empty_state_text_description: "för att skapa din första uppgift",

		/* baselines control */
		baselines_section_placeholder: "Börja lägga till en ny baslinje",
		baselines_add_button: "Lägg till baslinje",
		baselines_remove_button: "Ta bort",
		baselines_remove_all_button: "Ta bort alla",

		/* deadline control */
		deadline_enable_button: "Ange",
		deadline_disable_button: "Ta bort"
	}
};

export default locale;
