import global from "./global";

declare const PRODUCTION: string | undefined;

/* eslint-disable no-restricted-globals */
const isWindowAvailable = typeof window !== "undefined";
/* eslint-enable no-restricted-globals */

const nav: Pick<Navigator, "userAgent"> = typeof navigator !== "undefined" ? navigator : { userAgent: "" };

interface EnvFlags {
	isIE: boolean;
	isOpera: boolean;
	isChrome: boolean;
	isSafari: boolean;
	isFF: boolean;
	isIPad: boolean;
	isEdge: boolean;
	isNode: boolean;
	isSalesforce: boolean;
}

const env: EnvFlags = {
	isIE: isWindowAvailable && (nav.userAgent.indexOf("MSIE") >= 0 || nav.userAgent.indexOf("Trident") >= 0),
	isOpera: isWindowAvailable && (nav.userAgent.indexOf("Opera") >= 0 || nav.userAgent.indexOf("OPR") >= 0),
	isChrome: isWindowAvailable && (nav.userAgent.indexOf("Chrome") >= 0),
	isSafari: isWindowAvailable && (nav.userAgent.indexOf("Safari") >= 0 || nav.userAgent.indexOf("Konqueror") >= 0),
	isFF: isWindowAvailable && (nav.userAgent.indexOf("Firefox") >= 0),
	isIPad: isWindowAvailable && (nav.userAgent.search(/iPad/gi) >= 0),
	isEdge: isWindowAvailable && (nav.userAgent.indexOf("Edge") !== -1),
	isNode: (!isWindowAvailable || typeof navigator === "undefined" || (typeof PRODUCTION !== "undefined" && PRODUCTION === "test")),
	isSalesforce: isWindowAvailable && (!!(global as any)["Sfdc"] || !!(global as any)["$A"] || !!(global as any)["Aura"])
};

export default env;
