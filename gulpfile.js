const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const rename = require("gulp-rename");
const beautify = require('gulp-jsbeautifier');

// sass
function buildStyles() {
  return gulp.src('./src/scss/style.scss')
  .pipe(rename("main.css"))
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist/assets/css'));
};






exports.default = gulp.series(buildStyles)