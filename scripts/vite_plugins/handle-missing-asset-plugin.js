import path from 'path';
import fs from 'fs';

const buildFolder = "codebase";
export default function handleMissingAssetsPlugin() {
	return {
		name: 'handle-missing-assets-plugin',
		configureServer(server) {
			const fullOutDir = path.resolve(server.config.root);
			server.middlewares.use(async (req, res, next) => {
				let url = req.url;

				// Only handle JS and CSS files
				if (url.includes(buildFolder) && (url.endsWith('.js') || url.endsWith('.css'))) {
					// Remove query parameters if any
					url = url.split('?')[0];

					// Remove leading '/' from url to make it relative
					const relativeUrl = url.startsWith('/') ? url.slice(1) : url;

					const filePath = path.join(fullOutDir, relativeUrl);

					try {
						// Check if the file exists
						await fs.promises.access(filePath, fs.constants.F_OK);
						// File exists, proceed as normal
						next();
					} catch (err) {
						// File does not exist, return custom response
						if (url.endsWith('.js')) {
							// Respond with custom JS
							res.setHeader('Content-Type', 'application/javascript');
							res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
							res.end(getBuildInProgressScript(url));
							console.log('\x1b[41m%s\x1b[0m', `404 - ${url}`);
						} else if (url.endsWith('.css')) {
							// Respond with custom CSS
							res.setHeader('Content-Type', 'text/css');
							res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
							res.end(getBuildInProgressStyles());
							console.log('\x1b[41m%s\x1b[0m', `404 - ${url}`);
						} else {
							// For other file types, proceed as normal
							next();
						}
					}
				} else {
					// Not a JS or CSS file, proceed as normal
					next();
				}
			});
		},
	};
}

// Function to return custom JS code
function getBuildInProgressScript(url) {
	return `
	  // Build in progress placeholder script
	  (function() {
		function showMessage() {
		  var existingMessage = document.getElementById('build-in-progress-message');
		  if (!existingMessage) {
			var messageDiv = document.createElement('div');
			messageDiv.id = 'build-in-progress-message';
			messageDiv.style.position = 'fixed';
			messageDiv.style.top = '20px';
			messageDiv.style.left = '50%';
			messageDiv.style.transform = 'translateX(-50%)';
			messageDiv.style.padding = '10px 20px';
			messageDiv.style.backgroundColor = '#ffec3d';
			messageDiv.style.color = '#000';
			messageDiv.style.fontFamily = 'Arial, sans-serif';
			messageDiv.style.fontSize = '16px';
			messageDiv.style.border = '1px solid #d48806';
			messageDiv.style.borderRadius = '4px';
			messageDiv.style.zIndex = '10000';
			messageDiv.textContent = '404 - ${url}. Page will auto reload after the build is completed';
			document.body.appendChild(messageDiv);
		  }
		}
  
		if (document.readyState === 'complete' || document.readyState === 'interactive') {
		  // DOM is ready
		  showMessage();
		} else {
		  // Wait for DOMContentLoaded event
		  document.addEventListener('DOMContentLoaded', showMessage);
		}
	  })();
	`;
}

// Function to return custom CSS code
function getBuildInProgressStyles() {
	return `
    /* Build in progress placeholder styles */
    body::before {
      content: 'Build is in progress. Please wait...';
      position: fixed;
      top: 20px;
      left: 50%;
      transform: translateX(-50%);
      padding: 10px 20px;
      background-color: #ffec3d;
      color: #000;
      font-family: Arial, sans-serif;
      font-size: 16px;
      border: 1px solid #d48806;
      border-radius: 4px;
      z-index: 10000;
    }
  `;
}