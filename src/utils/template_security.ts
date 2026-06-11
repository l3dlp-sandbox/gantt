/**
 * Template security helpers shared by the React, Angular and Vue wrappers.
 *
 * The wrappers intercept every template function (see each wrapper's template
 * interceptor) and pass string results through `applyTemplatePolicy` so that
 * HTML returned from templates is safe by default. The plain JavaScript Gantt
 * keeps its raw-HTML behavior unchanged; these helpers are only wired into the
 * framework wrappers.
 *
 * `basicSanitizeHTML` is a small, dependency-free allowlist sanitizer. It is not
 * a complete general-purpose sanitizer: it supports simple formatting, classes,
 * a limited set of inline styles and `img[src]`. For arbitrary rich HTML use the
 * custom-sanitizer policy (e.g. DOMPurify) or return framework nodes instead.
 */

export type HtmlTemplatePolicy =
	| "basic-sanitize"
	| "escape"
	| "unsafe-html"
	| {
			mode: "sanitize";
			sanitize: (html: string) => string;
	};

var RAW_HTML_MARKER = "_dhxAllowRawHTML";
var BUILTIN_TEMPLATE_MARKER = "_dhxGanttBuiltinTemplate";

/**
 * Escape the five HTML-significant characters so a string renders as text.
 */
