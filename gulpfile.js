var gulp = require('gulp'),
	webserver = require('gulp-webserver');

gulp.task('default', function() {
  // Server run
  gulp.src('.')
    .pipe(webserver({
      livereload: true,
      open: true,
      port: 8080
    }));
});