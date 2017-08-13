'use strict';
//------------------------------
// Autotasker
//------------------------------

const path        = require('path');
const del         = require('del');
const gulp        = require('gulp');
const gulplog     = require('gulplog');
const combine     = require('stream-combiner2').obj;
// const throttle = require('lodash.throttle');
const debug       = require('gulp-debug');
const sourcemaps  = require('gulp-sourcemaps');
const sass        = require('gulp-sass');
const browserSync = require('browser-sync').create();
const gulpIf      = require('gulp-if');
const cssnano     = require('gulp-cssnano');
const rev         = require('gulp-rev');
const revReplace  = require('gulp-rev-replace');
const plumber     = require('gulp-plumber');
const notify      = require('gulp-notify');
const uglify      = require('gulp-uglify');
const notifier    = require('node-notifier');
const svgstore    = require('gulp-svgstore');
const inject      = require('gulp-inject');
const rename      = require('gulp-rename');
const postcss     = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const short       = require('postcss-short');
const svginline   = require('postcss-inline-svg');
const sorting     = require('postcss-sorting');
const pseudoel    = require('postcss-pseudoelements');
const flexbugs    = require('postcss-flexbugs-fixes');
const pug         = require('gulp-pug');
const babel       = require('gulp-babel');
const image       = require('gulp-image');

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
// PostCSS Processors
var processors = [
  short(),
  svginline(),
  autoprefixer({
    browsers: ['last 10 versions'],
    remove: true, // remove outdated prefixes?
  }),
  sorting(),
  pseudoel(),
  flexbugs()
];

gulp.task('styles', function() {
  return gulp.src('frontend/scss/collector.scss')
    .pipe(rename('index.scss'))
    .pipe(gulpIf(isDevelopment, sourcemaps.init()))
    .pipe(sass())
    .pipe(plumber({
      errorHandler: notify.onError(err => ({
        title: 'Styles',
        message: err.message
      }))
    }))
    .pipe(postcss(processors))
    .pipe(plumber({
      errorHandler: notify.onError(err => ({
        title: 'Styles',
        message: err.message
      }))
    }))
    .pipe(gulpIf(isDevelopment, sourcemaps.write()))
    .pipe(gulpIf(!isDevelopment, combine(cssnano(), rev())))
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

// =========================
// JAVASCRIPT (without webpack)
// =========================
gulp.task('babel', function() {
  return gulp.src('frontend/js/main.js')
    .pipe(babel({
        presets: ['es2015']
    }))
    .pipe(plumber({
      errorHandler: notify.onError(err => ({
        title: 'Babel',
        message: err.message
      }))
    }))
    .pipe(gulp.dest('./public/js'))
});

gulp.task('script:lib', function() {
  return gulp.src('frontend/js/libs/*.*')
    .pipe(gulp.dest('public/js/'));
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
gulp.task('build', gulp.series('clean', gulp.parallel('styles', 'babel'), 'pug', 'svg-icons', 'images', 'fonts', 'script:lib'));



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
        gulp.watch('frontend/js/main.js', gulp.series('babel'));
        gulp.watch('frontend/js/libs/*.*', gulp.series('script:lib'));
      }
    )
  )
);
