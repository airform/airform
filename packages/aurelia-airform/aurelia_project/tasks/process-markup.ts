import {build} from 'aurelia-cli';
import * as gulp from 'gulp';
import * as project from '../aurelia.json';

export default function processMarkup() {
  return gulp.src(project.markupProcessor.source, {sourcemaps: true, since: gulp.lastRun(processMarkup)})
    .pipe(build.bundle());
}

export function pluginMarkup(dest) {
  return function processPluginMarkup() {
    return gulp.src(project.plugin.source.html)
      .pipe(gulp.dest(dest));
  };
}
