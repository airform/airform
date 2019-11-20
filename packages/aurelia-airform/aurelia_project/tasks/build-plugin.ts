import * as gulp from 'gulp';
import * as del from 'del';
import { pluginMarkup } from './process-markup';
import { pluginCSS } from './process-css';
import { pluginJson } from './process-json';
import { buildPluginJavaScript } from './transpile';
import { CLIOptions } from 'aurelia-cli';

function clean() {
  return del('dist');
}

let build = gulp.series(
  gulp.parallel(
    // package.json "module" field pointing to dist/native-modules/index.js
    pluginMarkup('dist/native-modules'),
    pluginCSS('dist/native-modules'),
    pluginJson('dist/native-modules'),
    buildPluginJavaScript('dist/native-modules', 'es2015'),

    // package.json "main" field pointing to dist/native-modules/index.js
    pluginMarkup('dist/commonjs'),
    pluginCSS('dist/commonjs'),
    pluginJson('dist/commonjs'),
    buildPluginJavaScript('dist/commonjs', 'commonjs'),
  ), (done) => {
    console.log('Finish building Aurelia plugin to dist/commonjs and dist/native-modules.');
    done();
  }
);

let main;
if (CLIOptions.hasFlag('watch')) {
  main = gulp.series(
    clean,
    () => {
      console.log('Watching plugin sources for changes ...');
      return gulp.watch('src/**/*', { ignoreInitial: false }, build);
    }
  );
} else {
  main = gulp.series(
    clean,
    build
  );
}

export { main as default };
