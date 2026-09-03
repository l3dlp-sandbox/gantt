import * as utils from "../../utils/utils";

var $powerArray  = {
	$create: function(array){
		return utils.mixin(array || [], this);
	},
	//remove element at specified position
	$removeAt:function(pos,len){
		if (pos>=0) this.splice(pos,(len||1));
	},
	//find element in collection and remove it
	$remove:function(value){
		this.$removeAt(this.$find(value));
	},
	//add element to collection at specific position
	$insertAt:function(data,pos){
		if (!pos && pos!==0) 	//add to the end by default
			this.push(data);
		else {
			var b = this.splice(pos,(this.length-pos));
			this[pos] = data;
			this.push.apply(this,b); //reconstruct array without loosing this pointer
		}
	},
	//return index of element, -1 if it doesn't exists
	$find:function(data){
		// GS-3602. Matching an id across types is the contract here - a store may hold an id as
		// a number and be asked for it as a string - but `==` per element is an interpreted,
		// megamorphic scan over arrays as long as the chart, per visibility check and per
		// removal. Two strict passes express the same intent and stay inside the engine; on a
		// chart that uses one id type throughout the second never runs.
		//
		// This narrows `==` deliberately: an id held as a non-canonical numeric string ("5.0",
		// "05", " 5 ") no longer matches the number 5. Ids do not take those forms - they are
		// `pull` keys, the canonical string of whatever was stored.
		var strict = this.indexOf(data);
		if (strict !== -1) return strict;

		if (typeof data === "string") {
			if (data !== "" && !isNaN(+data)) return this.indexOf(+data);
		} else if (typeof data === "number") {
			return this.indexOf(data + "");
		}
		return -1;
	},
	//execute some method for each element of array
	$each:function(functor,master){
		for (var i=0; i < this.length; i++)
			functor.call((master||this),this[i]);
	},
	//create new array from source, by using results of functor
	$map:function(functor,master){
		for (var i=0; i < this.length; i++)
			this[i]=functor.call((master||this),this[i]);
		return this;
	},
	$filter:function(functor, master){
		for (var i=0; i < this.length; i++)
			if (!functor.call((master||this),this[i])){
				this.splice(i,1);
				i--;
			}
		return this;
	}
};

export default $powerArray;