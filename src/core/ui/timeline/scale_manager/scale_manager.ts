// Gantt-independent timeline scale engine. Ported from the legacy ScaleHelper with
// gantt couplings replaced by injected dependencies (IDateHelper, ColumnFilter).
// normalize(): raw configs -> sorted descriptors. calculate(): descriptors -> layouts.

import {
	IDateHelper,
	ScaleConfig,
	ScaleDescriptor,
	ScaleLayout,
	LayoutOptions,
	ColumnFilter,
	ScaleUnit
} from "./types";
import { getSum, adjustSize, splitSize, setSumWidth } from "./size_distribution";

class ScaleManager {
	private dateHelper: IDateHelper;

	constructor(dateHelper: IDateHelper) {
		if (!dateHelper)
			throw new Error("ScaleManager requires a date helper");
		this.dateHelper = dateHelper;
	}

	// --- Stage 1: normalization -------------------------------------------------

	/** Raw configs -> validated, format-compiled, sorted descriptors (coarsest first). */
	normalize(scales: ScaleConfig[]): ScaleDescriptor[] {
		var descriptors = scales.map((scale) => this.normalizeScale(scale));
		this.sortScales(descriptors);
		return descriptors;
	}

	/** Normalize a single raw config into a descriptor (no sorting / index assignment). */
	normalizeScale(scale: ScaleConfig): ScaleDescriptor {
		var format: any = scale.format;
		if (!format) {
			format = scale.template || scale.date || "%d %M";
		}

		if (typeof format === "string") {
			if (!this.dateHelper.date_to_str)
				throw new Error("ScaleManager: date helper has no date_to_str to compile a string format");
			format = this.dateHelper.date_to_str(format);
		}

		return {
			unit: (scale.unit || "day") as ScaleUnit,
			step: scale.step || 1,
			format: format,
			css: scale.css as any,
			projection: scale.projection || null,
			column_width: scale.column_width || null
		};
	}

	/** Sort descriptors by column duration (coarsest first) and assign `index`. Mutates input. */
	sortScales(scales: ScaleDescriptor[]): void {
		var dateHelper = this.dateHelper;
		function cellSize(unit: string, step: number): number {
			var d = new Date(1970, 0, 1);
			return (dateHelper.add(d, step, unit) as any) - (d as any);
		}

		scales.sort(function (a, b) {
			if (cellSize(a.unit, a.step) < cellSize(b.unit, b.step)) {
				return 1;
			} else if (cellSize(a.unit, a.step) > cellSize(b.unit, b.step)) {
				return -1;
			} else {
				return 0;
			}
		});

		for (var i = 0; i < scales.length; i++) {
			scales[i].index = i;
		}
	}

	// --- Stage 2: layout --------------------------------------------------------

	/** Descriptors + range/size options -> one layout per scale (primary last). */
	calculate(scales: ScaleDescriptor[], options: LayoutOptions): ScaleLayout[] {
		var minDate = options.minDate;
		var maxDate = options.maxDate;
		var container_width = options.containerWidth;
		var scale_height = options.scaleHeight;
		var min_coll_width = options.minColumnWidth;
		var rtl = options.rtl;
		var filter = options.filter;

		var heights = splitSize(scale_height, scales.length);
		var full_width = container_width;

		var configs: ScaleLayout[] = [];
		for (let i = scales.length - 1; i >= 0; i--) {
			var main_scale = (i == scales.length - 1);
			var cfg = this.initScaleConfig(scales[i], minDate, maxDate);
			if (main_scale) {
				this.processIgnores(cfg, filter);
			}

			if (main_scale && cfg.column_width) {
				full_width = cfg.column_width * (cfg.display_count || cfg.count);
			}

			this.initColSizes(cfg, min_coll_width, full_width, heights[i]);
			this.limitVisibleRange(cfg);

			if (main_scale) {
				full_width = cfg.full_width;
			}

			configs.unshift(cfg);
		}

		for (let i = 0; i < configs.length - 1; i++) {
			this.alineScaleColumns(configs[configs.length - 1], configs[i]);
		}
		for (let i = 0; i < configs.length; i++) {
			if (rtl) {
				this.reverseScale(configs[i]);
			}
			this.setPosSettings(configs[i]);
		}
		return configs;
	}

