import eventable from "../../utils/eventable";
import * as utils from "../../utils/utils";
import timeout from "../../utils/timeout";
import global from "../../utils/global";
import * as domHelpers from "../ui/utils/dom_helpers";

export default function(gantt){

	function copyDomEvent(e){
		return {
			target: e.target || e.srcElement,
			pageX: e.pageX,
			pageY: e.pageY,
			clientX: e.clientX,
			clientY: e.clientY,
			metaKey: e.metaKey,
			shiftKey: e.shiftKey,
			ctrlKey: e.ctrlKey,
			altKey: e.altKey
		};
	}

	function DnD(obj, config) {
		this._obj = obj;
		this._settings = config || {};
		eventable(this);

		var inputMethods = this.getInputMethods();

		this._drag_start_timer = null;
		gantt.attachEvent("onGanttScroll", utils.bind(function (left, top) {
			this.clearDragTimer();
		}, this));

		var lastDown = 0;
		var eventParams = {passive: false};
		for(var i = 0; i < inputMethods.length; i++){
			(utils.bind(function(input){

				gantt.event(obj, input.down, utils.bind(function (e) {
					if(!input.accessor(e)){
						return;
					}

					if (typeof e.button !== 'undefined' && e.button !== 0) {
						return;
					}

					if(config.preventDefault && config.selector && domHelpers.closest(e.target, config.selector)){
						e.preventDefault();
					}

					if (gantt.config.touch && e.timeStamp && e.timeStamp - lastDown < 300) {
						return;
					}

					this._settings.original_target = copyDomEvent(e);

					this._settings.original_element_sizes = {
						...domHelpers.getRelativeEventPosition(e, domHelpers.getClosestSizedElement(obj)), 
						width: e.target.offsetWidth,
						height: e.target.offsetHeight
					};

					if (gantt.config.touch) {
						let actualTarget = e.target; // for ShadowDOM (GS-2409)
						this.clearDragTimer();
						this._drag_start_timer = setTimeout(utils.bind(function () {
							if(gantt.getState().lightbox){
								return;
							}
							this.dragStart(obj, e, input, actualTarget);
						}, this), gantt.config.touch_drag);
					}
					else {
						this.dragStart(obj, e, input);
					}
				}, this), eventParams);
				var eventElement = document.body;
				gantt.event(eventElement, input.up, utils.bind(function (e) {
					if(!input.accessor(e)){
						return;
					}
					this.clearDragTimer();
				}, this), eventParams);

			}, this))(inputMethods[i]);
		}
	}

	DnD.prototype = {
		traceDragEvents: function (domElement, inputMethod) {
			var mousemove = utils.bind(function (e) {
				return this.dragMove(domElement, e, inputMethod.accessor);
			}, this);
			utils.bind(function (e) {
				return this.dragScroll(domElement, e);
			}, this);

			var limited_mousemove = utils.bind(function (e) {
				if (this.config.started && utils.defined(this.config.updates_per_second)) {
					if (!timeout(this, this.config.updates_per_second))
						return;
				}

				var dndActive = mousemove(e);

				if (dndActive) {
					try{
						if (e && e.preventDefault && e.cancelable){//e.cancelable condition - because navigator.vibrate is blocked by Chrome
							e.preventDefault();//Cancel default action on DND
						} //Cancel default action on DND
					}catch (e){
						// just suppress the exception, nothing needed to be done here
					}

					//e.cancelBubble = true;
				}

				return dndActive;
			}, this);
			var eventElement = domHelpers.getRootNode(gantt.$root);
			var mousemoveContainer = this.config.mousemoveContainer || domHelpers.getRootNode(gantt.$root);

			var eventParams = {passive: false};
			var mouseup = utils.bind(function (e) {
				gantt.eventRemove(mousemoveContainer, inputMethod.move, limited_mousemove);
				gantt.eventRemove(eventElement, inputMethod.up, mouseup, eventParams);
				return this.dragEnd(domElement);
			}, this);

			gantt.event(mousemoveContainer, inputMethod.move, limited_mousemove, eventParams);
			gantt.event(eventElement, inputMethod.up, mouseup, eventParams);
		},
		checkPositionChange: function (pos) {
			var diff_x = pos.x - this.config.pos.x;
			var diff_y = pos.y - this.config.pos.y;
			var distance = Math.sqrt(Math.pow(Math.abs(diff_x), 2) + Math.pow(Math.abs(diff_y), 2));

			if (distance > this.config.sensitivity) {
				return true;
			} else {
				return false;
			}
		},
		initDnDMarker: function () {
			// create dnd placeholder and put it in dom
			var marker = this.config.marker = document.createElement("div");
			marker.className = "gantt_drag_marker";
			// GS-1333: don't show any message when we resize grid columns
			marker.innerHTML = "";
			document.body.appendChild(marker);
		},
		backupEventTarget: function (domEvent, getEvent, actualTarget) {
			if (!gantt.config.touch) {
				return;
			}

			// keep original event target in DOM in order to keep dnd on touchmove event
			var e = getEvent(domEvent);

			// GS-2409. We need the target element when Gantt is inside ShadowDOM
			let el = e.target || e.srcElement;
			if (el.shadowRoot && actualTarget) {
				el = actualTarget;
			}

			var copy = el.cloneNode(true);
			//this.config.target.target = copy;
			this.config.original_target = copyDomEvent(e);
			this.config.original_target.target = copy;
			this.config.backup_element = el;
			el.parentNode.appendChild(copy);

			el.style.display = "none";
			const mousemoveContainer = this.config.mousemoveContainer || gantt.$root || document.body;
			mousemoveContainer.appendChild(el);
		},
		getInputMethods: function () {
			// bind actions to browser events
			var inputMethods = [];

			inputMethods.push({
				"move": "mousemove",
				"down": "mousedown",
				"up": "mouseup",
				"accessor": function (e) {
					return e;
				}
			});

			if (gantt.config.touch) {
				const touchEventsSupported = !gantt.env.isIE || !!global.maxTouchPoints;

				if(touchEventsSupported){
					inputMethods.push({
						"move": "touchmove",
						"down": "touchstart",
						"up": "touchend",
						"accessor": function (ev) {
							if (ev.touches && ev.touches.length > 1) return null;
							if (ev.touches[0])
								return {
									target: document.elementFromPoint(ev.touches[0].clientX, ev.touches[0].clientY),
									pageX: ev.touches[0].pageX,
									pageY: ev.touches[0].pageY,
									clientX: ev.touches[0].clientX,
									clientY: ev.touches[0].clientY
								};
							else
								return ev;
						}
					});
				}else if(global.PointerEvent){
					inputMethods.push({
						"move": "pointermove",
						"down": "pointerdown",
						"up": "pointerup",
						"accessor": function (ev) {
							if (ev.pointerType == "mouse") return null;
							return ev;
						}
					});

				}
			}

			return inputMethods;
		},
		clearDragTimer: function () {
			if (this._drag_start_timer) {
				clearTimeout(this._drag_start_timer);
				this._drag_start_timer = null;
			}
		},
		dragStart: function (obj, e, inputMethod, actualTarget) {
			if (this.config && this.config.started) {
				return;
			}
			this.config = {
				obj: obj,
				marker: null,
				started: false,
				pos: this.getPosition(e),
				sensitivity: 4
			};
			if (this._settings)
				utils.mixin(this.config, this._settings, true);


			this.traceDragEvents(obj, inputMethod);

			gantt._prevent_touch_scroll = true;
			// GS-2664. Prevent grid scroll only if we can reorder rows
			if (e.target.closest(".gantt_row") && !gantt.config.order_branch){
				gantt._prevent_touch_scroll = false;
			}
			document.body.classList.add("gantt_noselect");

			if (gantt.config.touch) {
				this.dragMove(obj, e, inputMethod.accessor, actualTarget);
			}

		},
		dragMove: function (obj, e, getEvent, actualTarget) {
			var source = getEvent(e);
			if (!source) return false;

			if (!this.config.marker && !this.config.started) {
				var pos = this.getPosition(source);

				if (gantt.config.touch || this.checkPositionChange(pos)) {
					// real drag starts here,
					// when user moves mouse at first time after onmousedown
					this.config.started = true;
					this.config.ignore = false;
					gantt._touch_drag = true;
					if (this.callEvent("onBeforeDragStart", [obj, this.config.original_target]) === false) {
						this.config.ignore = true;
						return false;
					}
					this.backupEventTarget(e, getEvent, actualTarget);
					this.initDnDMarker();
					gantt._touch_feedback();
					this.callEvent("onAfterDragStart", [obj, this.config.original_target]);
				} else {
					this.config.ignore = true;
				}
			}

			if (!this.config.ignore) {
				// GS-1279 Gantt crashes on Mobile Firefox after starting to create a link and moving finger outisde the page.
				if (e.targetTouches && !source.target) return;
				const rootNode = gantt.$root.getRootNode();
				const insideShadowDOM = rootNode instanceof ShadowRoot;
				if (insideShadowDOM){
					// second condition is necessary for tests and running Gantt from HTML page
					if (actualTarget && Object.getOwnPropertyDescriptor(source, "target")){
						source.target = actualTarget;
					} else if (rootNode.elementFromPoint && e.targetTouches){
						const touch = e.targetTouches[0];
						source.target = rootNode.elementFromPoint(touch.clientX, touch.clientY);
					}
				};
				source.pos = this.getPosition(source);
				this.config.marker.style.left = source.pos.x + "px";
				this.config.marker.style.top = source.pos.y + "px";
				// GS-1348. The width of the placeholder row shouldn't be larger than the grid width
				const maxWidth = obj.parentNode.offsetWidth;
				this.config.marker.style.maxWidth = maxWidth + "px";
				this.config.marker.style.overflow = "hidden";

				this.callEvent("onDragMove", [obj, source, actualTarget]);
				return true;
			}
			return false;
		},

		dragEnd: function (obj) {
			var target = this.config.backup_element;
			if (target && target.parentNode) {
				target.parentNode.removeChild(target);
			}
			gantt._prevent_touch_scroll = false;
			if (this.config.marker) {
				this.config.marker.parentNode.removeChild(this.config.marker);
				this.config.marker = null;

				this.callEvent("onDragEnd", []);
			}
			this.config.started = false;
			gantt._touch_drag = false;
			document.body.classList.remove("gantt_noselect");
		},

		getPosition: function (e) {
			var x = 0, y = 0;
			if (e.pageX || e.pageY) {
				x = e.pageX;
				y = e.pageY;
			} else if (e.clientX || e.clientY) {
				x = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
				y = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
			}
			return {x: x, y: y};
		}
	};

	return DnD;
};
