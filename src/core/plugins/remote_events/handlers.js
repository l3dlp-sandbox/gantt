function createHandlers(gantt) {
	let updateQueue = [];
	let updateTimeout = null;
	const UPDATE_DELAY = 50;

	function remoteUpdates(message) {
		if (!message || !message.type || !(message.task?.id || message.link?.id)) {
			// eslint-disable-next-line no-console
			console.error("Invalid message format:", message);
			return;
		}

		const { type, task, link } = message;
		if ((task && gantt._dp._in_progress[task.id]) || (link && gantt._dp._in_progress[link.id])) {
			return;
		}

		if (type === "add-task") {
			for (const id in gantt._dp._in_progress) {
				if (gantt._dp.getState(id) === "inserted") {
					gantt._dp.attachEvent("onFullSync", function () {
						if (!gantt.isTaskExists(task.id)) {
							processUpdate(message);
						}
					}, { once: true });
					return;
				}
			}
		}
		updateQueue.push(message);
		if (updateTimeout) clearTimeout(updateTimeout);
		updateTimeout = setTimeout(processQueue, UPDATE_DELAY);
	}

	function processQueue() {
		if (updateQueue.length === 0) {
			return;
		}

		if (updateQueue.length === 1) {
			processUpdate(updateQueue[0]);
		} else {
			gantt.batchUpdate(function () {
					updateQueue.forEach(message => {
						processUpdate(message);
					});
			});
		}

		updateQueue = [];
	}

	function processUpdate(message) {
		const { type, task, link } = message;
		switch (type) {
			case "add-task":
				handleAddTask(task);
				break;
			case "update-task":
				handleUpdateTask(task);
				break;
			case "delete-task":
				handleDeleteTask(task);
				break;
			case "add-link":
				handleAddLink(link);
				break;
			case "update-link":
				handleUpdateLink(link);
				break;
			case "delete-link":
				handleDeleteLink(link);
				break;
			default:
				break;
		}
	}

	function ignore(code){
		if(gantt._dp){
			gantt._dp.ignore(code);
		}
		else {
			code();
		}
	}

	function handleAddTask(taskData) {
		if (gantt.isTaskExists(taskData.id)) {
			// eslint-disable-next-line no-console
			console.warn(`Task with ID ${taskData.id} already exists. Skipping add.`);
			return;
		}

		taskData.start_date = gantt.templates.parse_date(taskData.start_date);
		if (taskData.end_date) taskData.end_date = gantt.templates.parse_date(taskData.end_date);

		ignore(() => {
			gantt.addTask(taskData);
		});

	}

	function handleUpdateTask(taskData) {
		const sid = taskData.id;

		if (!gantt.getTask(sid)) {
			// eslint-disable-next-line no-console
			console.warn(`Task with ID ${sid} does not exist. Skipping update.`);
			return;
		}

		const initTask = gantt.getDatastore("task").$initItem.bind(gantt.getDatastore("task"));

		const existingTask = gantt.getTask(sid);

		ignore(() => {

			const remoteTask = initTask(taskData);
			
			for (let key in remoteTask) {
				existingTask[key] = remoteTask[key];
			}
			//Object.assign(existingTask, taskData);
		//	existingTask.start_date = gantt.templates.parse_date(taskData.start_date);
			//if (existingTask.end_date && taskData.end_date) { 
			//	existingTask.end_date = gantt.templates.parse_date(taskData.end_date);
			if (!remoteTask.end_date) {
				existingTask.end_date = gantt.calculateEndDate(existingTask);
			}

			gantt.updateTask(sid);

			if (sid !== taskData.id) {
				gantt.changeTaskId(sid, taskData.id);
			}
		});

	}

	function handleDeleteTask(taskData) {
		const sid = taskData.id;

		if (!gantt.isTaskExists(sid)) {
			return;
		}

		ignore(() => {
			const task = gantt.getTask(sid);

			if (task) {
				// handle unsaved edits in the lightbox
				if (gantt.getState().lightbox_id == sid) {
					//this._new_event = this._lightbox_id;
					taskData.id = this._lightbox_id;
					let currentTask = gantt.getTask(this._lightbox_id);
					currentTask = taskData;
				}

				// delete the task
				gantt.deleteTask(sid, true);
			}

		});

	}

	function handleAddLink(linkData) {
		if (gantt.isLinkExists(linkData.id)) {
			// eslint-disable-next-line no-console
			console.warn(`Link with ID ${linkData.id} already exists. Skipping add.`);
			return;
		}

		ignore(() => {
			gantt.addLink(linkData);
		});

	}

	function handleUpdateLink(linkData) {
		const sid = linkData.id;

		if (!gantt.isLinkExists(sid)) {
			// eslint-disable-next-line no-console
			console.warn(`Link with ID ${sid} does not exist. Skipping update.`);
			return;
		}

		const existingLink= gantt.getLink(sid);

		ignore(() => {
			Object.assign(existingLink, linkData);
			gantt.updateLink(sid);

			if (sid !== linkData.id) {
				gantt.changeLinkId(sid, linkData.id);
			}
		});

	}

	function handleDeleteLink(linkData) {
		const sid = linkData.id;

		if (!gantt.getLink(sid)) {
			return;
		}

		ignore(() => {
			const task = gantt.getLink(sid);

			if (task) {
				// handle unsaved edits in the lightbox
				if (gantt.getState().lightbox_id == sid) {
					//this._new_event = this._lightbox_id;
					linkData.id = this._lightbox_id;
					let currentTask = gantt.getLink(this._lightbox_id);
					currentTask = linkData;
				}

				// delete the link
				gantt.deleteLink(sid, true);
			}

		});

	}

	return {
		tasks: remoteUpdates,
		links: remoteUpdates
	};
}

export default createHandlers;