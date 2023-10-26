# Taking advantage of Liferay's `jsImportMapsEntry` Client Extension

## Activating the CX

- [`./cx-workspace/configs/local/portal-ext.properties`](./cx-workspace/configs/local/portal-ext.properties)

  - Make `feature.flag.LPS-172903` as `true`
  - https://liferay.atlassian.net/browse/LPS-172903

## CX ImportMap Definitions

### project-react

Defined to specify (in this case update Liferay's built-ins) `react` and `react-dom` versions to be used by `importmap`.

### project-library

A vite project (may be build with webpack, but not advised, as it is experimental).

It defines a set of files exposed as `project-library` and `project-library/` in the `importmap`, to make it available imports like:

- `import {...} from "project-library";`
- `import {...} from "project-library/dates.js";`

Also, the `package.json` defines the `exports` field to make it possible to add as a package dependency (used inside this workspace).

## CX Custom Element Definitions

The CX `customElement` created and build as [`ES Module`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules) (`useESM: true`).

### testing-cx-custom-element

- Both `react` and `react-dom` were specified as `external` dependencies (check [`vite.config.js`](./client-extensions/testing-cx-custom-element/vite.config.js) for mor details), so they will not be included in the final app bundle file.

### vite-project

- `project-library` was specified as `external` dependencies (check [`vite.config.js`](./client-extensions/vite-project/vite.config.js) for mor details), so it will not be included in the final app bundle file.

### webpack-project

- Same as before, but made with webpack. `project-library` was specified as `external` dependencies (check [`webpack.config.mjs`](./client-extensions/webpack-project/webpack.config.mjs) for mor details), so it will not be included in the final app bundle file.

---

### How to run this project

1. Clone it and enter into the project's directory;

1. Run `blade server init`;

1. Run `blade server run` or `blade server start`;

1. After the Liferay instance shows up in the browser, run `blade gw deploy` to deploy the extension
