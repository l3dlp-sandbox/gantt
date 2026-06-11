/**
 * Vite plugin to inject a script into HTML files during development.
 * The script listens for custom events and handles file deletions.
 *
 * @param {string} [scriptPath='/vite-inject.js'] - The path to the external script to inject.
 * @returns {import('vite').Plugin} - The Vite plugin object.
 */
export default function injectDeleteHandlerPlugin(scriptPath = '/_dev/vite_plugins/vite-inject.js') {
	return {
	  name: 'inject-delete-handler-plugin',
	  transformIndexHtml(html) {
		return {
		  html,
		  tags: [
			{
			  tag: 'script',
			  attrs: {
				type: 'module',
				src: scriptPath,
			  },
			  injectTo: 'body',
			},
		  ],
		};
	  },
	};
  }