/*
	Partially translated by cjkim@dbvalley.com
*/

const locale: IGanttLocale = {
	date: {
		month_full: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
		month_short: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
		day_full: ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"],
		day_short: ["일", "월", "화", "수", "목", "금", "토"]
	},
	labels: {
		new_task: "새 작업",
		icon_save: "저장",
		icon_cancel: "취소",
		icon_details: "세부 사항",
		icon_edit: "수정",
		icon_delete: "삭제",
		confirm_deleting: "작업을 삭제하시겠습니까?",
		section_description: "설명",
		section_time: "기간",
		section_type: "유형",
		section_deadline: "최종 기한",
		section_baselines: "기준 계획",
		section_new_resources: "리소스",

		/* grid columns */
		column_wbs: "WBS",
		column_text: "작업 이름",
		column_start_date: "시작일",
		column_duration: "기간",
		column_add: "",

		link: "연결",
		confirm_link_deleting: "삭제 하시겠습니까?",
		link_start: " (시작)",
		link_end: " (종료)",

		type_task: "작업",
		type_project: "요약 작업",
		type_milestone: "마일스톤",


		minutes: "분",
		hours: "시간",
		days: "일",
		weeks: "주",
		months: "달",
		years: "년",

		/* message popup */
		message_ok: "확인",
		message_cancel: "취소",

		/* constraints */
		section_constraint: "제약 조건",
		constraint_type: "제약 조건 형식",
		constraint_date: "제약 조건 날짜",
		asap: "가능한 한 빨리",
		alap: "가능한 한 늦게",
		snet: "이후에 시작",
		snlt: "이전에 시작",
		fnet: "이후에 완료",
		fnlt: "이전에 완료",
		mso: "날짜에 시작",
		mfo: "날짜에 완료",

		/* resource control */
		resources_add_button: "배정 추가",
		resources_filter_placeholder: "검색...",
		resources_filter_label: "빈 항목 숨기기",
		resources_section_placeholder: "아직 배정된 항목이 없습니다. „배정 추가”를 클릭하여 리소스를 배정하세요.",

		/* empty state screen */
		empty_state_text_link: "여기를 클릭",
		empty_state_text_description: "첫 번째 작업을 생성하기 위해.",

		/* baselines control */
		baselines_section_placeholder: "새 기준 계획 추가 시작",
		baselines_add_button: "기준 계획 추가",
		baselines_remove_button: "제거",
		baselines_remove_all_button: "모두 제거",

		/* deadline control */
		deadline_enable_button: "설정",
		deadline_disable_button: "제거"
	}
};

export default locale;
