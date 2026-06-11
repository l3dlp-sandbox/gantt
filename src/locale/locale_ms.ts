const locale: IGanttLocale = {
	date: {
		month_full: ["Januari", "Februari", "Mac", "April", "Mei", "Jun", "Julai", "Ogos", "September", "Oktober", "November", "Disember"],
		month_short: ["Jan", "Feb", "Mac", "Apr", "Mei", "Jun", "Jul", "Ogo", "Sep", "Okt", "Nov", "Dis"],
		day_full: ["Ahad", "Isnin", "Selasa", "Rabu", "Khamis", "Jumaat", "Sabtu"],
		day_short: ["Ahd", "Isn", "Sel", "Rab", "Kha", "Jum", "Sab"]
	},
	labels: {
		new_task: "Tugas baharu",
		icon_save: "Simpan",
		icon_cancel: "Batal",
		icon_details: "Butiran",
		icon_edit: "Sunting",
		icon_delete: "Padam",
		confirm_deleting: "Tugas akan dipadam secara kekal, adakah anda pasti?",
		section_description: "Penerangan",
		section_time: "Tempoh masa",
		section_type: "Jenis",
		section_deadline: "Tarikh akhir",
		section_baselines: "Garis dasar",
		section_new_resources: "Sumber",

		/* grid columns */
		column_wbs: "WBS",
		column_text: "Nama tugas",
		column_start_date: "Tarikh mula",
		column_duration: "Tempoh",
		column_add: "",

		/* link confirmation */
		link: "Pautan",
		confirm_link_deleting: "akan dipadam",
		link_start: " (mula)",
		link_end: " (tamat)",

		type_task: "Tugas",
		type_project: "Tugas ringkasan",
		type_milestone: "Pencapaian",

		minutes: "Minit",
		hours: "Jam",
		days: "Hari",
		weeks: "Minggu",
		months: "Bulan",
		years: "Tahun",

		/* message popup */
		message_ok: "OK",
		message_cancel: "Batal",

		/* constraints */
		section_constraint: "Kekangan",
		constraint_type: "Jenis kekangan",
		constraint_date: "Tarikh kekangan",
		asap: "Secepat mungkin",
		alap: "Selewat mungkin",
		snet: "Mula tidak lebih awal daripada",
		snlt: "Mula tidak lebih lewat daripada",
		fnet: "Tamat tidak lebih awal daripada",
		fnlt: "Tamat tidak lebih lewat daripada",
		mso: "Mesti mula pada",
		mfo: "Mesti tamat pada",

		/* resource control */
		resources_add_button: "Tambah tugasan sumber",
		resources_filter_placeholder: "Cari...",
		resources_filter_label: "sembunyikan yang kosong",
		resources_section_placeholder: "Belum ada tugasan sumber. Klik 'Tambah tugasan sumber' untuk menetapkan sumber.",

		/* empty state screen */
		empty_state_text_link: "Klik di sini",
		empty_state_text_description: "untuk mencipta tugas pertama anda",

		/* baselines control */
		baselines_section_placeholder: "Mulakan dengan menambah garis dasar baharu",
		baselines_add_button: "Tambah garis dasar",
		baselines_remove_button: "Alih keluar",
		baselines_remove_all_button: "Alih keluar semua",

		/* deadline control */
		deadline_enable_button: "Tetapkan",
		deadline_disable_button: "Alih keluar"
	}
};

export default locale;
