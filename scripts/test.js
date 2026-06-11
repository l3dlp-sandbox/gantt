// Smoke test runner: loads every built sample headless and fails on any page
// error or console error. This is the repository's test suite — there is no
// screenshot/e2e regression layer.
//
// Usage:
//   node scripts/test.js [folder] [--threads N] [--no-build]
//
// Samples are served by scripts/server.js against the built codebase, so a
// build runs first unless --no-build is passed (CI builds in a separate step).
import path from "path";
import { fileURLToPath } from "url";
import { execSync } from "child_process";
import { glob } from "glob";
import chalk from "chalk";
import puppeteer from "puppeteer";

import startServer from "./server.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");

const args = process.argv.slice(2);
const options = {
	noBuild: args.includes("--no-build"),
	threads: 4,
	filter: ""
};
const threadsIndex = args.indexOf("--threads");
if (threadsIndex !== -1) {
	options.threads = parseInt(args[threadsIndex + 1], 10) || 4;
}
options.filter = args.find((a, i) => !a.startsWith("--") && (threadsIndex === -1 || i !== threadsIndex + 1)) || "";

function toPosix(p) {
	return p.replace(/\\/g, "/");
}

function relSample(file) {
	return toPosix(path.relative(path.join(rootDir, "samples"), file));
}

async function collectFiles() {
	const base = toPosix(path.join(rootDir, "samples"));
	const pattern = options.filter ? `${base}/${options.filter}/**/*.html` : `${base}/**/*.html`;
	return (await glob(pattern)).sort();
}

async function runSmoke(browser, state) {
	while (state.index < state.files.length) {
		const file = state.files[state.index];
		state.index += 1;

		const errors = [];
		const page = await browser.newPage();
		await page.setViewport({ width: 1280, height: 900 });
		page.on("pageerror", (e) => errors.push("pageerror: " + e.message));
		page.on("console", (msg) => {
			if (msg.type() === "error") {
				errors.push("console.error: " + msg.text());
			}
		});
		try {
			await page.goto("http://127.0.0.1:9200/samples/" + relSample(file), { waitUntil: "networkidle2", timeout: 30000 });
			await new Promise(r => setTimeout(r, 250));
		} catch (e) {
			errors.push("navigation: " + e.message);
		}
		await page.close();

		if (errors.length) {
			state.status = false;
			state.failed.push(file);
			console.log(chalk.red("[smoke] " + relSample(file)));
			errors.forEach(e => console.log(chalk.red("   " + e)));
		} else {
			console.log("[smoke] " + relSample(file));
		}
	}
}

async function main() {
	const start = new Date();

	if (!options.noBuild) {
		console.log("building codebase...");
		execSync("npm run build", { cwd: rootDir, stdio: "inherit", shell: true });
	}

	const files = await collectFiles();
	if (!files.length) {
		console.log(chalk.red("No sample files matched."));
		process.exit(1);
	}

	const launchArgs = process.env.CI ? ["--no-sandbox", "--disable-setuid-sandbox"] : [];
	// generous protocol timeout: parallel screenshot-heavy runs can stall
	// individual CDP calls well beyond the default
	const browser = await puppeteer.launch({ args: launchArgs, protocolTimeout: 600000 });

	const server = startServer();

	console.log(`starting ${options.threads} thread(s), ${files.length} sample(s)`);
	const state = { files, failed: [], status: true, index: 0 };
	const workers = [];
	for (let i = 0; i < options.threads; i++) {
		workers.push(runSmoke(browser, state));
	}
	await Promise.all(workers).catch((e) => {
		state.status = false;
		console.log(chalk.red(e.toString()));
	});

	await browser.close();
	server.close();

	const time = Math.round((new Date() - start) / 1000);
	console.log(`Done ${files.length} samples in ${time}s`);

	if (state.status) {
		console.log(chalk.green("All is fine!"));
		process.exit(0);
	} else {
		console.log(chalk.red("Some problems detected:"));
		console.log(chalk.red(" - " + state.failed.map(f => relSample(f)).join("\n - ")));
		process.exit(1);
	}
}

main();
