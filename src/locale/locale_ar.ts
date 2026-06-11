const locale: IGanttLocale = {
	date: {
		month_full: ["كانون الثاني", "شباط", "آذار", "نيسان", "أيار", "حزيران", "تموز", "آب", "أيلول", "تشرين الأول", "تشرين الثاني", "كانون الأول"],
		month_short: ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"],
		day_full: ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"],
		day_short: ["احد", "اثنين", "ثلاثاء", "اربعاء", "خميس", "جمعة", "سبت"]
	},
	labels: {
		new_task: "مهمة جديدة",
		icon_save: "احفظ",
		icon_cancel: "إلغاء",
		icon_details: "تفاصيل",
		icon_edit: "تحرير",
		icon_delete: "حذف",
		confirm_deleting: "سيتم حذف العنصر نهائيًا. هل أنت متأكد؟",
		section_description: "الوصف",
		section_time: "الفترة الزمنية",
		section_type: "النوع",
		section_deadline: "الموعد النهائي",
		section_baselines: "خطوط الأساس",
		section_new_resources: "الموارد",

		/* grid columns */
		column_wbs: "WBS",
		column_text: "اسم المهمة",
		column_start_date: "البدء",
		column_duration: "المدة",
		column_add: "",

		/* link confirmation */
		link: "الارتباط",
		confirm_link_deleting: "سيتم حذفه",
		link_start: " (البداية)",
		link_end: " (النهاية)",

		type_task: "مهمة",
		type_project: "مهمة موجزة",
		type_milestone: "مرحلة رئيسية",

		minutes: "دقائق",
		hours: "ساعات",
		days: "أيام",
		weeks: "أسابيع",
		months: "شهور",
		years: "سنوات",

		/* message popup */
		message_ok: "موافق",
		message_cancel: "إلغاء",

		/* constraints */
		section_constraint: "القيد",
		constraint_type: "نوع القيد",
		constraint_date: "تاريخ القيد",
		asap: "في أقرب وقت ممكن",
		alap: "في وقت متأخر قدر الإمكان",
		snet: "البدء في وقت لا سابق له",
		snlt: "البدء في موعد لا يتجاوز",
		fnet: "تاريخ الانتهاء ليس قبل",
		fnlt: "الانتهاء في موعد لا يتجاوز",
		mso: "يجب أن يبدأ التشغيل",
		mfo: "يجب الانتهاء في",

		/* resource control */
		resources_add_button: "إضافة إسناد",
		resources_filter_placeholder: "بحث...",
		resources_filter_label: "إخفاء الفارغ",
		resources_section_placeholder: "لا توجد إسنادات بعد. انقر فوق 'إضافة إسناد' لتعيين الموارد.",
		/* empty state screen */
		empty_state_text_link: "انقر هنا",
		empty_state_text_description: "لإنشاء مهمتك الأولى",

		/* baselines control */
		baselines_section_placeholder: "ابدأ بإضافة خط أساس جديد",
		baselines_add_button: "إضافة خط أساسي",
		baselines_remove_button: "إزالة",
		baselines_remove_all_button: "إزالة الكل",

		/* deadline control */
		deadline_enable_button: "تعيين",
		deadline_disable_button: "إزالة"
	}
};

export default locale;
