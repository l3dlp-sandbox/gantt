export default function extendPrototype(d: any, b: any): void {
	for (const p in b) {
		if (Object.prototype.hasOwnProperty.call(b, p)) {
			d[p] = b[p];
		}
	}

	function __(this: any): void {
		this.constructor = d;
	}

	d.prototype = b === null ? Object.create(b) : ((__.prototype = b.prototype), new (__ as any)());
}
