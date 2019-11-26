import * as gulp from 'gulp'
import * as del from 'del'
import { pluginMarkup } from './process-markup'
import { buildPluginJavaScript } from './transpile'
import { CLIOptions } from 'aurelia-cli'

function clean () {
  return del('dist')
}

let build = gulp.series(
  gulp.parallel(
    pluginMarkup('dist/esm'),
    buildPluginJavaScript('dist/esm', 'es2015'),

    pluginMarkup('dist/cjs'),
    buildPluginJavaScript('dist/cjs', 'commonjs'),
  ),
  done => {
    console.log('Finish building Aurelia plugin to dist/cjs and dist/esm.')
    done()
  },
)

let main
if (CLIOptions.hasFlag('watch')) {
  main = gulp.series(clean, () => {
    console.log('Watching plugin sources for changes ...')
    return gulp.watch('src/**/*', { ignoreInitial: false }, build)
  })
} else {
  main = gulp.series(clean, build)
}

export { main as default }
