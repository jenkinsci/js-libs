var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

gulp.task('default', ['bundle']);

gulp.task('test', function() {}); // keep build from complaining

gulp.task('bundle', function () {
    var bundle = browserify('./module/jquery2.js').bundle();
    // Output to './src/main/webapp/jsmodules/' because that's where
    // the 'jenkins-js-core' module is going to load them from.
    // TODO: minifyify
    return bundle.pipe(source('jquery2.js'))
        .pipe(gulp.dest('../src/main/webapp/jsmodules/'));
});