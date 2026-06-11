/*
 Partial translation by Genexus Japan Inc.
*/

const locale: IGanttLocale = {
	date: {
		month_full: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
		month_short: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
		day_full: ["日曜日", "月曜日", "火曜日", "水曜日", "木曜日", "金曜日", "土曜日"],
		day_short: ["日", "月", "火", "水", "木", "金", "土"]
	},
	labels: {
		new_task: "新しいタスク",
		icon_save: "保存",
		icon_cancel: "キャンセル",
		icon_details: "詳細",
		icon_edit: "編集",
		icon_delete: "削除",
		confirm_deleting: "タスクは完全に削除されます。よろしいですか？",
		section_description: "デスクリプション",
		section_time: "期間",
		section_type: "種類",
		section_deadline: "期限",
		section_baselines: "ベースライン",
		section_new_resources: "リソース",

		/* grid columns */
		column_wbs: "WBS",
		column_text: "タスク名",
		column_start_date: "開始日",
		column_duration: "期間",
		column_add: "",

		/* link confirmation */
		link: "リンク",
		confirm_link_deleting: "削除されます",
		link_start: " (開始)",
		link_end: " (終了)",

		type_task: "タスク",
		type_project: "サマリー タスク",
		type_milestone: "マイルストーン",


		minutes: "分",
		hours: "時間",
		days: "日",
		weeks: "週",
		months: "か月",
		years: "年",

		/* message popup */
		message_ok: "OK",
		message_cancel: "キャンセル",

		/* constraints */
		section_constraint: "制約",
		constraint_type: "制約の種類",
		constraint_date: "制約の指定日",
		asap: "できるだけ早く",
		alap: "可能な限り遅く",
		snet: "指定日以後に開始",
		snlt: "指定日までに開始",
		fnet: "指定日以後に終了",
		fnlt: "指定日までに終了",
		mso: "指定日に開始",
		mfo: "指定日に終了",

		/* resource control */
		resources_add_button: "割り当てを追加",
		resources_filter_placeholder: "検索...",
		resources_filter_label: "空の項目を非表示",
		resources_section_placeholder: "まだ何も割り当てられていません。［割り当てを追加］をクリックしてリソースを割り当ててください。",

		/* empty state screen */
		empty_state_text_link: "ここをクリック",
		empty_state_text_description: "最初のタスクを作成するには",

		/* baselines control */
		baselines_section_placeholder: "新しいベースラインの追加を開始",
		baselines_add_button: "ベースラインを追加",
		baselines_remove_button: "削除",
		baselines_remove_all_button: "すべて削除",

		/* deadline control */
		deadline_enable_button: "設定",
		deadline_disable_button: "削除"
	}
};

export default locale;