export function escapeHTML(value: string): string {
	return String(value == null ? "" : value)
		.replace(/&/g, "&amp;")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;")
		.replace(/"/g, "&quot;")
		.replace(/'/g, "&#39;");
}

/**
 * Mark a template function so the wrappers skip sanitization for it and render
 * its raw string result. The caller becomes responsible for sanitizing any
 * user-provided data inside that template (use `escapeHTML` for it).
 */
export function allowRawHTML<T>(fn: T): T {
	if (typeof fn === "function") {
		(fn as any)[RAW_HTML_MARKER] = true;
	}
	return fn;
}

export function isRawHTMLAllowed(fn: any): boolean {
	return !!(fn && fn[RAW_HTML_MARKER]);
}

/**
 * Tag a built-in template that emits trusted HTML so wrappers never escape it
 * (it is sanitized instead under the "escape" policy). Pure metadata: it does
 * not change how the plain JavaScript Gantt renders the template.
 */
export function markBuiltinTemplate<T>(fn: T): T {
	if (typeof fn === "function") {
		(fn as any)[BUILTIN_TEMPLATE_MARKER] = true;
	}
	return fn;
}

export function isBuiltinTemplate(fn: any): boolean {
	return !!(fn && fn[BUILTIN_TEMPLATE_MARKER]);
}

// --- basic-sanitize allowlists -------------------------------------------------

// element tag names are compared upper-cased (Element.tagName is upper-case for HTML)
const ALLOWED_ELEMENTS: { [tag: string]: boolean } = {
	B: true, STRONG: true, I: true, EM: true, U: true, S: true,
	SPAN: true, DIV: true, P: true, BR: true, SMALL: true, MARK: true, IMG: true
};

// disallowed elements whose entire subtree is dropped (their text is code/markup,
// not display content). Everything else disallowed is unwrapped, keeping its text.
const DROP_SUBTREE_ELEMENTS: { [tag: string]: boolean } = {
	SCRIPT: true, STYLE: true, IFRAME: true, OBJECT: true, EMBED: true,
	TEMPLATE: true, NOSCRIPT: true, SVG: true, MATH: true, LINK: true,
	META: true, BASE: true, TITLE: true, HEAD: true, FRAME: true, FRAMESET: true,
	APPLET: true, FORM: true, INPUT: true, BUTTON: true, TEXTAREA: true,
	SELECT: true, OPTION: true, AUDIO: true, VIDEO: true, SOURCE: true, TRACK: true
};

const GLOBAL_ATTRIBUTES: { [name: string]: boolean } = {
	"class": true, "title": true, "aria-label": true, "style": true
};

const IMG_ATTRIBUTES: { [name: string]: boolean } = {
	"src": true, "alt": true, "title": true, "width": true, "height": true,
	"class": true, "style": true, "aria-label": true
};

const ALLOWED_STYLE_PROPERTIES: { [prop: string]: boolean } = {
	"color": true, "background": true, "background-color": true,
	"border-color": true, "border-left-color": true, "border-right-color": true,
	"border-top-color": true, "border-bottom-color": true,
	"width": true, "height": true, "min-width": true, "max-width": true,
	"min-height": true, "max-height": true,
	"left": true, "right": true, "top": true, "bottom": true,
	"margin": true, "margin-left": true, "margin-right": true,
	"margin-top": true, "margin-bottom": true,
	"padding": true, "padding-left": true, "padding-right": true,
	"padding-top": true, "padding-bottom": true,
	"display": true, "position": true, "text-align": true, "font-weight": true,
	"font-style": true, "white-space": true, "overflow": true, "text-overflow": true
};

function isSafeCssValue(value: string): boolean {
	const normalized = value.trim().toLowerCase();
	if (normalized.indexOf("expression(") !== -1) { return false; }
	if (normalized.indexOf("url(") !== -1) { return false; }
	if (normalized.indexOf("@import") !== -1) { return false; }
	if (normalized.indexOf("javascript:") !== -1) { return false; }
	if (normalized.indexOf("<") !== -1 || normalized.indexOf(">") !== -1) { return false; }
	return /^[#(),.%\-\w\s]+$/.test(value);
}

function sanitizeStyleAttribute(styleValue: string): string {
	const declarations: string[] = [];
	const parts = String(styleValue).split(";");
	for (let i = 0; i < parts.length; i++) {
		const declaration = parts[i];
		const separatorIndex = declaration.indexOf(":");
		if (separatorIndex === -1) { continue; }
		const propertyName = declaration.slice(0, separatorIndex).trim().toLowerCase();
		const propertyValue = declaration.slice(separatorIndex + 1).trim();
		if (!ALLOWED_STYLE_PROPERTIES[propertyName]) { continue; }
		if (!isSafeCssValue(propertyValue)) { continue; }
		declarations.push(propertyName + ": " + propertyValue);
	}
	return declarations.join("; ");
}

function sanitizeClassAttribute(value: string): string {
	return String(value)
		.split(/\s+/)
		.filter(function (token) { return /^[A-Za-z0-9_-]+$/.test(token); })
		.join(" ");
}

function isAllowedDataAttribute(name: string): boolean {
	return /^data-[a-z0-9_-]+$/.test(name);
}

function sanitizeContentEditable(value: string): string | null {
	const normalized = String(value).trim().toLowerCase();
	if (normalized === "") { return "true"; }
	if (normalized === "true" || normalized === "false" || normalized === "plaintext-only") {
		return normalized;
	}
	return null;
}

function isAllowedDataImage(value: string): boolean {
	return /^data:image\/(?:png|jpeg|jpg|gif|webp);base64,[a-z0-9+/=\s]+$/i.test(value);
}

function sanitizeImageSource(sourceValue: string): string | null {
	const trimmed = String(sourceValue).trim();
	if (trimmed === "") { return null; }
	if (isAllowedDataImage(trimmed)) { return trimmed; }

	// strip whitespace/control chars before scheme checks (defeats "java\nscript:")
	const collapsed = trimmed.toLowerCase().replace(/[\s\x00-\x1f]/g, "");
	if (collapsed.indexOf("javascript:") === 0
		|| collapsed.indexOf("vbscript:") === 0
		|| collapsed.indexOf("data:") === 0) {
		return null;
	}

	try {

		// eslint-disable-next-line no-restricted-globals
		const origin = (typeof window !== "undefined" && window.location && window.location.origin)
		// eslint-disable-next-line no-restricted-globals
			? window.location.origin
			: "http://localhost";
		const url = new URL(trimmed, origin);
		if (url.protocol === "https:" || url.protocol === "http:" || url.protocol === "blob:") {
			return trimmed;
		}
		return null;
		// eslint-disable-next-line
	} catch (e) {
		return null;
	}
}

function scrubAttributes(element: Element, tag: string): void {
	const allowed = tag === "IMG" ? IMG_ATTRIBUTES : GLOBAL_ATTRIBUTES;
	const attributes = Array.prototype.slice.call(element.attributes) as Attr[];
	for (let i = 0; i < attributes.length; i++) {
		const attr = attributes[i];
		const name = attr.name.toLowerCase();

		if (name.indexOf("on") === 0) { element.removeAttribute(attr.name); continue; }
		if (isAllowedDataAttribute(name)) { continue; }
		if (name === "contenteditable") {
			const safeContentEditable = sanitizeContentEditable(attr.value);
			if (safeContentEditable) { element.setAttribute("contenteditable", safeContentEditable); }
			else { element.removeAttribute(attr.name); }
			continue;
		}
		if (!allowed[name]) { element.removeAttribute(attr.name); continue; }

		if (name === "style") {
			const safeStyle = sanitizeStyleAttribute(attr.value);
			if (safeStyle) { element.setAttribute("style", safeStyle); }
			else { element.removeAttribute(attr.name); }
			continue;
		}
		if (name === "class") {
			const safeClass = sanitizeClassAttribute(attr.value);
			if (safeClass) { element.setAttribute("class", safeClass); }
			else { element.removeAttribute(attr.name); }
			continue;
		}
		if (tag === "IMG" && name === "src") {
			const safeSrc = sanitizeImageSource(attr.value);
			if (safeSrc) { element.setAttribute("src", safeSrc); }
			else { element.removeAttribute(attr.name); }
			continue;
		}
		// remaining allowed attributes (title/alt/aria-label/width/height) are plain
		// text; the parser already neutralized any markup in their values.
	}
}

function unwrapElement(element: Element): void {
	const parent = element.parentNode;
	if (!parent) { return; }
	while (element.firstChild) {
		parent.insertBefore(element.firstChild, element);
	}
	parent.removeChild(element);
}

function sanitizeChildren(node: Node): void {
	const children = Array.prototype.slice.call(node.childNodes) as Node[];
	for (let i = 0; i < children.length; i++) {
		const child = children[i];
		if (child.nodeType === 1) {
			sanitizeElement(child as Element);
		} else if (child.nodeType === 8) {
			// drop comments (can hide conditional/IE comment scripts)
			if (child.parentNode) { child.parentNode.removeChild(child); }
		}
		// text nodes (nodeType 3) are kept as-is
	}
}

function sanitizeElement(element: Element): void {
	const tag = element.tagName.toUpperCase();

	if (DROP_SUBTREE_ELEMENTS[tag]) {
		if (element.parentNode) { element.parentNode.removeChild(element); }
		return;
	}

	if (!ALLOWED_ELEMENTS[tag]) {
		// keep the visible text content but drop the unknown wrapper element
		sanitizeChildren(element);
		unwrapElement(element);
		return;
	}

	scrubAttributes(element, tag);
	sanitizeChildren(element);
}

let sanitizeCache: { [input: string]: string } = {};
let sanitizeCacheKeys: string[] = [];
const SANITIZE_CACHE_LIMIT = 5000;

/**
 * Allowlist HTML sanitizer. Parses the input inertly (in a `<template>` whose
 * content document does not run scripts or load resources), strips disallowed
 * elements, attributes, event handlers, styles and image sources, and serializes
 * the cleaned markup back to a string. Falls back to `escapeHTML` when no DOM is
 * available (server-side rendering).
 */
export function basicSanitizeHTML(html: string): string {
	const input = String(html == null ? "" : html);

	// fast path: nothing that can open a tag
	if (input.indexOf("<") === -1) {
		return input;
	}

	const cached = sanitizeCache[input];
	if (cached !== undefined) {
		return cached;
	}

	let result: string;
	if (typeof document === "undefined" || typeof document.createElement !== "function") {
		result = escapeHTML(input);
	} else {
		const template = document.createElement("template");
		if (template && typeof (template as any).content !== "undefined") {
			template.innerHTML = input;
			sanitizeChildren(template.content);
			result = template.innerHTML;
		} else {
			// very old browsers without <template> support: render as text
			result = escapeHTML(input);
		}
	}

	if (sanitizeCacheKeys.length >= SANITIZE_CACHE_LIMIT) {
		sanitizeCache = {};
		sanitizeCacheKeys = [];
	}
	sanitizeCache[input] = result;
	sanitizeCacheKeys.push(input);
	return result;
}

/**
 * Decide how a template's string result should be rendered, given the active
 * policy and the original template function (used to read per-template and
 * built-in markers). Non-string results (framework nodes) pass through
 * unchanged.
 */
export function applyTemplatePolicy(
	result: unknown,
	policy: HtmlTemplatePolicy | undefined,
	templateFn?: unknown
): unknown {
	if (typeof result !== "string") {
		return result;
	}

	if (isRawHTMLAllowed(templateFn)) {
		return result;
	}

	const resolved: HtmlTemplatePolicy = policy || "basic-sanitize";

	if (resolved === "unsafe-html") {
		return result;
	}

	if (typeof resolved === "object" && resolved && resolved.mode === "sanitize"
		&& typeof resolved.sanitize === "function") {
		return resolved.sanitize(result);
	}

	if (resolved === "escape") {
		// never escape built-in HTML templates (it would render their markup as
		// visible text); sanitize them instead so the grid keeps rendering.
		return isBuiltinTemplate(templateFn) ? basicSanitizeHTML(result) : escapeHTML(result);
	}

	// "basic-sanitize" (default) and any unrecognized value
	return basicSanitizeHTML(result);
}
