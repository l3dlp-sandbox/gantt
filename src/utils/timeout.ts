interface TimeoutHost {
	_on_timeout?: boolean;
	[key: string]: any;
}

function checkTimeout(host: TimeoutHost, updPerSecond?: number): boolean {
	if (!updPerSecond) {
		return true;
	}

	if (host._on_timeout) {
		return false;
	}

	const timeout = Math.ceil(1000 / updPerSecond);
	if (timeout < 2) return true;

	setTimeout(function() {
		delete host._on_timeout;
	}, timeout);

	host._on_timeout = true;
	return true;
}

export default checkTimeout;
