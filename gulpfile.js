const gulp = require('gulp');
const less = require('gulp-less');
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');

// Compile LESS and save as .css
gulp.task('compile-less', function() {
  return gulp.src('./src/styles/*.less') // Source LESS files
    .pipe(less()) // Compile LESS to CSS
    .pipe(gulp.dest('./dist')) // Save CSS to destination folder
    .pipe(cleanCSS()) // Minify the CSS
    .pipe(rename({ suffix: '.min' })) // Rename to .min.css
    .pipe(gulp.dest('./dist')); // Save minified CSS to destination folder
});

// Default Gulp task
gulp.task('default', gulp.series('compile-less'));
