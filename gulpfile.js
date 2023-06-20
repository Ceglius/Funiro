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


//js 
 function scripts() {
  return gulp.src(['./src/js/**/*.js', "!./src/js/main.js"])
    .pipe(concat('main.js'))
    .pipe(beautify({
      "indent_char": "\t",
      "indent_size": 2,
      indent_size: 4,
      js: {
        indent_char: '\t',
        indent_size: 1
      }
    }))
    .pipe(gulp.dest('./dist/assets/js'));
};



exports.default = gulp.series(buildStyles, scripts)