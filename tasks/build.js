var gulp = require('gulp');
var mergeStream = require('merge-stream');
var plugins = require('gulp-load-plugins')();
gulp.task('build', function() {
  return mergeStream(
    gulp.src('src/**/*.js').pipe(plugins.babel()),
    gulp.src(['LICENSE', 'README.md', 'package.json'])
  ).pipe(gulp.dest('dist'));
});