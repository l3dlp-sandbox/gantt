import domEventScope from "../../ui/utils/dom_event_scope";
import * as utils from "../../../utils/utils";
import resourceStoreMixin from "../resource_store_mixin";
import Grid from "./grid";
import __extends from "../../../utils/extends";

const GridRL = (function (_super) {

	function GridRL(parent, config, factory, gantt) {
		return _super.apply(this, arguments) || this;
	}

	__extends(GridRL, _super);

	utils.mixin(GridRL.prototype, {
		init: function(container) {
			const gantt = this.$gantt;
			const gridAriaAttr = gantt._waiAria.gridAttrString();
			const gridDataAriaAttr = gantt._waiAria.gridDataAttrString();
			const _ganttConfig = this.$getConfig();
			_ganttConfig.row_height = this._getResourceConfig().row_height ? this._getResourceConfig().row_height : gantt.resource_table.row_height ;
			let reorderColumns = _ganttConfig.reorder_grid_columns || false;
			if (this.$config.reorder_grid_columns !== undefined) {
				reorderColumns = this.$config.reorder_grid_columns;
			}

			if(this.$config.bind === undefined){
				this.$config.bind = "temp_resource_assignment_store";
				this.$config.name = "resource_grid_lightbox";
				this.$config.$id = "GridRL";
			}

			container.innerHTML = "<div class='gantt_grid' style='width:100%;' " + gridAriaAttr + "></div>";
			this.$grid = container.childNodes[0];

			this.$grid.innerHTML = "<div class='gantt_grid_scale' " +
				gantt._waiAria.gridScaleRowAttrString() + "></div><div class='gantt_grid_data' " + gridDataAriaAttr + "></div>";

			this.$grid_scale = this.$grid.childNodes[0];
			this.$grid_data = this.$grid.childNodes[1];

			let attr = _ganttConfig[this.$config.bind + "_attribute"];
			if (!attr && this.$config.bind) {
				attr = "data-" + this.$config.bind + "-id";
			}
			this.$config.item_attribute = attr || null;

			if (!this.$config.layers) {
				const layers = this._createLayerConfig();
				this.$config.layers = layers;
			}

			const domEvents = domEventScope();
			this.event = domEvents.attach;
			this.eventRemove = domEvents.detach;
			this._eventRemoveAll = domEvents.detachAll;
			this._createDomEventScope = domEvents.extend;

			this._addLayers(this.$gantt);

			this._initEvents();

			this.callEvent("onReady", []);

		},
		getColumn: function (name) {
			const index = this.getColumnIndex(name);
			if (index === null) {
				return null;
			}
			const columns = this._getResourceColumns();
			return columns[index] || null;
		},
		getColumnIndex: function (name, excludeHidden) {
			const columns = this._getResourceColumns();
			let hiddenIndexShift = 0;

			for (let i = 0; i < columns.length; i++) {
				// GS-1257. If the cell is hidden, the target column index should be correct
				if (excludeHidden && columns[i].hide){
					hiddenIndexShift++;
				}
				if (columns[i].name == name) {
					return i - hiddenIndexShift;
				}
			}
			return null;
		},
		getGridColumns: function(){
			const columns = this._getResourceColumns();
			const visibleColumns = [];
	
			for (let i = 0; i < columns.length; i++) {
				if (!columns[i].hide)
					visibleColumns.push(columns[i]);
			}
	
			return visibleColumns;
		},
		_createLayerConfig: function () {
			const gantt = this.$gantt;
			const self = this;
			const layers = [
				{
					renderer: gantt.$ui.layers.gridLine(),
					container: this.$grid_data,
					filter: [function () {
						return self.isVisible();
					}]
				},
				{
					renderer: gantt.$ui.layers.gridTaskRowResizer(),
					container: this.$grid_data,
					append: true,
					filter: [function () {
						return gantt.config.resize_rows;
					}]
				}
			];
			return layers;
		},
		_renderGridHeader: function () {
			const gantt = this.$gantt;
			const config = this._getResourceConfig();
			const locale = this.$gantt.locale;
			const templates = this.$getTemplates();
	
			let columns = this._getResourceColumns();
			if (config.rtl) {
				columns = columns.reverse();
			}
			if(!config.scale_height){
				config.scale_height = gantt.resource_table.scale_height;
			}
			let cells = [];
			let width = 0,
				labels = locale.labels;
	
				let lineHeigth = config.scale_height - 1;
	
			for (let i = 0; i < columns.length; i++) {
				let last = i == columns.length - 1;
				let col = columns[i];
	
				// ensure columns have non-empty names
				if (!col.name) {
					col.name = gantt.uid() + "";
				}
	
				let colWidth = col.width * 1;
	
				let gridWidth = this._getGridWidth();
				if (last && gridWidth > width + colWidth)
					col.width = colWidth = gridWidth - width;
				width += colWidth;
				let sort = (gantt._sort && col.name == gantt._sort.name) ? (`<div data-column-id="${col.name}" class="gantt_sort gantt_${gantt._sort.direction}"></div>`) : "";
				let cssClass = ["gantt_grid_head_cell",
					("gantt_grid_head_" + col.name),
					(last ? "gantt_last_cell" : ""),
					templates.grid_header_class ? templates.grid_header_class(col.name, col) : ""].join(" ");
	
				let style = "width:" + (colWidth - (last ? 1 : 0)) + "px;";
				let label = (col.label || labels["column_" + col.name] || labels[col.name]);
				label = label || "";
	
				const ariaAttrs = gantt._waiAria.gridScaleCellAttrString(col, label);
	
				const cell = "<div class='" + cssClass + "' style='" + style + "' " + ariaAttrs + 
					" data-column-id='" + col.name + "' column_id='" + col.name + "'" +
					" data-column-name='" + col.name + "' data-column-index='" + i + "'" +
					">" + label + sort + "</div>";
				cells.push(cell);
			}
			this.$grid_scale.style.height = (config.scale_height) + "px";
			this.$grid_scale.style.lineHeight = lineHeigth + "px";
			this.$grid_scale.style.width = "inherit";
			this.$grid_scale.innerHTML = cells.join("");
		},
		isVisible: function () {
			if (this.$parent) {
				return !this.$parent.hidden;
			} else {
				return this.$grid.offsetWidth;
			}
		},
		_initEvents: function(){
		},
		_getResourceSection: function(){
			return gantt.getLightboxSection(this.$config.sectionName).section;
		},
		$getTemplates: function() {
			return this._getResourceSection().templates || {};
		},
		_getResourceConfig: function(){
			return this._getResourceSection().config || gantt.resource_table;
		},
		_getResourceColumns: function() {
			return this._getResourceSection().config?.columns || gantt.resource_table.columns;
		},
		destructor: function () {
			if (this._mouseDelegates) {
				this._mouseDelegates.destructor();
				this._mouseDelegates = null;
			}
			
			this._unbindStore();
			this.$grid = null;
			this.$grid_scale = null;
			this.$grid_data = null;
			this._eventRemoveAll();
			gantt.ext.inlineEditorsLightbox.destructor();
			this.callEvent("onDestroy", []);
			this.detachAllEvents();
		}
		
	}, true);

	utils.mixin(GridRL.prototype, resourceStoreMixin(GridRL), true);

	return GridRL;
})(Grid);

export default GridRL;