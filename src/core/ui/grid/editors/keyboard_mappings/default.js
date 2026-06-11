export default {
	init: function (controller, grid) {
		var gantt = grid.$gantt;

		gantt.attachEvent("onTaskClick", function (id, e) {
			if (gantt._is_icon_open_click(e))
				return true;
			var state = controller.getState();
			var cell = controller.locateCell(e.target);

			if (cell && controller.getEditorConfig(cell.columnName)) {
				if (controller.isVisible() && state.id == cell.id && state.columnName == cell.columnName) {
					// do nothing if editor is already active in this cell
				} else {
					controller.startEdit(cell.id, cell.columnName);
				}
				return false;
			}
			return true;
		});
		//GS-2598: new resource control click handler
		if(grid.$config.id === "GridRL"){
			gantt.event(gantt.getLightbox(), "click", function (e) {
				const domHelpers = gantt.utils.dom;
				const state = controller.getState();
				const cell = controller.locateCell(e.target);
				// click on the resource table
				if (cell && controller.getEditorConfig(cell.columnName)) {
					// validation for unassigned case
					if(cell.columnName == 'duration' || cell.columnName == 'end'){
						const tempAssignmentStore = gantt.getDatastore("temp_resource_assignment_store");
						const assignment = tempAssignmentStore.getItem(cell.id);
						if(assignment){
							if(!assignment.start_date){
								gantt.message({
									type:"warning",
									text:"Specify assignment start date"
								});
								controller.hide();
								return false;
							}
						}
					}
					if (controller.isVisible() && state.id == cell.id && state.columnName == cell.columnName) {
					// do nothing if editor is already active in this cell
					} else {
						controller.startEdit(cell.id, cell.columnName);
					}
					if(controller.isChanged()){
						controller.save();
					}
					return false;
				}
				// do nothing if add resource button clicked
				if(domHelpers.closest(e.target, `.gantt_custom_button.gantt_add_resources`)){
					return;
				}
				// handle assignment deleting
				if(domHelpers.closest(e.target, `[data-assignment-delete]`)){
					const assignmentId = e.target.getAttribute("data-assignment-delete");
					gantt.confirm({
						text: "Resource assignment will be deleted permanently, are you sure?",
						cancel:"No",
						ok:"Delete", 
						callback: function(result){
							if(result){
								const tempAssignmentStore = gantt.getDatastore("temp_resource_assignment_store");
								tempAssignmentStore.removeItem(assignmentId);
								// handle deleting last grid row, 
								if (tempAssignmentStore.getItems().length == 0){
									const resourceSection = gantt.getLightboxSection(grid.$config.sectionName);
									const block = gantt.form_blocks["resource_selector"];
									const node = gantt._lightbox_root.querySelector("#" + resourceSection.section.id).nextSibling;
									block.set_value.call(gantt, node, [], {}, resourceSection.section, true);
								}
								gantt.refreshData();
							}else{
								return;
							}
						}
					});
				}
				//click outside the resource table
				if(controller.isVisible()) {
					controller.save();
					controller.hide();
				} else {
					controller.hide();
				}
			});
			// before saving lightbox need to save controller value if its modified
			// covering date type inputs
			gantt.lightbox_events.gantt_save_btn = function () {
				controller.save();
				gantt._save_lightbox();
			};
		};

		gantt.attachEvent("onEmptyClick", function () {
			if (controller.isVisible() && controller.isChanged()) {
				controller.save();
			} else {
				controller.hide();
			}
			return true;
		});

		gantt.attachEvent("onTaskDblClick", function (id, e) {
			var state = controller.getState();
			var cell = controller.locateCell(e.target);
			if (cell && controller.isVisible() && cell.columnName == state.columnName) {
				//GS-933 probably, we don't need to hide the inline editor because the lightbox cannot be opened if you double-click on an inline editor
				//remove this code later if people don't complain
				//controller.hide();
				return false;
			}
			return true;
		});
	},

	onShow: function (controller, placeholder, grid) {
		var gantt = grid.$gantt;
		

		if(gantt.ext && gantt.ext.keyboardNavigation){
			var keyNav = gantt.ext.keyboardNavigation;
			keyNav.attachEvent("onKeyDown", function(command, e){
				var keyboard = gantt.constants.KEY_CODES;
				var keyCode = e.keyCode;
				var preventKeyNav = false;

				switch (keyCode){
					case keyboard.SPACE:
						if(controller.isVisible()){
							preventKeyNav = true;
						}
						break;
				}
				if (preventKeyNav){
					return false;
				} else{
					return true;
				}
			});
		}
		
		placeholder.onkeydown = function (e) {
			e = e || window.event;

			var keyboard = gantt.constants.KEY_CODES;
			if (e.defaultPrevented || (e.shiftKey && e.keyCode != keyboard.TAB)) {
				return;
			}

			var shouldPrevent = true;
			switch (e.keyCode) {
				case gantt.keys.edit_save:
					controller.save();
					break;
				case gantt.keys.edit_cancel:
					controller.hide();
					break;
				case keyboard.UP:
				case keyboard.DOWN:
					if (controller.isVisible()) {
						controller.hide();
						shouldPrevent = false;
					}
					break;
				case keyboard.TAB:
					if (e.shiftKey) {
						controller.editPrevCell(true);
					} else {
						controller.editNextCell(true);
					}
					break;
				default:
					shouldPrevent = false;
					break;
			}

			if (shouldPrevent) {
				e.preventDefault();
			}
		};
		// GS-2598: update inline editor in the lightbox
		if(grid.$config.id === "GridRL"){
			placeholder.onkeyup = function (e) {
				e = e || window.event;

				var keyboard = gantt.constants.KEY_CODES;
				if (e.defaultPrevented || (e.shiftKey && e.keyCode != keyboard.TAB)) {
					return;
				}
				if(gantt._lightbox_id && controller.isChanged()){
					controller.save();
				}
			};
			let timeout;
			placeholder.onwheel = function (e) {
				e = e || window.event;
				if(gantt._lightbox_id && controller.isChanged()){
					clearTimeout(timeout);
					timeout=setTimeout(function(){
						controller.save();
					},100);
				}
			};
		}
	},
	onHide: function () {

	},

	destroy: function () {

	}
};

