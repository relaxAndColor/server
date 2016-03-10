var gulp = require('gulp');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var gulpmocha = require('gulp-mocha');

gulp.task('run-tests', ['lint'], function() {
  return gulp.src(['test/**/*.js'], { read: false })
    .pipe(gulpmocha());
});

gulp.task('watch-files', function() {
  gulp.watch(['./*.js', 'routes/*.js', './test/**/*.js'], ['run-tests']);
});

gulp.task('lint', function() {
  return gulp.src(['./*.js', 'test/**/*.js', 'routes/*.js', 'models/*.js'])
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter(stylish));
});

gulp.task('default', ['run-tests']);
gulp.task('test', ['run-tests', 'watch-files']);
