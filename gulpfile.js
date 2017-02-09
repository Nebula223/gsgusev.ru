var del = require('del');
var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require("gulp-rename");
var cleanCSS = require('gulp-clean-css');
var browserSync = require('browser-sync').create();

var PATH = {
  html: [
    'src/index.html',
    'admin_poselka.html'
  ],
  css: [
    'src/css/index.css',
    'src/css/admin-poselka.css',
    'src/css/uikit.almost-flat.css'
  ],
  sass: [
    'src/sass/**/*.scss'
  ],
  robot: ['src/robots.txt'],
  img: [
    'nanotech.jpg',
    'ford_transit.jpg'
  ],
  favicons: [
    'android-chrome-192x192.png',
    'android-chrome-512x512.png',
    'apple-touch-icon.png',
    'browserconfig.xml',
    'favicon.ico',
    'favicon-16x16.png',
    'favicon-32x32.png',
    'manifest.json',
    'mstile-150x150.png',
    'safari-pinned-tab.svg'
  ],
  'fonts': [
      'FontAwesome.otf',
      'fontawesome-webfont.ttf',
      'fontawesome-webfont.woff',
      'fontawesome-webfont.woff2'
  ]
};


var DEST = {
  sass: 'src/css',
  css: 'src/css'
};


gulp.task('clean-html', function() {
  var dist = PATH.html.map(function(path){
    return 'web/' + path;
  });

  return del(dist);

});


gulp.task('html', ['clean-html'], function() {
  var sources = PATH.html.map(function(path){
    return 'src/' + path;
  });

  return gulp.src(sources)
    .pipe(gulp.dest('web'));
});


gulp.task('clean-css', function() {
  return del('web/css');
});


gulp.task('css', ['clean-css'], function() {
  return gulp.src(PATH.css)
    .pipe(gulp.dest('web/css'));
});


//
// Minify compiled CSS
//
gulp.task('minify-css', function() {
  return gulp.src(PATH.css)
      .pipe(cleanCSS({ compatibility: 'ie8' }))
      .pipe(rename({ suffix: '.min' }))
      .pipe(gulp.dest(DEST.css));
});


//
// Compile SASS to CSS
//
gulp.task('sass', function() {
  return gulp.src(PATH.sass)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(DEST.sass));
});


//
// Configure the browserSync task
//
gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: './src'
    }
  })
});


gulp.task('clean-robot', function() {
  return del('web/robots.txt');
});


gulp.task('robot', ['clean-robot'], function() {
  return gulp.src(PATH.robot)
    .pipe(gulp.dest('web'));
});


gulp.task('clean-favicons', function() {
  var dist = PATH.favicons.map(function(path){
    return 'web/' + path;
  });

  return del(dist);
});


gulp.task('favicons', ['clean-favicons'], function() {

  var sources = PATH.favicons.map(function(path){
    return 'src/favicons/' + path;
  });

  return gulp.src(sources)
    .pipe(gulp.dest('web'));
});


gulp.task('clean-fonts', function() {
  var dist = PATH.fonts.map(function(path){
    return 'web/fonts/' + path;
  });

  return del(dist);
});


gulp.task('fonts', ['clean-fonts'], function() {

  var sources = PATH.fonts.map(function(path){
    return 'src/fonts/' + path;
  });

  return gulp.src(sources)
      .pipe(gulp.dest('web/fonts/'));
});


gulp.task('clean-img', function() {
  var dist = PATH.img.map(function(path){
    return 'web/img/' + path;
  });

  return del(dist);
});


gulp.task('img', ['clean-img'], function() {

  var sources = PATH.img.map(function(path){
    return 'src/img/' + path;
  });

  return gulp.src(sources)
      .pipe(gulp.dest('web/img/'));
});


gulp.task('watch', function() {
  gulp.watch(PATH.sass, ['sass']);
  gulp.watch(PATH.css, ['minify-css']);
  gulp.watch(PATH.html, browserSync.reload);
});


// Run everything
gulp.task('default', ['browserSync', 'sass', 'minify-css', 'watch']);