	private initScaleConfig(descriptor: ScaleDescriptor, min_date: Date, max_date: Date): ScaleLayout {
		var cfg: ScaleLayout = {
			count: 0,
			col_width: 0,
			full_width: 0,
			height: 0,
			width: [],
			left: [],
			trace_x: [],
			trace_indexes: {},
			min_date: new Date(min_date),
			max_date: new Date(max_date),
			unit: descriptor.unit,
			step: descriptor.step,
			format: descriptor.format,
			css: descriptor.css,
			projection: descriptor.projection,
			column_width: descriptor.column_width,
			index: descriptor.index,
			trace_x_ascending: []
		};

		this.eachColumn(descriptor.unit, descriptor.step, min_date, max_date, function (date: Date) {
			cfg.count++;
			cfg.trace_x.push(new Date(date));
			cfg.trace_indexes[date.valueOf()] = cfg.trace_x.length - 1;
		});

		cfg.trace_x_ascending = cfg.trace_x.slice();
		return cfg;
	}

	private eachColumn(unit: string, step: number, min_date: Date, max_date: Date, callback: (date: Date) => void): void {
		var dateHelper = this.dateHelper;
		var start: Date = new Date(min_date),
			end: Date = new Date(max_date);
		if (dateHelper[unit + "_start"]) {
			start = dateHelper[unit + "_start"](start);
		}

		var curr = new Date(start);
		if (+curr >= +end) {
			end = dateHelper.add(curr, step, unit);
		}
		while (+curr < +end) {
			callback.call(this, new Date(curr));
			var tzOffset = curr.getTimezoneOffset();
			curr = dateHelper.add(curr, step, unit);
			if (dateHelper.correctDSTChange) {
				curr = dateHelper.correctDSTChange(curr, tzOffset, step, unit);
			}
			if (dateHelper[unit + "_start"])
				curr = dateHelper[unit + "_start"](curr);
		}
	}

	/**
	 * Mark primary-scale columns ignored using the injected filter (false => ignore).
	 * Without a filter, no columns are ignored (display_count == count).
	 */
	private processIgnores(config: ScaleLayout, filter?: ColumnFilter): void {
		config.ignore_x = {};
		if (!filter) {
			config.display_count = config.count;
			return;
		}

		var display_count = 0;
		for (var i = 0; i < config.trace_x.length; i++) {
			var keep = filter(config.trace_x[i], config as any);
			if (!keep) {
				config.ignore_x[config.trace_x[i].valueOf()] = true;
				config.ignored_colls = true;
			} else {
				display_count++;
			}
		}
		config.display_count = display_count;
	}

	private initColSizes(config: ScaleLayout, min_col_width: number | undefined, full_width: number, line_height: number): void {
		var dateHelper = this.dateHelper;
		var cont_width = full_width;

		config.height = line_height;

		var column_count = config.display_count === undefined ? config.count : config.display_count;

		if (!column_count)
			column_count = 1;

		const fixedMode = !isNaN((config.column_width as any) * 1) && (config.column_width as any) * 1 > 0;
		if (fixedMode) {
			const baseCellWidth = (config.column_width as any) * 1;
			config.col_width = baseCellWidth;
			cont_width = baseCellWidth * column_count;
		} else {
			config.col_width = Math.floor(cont_width / column_count);
			if (min_col_width) {
				if (config.col_width < min_col_width) {
					config.col_width = min_col_width;
					cont_width = config.col_width * column_count;
				}
			}
		}

		config.width = [];
		var ignores = config.ignore_x || {};
		for (var i = 0; i < config.trace_x.length; i++) {
			if ((ignores as any)[config.trace_x[i].valueOf()] || (config.display_count == config.count)) {
				if (fixedMode) {
					config.width[i] = config.col_width;
				} else {
					config.width[i] = 0;
				}
			} else {
				// width of month columns should be proportional to month duration
				var width = 1;
				if (config.unit == "month") {
					var days = Math.round(((dateHelper.add(config.trace_x[i], config.step, config.unit) as any) - (config.trace_x[i] as any)) / (1000 * 60 * 60 * 24));
					width = days;
				}
				config.width[i] = width;
			}
		}

		if (!fixedMode) {
			adjustSize(cont_width - getSum(config.width)/* 1 width per column from the code above */, config.width);
		}

		config.full_width = getSum(config.width);
	}

