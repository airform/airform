import {build} from 'aurelia-cli';
import * as gulp from 'gulp';
import * as project from '../aurelia.json';

export default function processCSS() {
  return gulp.src(project.cssProcessor.source, {sourcemaps: true, since: gulp.lastRun(processCSS)})
    .pipe(build.bundle());
}

export function pluginCSS(dest) {
  return function processPluginCSS() {
    return gulp.src(project.plugin.source.css)
      .pipe(gulp.dest(dest));
  };
}
