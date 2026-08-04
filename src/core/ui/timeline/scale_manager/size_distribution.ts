// Pure width-distribution helpers. Ported 1:1 from the legacy ScaleHelper so the
// rounding behavior is byte-for-byte identical. These operate on plain number[]
// arrays and have no knowledge of scales or dates.

import { ScaleLayout } from "./types";

/** Sum of `sizes[from..to]` inclusive. Defaults: from=0, to=last. */
export function getSum(sizes: number[], from?: number, to?: number): number {
	if (to === undefined)
		to = sizes.length - 1;
	if (from === undefined)
		from = 0;

	var summ = 0;
	for (var i = from; i <= to; i++)
		summ += sizes[i];

	return summ;
}

/**
 * Distribute `width` across `parts[from..to]` proportionally to current values
 * (or evenly when the current sum is 0). The rounding remainder lands on the last
 * element of the whole array. Mutates `parts`.
 */
export function adjustSize(width: number, parts: number[], from?: number, to?: number): void {
	if (!from)
		from = 0;
	if (to === undefined)
		to = parts.length - 1;

	var length = to - from + 1;

	var full = getSum(parts, from, to);

	for (var i = from; i <= to; i++) {
		var share = Math.floor(width * (full ? (parts[i] / full) : (1 / length)));

		full -= parts[i];
		width -= share;
		length--;

		parts[i] += share;
	}
	parts[parts.length - 1] += width;
}

/** Build an array of `count` widths summing to `width`. */
export function splitSize(width: number, count: number): number[] {
	var arr: number[] = [];
	for (var i = 0; i < count; i++) arr[i] = 0;

	adjustSize(width, arr);
	return arr;
}

/**
 * Resize the span `scale.width[from..to]` to `sum_width`, taking the difference
 * from (or giving it to) the columns after `to`. Updates `scale.full_width`.
 */
export function setSumWidth(sum_width: number, scale: ScaleLayout, from?: number, to?: number): void {
	var parts = scale.width;

	if (to === undefined)
		to = parts.length - 1;
	if (from === undefined)
		from = 0;
	var length = to - from + 1;

	if (from > parts.length - 1 || length <= 0 || to > parts.length - 1)
		return;

	var oldWidth = getSum(parts, from, to);

	var diff = sum_width - oldWidth;

	adjustSize(diff, parts, from, to);
	adjustSize(-diff, parts, to + 1);

	scale.full_width = getSum(parts);
}
