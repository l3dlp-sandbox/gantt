
import * as helpers from "../../../../utils/helpers";
import __extends from "../../../../utils/extends";
import Super from "./base_control";

export default function(gantt) {
	const _super = Super(gantt);

	const localCache = {
		resources: {},
		resourcesValues: {},
		filter: {},
		eventsInitialized: {},
		gridID: null,
		resource_filter_value: null,
		initialValues: [],
		newValues: []
	};

	const selectResEditor = { type: "select", map_to: "resource_id" , options: gantt.serverList("resourceOptions")};
	const numberEditor = { type: "number", map_to: "value", min: 0, max: 100 };

	const dateToStr = gantt.date.date_to_str("%d-%m-%Y");

	gantt.resource_table = {
		scale_height: 35,
		row_height: 35,
		columns: [
			{
				name: "resource", label: "Resource", align: "center", width: 80, editor: selectResEditor, template: function (assignment) {
					let defaultValue = "Unassigned";
					const resource = gantt.getDatastore(gantt.config.resource_store).getItem(assignment.resource_id);
					return resource ? resource.text : defaultValue;
				}
			},
			{
				name: "hours/Day", label: "Hours/Day", align: "center", width: 70, editor: numberEditor, template: function (assignment) {
					return assignment.value ? +assignment.value : ``;
				}
			},
			{
				name: "start", label: "Start", align: "center", width: 100, template: function (assignment) {
					return assignment.start_date ? dateToStr(assignment.start_date) : ``;
				}
			},
			{
				name: "end", label: "End", align: "center", width: 100, template: function (assignment) {
					return assignment.end_date ? dateToStr(assignment.end_date) : ``;
				}
			},
			{
				name: "duration", label: "Duration", align: "center", width: 80, template: function (assignment) {
					if (assignment.duration) {
						return `${assignment.duration} day${assignment.duration == 1 ? '' : 's'}`;
					} else {
						return ``;
					}
				}
			},
			{
				name: "delete", label: "Delete", align: "center", width: 80, template: function (assignment) {
					return `<div data-assignment-id='${assignment.id}' data-assignment-delete='${assignment.id}' class='dhx_gantt_icon dhx_gantt_icon_delete'></div>`;
				}
			}
		],
		resource_default_assignment: {
			duration: null,
			value: 8,
			start_date: null,
			end_date: null,
			mode: "default"
		}
	};

	gantt.attachEvent("onAfterLightbox", _clearCached);

	function newResourcesControl() {
		var self = _super.apply(this, arguments) || this;

		return self;
	}

	__extends(newResourcesControl, _super);

	function _generateResourceInputSection(index, name) {
		const resourceFilterPlaceholder = gantt.locale.labels.resources_filter_placeholder || "Search...";
		const html = `<div class='gantt_resource_selector_filter_wrapper gantt_cal_lsection' data-section-name='${name}'>
						<div class='gantt_cal_ltext gantt_resources_filter'>
							<label class="dhx_gantt_icon dhx_gantt_icon_search">
								<input type='text' class='gantt_resources_filter_input' placeholder='${resourceFilterPlaceholder}' tab-index="-1"> 
							<label>
						</div>
						<div role='button' aria-label='Add Assignment' class='gantt_custom_button gantt_add_resources' data-index='${index}'><div class='gantt_custom_button_add_resources gantt_add'></div><div class='gantt_custom_button_label'>${gantt.locale.labels.resources_add_button}</div>
						</div>
					</div>`;
		return html;
	}


	function _generateResourceTable(node, assignments, task, sns) {
		// destroy grid if it exists
		if(gantt.$ui.getView("GridRL") && !localCache.gridID){
			gantt.$ui.getView("GridRL").destructor();
		}

		if (!localCache.gridID) {
			// temp store for assignments in the lightbox
			const resourceTable = document.createElement("div");
			resourceTable.classList.add("gantt_resource_selector_grid");
			const tempAssignmentStore = gantt.createDatastore({
				name: "temp_resource_assignment_store",
				initItem: function (item) {
					if (!item.id) {
						item.id = gantt.uid();
					}
					return item;
				}
			});

			gantt.$data.tempAssignmentsStore = tempAssignmentStore; // link to gantt
			const gridConfig = {...gantt.config.layout, id: "GridRL", sectionName: sns.name };
			const grid = gantt.$ui.createView("GridRL", gantt.$root, gridConfig);  // creating grid
			grid.init(resourceTable); // init grid
			const width = gantt._lightbox.offsetWidth - (gantt.config.wide_form ? 150 : 0); 
			grid.setSize(width, "auto"); // set width and height of the grid
			gantt.ext.inlineEditorsLightbox = gantt.ext._inlineEditors.createEditors(grid); //attach inline editors
			gantt.ext.inlineEditorsLightbox.init();
			localCache.gridID = grid.$id;
			node.appendChild(resourceTable);
			const resourceAssignmentsStore = gantt.getDatastore(gantt.config.resource_assignment_store);  // main store
			const searchItems = [];
			resourceAssignmentsStore.eachItem(function(item){
				if(item.task_id && item.task_id == task.id){
					searchItems.push(item);
				}
			});
			const clonedAssignments = structuredClone(searchItems); // clone
			tempAssignmentStore.parse(clonedAssignments); // add all assignments from main to temp
		}

		gantt.$data.tempAssignmentsStore.attachEvent("onFilterItem", function(id, assignment) {
			if (assignment.task_id == task.id){
				if (!localCache.resource_filter_value) {
					return true;
				} else {
					let resource = gantt.getDatastore(gantt.config.resource_store).getItem(assignment.resource_id);
					if (resource.text.toLowerCase().indexOf(localCache.resource_filter_value) > -1) return true;
				}
			}
			return false;
		});
		gantt.refreshData();
	}

	function _generateAssignmentDefaultRow(sectionName) {
		let resource_id;
		const task = gantt.getTask(gantt._lightbox_id);
		const assignments = gantt.getTaskAssignments(task.id);
		if(assignments.length){
			resource_id = assignments[0].resource_id;
		} else {
			const resources = gantt.serverList("resourceOptions");
			if(resources.length){
				resource_id = resources[0].id;
			} else {
				throw new Error(`There is no any resources in resource store, please check your data:
					https://docs.dhtmlx.com/gantt/desktop__resource_management.html#assigningresources`);
			}
		}

		const tempAssignmentStore = gantt.getDatastore("temp_resource_assignment_store");
		const lightboxSection = gantt.getLightboxSection(sectionName).section;
		const resourceConfig = lightboxSection.config ?? gantt.resource_table;
		const config = resourceConfig.resource_default_assignment ?? gantt.resource_table.resource_default_assignment;

		tempAssignmentStore.addItem({
			resource_id,
			task_id: task.id,
			duration: config.duration ?? gantt.calculateDuration(task),
			value: config.value,
			start_date: config.start_date ?? task.start_date,
			end_date: config.end_date ?? task.end_date,
			mode: config.mode
		});
		gantt.refreshData();
	}

	function _setFocus(container){
		const resourceRows = container.querySelectorAll(".gantt_row.gantt_row_task");
		if(resourceRows){
			const lastRow = resourceRows[resourceRows.length -1];
			const resourceCell = lastRow.querySelector(".gantt_cell");
			if(resourceCell){
				const {id, columnName} = gantt.ext.inlineEditorsLightbox.locateCell(resourceCell);
				if(id && columnName){
					gantt.ext.inlineEditorsLightbox.startEdit(id, columnName);
				}
			}
		}
	}

	newResourcesControl.prototype.render = function(sns) {
		if(!sns.options){
			sns.options = gantt.serverList("resourceOptions");
		}

		if(!sns.map_to || sns.map_to == "resource_selector" || sns.map_to == "auto"){
			sns.map_to = gantt.config.resource_property;
		}

		let html;
		// if set fixed height for this element, then resize of lightbox will be calculated improperly
		html = `<div${!isNaN(sns.height) ? " style='height:auto;'" : ""} class='gantt_section_${sns.name}' data-section-name='${sns.name}'>`;
		html += _generateResourceInputSection(sns.index, sns.name);
		html += `</div>`;
		html += `<div class="resources_section_placeholder" style='display:none;'>${gantt.locale.labels.resources_section_placeholder}</div>`;
		return html;
	};

	newResourcesControl.prototype.button_click = function (index, el, section, container) {
		const sectionName = section.getAttribute("data-section-name") || container.getAttribute("data-section-name");
		const firstAddBtn = document.querySelector("[data-resource-selector-section]");
		const placeholder = document.querySelector(".resources_section_placeholder");
		const resourceSection = document.querySelector(`.gantt_section_${sectionName} .gantt_resource_selector_filter_wrapper`);
		const resourceGrid = document.querySelector(`.gantt_section_${sectionName} .gantt_grid`);
		firstAddBtn.style.display = "none";

		if (gantt.callEvent("onSectionButton", [gantt._lightbox_id, section]) === false) {
			return;
		}
		if (el.closest(".gantt_custom_button.gantt_add_resources")){
			placeholder.style.display = "none";
			const tempAssignmentStore = gantt.getDatastore("temp_resource_assignment_store");

			if(tempAssignmentStore && tempAssignmentStore.getItems().length == 0){
				resourceSection.style.display = "flex";
				resourceGrid.style.display = "block";
			}

			_generateAssignmentDefaultRow(sectionName);
			_setFocus(container);
		}
	};

	function setInitialValues(task){
		localCache.initialValues = [];
		localCache.newValues = [];
		const assignmentStore = gantt.$data.assignmentsStore;
		const storeAssignments = assignmentStore.find(function (a) {
			return a.task_id == task.id;
		});
		for (let i = 0; i < storeAssignments.length; i++) {
			localCache.initialValues[i] = { resource_id: storeAssignments[i].resource_id, value: storeAssignments[i].value, id: storeAssignments[i].id };
		}
	}

	newResourcesControl.prototype.set_value = function(node, assignments, task, sns, initialized) {
		let firstAddBtn = document.querySelector("[data-resource-selector-section]");
		let placeholder = document.querySelector(".resources_section_placeholder");
		setInitialValues(task);
		if(!initialized){
				_generateResourceTable(node, assignments, task, sns);
				_setFilterCache(node, sns);
				_initEvents(node, assignments, sns, this);
				firstAddBtn.style.display = "none";
				let resourceGrid = document.querySelector(`.gantt_section_${sns.name} .gantt_grid`);
				let resourceSection = document.querySelector(`.gantt_section_${sns.name} .gantt_resource_selector_filter_wrapper`);
				resourceGrid.style.display = "none";
				resourceSection.style.display = "none";
		}
		const tempAssignmentStore = gantt.getDatastore("temp_resource_assignment_store");
		if(tempAssignmentStore) {
			let resourceSection = document.querySelector(`.gantt_section_${sns.name} .gantt_resource_selector_filter_wrapper`);
			let resourceGrid = document.querySelector(`.gantt_section_${sns.name} .gantt_grid`);

			if(tempAssignmentStore.getItems().length == 0){
				if(firstAddBtn.style.display == "none"){
					firstAddBtn.style.display = "flex";
				}

				resourceSection.style.display = "none";
				resourceGrid.style.display = "none";
				placeholder.style.display = "block";
			} else {
				resourceSection.style.display = "flex";
				resourceGrid.style.display = "block";
				placeholder.style.display = "none";
			}
		}

		gantt._center_lightbox(gantt.getLightbox());
	};

	newResourcesControl.prototype.get_value = function(node, task, sns, type) {
		const tempAssignmentStore = gantt.getDatastore("temp_resource_assignment_store");
		const storeAssignments = tempAssignmentStore.find(function (a) {
			return a.task_id == task.id;
		});
		for (let i = 0; i < storeAssignments.length; i++) {
			localCache.newValues[i] = { 
				resource_id: storeAssignments[i].resource_id.toString(), 
				value: storeAssignments[i].value, 
				id: storeAssignments[i].id, 
				start_date: storeAssignments[i].start_date,
				end_date: storeAssignments[i].end_date,
				duration: storeAssignments[i].duration,
				mode: storeAssignments[i].mode,
				delay: storeAssignments[i].delay
			};
		}

		if (type == "save"){
			return localCache.newValues;
		} else {
			return localCache.initialValues;
		}
	};

	function getVisibleResources(task, options){
		let visibleResources = [];
		const tempAssignmentStore = gantt.getDatastore("temp_resource_assignment_store");
		const currentAssignments = tempAssignmentStore.find(function (a) {
			return a.task_id == task.id;
		});
		for (let i = 0; i < currentAssignments.length; i++) {
			let resource = gantt.getDatastore(gantt.config.resource_store).getItem(currentAssignments[i].resource_id);
			if(resource){
				visibleResources.push(resource);
			}
		}
		return visibleResources;
	}

	function _getValue(el) {
		return el.value.trim();
	}

	function _initEvents(node, ev, sns, context) {
		if (localCache.eventsInitialized[sns.id]) return;

		var _applyFilter = function(e) {
			_saveValues(sns, node);
			var resultSns;
			var query;
			var input;
			var filterCache = _getFilterCache(sns);
			input = filterCache.input;

			query = _getValue(input);
			localCache.resource_filter_value = query.toLowerCase();
			filterCache.filterApplied = !!query;
			if (gantt.getState().lightbox) {
				ev = gantt.getLightboxValues();
			}
			resultSns = _getSnsToHideUnsetted(sns, ev, query);
			var value = ev[sns.map_to];
			context.form_blocks.resource_selector.set_value(node, value, ev, resultSns);
		};

		function _saveValues(sns, domElement) {
			var selector = _getInputElementSelector();
			var inputs = domElement.querySelectorAll(selector);

			localCache.resourcesValues[sns.id] = localCache.resourcesValues[sns.id] || {};

			for (var i = 0; i < inputs.length; i++) {
				var key = inputs[i].getAttribute("data-item-id");
				var originalAssignmentId = inputs[i].getAttribute("data-assignment-id");
				if (!inputs[i].disabled) {
					localCache.resourcesValues[sns.id][key] = {value: inputs[i].value, id: originalAssignmentId};
				} else {
					delete localCache.resourcesValues[sns.id][key];
				}
			}
		}

		_applyFilter = helpers.throttle(_applyFilter, 100);

		_getFilterCache(sns).container.addEventListener("keyup", _applyFilter);
		_getFilterCache(sns).container.addEventListener("input", _applyFilter, true);
		_getFilterCache(sns).container.addEventListener("change", _applyFilter, true);
		localCache.eventsInitialized[sns.id] = true;
	}

	function _getSnsToHideUnsetted(controlConfig, task, query, hideUnsetted) {
		var comparison;
		var resultConfig = gantt.copy(controlConfig);

		if (query === "") {// show all
			resultConfig.resources = [];
			let resourceIds = localCache.newValues.map(obj => {
				return obj.resource_id;
			});
			if(resourceIds && resourceIds.length > 0){
				for (let i = 0; i < resourceIds.length; i++) {
					let resource = gantt.getDatastore(gantt.config.resource_store).getItem(resourceIds[i]);
					if(resource){
						resultConfig.resources.push(resource);
					}
				}
			}
			return resultConfig;
		}

		comparison = function(entry) {// show matching labels only
			if (entry.text.toLowerCase().indexOf(query.toLowerCase()) >= 0) {
				return entry;
			}
		};

		resultConfig.resources = getVisibleResources(task, controlConfig.options);
		resultConfig.resources = helpers.arrayFilter(resultConfig.resources, comparison);
		return resultConfig;
	}

	function _getInputElementSelector(isChecked) {
		if(isChecked === undefined){
			return ".gantt_resource_amount_input";
		}else{
			return "[data-checked='"+(isChecked ? "true" : "false") + "'] .gantt_resource_amount_input";
		}
	}

	function _setFilterCache(node, sns) {
		if (!localCache.filter[sns.id]) {
			var container = node.querySelector(".gantt_resources_filter");
			var input = container.querySelector(".gantt_resources_filter_input");

			localCache.filter[sns.id] = {
				container: container,
				input: input,
				filterApplied: false
			};
		}
		return localCache.filter[sns.id];
	}

	function _getFilterCache(sns) {
		return localCache.filter[sns.id];
	}

	function _clearCached() {
		for (var key in localCache.filter) {
			localCache.filter[key].input.value = "";
			localCache.filter[key].filterApplied = false;
		}
		localCache.resourcesValues = {};
		localCache.eventsInitialized = {};
		localCache.resource_filter_value = null;
		localCache.gridID = null;
		localCache.initialValues = [];
		localCache.newValues = [];
	}

	return newResourcesControl;
};