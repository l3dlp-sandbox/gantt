// Types for the gantt-independent timeline Scales module.
// The module performs pure layout math; all date arithmetic and host-specific
// behavior (work-time rules, templates) are injected through these interfaces.
//
// The scale-domain vocabulary (time units, the raw scale config, the projection
// descriptor) is shared with the rest of the library via `core/common/scale_types.ts`
// — this module does NOT redeclare those. The types defined *here* are the ones
// specific to the engine: its injected date dependency (`IDateHelper`), the normalized
// descriptor and the computed layout it produces, plus the layout request shape.

import type { ScaleUnit, ScaleProjectionMode, Scale } from "../../../common/scale_types";

// Spec-facing names for the shared scale-domain types. Single source of truth lives in
// core/common/scale_types.ts (and is re-exported publicly from gantt_types.ts). These are
// aliases of the shared definitions, not separate declarations, so the engine and the rest
// of the app stay in sync.
export type { TimeUnit } from "../../../common/scale_types";
export type { ScaleUnit, ScaleProjectionMode };
/** Raw, user-facing scale config (one entry of `gantt.config.scales`). Alias of {@link Scale}. */
export type ScaleConfig = Scale;
/** @deprecated Spec name for {@link ScaleProjectionMode}; kept as an alias. */
export type Projection = ScaleProjectionMode;

/**
 * Injected date-arithmetic dependency. The module never touches Date math directly.
 * A host (e.g. gantt) adapts its own date helper to this interface; gantt's public
 * `DateHelpers` is the concrete implementation, bound to the engine in `scales.ts`.
 */
export interface IDateHelper {
	/** Add `step` units to `date`, returning a NEW Date. */
	add(date: Date, step: number, unit: ScaleUnit): Date;

	/** Snap a date down to the start of its unit. Required for every used unit. */
	minute_start?(date: Date): Date;
	hour_start?(date: Date): Date;
	day_start?(date: Date): Date;
	week_start?(date: Date): Date;
	quarter_start?(date: Date): Date;
	month_start?(date: Date): Date;
	year_start?(date: Date): Date;

	// Index signature so `dateHelper[unit + "_start"]` and custom units type-check.
	[key: string]: any;

	/** Compile a strftime-style pattern into a formatter. Required only for string formats. */
	date_to_str?(pattern: string): (date: Date) => string;

	/**
	 * Optional DST correction applied after each `add` while iterating columns.
	 * `prevOffset` is the timezone offset (minutes) of the date before the add.
	 * If absent, no correction is performed.
	 */
	correctDSTChange?(date: Date, prevOffset: number, step: number, unit: ScaleUnit): Date;
}

/** Normalized scale (output of `normalize`, input to `calculate`). */
export interface ScaleDescriptor {
	unit: ScaleUnit;
	step: number;
	format: ((date: Date) => string) | null;
	css: string | ((date: Date) => string) | null;
	projection: ScaleProjectionMode | null;
	column_width: number | null;
	index?: number;
}

/**
 * Predicate marking a primary-scale column as ignored. Returns false to ignore.
 * Called once per primary column with the column start date and the descriptor.
 * The descriptor exposes unit/step so a host whose rule depends on every sub-step
 * of a multi-step column (e.g. {month, step:3}) can iterate them itself.
 */
export type ColumnFilter = (date: Date, descriptor: ScaleDescriptor) => boolean;

export interface LayoutOptions {
	minDate: Date;
	maxDate: Date;
	containerWidth: number;
	scaleHeight: number;
	minColumnWidth?: number;
	rtl?: boolean;
	filter?: ColumnFilter;
}

/**
 * One per scale. Field names match the host's established scale contract
 * (the gantt `_tasks` object) and must not be renamed.
 */
export interface ScaleLayout {
	unit: ScaleUnit;
	step: number;
	format: ((date: Date) => string) | null;
	css: string | ((date: Date) => string) | null;
	projection: ScaleProjectionMode | null;
	column_width: number | null;
	index?: number;

	count: number;
	display_count?: number;

	trace_x: Date[];
	trace_x_ascending: Date[];
	trace_indexes: Record<number, number>;
	trace_index_transition?: Record<number, number>;

	width: number[];
	left: number[];
	col_width: number;
	full_width: number;
	height: number;

	min_date: Date;
	max_date: Date;
	ignore_x?: Record<number, boolean>;
	ignored_colls?: boolean;
	rtl?: boolean;
}
