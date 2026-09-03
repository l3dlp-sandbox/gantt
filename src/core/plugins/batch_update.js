import global from "../../utils/global";

function createMethod(gantt){
	var methods = {};
	var isActive = false;
	function disableMethod(methodName, dummyMethod){
		dummyMethod = typeof dummyMethod == "function" ? dummyMethod : function(){};

		if(!methods[methodName]){
			methods[methodName] = this[methodName];
			this[methodName] = dummyMethod;
		}
	}
	function restoreMethod(methodName){
		if(methods[methodName]){
			this[methodName] = methods[methodName];
			methods[methodName] = null;
		}
	}
	function disableMethods(methodsHash){
		for(var i in methodsHash){
			disableMethod.call(this, i, methodsHash[i]);
		}
	}
	function restoreMethods(){
		for(var i in methods){
			restoreMethod.call(this, i);
		}
	}

	// `global` is `window` in a browser and the node global elsewhere. A host that has no
	// console - a test harness that stubs `window`, for one - must not turn a logged exception
	// into a second, different one, thrown from the handler that was reporting the first.
	function logBatchError(e){
		if(global.console && global.console.error){
			global.console.error(e);
		}
	}

	function batchUpdatePayload(callback){
		try{
			callback();
		}catch(e){
			logBatchError(e);
		}
	}

	// GS-3602. Releases the stores deferred below - once, whether the batch ends normally or
	// through a throwing handler: the array is emptied as it goes, so the call in the `finally`
	// finds nothing left to do.
	//
	// Two things have to hold even when a filter handler throws from the pass this triggers:
	// every remaining store still has to be released, and the cleanup after the batch still has
	// to run. A store left deferred would never rebuild its order again, and a batch left
	// active would swallow every batch after it. Before this change that pass ran inside
	// `batchUpdatePayload`, whose own catch logged the exception and let the batch finish
	// cleanly; logging it here keeps that contract.
	function releaseDeferredStores(stores){
		while(stores.length){
			var store = stores.shift();
			if(store.$destroyed){
				continue;
			}
			try{
				store.endDeferFilter();
			}catch(e){
				logBatchError(e);
			}
		}
	}

	var state = gantt.$services.getService("state");
	state.registerProvider("batchUpdate", function(){
		return {
			batch_update: isActive
		};
	}, false);

	return function batchUpdate(callback, noRedraw) {
		if(isActive){
			// batch mode is already active
			batchUpdatePayload(callback);
			return;
		}

		var call_dp = (this._dp && this._dp.updateMode != "off");
		var dp_mode;
		if (call_dp){
			dp_mode = this._dp.updateMode;
			this._dp.setUpdateMode("off");
		}

		// temporary disable some methods while updating multiple tasks
		var resetProjects = {};
		var methods = {
			"render":true,
			"refreshData":true,
			"refreshTask":true,
			"refreshLink":true,
			"resetProjectDates":function(task){
				resetProjects[task.id] = task;
			}
		};

		disableMethods.call(this, methods);

		// GS-3602. The stores recompute their visible order after every add and delete, and one
		// recomputation is a pass over every item in the store. That is the same kind of work
		// the stubs above defer - work whose result is only needed once the batch is over - so
		// it is deferred the same way: each store records that its order is out of date and
		// rebuilds it once, when the deferral is released below. A store that is read during
		// the batch rebuilds on the spot, so nothing observes a stale order.
		var deferredStores = this._getDatastores();
		for(var s = 0; s < deferredStores.length; s++){
			deferredStores[s].beginDeferFilter();
		}

		isActive = true;
		try{
			try{
				this.callEvent("onBeforeBatchUpdate", []);

				batchUpdatePayload(callback);

				// The handlers of this event are part of the batch - the auto-scheduling plugin
				// runs the `autoSchedule()` it deferred here, the resource plugin rebuilds its
				// assignments - so the stores stay deferred across it, and a read made from one
				// of those handlers runs the outstanding pass itself.
				this.callEvent("onAfterBatchUpdate", []);
			}finally{
				releaseDeferredStores(deferredStores);
			}

			restoreMethods.call(this);

			// do required updates after changes applied
			for(var i in resetProjects){
				this.resetProjectDates(resetProjects[i]);
			}
		}finally{
			// GS-3602. Whatever escapes from a handler - `onBeforeBatchUpdate`,
			// `onAfterBatchUpdate`, or the project-date pass above - the instance must not be
			// left with the batch's stubs installed and the batch reported as active: every
			// later batch would be taken for a nested one and `render` would stay a no-op.
			// `restoreMethods` is idempotent, so the normal path above still restores in place,
			// before the project dates are recomputed.
			restoreMethods.call(this);
			isActive = false;
		}

		if(!noRedraw){
			this.render();
		}

		if (call_dp) {
			this._dp.setUpdateMode(dp_mode);
			this._dp.setGanttMode("task");
			this._dp.sendData();
			this._dp.setGanttMode("link");
			this._dp.sendData();
		}
	};



}

export default function(gantt){
	gantt.batchUpdate = createMethod(gantt);
};