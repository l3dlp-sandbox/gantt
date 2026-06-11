const locale: IGanttLocale = {
	date: {
		month_full: ["มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"],
		month_short: ["ม.ค.", "ก.พ.", "มี.ค.", "เม.ย.", "พ.ค.", "มิ.ย.", "ก.ค.", "ส.ค.", "ก.ย.", "ต.ค.", "พ.ย.", "ธ.ค."],
		day_full: ["วันอาทิตย์", "วันจันทร์", "วันอังคาร", "วันพุธ", "วันพฤหัสบดี", "วันศุกร์", "วันเสาร์"],
		day_short: ["อา.", "จ.", "อ.", "พ.", "พฤ.", "ศ.", "ส."]
	},
	labels: {
		new_task: "งานใหม่",
		icon_save: "บันทึก",
		icon_cancel: "ยกเลิก",
		icon_details: "รายละเอียด",
		icon_edit: "แก้ไข",
		icon_delete: "ลบ",
		confirm_deleting: "งานจะถูกลบอย่างถาวร ต้องการดำเนินการต่อหรือไม่?",
		section_description: "คำอธิบาย",
		section_time: "ช่วงเวลา",
		section_type: "ประเภท",
		section_deadline: "กำหนดส่ง",
		section_baselines: "เส้นฐาน",
		section_new_resources: "ทรัพยากร",

		/* grid columns */
		column_wbs: "WBS",
		column_text: "ชื่องาน",
		column_start_date: "วันที่เริ่มต้น",
		column_duration: "ระยะเวลา",
		column_add: "",

		/* link confirmation */
		link: "ลิงก์",
		confirm_link_deleting: "จะถูกลบ",
		link_start: " (เริ่มต้น)",
		link_end: " (สิ้นสุด)",

		type_task: "งาน",
		type_project: "งานสรุป",
		type_milestone: "หลักเป้าหมาย",

		minutes: "นาที",
		hours: "ชั่วโมง",
		days: "วัน",
		weeks: "สัปดาห์",
		months: "เดือน",
		years: "ปี",

		/* message popup */
		message_ok: "ตกลง",
		message_cancel: "ยกเลิก",

		/* constraints */
		section_constraint: "ข้อจำกัด",
		constraint_type: "ประเภทข้อจำกัด",
		constraint_date: "วันที่ข้อจำกัด",
		asap: "เร็วที่สุดเท่าที่เป็นไปได้",
		alap: "ช้าที่สุดเท่าที่เป็นไปได้",
		snet: "เริ่มไม่เร็วกว่าวันที่",
		snlt: "เริ่มไม่เกินวันที่",
		fnet: "สิ้นสุดไม่เร็วกว่าวันที่",
		fnlt: "สิ้นสุดไม่เกินวันที่",
		mso: "ต้องเริ่มในวันที่",
		mfo: "ต้องเสร็จในวันที่",

		/* resource control */
		resources_add_button: "เพิ่มการมอบหมาย",
		resources_filter_placeholder: "ค้นหา...",
		resources_filter_label: "ซ่อนรายการว่าง",
		resources_section_placeholder: "ยังไม่มีการมอบหมาย คลิก 'เพิ่มการมอบหมาย' เพื่อกำหนดทรัพยากร",

		/* empty state screen */
		empty_state_text_link: "คลิกที่นี่",
		empty_state_text_description: "เพื่อสร้างงานแรกของคุณ",

		/* baselines control */
		baselines_section_placeholder: "เริ่มต้นด้วยการสร้างเส้นฐานใหม่",
		baselines_add_button: "สร้างเส้นฐาน",
		baselines_remove_button: "นำออก",
		baselines_remove_all_button: "นำออกทั้งหมด",

		/* deadline control */
		deadline_enable_button: "ตั้งค่า",
		deadline_disable_button: "นำออก"
	}
};

export default locale;
