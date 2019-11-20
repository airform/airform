# `aurelia-airform`

This project is bootstrapped by [aurelia-cli](https://github.com/aurelia/cli).

This Aurelia plugin project has a built-in dev app (with CLI built-in bundler and RequireJS) to simplify development.

1. The local `src/` folder, is the source code for the plugin.
2. The local `example/` folder, is the code for the dev app, just like a normal app bootstrapped by aurelia-cli.
3. You can use normal `au run` and `au test` in development just like developing an app.
4. You can use aurelia-testing to test your plugin, just like developing an app.
5. To ensure compatibility to other apps, always use `PLATFORM.moduleName()` wrapper in files inside `src/`. You don't need to use the wrapper in `example/` folder as CLI built-in bundler supports module name without the wrapper.

Note aurelia-cli doesn't provide a plugin skeleton with Webpack setup (not yet), but this plugin can be consumed by any app using Webpack, or CLI built-in bundler, or jspm.

## How to write an Aurelia plugin

For a full length tutorial, visit [Aurelia plugin guide](https://aurelia.io/docs/plugins/write-new-plugin).

Here is some basics. You can create new custom element, custom attribute, value converter or binding behavior manually, or use command `au generate` to help.

```shell
au generate element some-name
au generate attribute some-name
au generate value-converter some-name
au generate binding-behavior some-name
```

By default, the cli generates command generates files in following folders:

```
src/elements
src/attributes
src/value-converters
src/binding-behaviors
```

Note the folder structure is only to help you organising the files, it's not a requirement of Aurelia. You can manually create new element (or other thing) anywhere in `src/`.

After you added some new file, you need to register it in `src/index.ts`. Like this:

```js
config.globalResources([
  // ...
  PLATFORM.moduleName("./path/to/new-file-without-ext")
]);
```

The usage of `PLATFORM.moduleName` wrapper is mandatory. It's needed for your plugin to be consumed by any app using webpack, CLI built-in bundler, or jspm.

## Resource import within the dev app

In dev app, when you need to import something from the inner plugin (for example, importing a class for dependency injection), use special name `"resources"` to reference the inner plugin.

```js
import { autoinject } from "aurelia-framework";
// "resources" refers the inner plugin src/index.ts
import { MyService } from "resources";

@autoinject()
export class App {
  constructor(myService: MyService) {}
}
```

## Manage dependencies

By default, this plugin has no "dependencies" in package.json. Theoretically this plugin depends on at least `aurelia-pal` because `src/index.ts` imports it. It could also depends on more core Aurelia package like `aurelia-binding` or `aurelia-templating` if you build advanced components that reference them.

Ideally you need to carefully add those `aurelia-pal` (`aurelia-binding`...) to "dependencies" in package.json. But in practice you don't have to. Because every app that consumes this plugin will have full Aurelia core packages installed.

Furthermore, there are two benefits by leaving those dependencies out of plugin's package.json.

1. ensure this plugin doesn't bring in a duplicated Aurelia core package to consumers' app. This is mainly for app built with webpack. We had been hit with `aurelia-binding` v1 and v2 conflicts due to 3rd party plugin asks for `aurelia-binding` v1.
2. reduce the burden for npm/yarn when installing this plugin.

If you are a perfectionist who could not stand leaving out dependencies, I recommend you to add `aurelia-pal` (`aurelia-binding`...) to "peerDependencies" in package.json. So at least it could not cause a duplicated Aurelia core package.

If your plugin depends on other npm package, like `lodash` or `jquery`, **you have to add them to "dependencies" in package.json**.

## Build Plugin

Run `au build-plugin`. This will transpile all files from `src/` folder to `dist/native-modules/` and `dist/commonjs/`.

For example, `src/index.ts` will become `dist/native-modules/index.js` and `dist/commonjs/index.js`.

Note all other files in `example/` folder are for the dev app, they would not appear in the published npm package.

## Consume Plugin

By default, the `dist/` folder is not committed to git. (We have `/dist` in `.gitignore`). But that would not prevent you from consuming this plugin through direct git reference.

You can consume this plugin directly by:

```shell
npm i github:your_github_username/aurelia-airform
# or if you use bitbucket
npm i bitbucket:your_github_username/aurelia-airform
# or if you use gitlab
npm i gitlab:your_github_username/aurelia-airform
# or plain url
npm i https:/github.com/your_github_username/aurelia-airform.git
```

Then load the plugin in app's `main.ts` like this.

```js
aurelia.use.plugin("aurelia-airform");
// for webpack user, use PLATFORM.moduleName wrapper
aurelia.use.plugin(PLATFORM.moduleName("aurelia-airform"));
```

The missing `dist/` files will be filled up by npm through `"prepare": "npm run build"` (in `"scripts"` section of package.json).

Yarn has a [bug](https://github.com/yarnpkg/yarn/issues/5235) that ignores `"prepare"` script. If you want to use yarn to consume your plugin through direct git reference, remove `/dist` from `.gitignore` and commit all the files. Note you don't need to commit `dist/` files if you only use yarn to consume this plugin through published npm package (`npm i aurelia-airform`).

## Publish npm package

By default, `"private"` field in package.json has been turned on, this prevents you from accidentally publish a private plugin to npm.

To publish the plugin to npm for public consumption:

1. Remove `"private": true,` from package.json.
2. Pump up project version. This will run through `au test` (in "preversion" in package.json) first.

```shell
npm version patch # or minor or major
```

3. Push up changes to your git server

```shell
git push && git push --tags
```

4. Then publish to npm, you need to have your npm account logged in.

```shell
npm publish
```

## Automate changelog, git push, and npm publish

You can enable `npm version patch # or minor or major` to automatically update changelog, push commits and version tag to the git server, and publish to npm.

Here is one simple setup.

1. `npm i -D standard-changelog`. We use [`standard-changelog`](https://github.com/conventional-changelog/conventional-changelog) as a minimum example to support conventional changelog.

- Alternatively you can use high level [standard-version](https://github.com/conventional-changelog/standard-version).

2. Add two commands to `"scripts"` section of package.json.

```
"scripts": {
  // ...
  "version": "standard-changelog && git add CHANGELOG.md",
  "postversion": "git push && git push --tags && npm publish"
},
```

3. you can remove `&& npm publish` if your project is private

For more information, go to https://aurelia.io/docs/cli/cli-bundler

## Run dev app

Run `au run`, then open `http://localhost:9000`

To open browser automatically, do `au run --open`.

To change dev server port, do `au run --port 8888`.

To change dev server host, do `au run --host 127.0.0.1`

**PS:** You could mix all the flags as well, `au run --host 127.0.0.1 --port 7070 --open`

## Unit tests

Run `au test` (or `au jest`).

To run in watch mode, `au test --watch` or `au jest --watch`.
