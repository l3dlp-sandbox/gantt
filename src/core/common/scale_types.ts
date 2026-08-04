// Shared scale-domain types — the single source of truth for the time-unit vocabulary,
// the user-facing scale configuration shape, and the scale projection descriptor.
//
// This is a dependency-free leaf module (no runtime/gantt imports). It is consumed by the
// host type surface (`gantt_types.ts`, `config.ts`) AND by the gantt-independent timeline
// scale engine (`ui/timeline/scale_manager`), so every part of the library describes scales
// with one set of types instead of redeclaring its own. When you need a scale / unit /
// projection type, import it from here (or from `gantt_types`, which re-exports the public
// names) rather than introducing a new local definition.

/**
 * Built-in scale / duration time units.
 * Available values: "minute", "hour", "day", "week", "quarter", "month", "year".
 */
export type TimeUnit = "minute" | "hour" | "day" | "week" | "quarter" | "month" | "year";

/**
 * A scale unit: a built-in {@link TimeUnit} or a custom unit name registered on the date
 * helper (`<unit>_start` + `add_<unit>`). `(string & {})` keeps autocomplete for the
 * built-ins while still admitting any custom string.
 */
export type ScaleUnit = TimeUnit | (string & {});

/**
 * Scale projection descriptor. Lets day/week scales size task bars by working hours or a
 * specified hours range instead of full 24-hour days. Carried through the scale layout
 * unchanged and interpreted by the host.
 */
export interface ScaleProjectionMode {
	source: "taskCalendar" | "fixedHours";
	hours?: string[] | number[];
}

/**
 * User-facing scale configuration — one entry of `gantt.config.scales`. All fields are
 * optional; scale normalization applies the defaults (unit → "day", step → 1,
 * format → "%d %M").
 */
export interface Scale {
	/** The scale unit. Default "day". */
	unit?: ScaleUnit;

	/** Units per column. Default 1. */
	step?: number;

	/** Keeps the scale label visible while the cell is larger than the viewport. */
	sticky?: boolean;

	/** Label format — a strftime-style pattern or a formatter function. */
	format?: string | ((date: Date) => any);

	/** Label format. Alias of `format`, kept for backward compatibility. */
	template?: string | ((date: Date) => any);

	/** Label format (resolved after `format`/`template`). */
	date?: string | ((date: Date) => any);

	/** Per-cell CSS class — a fixed class or a function of the cell date. */
	css?: string | ((date: Date) => any);

	/**
	 * Fixed pixel width per cell, regardless of the number of rendered columns. Applies to
	 * the bottom-most scale only; null/undefined means flexible width.
	 */
	column_width?: number | null;

	/** Projection mode for proportional (working-hours) bar sizing. */
	projection?: ScaleProjectionMode | null;
}
