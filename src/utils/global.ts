/* eslint-disable no-restricted-globals */
declare const global: typeof globalThis;

let globalScope: typeof globalThis;
if (typeof window !== "undefined") {
	globalScope = window as typeof globalThis;
} else {
	globalScope = global;
}
/* eslint-enable no-restricted-globals */

export default globalScope;
