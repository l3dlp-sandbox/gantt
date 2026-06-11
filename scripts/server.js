// Backend + static server for the samples gallery.
// Serves sample data REST endpoints (/data, /data-dynamic, /any — also under
// the /gantt/backend and /backend prefixes) plus the static project files.
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { createRequire } from "module";

const require = createRequire(import.meta.url);
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");

const Storage = require("./backend/storage.js");
const StorageTree = require("./backend/storage_tree.js");
const Router = require("./backend/router.js");
const RouterDynamicLoading = require("./backend/router_dynamic_loading.js");
const RouterAny = require("./backend/routerAny.js");
const itemInitializer = require("./backend/item_initializer.js");

export default function start(host = "127.0.0.1", port = 9200) {
	const app = express();

	const storage = new Storage(require("./backend/data.json"), itemInitializer);
	const dynamicStorage = new StorageTree(require("./backend/data-dynamic.json"), itemInitializer);
	const router = new Router("/data", storage);
	const dynLoading = new RouterDynamicLoading("/data-dynamic", dynamicStorage);
	const routerAny = new RouterAny("/any");

	app.use(express.json());
	app.use(express.urlencoded({ extended: true }));
	app.use(function (req, res, next) {
		res.header("Access-Control-Allow-Origin", "*");
		res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
		res.header("Access-Control-Allow-Methods", "*");
		next();
	});

	router.connect(app);
	dynLoading.connect(app);
	routerAny.connect(app);

	app.get("/favicon.ico", function (req, res) {
		res.status(204).end();
	});

	app.use("/samples", express.static(path.join(rootDir, "samples")));
	app.use("/codebase", express.static(path.join(rootDir, "codebase")));
	app.use(/^\/$/, function (req, res) {
		res.redirect("/samples/");
	});

	return app.listen(port, host, function () {
		console.log("Server is running on port " + port + "...");
	});
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
	start();
}
