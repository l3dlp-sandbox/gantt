// Flat ESLint config (ESLint 9). Intentionally lax: this is mature code that
// predates several modern rules, so the ruleset is deliberately small — it
// catches real mistakes (stray debugger/console, const reassignment, mixed
// tabs/spaces, unused TS vars) without forcing a refactor. Tighten over time.
import tseslint from "typescript-eslint";

export default [
	{
		ignores: [
			"node_modules/**",
			"codebase/**",
			"dist/**",
			".tmp_devserver/**"
		]
	},
	{
		files: ["src/**/*.{js,ts}"],
		// the source carries `eslint-disable` comments for rules this reduced
		// ruleset does not enforce (e.g. no-restricted-globals) — don't flag
		// those as unused
		linterOptions: {
			reportUnusedDisableDirectives: "off"
		},
		languageOptions: {
			parser: tseslint.parser,
			ecmaVersion: "latest",
			sourceType: "module",
			globals: {
				// compile-time defines injected by vite (see vite.config.js)
				VERSION: "readonly",
				LICENSE: "readonly",
				PRODUCTION: "readonly",
				GPL: "readonly",
				// global namespace exposed by the library
				Gantt: "readonly"
			}
		},
		plugins: {
			"@typescript-eslint": tseslint.plugin
		},
		rules: {
			"semi": ["error", "always"],
			"comma-dangle": ["error", "never"],
			"no-mixed-spaces-and-tabs": "error",
			"no-extra-boolean-cast": "off",
			"no-redeclare": "off", // handled by the TS rule for .ts files
			"no-const-assign": "error",
			"no-debugger": "error",
			"no-console": "error"
		}
	},
	{
		// TypeScript-only rules (kept minimal — `any` and empty functions are
		// pervasive in the existing code and not worth flagging yet)
		files: ["src/**/*.ts"],
		rules: {
			"@typescript-eslint/no-unused-vars": [
				"error",
				{ vars: "all", args: "none", ignoreRestSiblings: true }
			],
			"@typescript-eslint/no-redeclare": "error",
			"@typescript-eslint/no-explicit-any": "off",
			"@typescript-eslint/no-empty-function": "off"
		}
	},
	{
		// plain JS keeps the lax stance: unused vars are not flagged
		files: ["src/**/*.js"],
		rules: {
			"no-unused-vars": "off"
		}
	}
];
