/*

 Partial translation by:
 MATTHEUS PIROVANI RORIZ GONЗALVES
 (mattheusroriz@hotmail.com / mattheus.pirovani@gmail.com / www.atrixian.com.br)
 Jorge Albernaz Martins (jorgefox@hotmail.com, www.redfox.inf.br)
*/

const locale: IGanttLocale = {
	date: {
		month_full: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
		month_short: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
		day_full: ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"],
		day_short: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"]
	},
	labels: {
		new_task: "Nova tarefa",
		icon_save: "Guardar",
		icon_cancel: "Cancelar",
		icon_details: "Detalhes",
		icon_edit: "Editar",
		icon_delete: "Eliminar",
		confirm_deleting: "A tarefa será eliminada permanentemente. Tem a certeza?",
		section_description: "Descrição",
		section_time: "Período",
		section_type: "Tipo",
		section_deadline: "Prazo",
		section_baselines: "Linhas de base",
		section_new_resources: "Recursos",

		/* grid columns */
		column_wbs: "EAP",
		column_text: "Nome da tarefa",
		column_start_date: "Início",
		column_duration: "Duração",
		column_add: "",

		/* link confirmation */
		link: "Ligação",
		confirm_link_deleting: "A ligação será eliminada.",
		link_start: " (início)",
		link_end: " (fim)",

		type_task: "Tarefa",
		type_project: "Tarefa de resumo",
		type_milestone: "Marco",


		minutes: "Minutos",
		hours: "Horas",
		days: "Dias",
		weeks: "Semanas",
		months: "Meses",
		years: "Anos",

		/* message popup */
		message_ok: "OK",
		message_cancel: "Cancelar",

		/* constraints */
		section_constraint: "Restrição",
		constraint_type: "Tipo de restrição",
		constraint_date: "Data da restrição",
		asap: "Assim que possível",
		alap: "O mais tarde possível",
		snet: "Não Iniciar Antes De",
		snlt: "Não Iniciar Depois De",
		fnet: "Não Concluir Antes De",
		fnlt: "Não Concluir Depois De",
		mso: "Tem de Iniciar A",
		mfo: "Tem de Concluir A",

		/* resource control */
		resources_add_button: "Adicionar atribuição",
		resources_filter_placeholder: "Pesquisar...",
		resources_filter_label: "ocultar vazios",
		resources_section_placeholder: "Ainda não foi atribuído nenhum recurso. Clique em “Adicionar atribuição” para atribuir recursos.",

		/* empty state screen */
		empty_state_text_link: "Clique aqui",
		empty_state_text_description: "para criar a sua primeira tarefa",

		/* baselines control */
		baselines_section_placeholder: "Comece por adicionar uma nova linha de base",
		baselines_add_button: "Adicionar linha de base",
		baselines_remove_button: "Remover",
		baselines_remove_all_button: "Remover tudo",

		/* deadline control */
		deadline_enable_button: "Definir",
		deadline_disable_button: "Remover"
	}
};

export default locale;
