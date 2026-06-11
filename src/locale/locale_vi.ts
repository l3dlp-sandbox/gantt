const locale: IGanttLocale = {
	date: {
		month_full: ["Tháng Một", "Tháng Hai", "Tháng Ba", "Tháng Tư", "Tháng Năm", "Tháng Sáu", "Tháng Bảy", "Tháng Tám", "Tháng Chín", "Tháng Mười", "Tháng Mười Một", "Tháng Mười Hai"],
		month_short: ["Thg 1", "Thg 2", "Thg 3", "Thg 4", "Thg 5", "Thg 6", "Thg 7", "Thg 8", "Thg 9", "Thg 10", "Thg 11", "Thg 12"],
		day_full: ["Chủ Nhật", "Thứ Hai", "Thứ Ba", "Thứ Tư", "Thứ Năm", "Thứ Sáu", "Thứ Bảy"],
		day_short: ["CN", "T2", "T3", "T4", "T5", "T6", "T7"]
	},
	labels: {
		new_task: "Tác vụ mới",
		icon_save: "Lưu",
		icon_cancel: "Hủy",
		icon_details: "Chi tiết",
		icon_edit: "Sửa",
		icon_delete: "Xóa",
		confirm_deleting: "Tác vụ sẽ bị xóa vĩnh viễn, bạn có chắc chắn không?",
		section_description: "Mô tả",
		section_time: "Khoảng thời gian",
		section_type: "Loại",
		section_deadline: "Hạn chót",
		section_baselines: "Đường cơ sở",
		section_new_resources: "Tài nguyên",

		/* grid columns */
		column_wbs: "WBS",
		column_text: "Tên tác vụ",
		column_start_date: "Ngày bắt đầu",
		column_duration: "Thời lượng",
		column_add: "",

		/* link confirmation */
		link: "Liên kết",
		confirm_link_deleting: "sẽ bị xóa",
		link_start: " (bắt đầu)",
		link_end: " (kết thúc)",

		type_task: "Tác vụ",
		type_project: "Tác vụ tóm tắt",
		type_milestone: "Mốc",

		minutes: "Phút",
		hours: "Giờ",
		days: "Ngày",
		weeks: "Tuần",
		months: "Tháng",
		years: "Năm",

		/* message popup */
		message_ok: "OK",
		message_cancel: "Hủy",

		/* constraints */
		section_constraint: "Ràng buộc",
		constraint_type: "Loại ràng buộc",
		constraint_date: "Ngày ràng buộc",
		asap: "Càng sớm càng tốt",
		alap: "Càng muộn càng tốt",
		snet: "Bắt đầu không sớm hơn",
		snlt: "Bắt đầu không muộn hơn",
		fnet: "Kết thúc không sớm hơn",
		fnlt: "Kết thúc không muộn hơn",
		mso: "Phải bắt đầu vào",
		mfo: "Phải kết thúc vào",

		/* resource control */
		resources_add_button: "Thêm phân công",
		resources_filter_placeholder: "Tìm kiếm...",
		resources_filter_label: "ẩn mục trống",
		resources_section_placeholder: "Chưa có phân công nào. Nhấp vào 'Thêm phân công' để gán tài nguyên.",

		/* empty state screen */
		empty_state_text_link: "Nhấp vào đây",
		empty_state_text_description: "để tạo tác vụ đầu tiên của bạn",

		/* baselines control */
		baselines_section_placeholder: "Bắt đầu thêm một đường cơ sở mới",
		baselines_add_button: "Thêm đường cơ sở",
		baselines_remove_button: "Xóa",
		baselines_remove_all_button: "Xóa tất cả",

		/* deadline control */
		deadline_enable_button: "Đặt",
		deadline_disable_button: "Xóa"
	}
};

export default locale;
