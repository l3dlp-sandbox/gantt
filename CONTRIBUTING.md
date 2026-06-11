# Contributing

Thank you for your interest in improving DHTMLX Gantt!

## How this repository is maintained

This repository is **generated from an internal source tree** on every release. The content of each release replaces the previous content wholesale — pull requests cannot be merged here directly.

That said, contributions are welcome and are handled like this:

1. You open a pull request (or an issue) in this repository.
2. We review it. Accepted changes are applied to the internal source tree by the maintainers.
3. The change ships with the next release of this repository, and the PR is closed with a reference to the release. Contributors are credited in the changelog.

Small, focused PRs with a clear description and a test (or a reproducible sample) have the best chance of quick acceptance.

## Reporting bugs

Please include:

- a minimal reproducible snippet (or a modified sample from `samples/`),
- the expected and the actual behavior,
- browser and OS.

## Development

```bash
npm install
npm run start        # watch build + dev server with samples
npm run test         # smoke test: every sample loads without console errors
npm run lint         # eslint over src/
```

`npm run test` is a smoke pass: it builds the library, then loads every sample headless and fails on a page error or `console.error`. Run it before opening a PR — a red result means your change broke a sample.

## Scope

This edition intentionally excludes the Pro-only features (auto scheduling, critical path, resources, baselines, split tasks, and others) as well as some features kept out of this community build (markers, multiselect, undo/redo, unscheduled tasks, the new-task placeholder) — see README. PRs that re-implement out-of-scope features will be declined.
