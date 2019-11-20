import * as gulp from 'gulp';
import * as project from '../aurelia.json';
import {build} from 'aurelia-cli';

export default function processJson() {
  return gulp.src(project.jsonProcessor.source, {since: gulp.lastRun(processJson)})
    .pipe(build.bundle());
}

export function pluginJson(dest) {
  return function processPluginJson() {
    return gulp.src(project.plugin.source.json)
      .pipe(gulp.dest(dest));
  };
}
