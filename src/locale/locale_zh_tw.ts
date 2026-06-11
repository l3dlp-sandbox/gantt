const locale: IGanttLocale = {
	date: {
		month_full: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
		month_short: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
		day_full: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
		day_short: ["日", "一", "二", "三", "四", "五", "六"]
	},
	labels: {
		new_task: "新任務",
		icon_save: "儲存",
		icon_cancel: "取消",
		icon_details: "詳細資料",
		icon_edit: "編輯",
		icon_delete: "刪除",
		confirm_deleting: "任務將被永久刪除，您確定嗎？",
		section_description: "說明",
		section_time: "時間區間",
		section_type: "類型",
		section_deadline: "期限",
		section_baselines: "比較基準",
		section_new_resources: "資源",

		/* grid columns */
		column_wbs: "WBS",
		column_text: "任務名稱",
		column_start_date: "開始時間",
		column_duration: "工期",
		column_add: "",

		/* link confirmation */
		link: "連結",
		confirm_link_deleting: "將被刪除",
		link_start: " (開始)",
		link_end: " (結束)",

		type_task: "任務",
		type_project: "摘要任務",
		type_milestone: "里程碑",

		minutes: "分鐘",
		hours: "小時",
		days: "天",
		weeks: "週",
		months: "月",
		years: "年",

		/* message popup */
		message_ok: "確定",
		message_cancel: "取消",

		/* constraints */
		section_constraint: "限制",
		constraint_type: "限制式類型",
		constraint_date: "限制式日期",
		asap: "越早越好",
		alap: "越晚越好",
		snet: "開始時間不得早於",
		snlt: "開始時間不得晚於",
		fnet: "完成時間不得早於",
		fnlt: "完成時間不得晚於",
		mso: "必須開始於",
		mfo: "必須完成於",

		/* resource control */
		resources_add_button: "新增分派",
		resources_filter_placeholder: "搜尋...",
		resources_filter_label: "隱藏空白",
		resources_section_placeholder: "尚未有任何分派。按一下「新增分派」以分派資源。",

		/* empty state screen */
		empty_state_text_link: "按一下這裡",
		empty_state_text_description: "以建立您的第一個任務",

		/* baselines control */
		baselines_section_placeholder: "開始新增新的比較基準",
		baselines_add_button: "新增比較基準",
		baselines_remove_button: "移除",
		baselines_remove_all_button: "全部移除",

		/* deadline control */
		deadline_enable_button: "設定",
		deadline_disable_button: "移除"
	}
};

export default locale;