	private limitVisibleRange(cfg: ScaleLayout): void {
		var dateHelper = this.dateHelper;
		var dates = cfg.trace_x;

		var left = 0, right = cfg.width.length - 1;
		var diff = 0;
		if (+dates[0] < +cfg.min_date && left != right) {
			let width = Math.floor(cfg.width[0] * (((dates[1] as any) - (cfg.min_date as any)) / ((dates[1] as any) - (dates[0] as any))));
			diff += cfg.width[0] - width;
			cfg.width[0] = width;

			dates[0] = new Date(cfg.min_date);
		}

		var last = dates.length - 1;
		var lastDate = dates[last];
		var outDate = dateHelper.add(lastDate, cfg.step, cfg.unit);
		if (+outDate > +cfg.max_date && last > 0) {
			let width = cfg.width[last] - Math.floor(cfg.width[last] * (((outDate as any) - (cfg.max_date as any)) / ((outDate as any) - (lastDate as any))));
			diff += cfg.width[last] - width;
			cfg.width[last] = width;
		}

		if (diff) {
			var full = getSum(cfg.width);
			var shared = 0;
			for (var i = 0; i < cfg.width.length; i++) {
				var share = Math.floor(diff * (cfg.width[i] / full));
				cfg.width[i] += share;
				shared += share;
			}
			adjustSize(diff - shared, cfg.width);
		}
	}

	private iterateScales(lower_scale: ScaleLayout, upper_scale: ScaleLayout, from: number | undefined, to: number | undefined, callback: Function): void {
		var upper_dates = upper_scale.trace_x;
		var lower_dates = lower_scale.trace_x;

		var prev = from || 0;
		var end = to || (lower_dates.length - 1);
		var prevUpper = 0;

		for (var up = 1; up < upper_dates.length; up++) {
			var target_index = (lower_scale.trace_indexes[+upper_dates[up]]);
			if (target_index !== undefined && target_index <= end) {
				if (callback) {
					callback.apply(this, [prevUpper, up, prev, target_index]);
				}
				prev = target_index;
				prevUpper = up;
				continue;
			}
		}
	}

	private alineScaleColumns(lower_scale: ScaleLayout, upper_scale: ScaleLayout, from?: number, to?: number): void {
		this.iterateScales(lower_scale, upper_scale, from, to, function (this: ScaleManager, upper_start: number, upper_end: number, lower_start: number, lower_end: number) {
			var targetWidth = getSum(lower_scale.width, lower_start, lower_end - 1);
			var actualWidth = getSum(upper_scale.width, upper_start, upper_end - 1);
			if (actualWidth != targetWidth) {
				setSumWidth(targetWidth, upper_scale, upper_start, upper_end - 1);
			}
		});
	}

	private setPosSettings(config: ScaleLayout): void {
		for (var i = 0, len = config.trace_x.length; i < len; i++) {
			config.left.push((config.width[i - 1] || 0) + (config.left[i - 1] || 0));
		}
	}

	private reverseScale(scale: ScaleLayout): ScaleLayout {
		scale.width = scale.width.reverse();
		scale.trace_x = scale.trace_x.reverse();

		var indexes = scale.trace_indexes;
		scale.trace_indexes = {};
		scale.trace_index_transition = {};
		scale.rtl = true;
		for (var i = 0; i < scale.trace_x.length; i++) {
			scale.trace_indexes[scale.trace_x[i].valueOf()] = i;
			scale.trace_index_transition[(indexes as any)[scale.trace_x[i].valueOf()]] = i;
		}
		return scale;
	}
}

export default ScaleManager;
export { ScaleManager };
