/*
 Partial translation by Mohammad Shokri http://slashsbin.com/
*/

const locale: IGanttLocale = {
	date: {
		month_full: [
			"ژانویه",
			"فوریه",
			"مارس",
			"آوریل",
			"مه",
			"ژوئن",
			"ژوئیه",
			"اوت",
			"سپتامبر",
			"اکتبر",
			"نوامبر",
			"دسامبر"
		],
		month_short: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
		day_full: [
			"یکشنبه",
			"دوشنبه",
			"سه‌شنبه",
			"چهارشنبه",
			"پنجشنبه",
			"جمعه",
			"شنبه"
		],
		day_short: [
			"ی",
			"د",
			"س",
			"چ",
			"پ",
			"ج",
			"ش"
		]
	},
	labels: {
		new_task: "وظیفه جدید",
		icon_save: "ذخیره",
		icon_cancel: "لغو",
		icon_details: "جزییات",
		icon_edit: "ویرایش",
		icon_delete: "حذف",
		confirm_deleting: "این وظیفه برای همیشه حذف خواهد شد، آیا مطمئن هستید؟",
		section_description: "توضیحات",
		section_time: "مدت زمان",
		section_type: "نوع",
		section_deadline: "موعد نهایی",
		section_baselines: "خطوط مبنا",
		section_new_resources: "منابع",

		/* grid columns */
		column_wbs: "WBS",
		column_text: "عنوان",
		column_start_date: "تاریخ شروع",
		column_duration: "مدت",
		column_add: "",

		/* link confirmation */
		link: "ارتباط",
		confirm_link_deleting: "حذف خواهد شد",
		link_start: " (آغاز)",
		link_end: " (پایان)",

		type_task: "وظیفه",
		type_project: "وظیفه خلاصه",
		type_milestone: "نقطه عطف",

		minutes: "دقایق",
		hours: "ساعات",
		days: "روزها",
		weeks: "هفته‌ها",
		months: "ماه‌ها",
		years: "سال‌ها",

		/* message popup */
		message_ok: "تأیید",
		message_cancel: "لغو",

		/* constraints */
		section_constraint: "محدودیت",
		constraint_type: "نوع محدودیت",
		constraint_date: "تاریخ محدودیت",
		asap: "در اسرع وقت",
		alap: "در دیرترین زمان ممکن",
		snet: "شروع نشود قبل از",
		snlt: "شروع نشود بعد از",
		fnet: "پایان نیابد قبل از",
		fnlt: "پایان نیابد بعد از",
		mso: "باید در این تاریخ شروع شود",
		mfo: "باید در این تاریخ پایان یابد",

		/* resource control */
		resources_add_button: "افزودن تخصیص",
		resources_filter_placeholder: "جستجو...",
		resources_filter_label: "مخفی کردن موارد خالی",
		resources_section_placeholder: "هنوز چیزی تخصیص داده نشده است. برای تخصیص منابع روی «افزودن تخصیص» کلیک کنید.",

		/* empty state screen */
		empty_state_text_link: "اینجا کلیک کنید",
		empty_state_text_description: "تا اولین وظیفه خود را ایجاد کنید",

		/* baselines control */
		baselines_section_placeholder: "افزودن یک خط مبنای جدید را شروع کنید",
		baselines_add_button: "افزودن خط مبنا",
		baselines_remove_button: "حذف",
		baselines_remove_all_button: "حذف همه",

		/* deadline control */
		deadline_enable_button: "تنظیم",
		deadline_disable_button: "حذف"

	}
};

export default locale;
