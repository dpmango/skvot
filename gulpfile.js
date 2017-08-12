'use strict';
//------------------------------
// Autotasker
//------------------------------

const path = require('path');
const del = require('del');
const gulp = require('gulp');
const gulplog = require('gulplog');
const combine = require('stream-combiner2').obj;
// const throttle = require('lodash.throttle');
const debug = require('gulp-debug');
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const gulpIf = require('gulp-if');
const cssnano = require('gulp-cssnano');
const rev = require('gulp-rev');
const revReplace = require('gulp-rev-replace');
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const uglify = require('gulp-uglify');
const AssetsPlugin = require('assets-webpack-plugin');
const webpack = require('webpack');
const notifier = require('node-notifier');
const svgstore = require('gulp-svgstore');
const inject = require('gulp-inject');
const rename = require('gulp-rename');
const autoprefixer = require('gulp-autoprefixer');
const pug = require('gulp-pug');
const image = require('gulp-image');

var isDevelopment = process.env.NODE_ENV === 'production' ? false : true;
console.log(process.env.NODE_ENV);
// ========================================================
// FONTS
// ========================================================
gulp.task('fonts', function() {
  return gulp.src('frontend/static/fonts/*.*')
    .pipe(gulp.dest('public/fonts/'));
});

// ========================================================
// IMAGES TASK
// ========================================================
gulp.task('images', function() {
  return gulp.src('frontend/static/img/*.*')
    .pipe(gulp.dest('public/img/'));
});
//------------------------------
// SVG Icons -> Sprite
//------------------------------

gulp.task('svg-icons', function() {
  var svgs = gulp
    .src('frontend/static/img/svg-icons/*.svg', { base: 'src/svg' })
    .pipe(rename({ prefix: 'icon-' }))
    .pipe(svgstore({
      inlineSvg: true
    }));

  function fileContents(filePath, file) {
    return file.contents.toString();
  }
  return gulp
    .src('frontend/static/img/svg-sprites/*.svg')
    .pipe(inject(svgs, {
      transform: fileContents
    }))
    .pipe(gulp.dest('public/img/svg-sprites/'));
});

// ========================================================
// STYLES TASKS
// ========================================================
gulp.task('styles', function() {
  return gulp.src('frontend/scss/collector.scss')
    .pipe(rename('index.scss'))
    .pipe(plumber({
      errorHandler: notify.onError(err => ({
        title: 'Styles',
        message: err.message
      }))
    }))
    .pipe(gulpIf(isDevelopment, sourcemaps.init()))
    .pipe(sass())
    .pipe(gulpIf(isDevelopment, sourcemaps.write()))
    .pipe(gulpIf(!isDevelopment, combine(cssnano(), rev())))
    .pipe(autoprefixer())
    .pipe(gulp.dest('public/styles'))
    .pipe(gulpIf(!isDevelopment, combine(rev.manifest('css.json'), gulp.dest('manifest'))));
});

// ========================================================
// TEMPLATES TASK
// ========================================================
gulp.task('pug', function() {
  return gulp.src('frontend/pug/*.pug')
    .pipe(plumber())
    .pipe(pug({ pretty: true }))
    .pipe(gulpIf(!isDevelopment, revReplace({
      manifest: gulp.src('manifest/css.json', { allowEmpty: true })
    })))
    .pipe(gulpIf(!isDevelopment, revReplace({
      manifest: gulp.src('manifest/webpack.json', { allowEmpty: true })
    })))
    .pipe(gulp.dest('public'));
});

// ========================================================
// WEBPACK
// ========================================================
gulp.task('webpack', function(callback) {
  var VendorChunkPlugin = require('webpack-vendor-chunk-plugin');
  let options = {
    entry: {
      app: './frontend/js/app',
      vendor: ["jquery"]
    },
    output: {
      path: __dirname + '/public/js',
      publicPath: '/js/',
      filename: isDevelopment ? '[name].js' : '[name]-[chunkhash:10].js',
      chunkFilename: "[id].chunk.js"
    },
    resolve: {
      extensions: ['', '.js'],
      alias: {
        jquery: path.resolve('./node_modules/jquery/dist/jquery.js'),
        magnigicPopup: path.resolve('./node_modules/magnific-popup/dist/jquery.magnific-popup.min.js')
      }
    },

    watch: isDevelopment,
    devtool: isDevelopment ? 'cheap-module-inline-source-map' : null,
    module: {
      loaders: [{
        test: /\.js$/,
        include: path.join(__dirname, "frontend"),
        loader: 'babel?presets[]=es2015'
      }],
    },
    plugins: [
      new webpack.NoErrorsPlugin(), // otherwise error still gives a file
      new webpack.optimize.CommonsChunkPlugin({
        name: ["commons", "vendor"],
        minChunks: 2
      }),
      new webpack.ProvidePlugin({
        jQuery: "jquery",
        $: "jquery",
        'window.jQuery': 'jquery'
      })
    ]
  };

  if (!isDevelopment) {
    options.plugins.push(
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          // don't show unreachable variables etc
          warnings: false,
          unsafe: true
        }
      }),
      new AssetsPlugin({
        filename: 'webpack.json',
        path: __dirname + '/manifest',
        processOutput(assets) {
          for (let key in assets) {
            assets[key + '.js'] = assets[key].js.slice(options.output.publicPath.length);
            delete assets[key];
          }
          return JSON.stringify(assets);
        }
      })
    );
  }

  // https://webpack.github.io/docs/node.js-api.html
  webpack(options, function(err, stats) {
    if (!err) { // no hard error
      // try to get a soft error from stats
      err = stats.toJson().errors[0];
    }

    if (err) {
      notifier.notify({
        title: 'Webpack',
        message: err
      });

      gulplog.error(err);
    } else {
      gulplog.info(stats.toString({
        colors: true
      }));
    }

    // task never errs in watch mode, it waits and recompiles
    if (!options.watch && err) {
      callback(err);
    } else {
      callback();
    }
  });
});

// =========================
// CLEAN TASK
// =========================
gulp.task('clean', function() {
  return del(['public', 'manifest']);
});

// =========================
// BUILD START
// =========================
gulp.task('build', gulp.series('clean', gulp.parallel('styles', 'webpack'), 'pug', 'svg-icons', 'images', 'fonts'));



// =========================
// SERVER START
// =========================
gulp.task('serve', function() {
  browserSync.init({
    server: 'public'
  });

  browserSync.watch('public/**/*.*').on('change', browserSync.reload);
});

// =========================
// DEVELOPMENT START
// =========================
gulp.task('default',
  gulp.series(
    'build',
    gulp.parallel(
      'serve',
      function() {
        gulp.watch('frontend/**/*.scss', gulp.series('styles'));
        gulp.watch('frontend/img/*.*', gulp.series('images'));
        gulp.watch('frontend/**/*.pug', gulp.series('pug'));
        gulp.watch('frontend/img/svg-icons/*.svg', gulp.series('svg-icons'));
        gulp.watch('frontend/fonts/*.*', gulp.series('fonts'));
      }
    )
  )
);
