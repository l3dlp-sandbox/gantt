
// MIT edition timeline layers: the full set minus the Pro-only layers
// (split tasks, rollups, constraints, deadlines, baselines).
// Unlike the GPL variant, the timed-project layer is kept - projects and
// milestones are part of the MIT feature set.
export default function(){
	var self = this;
	var taskFilter = function(){
		return self.isVisible();
	};

	var barVisible = function(id, task){
		return !task.hide_bar;
	};

	const gantt = this.$gantt;

	const isTimedProject = function(id, task){
		return task.type === gantt.config.types.project && task.auto_scheduling === false;
	};
	const isNotTimedProject = function(id, task){
		return !isTimedProject(id, task);
	};

	var taskLayers = [
		{
			expose: true,
			renderer: this.$gantt.$ui.layers.taskBar(),
			container: this.$task_bars,
			filter: [taskFilter, barVisible, isNotTimedProject]
		},
		{
			renderer: this.$gantt.$ui.layers.timedProjectBar(),
			filter: [taskFilter, isTimedProject],
			container: this.$task_bars,
			append: true
		}
	];

	taskLayers.push({
		renderer: this.$gantt.$ui.layers.taskBg(),
		container: this.$task_bg,
		filter: [
			taskFilter
		]
	});

	var linkLayers = [
		{
			expose: true,
			renderer: this.$gantt.$ui.layers.link(),
			container: this.$task_links,
			filter: [taskFilter]
		}
	];

	return {
		tasks: taskLayers,
		links: linkLayers
	};

};