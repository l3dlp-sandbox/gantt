if (import.meta.hot) {
	let deleteTimeout;

	import.meta.hot.on('file-deleted', (data) => {
		if (deleteTimeout) {
			clearTimeout(deleteTimeout);
		}
		deleteTimeout = setTimeout(() => {
			showFileDeletedNotification(data.path);
			deleteTimeout = null;
		}, 100); // Adjust debounce time as needed
	});
}

function showFileDeletedNotification(deletedFilePath) {
	let notification = document.getElementById('file-deleted-notification');
	if (!notification) {
		notification = document.createElement('div');
		notification.id = 'file-deleted-notification';
		notification.style.position = 'fixed';
		notification.style.bottom = '20px';
		notification.style.right = '20px';
		notification.style.padding = '15px';
		notification.style.backgroundColor = '#ff4d4f';
		notification.style.color = '#fff';
		notification.style.fontFamily = 'Arial, sans-serif';
		notification.style.fontSize = '14px';
		notification.style.borderRadius = '4px';
		notification.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.15)';
		notification.style.zIndex = '10000';
		document.body.appendChild(notification);
	}
	notification.textContent = `Codebase file deleted, rebuild have started, the page will be reloaded soon`;

	// Automatically remove the notification after a delay
	setTimeout(() => {
		if (notification && notification.parentNode) {
			notification.parentNode.removeChild(notification);
		}
	}, 900000); // Adjust the display duration as needed
}