/*
 * Partial translation by @levkar (https://github.com/DHTMLX/gantt/pull/10)
*/

const locale: IGanttLocale = {
	date: {
		month_full: ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"],
		month_short: ["Oca", "Şub", "Mar", "Nis", "May", "Haz", "Tem", "Ağu", "Eyl", "Eki", "Kas", "Ara"],
		day_full: ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"],
		day_short: ["Paz", "Pzt", "Sal", "Çar", "Per", "Cum", "Cmt"]
	},
	labels: {
		new_task: "Yeni görev",
		icon_save: "Kaydet",
		icon_cancel: "İptal",
		icon_details: "Detaylar",
		icon_edit: "Düzenle",
		icon_delete: "Sil",
		confirm_deleting: "Görev silinecek, emin misiniz?",
		section_description: "Açıklama",
		section_time: "Zaman Aralığı",
		section_type: "Tip",
		section_deadline: "Son tarih",
		section_baselines: "Temel planlar",
		section_new_resources: "Kaynaklar",

		/* grid columns */
		column_wbs: "WBS",
		column_text: "Görev Adı",
		column_start_date: "Başlangıç",
		column_duration: "Süre",
		column_add: "",

		/* link confirmation */
		link: "Bağlantı",
		confirm_link_deleting: "silinecek",
		link_start: " (başlangıç)",
		link_end: " (bitiş)",

		type_task: "Görev",
		type_project: "Özet görev",
		type_milestone: "Kilometre taşı",


		minutes: "Dakika",
		hours: "Saat",
		days: "Gün",
		weeks: "Hafta",
		months: "Ay",
		years: "Yıl",

		/* message popup */
		message_ok: "OK",
		message_cancel: "İptal",

		/* constraints */
		section_constraint: "Kısıt",
		constraint_type: "Kısıt türü",
		constraint_date: "Kısıt tarihi",
		asap: "En Kısa Sürede",
		alap: "Olabildiğince Geç",
		snet: "İlk Başlatma Tarihi",
		snlt: "Son Başlatma Tarihi",
		fnet: "İlk Bitiş Tarihi",
		fnlt: "Son Bitiş Tarihi",
		mso: "Başlatılması Gereken Tarih",
		mfo: "Bitmesi Gereken Tarih",

		/* resource control */
		resources_add_button: "Atama ekle",
		resources_filter_placeholder: "Ara...",
		resources_filter_label: "boşları gizle",
		resources_section_placeholder: "Henüz bir atama yok. Kaynak atamak için „Atama ekle”ye tıklayın.",

		/* empty state screen */
		empty_state_text_link: "Buraya tıklayın",
		empty_state_text_description: "ilk görevinizi oluşturmak için",

		/* baselines control */
		baselines_section_placeholder: "Yeni bir temel plan eklemeye başlayın",
		baselines_add_button: "Temel plan ekle",
		baselines_remove_button: "Kaldır",
		baselines_remove_all_button: "Tümünü kaldır",

		/* deadline control */
		deadline_enable_button: "Ayarla",
		deadline_disable_button: "Kaldır"
	}
};

export default locale;
