import fs from 'fs';

export default function preventReloadOnDeletePlugin() {
	return {
		name: 'prevent-reload-on-delete-plugin',
		handleHotUpdate({ file, modules, server, timestamp }) {
			console.log('hot-update-file: ' + file)

			if (file.includes('/sources/')) {
				server.ws.send({
					type: 'custom',
					event: 'file-deleted',
					data: {
						path: file,
					},
				});
				return [];
			}

			if (file.includes('/codebase/')) {
				return [];
				if (!fs.existsSync(file)) {
					// File was deleted in the public directory
					// Prevent page reload by returning an empty array
					return [];
				}
			}


		},
	};
}