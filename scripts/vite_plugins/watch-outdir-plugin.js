import path from 'path';
import chokidar from 'chokidar';

/**
 * Vite plugin to watch the output directory and handle file changes.
 * - Triggers full page reloads when files are added or changed.
 * - Sends a custom event to the client when files are deleted.
 *
 * @param {string} outDir - The output directory to watch.
 * @returns {import('vite').Plugin} - The Vite plugin object.
 */

export default function watchOutDirPlugin(outDir) {
	return {
		name: 'watch-outdir-plugin',
		configureServer(server) {
			const fullOutDir = path.resolve(server.config.root, outDir);
			const watcher = chokidar.watch(fullOutDir, {
				ignoreInitial: true,
			});

			let reloadTimeout;

			// Watch for 'add', 'change', and 'unlink' (delete) events
			watcher
				.on('add', handleFileAddOrChange)
				.on('change', handleFileAddOrChange)
				.on('unlink', handleFileDelete);

			function handleFileAddOrChange(filePath) {
				// Debounce full page reloads on add or change
				debounceFullReload(server);
			}

			function handleFileDelete(filePath) {
				// Send a custom event to the client about the deleted file
				sendFileDeletedSignal(server, filePath);
			}

			function debounceFullReload(serverInstance) {
				if (reloadTimeout) {
					clearTimeout(reloadTimeout);
				}
				reloadTimeout = setTimeout(() => {
					console.log("DEVSERVER: Reloading page after rebuild");
					serverInstance.ws.send({
						type: 'full-reload',
					});
					reloadTimeout = null;
				}, 3000); // Adjust debounce time as needed
			}

			function sendFileDeletedSignal(serverInstance, deletedFilePath) {
				console.log("DEVSERVER: Sending rebuild start signal");
				serverInstance.ws.send({
					type: 'custom',
					event: 'file-deleted',
					data: {
						path: deletedFilePath,
					},
				});
			}
		},
	};
}