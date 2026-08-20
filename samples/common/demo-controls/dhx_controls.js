/* =============================================================================
 * DHX Controls -- shared UI utilities for DHTMLX Gantt demos
 *
 * Provides: window.DHX
 *
 *   DHX.dd       -- dropdown open / close / toggle / closeAll
 *   DHX.toggle   -- toggle-switch UI helper
 *   DHX.zoom     -- segmented zoom control synced to gantt.ext.zoom
 *   DHX.search   -- recursive task-name search helper
 *   DHX.tip      -- themed replacement for the browser's title tooltip
 *
 * Usage: load this file BEFORE the demo's own <script> block.
 * ============================================================================= */

;(function (global) {
    "use strict";

    // -----------------------------------------------------------------------------
    // Dropdown system
    // -----------------------------------------------------------------------------
    // All .dhx_dd containers register the same "open" class toggle.
    // Click-outside is wired once via DHX.dd.initClickOutside().

    var dd = {

        /* Open a single dropdown by element id. Closes the previously open one. */
        open: function (id) {
            var el = document.getElementById(id);
            if (!el) return;
            el.classList.add("open");
        },

        /* Close a single dropdown by element id. */
        close: function (id) {
            var el = document.getElementById(id);
            if (el) el.classList.remove("open");
        },

        /* Close every open .dhx_dd on the page. */
        closeAll: function () {
            var open = document.querySelectorAll(".dhx_dd.open");
            [].forEach.call(open, function (el) { el.classList.remove("open"); });
        },

        /* Toggle one dropdown; always close all others first. */
        toggle: function (id) {
            var dd = document.getElementById(id);
            if (!dd) return;
            var willOpen = !dd.classList.contains("open");
            this.closeAll();
            if (willOpen) dd.classList.add("open");
        },

        /* Wire up a single document-level click handler that closes all dropdowns
           when the user clicks outside any .dhx_dd element.
           Call once during page init. */
        initClickOutside: function (extraCleanup) {
            document.addEventListener("click", function (e) {
                if (!e.target.closest(".dhx_dd")) {
                    dd.closeAll();
                    if (typeof extraCleanup === "function") extraCleanup();
                }
            });
        }
    };


    // -----------------------------------------------------------------------------
    // Toggle switch
    // -----------------------------------------------------------------------------
    // Manages the two visual classes on a .dhx_toggle / .dhx_toggle__track pair.

    var toggle = {

        /* Update the visual state of a toggle switch.
         *
         * @param {string|Element} trackEl  The .dhx_toggle__track element (or its id)
         * @param {string|Element} wrapEl   The .dhx_toggle wrapper element (or its id)
         * @param {boolean}        on       Desired state
         */
        set: function (trackEl, wrapEl, on) {
            if (typeof trackEl === "string") trackEl = document.getElementById(trackEl);
            if (typeof wrapEl  === "string") wrapEl  = document.getElementById(wrapEl);
            if (trackEl) trackEl.classList.toggle("on",     !!on);
            if (wrapEl)  wrapEl.classList.toggle("active",  !!on);
        },

        /* Convenience: find the track inside wrapEl and update both at once.
         *
         * @param {string|Element} wrapEl  The .dhx_toggle wrapper (or its id)
         * @param {boolean}        on
         */
        setWrap: function (wrapEl, on) {
            if (typeof wrapEl === "string") wrapEl = document.getElementById(wrapEl);
            if (!wrapEl) return;
            var track = wrapEl.querySelector(".dhx_toggle__track");
            this.set(track, wrapEl, on);
        },

        /* Convenience: given the id of an inner element (e.g. the checkbox input),
         * walk up to its enclosing .dhx_toggle wrapper and update the switch.
         *
         * @param {string}  innerId  Id of an element inside the .dhx_toggle
         * @param {boolean} on
         */
        setById: function (innerId, on) {
            var el = document.getElementById(innerId);
            if (!el) return;
            this.setWrap(el.closest(".dhx_toggle"), on);
        }
    };


    // -----------------------------------------------------------------------------
    // Zoom control
    // -----------------------------------------------------------------------------
    // Keeps a segmented-control segment and an optional scale label in sync
    // with gantt.ext.zoom.

    var zoom = {
        _gantt:   null,
        _names:   [],   // ordered zoom level names, e.g. ["day","week","month",...]
        _segId:   null, // id of the .dhx_seg container with [data-zoom] buttons
        _scaleId: null, // id of an element to update with "Day scale" text

        /* Call once before init.
         *
         * @param {object} gantt    The dhtmlxGantt instance
         * @param {Array}  names    Zoom-level names in order (index == level index)
         * @param {string} segId    Element id of the segmented control container
         * @param {string} scaleId  Optional element id to receive "X scale" text
         */
        init: function (gantt, names, segId, scaleId) {
            this._gantt   = gantt;
            this._names   = names   || [];
            this._segId   = segId   || null;
            this._scaleId = scaleId || null;
        },

        /* Reflect the current zoom level in the segmented control + scale label. */
        syncUI: function () {
            var g    = this._gantt;
            var idx  = g.ext.zoom.getCurrentLevel();
            var name = this._names[idx] || this._names[0] || "";

            if (this._segId) {
                var seg = document.getElementById(this._segId);
                if (seg) {
                    [].forEach.call(seg.querySelectorAll(".dhx_btn[data-zoom]"), function (b) {
                        b.classList.toggle("active", b.getAttribute("data-zoom") === name);
                    });
                }
            }

            if (this._scaleId) {
                var label = document.getElementById(this._scaleId);
                if (label && name) {
                    label.textContent = name.charAt(0).toUpperCase() + name.slice(1) + " scale";
                }
            }
        },

        /* Set a named zoom level and update the UI. */
        set: function (name) {
            this._gantt.ext.zoom.setLevel(name);
            this.syncUI();
        },

        /* Zoom in (dir > 0) or out (dir < 0) by one step, then sync UI. */
        step: function (dir) {
            if (dir > 0) this._gantt.ext.zoom.zoomIn();
            else         this._gantt.ext.zoom.zoomOut();
            this.syncUI();
        }
    };


    // -----------------------------------------------------------------------------
    // Search / filter
    // -----------------------------------------------------------------------------

    var search = {

        /* Returns true if task.text (or any descendant's text) contains value.
         * Used inside gantt.attachEvent("onBeforeTaskDisplay") to filter the chart.
         *
         * @param {object} task   Gantt task object
         * @param {string} value  Search needle (case-insensitive)
         * @param {object} gantt  The dhtmlxGantt instance
         */
        match: function (task, value, gantt) {
            if (!value) return true;
            var needle  = value.toLowerCase();
            var matched = task.text.toLowerCase().indexOf(needle) > -1;
            gantt.eachTask(function (child) {
                if (!matched && search.match(child, value, gantt)) matched = true;
            }, task.id);
            return matched;
        }
    };


    // -----------------------------------------------------------------------------
    // Number picker
    // -----------------------------------------------------------------------------
    // Dropdown-backed numeric input: pick a preset value, sync the menu checkmark,
    // and flag validation errors.

    var numberPicker = {
        pick: function (inputId, value, menuSelector) {
            var input = document.getElementById(inputId);
            if (input) input.value = value;
            this.sync(menuSelector, value);
            dd.closeAll();
        },

        sync: function (menuSelector, value) {
            if (!menuSelector) return;
            var items = document.querySelectorAll(menuSelector + " [data-value]");
            [].forEach.call(items, function (item) {
                var active = Number(item.getAttribute("data-value")) === Number(value);
                item.classList.toggle("active", active);
                item.classList.toggle("checked", active);
            });
        },

        markError: function (wrapId, hasError) {
            var wrap = document.getElementById(wrapId);
            if (wrap) wrap.classList.toggle("error", !!hasError);
        }
    };

    var ui = {
        setText: function (id, text) {
            var el = document.getElementById(id);
            if (el) el.textContent = text == null ? "" : String(text);
        },

        setActiveByAttribute: function (selector, attr, value, activeClass) {
            activeClass = activeClass || "checked";
            [].forEach.call(document.querySelectorAll(selector), function (el) {
                el.classList.toggle(activeClass, el.getAttribute(attr) === String(value));
            });
        },

        /* Uppercase 1-2 letter initials from a person's name, e.g. "John Doe" -> "JD".
         * Used to fill avatar chips across the resource demos. */
        initials: function (name) {
            return String(name).split(/\s+/).map(function (part) {
                return part.charAt(0);
            }).join("").slice(0, 2).toUpperCase();
        },

        /* Escape a string for safe insertion as HTML text content.
         * null / undefined become an empty string. */
        escape: function (text) {
            return String(text == null ? "" : text).replace(/[&<>"']/g, function (ch) {
                return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[ch];
            });
        },

        metricHtml: function (parts) {
            return parts.map(function (part) {
                var text = ui.escape(part.text);
                if (part.strong) return "<strong>" + text + "</strong>";
                return text;
            }).join("");
        }
    };

    // -----------------------------------------------------------------------------
    // Tooltip
    // -----------------------------------------------------------------------------
    // Draws a themed .dhx_tip in place of the tooltip a browser gives a title
    // attribute. Demos keep writing plain titles: the title moves to data-dhx-tip
    // on first hover, and into aria-label to keep the accessible name.

    var tip = {
        el: null,
        timer: null,
        delay: 400,

        /* Wire the document-level handlers. Safe to call more than once. */
        init: function () {
            if (tip.el) return;
            tip.el = document.createElement("div");
            tip.el.className = "dhx_tip";
            document.body.appendChild(tip.el);

            document.addEventListener("mouseover", function (e) {
                var host = e.target.closest ? e.target.closest("[title], [data-dhx-tip]") : null;
                if (!host) return;

                var title = host.getAttribute("title");
                if (title) {
                    host.setAttribute("data-dhx-tip", title);
                    if (!host.getAttribute("aria-label")) host.setAttribute("aria-label", title);
                    host.removeAttribute("title");
                }

                var text = host.getAttribute("data-dhx-tip");
                if (text) tip.show(host, text);
            });

            document.addEventListener("mouseout", function (e) {
                var host = e.target.closest ? e.target.closest("[data-dhx-tip]") : null;
                if (host) tip.hide();
            });

            // Captured: the gantt grid and timeline scroll in their own panes.
            document.addEventListener("scroll", tip.hide, true);
            document.addEventListener("mousedown", tip.hide, true);
        },

        /* Show the tip under host after the hover delay, clamped to the viewport. */
        show: function (host, text) {
            clearTimeout(tip.timer);
            tip.timer = setTimeout(function () {
                tip.el.textContent = text;
                tip.el.classList.add("on");

                var at = host.getBoundingClientRect();
                var box = tip.el.getBoundingClientRect();
                var left = at.left + (at.width - box.width) / 2;
                var top = at.bottom + 6;

                if (left < 4) left = 4;
                if (left + box.width > innerWidth - 4) left = innerWidth - box.width - 4;
                if (top + box.height > innerHeight - 4) top = at.top - box.height - 6;

                tip.el.style.left = Math.round(left) + "px";
                tip.el.style.top = Math.round(top) + "px";
            }, tip.delay);
        },

        hide: function () {
            clearTimeout(tip.timer);
            if (tip.el) tip.el.classList.remove("on");
        }
    };

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", tip.init);
    } else {
        tip.init();
    }

    global.DHX = { dd: dd, toggle: toggle, zoom: zoom, search: search, numberPicker: numberPicker, ui: ui, tip: tip };

}(window));
