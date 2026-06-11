const locale: IGanttLocale = {
	date: {
		month_full: ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"],
		month_short: ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Ags", "Sep", "Okt", "Nov", "Des"],
		day_full: ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"],
		day_short: ["Ming", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"]
	},
	labels: {
		new_task: "Tugas baru",
		icon_save: "Simpan",
		icon_cancel: "Batal",
		icon_details: "Detail",
		icon_edit: "Ubah",
		icon_delete: "Hapus",
		confirm_deleting: "Tugas akan dihapus secara permanen. Anda yakin?",
		section_description: "Keterangan",
		section_time: "Periode",
		section_type: "Tipe",
		section_deadline: "Tenggat",
		section_baselines: "Garis dasar",
		section_new_resources: "Sumber daya",

		/* grid columns */
		column_wbs: "WBS",
		column_text: "Nama tugas",
		column_start_date: "Tanggal mulai",
		column_duration: "Durasi",
		column_add: "",

		/* link confirmation */
		link: "Tautan",
		confirm_link_deleting: "akan dihapus",
		link_start: " (awal)",
		link_end: " (akhir)",

		type_task: "Tugas",
		type_project: "Tugas ringkasan",
		type_milestone: "Tonggak",


		minutes: "Menit",
		hours: "Jam",
		days: "Hari",
		weeks: "Minggu",
		months: "Bulan",
		years: "Tahun",

		/* message popup */
		message_ok: "OK",
		message_cancel: "Batal",

		/* constraints */
		section_constraint: "Batasan",
		constraint_type: "Jenis batasan",
		constraint_date: "Tanggal batasan",
		asap: "Secepat mungkin",
		alap: "Selambat mungkin",
		snet: "Mulai tidak lebih awal dari",
		snlt: "Mulai tidak lebih lambat dari",
		fnet: "Selesai tidak lebih awal dari",
		fnlt: "Selesai tidak lebih lambat dari",
		mso: "Harus mulai pada",
		mfo: "Harus selesai pada",

		/* resource control */
		resources_add_button: "Tambah penugasan",
		resources_filter_placeholder: "Cari...",
		resources_filter_label: "sembunyikan yang kosong",
		resources_section_placeholder: "Belum ada yang ditugaskan. Klik 'Tambah penugasan' untuk menugaskan sumber daya.",

		/* empty state screen */
		empty_state_text_link: "Klik di sini",
		empty_state_text_description: "untuk membuat tugas pertama Anda",

		/* baselines control */
		baselines_section_placeholder: "Mulai menambahkan garis dasar baru",
		baselines_add_button: "Tambah garis dasar",
		baselines_remove_button: "Hapus",
		baselines_remove_all_button: "Hapus semua",

		/* deadline control */
		deadline_enable_button: "Tetapkan",
		deadline_disable_button: "Hapus"
	}
};

export default locale;
