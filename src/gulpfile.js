const bro = require('gulp-bro');
const gulp = require('gulp');
const rename = require('gulp-rename');
const babelify = require('babelify');

function transpileResources(callback) {
  gulp.src(['./app/foo.es6.js'])
    .pipe(bro({transform: [babelify.configure({ presets: ['@babel/preset-env'] })] }))
    .pipe(rename('app.es5.js'))
    .pipe(gulp.dest('./dist/'));

  callback();
}

exports.transpile = transpileResources;