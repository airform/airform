import * as gulp from 'gulp';
import * as browserSync from 'browser-sync';
import * as historyApiFallback from 'connect-history-api-fallback/lib';
import * as project from '../aurelia.json';
import {CLIOptions} from 'aurelia-cli';
import build from './build';
import watch from './watch';

const bs = browserSync.create();

let serve = gulp.series(
  build,
  done => {
    bs.init({
      online: false,
      open: CLIOptions.hasFlag('open') || project.platform.open,
      port: CLIOptions.getFlagValue('port') || project.platform.port,
      host: CLIOptions.getFlagValue('host') || project.platform.host || "localhost",
      logLevel: 'silent',
      server: {
        baseDir: [project.platform.baseDir],
        middleware: [historyApiFallback(), function(req, res, next) {
          res.setHeader('Access-Control-Allow-Origin', '*');
          next();
        }]
      }
    }, function (err, bs) {
      if (err) return done(err);
      let urls = bs.options.get('urls').toJS();
      let host = bs.options.get('host');
      let port = bs.options.get('port');

      if( host !== "localhost" )
        log(`Application Available At: http://${host}:${port}`);

      log(`Application Available At: ${urls.local}`);
      log(`BrowserSync Available At: ${urls.ui}`);
      done();
    });
  }
);

function log(message) {
  console.log(message); //eslint-disable-line no-console
}

function reload() {
  log('Refreshing the browser');
  bs.reload();
}

const run = gulp.series(
  serve,
  done => { watch(reload); done(); }
);

const shutdownAppServer = () => {
  bs.exit();
};

export { run as default, serve , shutdownAppServer };
