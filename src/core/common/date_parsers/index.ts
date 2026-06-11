// Each format string is compiled once into a list of instructions; the returned
// closure walks that list to format or parse a date. The instructions are plain
// functions, so the formatting and parsing stay CSP-safe (no `new Function`).

type DateToStrToken = string | ((date: Date) => string | number);
type DateSetter = (set: Array<string | number>, value: string) => void;

const resolveFormatToken = (token: string, utc: boolean, gantt: any): ((date: Date) => string | number) | null => {
	switch (token) {
		case "%d": return (date) => utc ? gantt.date.to_fixed(date.getUTCDate()) : gantt.date.to_fixed(date.getDate());
		case "%m": return (date) => utc ? gantt.date.to_fixed(date.getUTCMonth() + 1) : gantt.date.to_fixed(date.getMonth() + 1);
		case "%j": return (date) => utc ? date.getUTCDate() : date.getDate();
		case "%n": return (date) => utc ? date.getUTCMonth() + 1 : date.getMonth() + 1;
		case "%y": return (date) => utc ? gantt.date.to_fixed(date.getUTCFullYear() % 100) : gantt.date.to_fixed(date.getFullYear() % 100);
		case "%Y": return (date) => utc ? date.getUTCFullYear() : date.getFullYear();
		case "%D": return (date) => utc ? gantt.locale.date.day_short[date.getUTCDay()] : gantt.locale.date.day_short[date.getDay()];
		case "%l": return (date) => utc ? gantt.locale.date.day_full[date.getUTCDay()] : gantt.locale.date.day_full[date.getDay()];
		case "%M": return (date) => utc ? gantt.locale.date.month_short[date.getUTCMonth()] : gantt.locale.date.month_short[date.getMonth()];
		case "%F": return (date) => utc ? gantt.locale.date.month_full[date.getUTCMonth()] : gantt.locale.date.month_full[date.getMonth()];
		case "%h": return (date) => utc ? gantt.date.to_fixed((date.getUTCHours() + 11) % 12 + 1) : gantt.date.to_fixed((date.getHours() + 11) % 12 + 1);
		case "%g": return (date) => utc ? (date.getUTCHours() + 11) % 12 + 1 : (date.getHours() + 11) % 12 + 1;
		case "%G": return (date) => utc ? date.getUTCHours() : date.getHours();
		case "%H": return (date) => utc ? gantt.date.to_fixed(date.getUTCHours()) : gantt.date.to_fixed(date.getHours());
		case "%i": return (date) => utc ? gantt.date.to_fixed(date.getUTCMinutes()) : gantt.date.to_fixed(date.getMinutes());
		case "%a": return (date) => utc ? (date.getUTCHours() > 11 ? "pm" : "am") : (date.getHours() > 11 ? "pm" : "am");
		case "%A": return (date) => utc ? (date.getUTCHours() > 11 ? "PM" : "AM") : (date.getHours() > 11 ? "PM" : "AM");
		case "%s": return (date) => utc ? gantt.date.to_fixed(date.getUTCSeconds()) : gantt.date.to_fixed(date.getSeconds());
		case "%W": return (date) => utc ? gantt.date.to_fixed(gantt.date.getUTCISOWeek(date)) : gantt.date.to_fixed(gantt.date.getISOWeek(date));
		case "%w": return (date) => gantt.date.to_fixed(gantt.date.getWeek(date));
		default: return null;
	}
};

const compileFormat = (format: string, utc: boolean, gantt: any): DateToStrToken[] => {
	const tokens: DateToStrToken[] = [];
	const tokenRegex = /%[a-zA-Z]/g;
	let lastIndex = 0;
	let match: RegExpExecArray | null;
	while ((match = tokenRegex.exec(format)) !== null) {
		if (match.index > lastIndex) {
			tokens.push(format.slice(lastIndex, match.index));
		}
		const handler = resolveFormatToken(match[0], utc, gantt);
		tokens.push(handler || match[0]);
		lastIndex = tokenRegex.lastIndex;
	}
	if (lastIndex < format.length) {
		tokens.push(format.slice(lastIndex));
	}
	return tokens;
};

const dateToStr = (format: string, utc: boolean, gantt: any) => {
	const tokens = compileFormat(format, utc, gantt);
	return (date: Date): string => {
		let result = "";
		for (let i = 0; i < tokens.length; i++) {
			const token = tokens[i];
			result += typeof token === "string" ? token : token(date);
		}
		return result;
	};
};

const resolveDateSetter = (token: string, gantt: any): DateSetter | null => {
	switch (token) {
		case "%j":
		case "%d":
			return (set, value) => { set[2] = (value as unknown as number) || 1; };
		case "%n":
		case "%m":
			return (set, value) => { set[1] = ((value as unknown as number) || 1) - 1; };
		case "%y":
			return (set, value) => { set[0] = (value as unknown as number) * 1 + ((value as unknown as number) > 50 ? 1900 : 2000); };
		case "%g":
		case "%G":
		case "%h":
		case "%H":
			return (set, value) => { set[3] = (value as unknown as number) || 0; };
		case "%i":
			return (set, value) => { set[4] = (value as unknown as number) || 0; };
		case "%Y":
			return (set, value) => { set[0] = (value as unknown as number) || 0; };
		case "%a":
		case "%A":
			return (set, value) => { set[3] = (set[3] as number) % 12 + ((value || "").toLowerCase() === "am" ? 0 : 12); };
		case "%s":
			return (set, value) => { set[5] = value || 0; };
		case "%M":
			return (set, value) => { set[1] = gantt.locale.date.month_short_hash[value] || 0; };
		case "%F":
			return (set, value) => { set[1] = gantt.locale.date.month_full_hash[value] || 0; };
		default:
			return null;
	}
};

const strToDate = (format: string, utc: boolean, gantt: any) => {
	const mask = format.match(/%[a-zA-Z]/g) || [];
	const setters = mask.map((token) => resolveDateSetter(token, gantt));
	return (date: string): Date => {
		const set: Array<string | number> = [0, 0, 1, 0, 0, 0];
		const temp = date.match(/[a-zA-Z]+|[0-9]+/g) || [];
		for (let i = 0; i < setters.length; i++) {
			const setter = setters[i];
			if (setter) {
				setter(set, temp[i]);
			}
		}
		if (utc) {
			return new Date(Date.UTC(
				set[0] as number,
				set[1] as number,
				set[2] as number,
				set[3] as number,
				set[4] as number,
				set[5] as number
			));
		}
		return new Date(
			set[0] as number,
			set[1] as number,
			set[2] as number,
			set[3] as number,
			set[4] as number,
			set[5] as number
		);
	};
};

const dateParsers = {
	date_to_str: dateToStr,
	str_to_date: strToDate
};

export default dateParsers;
