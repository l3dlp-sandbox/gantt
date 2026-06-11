import * as helpers from "../../utils/helpers";

// MIT edition: standalone gantt.getTaskBy implementation.
// In other editions this API is installed by plugins/resources.js, which is
// excluded from the MIT build. getTaskBy is a public API and is also required
// by the new_task_placeholder plugin.
export default function(gantt){

	function filterTasks(filter){
		var res = [];
		gantt.eachTask(function(task){
			if(filter(task)){
				res.push(task);
			}
		});
		return res;
	}

	// same value hashing as plugins/resources.js: `null` must not collide
	// with the "null" string
	var falsyValuePrefix = String(Math.random());
	function valueHashFunction(value){
		if (value === null){
			return falsyValuePrefix + String(value);
		}
		return String(value);
	}

	function getTasksByProperty(property, values, typeFilter){
		var matching = {};
		helpers.forEach(values, function(value){
			matching[valueHashFunction(value)] = true;
		});

		var res = [];
		gantt.eachTask(function(task){
			if(typeFilter){
				if(!typeFilter[gantt.getTaskType(task)]){
					return;
				}
			}else if(task.type == gantt.config.types.project){
				return;
			}

			if(property in task){
				var taskValues = helpers.isArray(task[property]) ? task[property] : [task[property]];
				helpers.forEach(taskValues, function(value){
					var propertyValue = (value && value.resource_id) ? value.resource_id : value;
					if(matching[valueHashFunction(propertyValue)]){
						res.push(task);
					}
				});
			}
		});
		return res;
	}

	gantt.getTaskBy = function(propertyName, propertyValue, typeFilter){
		if(typeof propertyName === "function"){
			return filterTasks(propertyName);
		}
		var values = helpers.isArray(propertyValue) ? propertyValue : [propertyValue];
		return getTasksByProperty(propertyName, values, typeFilter);
	};
};