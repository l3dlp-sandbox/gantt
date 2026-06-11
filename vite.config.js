// vite.config.js
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';

import watchOutDirPlugin from './scripts/vite_plugins/watch-outdir-plugin.js';
import injectDeleteHandlerPlugin from './scripts/vite_plugins/inject-delete-handler-plugin.js';
import handleMissingAssetsPlugin from './scripts/vite_plugins/handle-missing-asset-plugin.js';
import preventHotUpdateFromCodebasePlugin from './scripts/vite_plugins/prevent-hot-update-from-codebase.js';
import disablePublicCachePlugin from './scripts/vite_plugins/disable-public-cache-plugin.js';

import pkg from './package.json';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

let production = true;

const defineValues = {
	VERSION: `"${pkg.version}"`,
	LICENSE: `"mit"`,
	PRODUCTION: production,
	GPL: false
};

// copyright header
const bannerContent = "/** @license\n\n" + fs.readFileSync("./scripts/assets/banner.txt")
	.toString("utf8")
	.replace(/{{version}}/g, pkg.version) + "\n*/\n\n";

// Prepend the license banner to the final JS output. Vite's library mode no
// longer honors rollupOptions.output.banner, so we inject it in generateBundle
// (after minification) and shift the source map mappings to stay aligned.
function licenseBannerPlugin() {
	const offset = ';'.repeat((bannerContent.match(/\n/g) || []).length);
	return {
		name: 'license-banner',
		generateBundle(_options, bundle) {
			const bannered = new Set();
			for (const [name, file] of Object.entries(bundle)) {
				if (file.type === 'chunk') {
					file.code = bannerContent + file.code;
					bannered.add(name);
				}
			}
			// The map is emitted as a separate asset; shift its mappings down by the
			// banner's line count so the source map stays aligned with the code.
			for (const [name, file] of Object.entries(bundle)) {
				if (file.type === 'asset' && name.endsWith('.map') && bannered.has(name.slice(0, -4))) {
					const map = JSON.parse(file.source.toString());
					map.mappings = offset + map.mappings;
					file.source = JSON.stringify(map);
				}
			}
		}
	};
}

export default defineConfig(({ command }) => {
	const isDevserver = command === 'serve';
	const isWatch = process.argv.includes('--watch');
	if (production && (isDevserver || isWatch)) {
		production = false;
	}

	return {
		root: __dirname,
		plugins: [
			licenseBannerPlugin(),
			isDevserver && watchOutDirPlugin("codebase"),
			isDevserver && injectDeleteHandlerPlugin(),
			isDevserver && handleMissingAssetsPlugin("codebase"),
			isDevserver && preventHotUpdateFromCodebasePlugin("codebase"),
			isDevserver && disablePublicCachePlugin("codebase")
		].filter(Boolean),
		define: defineValues,
		build: {
			minify: production,
			sourcemap: true,
			outDir: isDevserver ? ".tmp_devserver" : "codebase",
			lib: {
				entry: "src/dhtmlxgantt.ts",
				name: "dhtmlxgantt",
				formats: ['es', 'umd'],
				fileName: (format) => {
					const suffix = format !== "umd" ? `.${format}` : "";
					return `dhtmlxgantt${suffix}.js`;
				}
			},
			rollupOptions: {
				output: {
					name: "dhtmlxgantt",
					assetFileNames: (assetInfo) => {
						if (assetInfo.name.endsWith('.css')) {
							return 'dhtmlxgantt.css';
						}
						return '[name].[ext]';
					},
					chunkFileNames: `[name].js`
				}
			},
			commonjsOptions: {
				transformMixedEsModules: true
			}
		},

		server: {
			open: "/samples/",
			proxy: {
				"/gantt/backend": {
					target: 'http://127.0.0.1:9200'
				}
			}
		},

		assetsInclude: ['**/*.woff', '**/*.woff2']
	};
});
