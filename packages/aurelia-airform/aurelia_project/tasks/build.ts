import * as gulp from 'gulp';
import * as project from '../aurelia.json';
import {CLIOptions, build as buildCLI} from 'aurelia-cli';
import transpile from './transpile';
import processMarkup from './process-markup';
import processJson from './process-json';
import processCSS from './process-css';
import copyFiles from './copy-files';
import watch from './watch';

let build = gulp.series(
  readProjectConfiguration,
  gulp.parallel(
    transpile,
    processMarkup,
    processJson,
    processCSS,
    copyFiles
  ),
  writeBundles
);

let main;

if (CLIOptions.taskName() === 'build' && CLIOptions.hasFlag('watch')) {
  main = gulp.series(
    build,
    (done) => { watch(); done(); }
  );
} else {
  main = build;
}

function readProjectConfiguration() {
  return buildCLI.src(project);
}

function writeBundles() {
  return buildCLI.dest();
}

export { main as default };
