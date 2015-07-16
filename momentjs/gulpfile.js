// TODO: change to use jenkins-js-builder

var gulp = require('gulp');
var jasmine = require('gulp-jasmine');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

gulp.task('default', ['test', 'bundle']);

gulp.task('test', function () {
    return gulp.src('src/test/js/*-spec.js')
        .pipe(jasmine());
});

gulp.task('bundle', function () {
    bundleJS('./src/main/js/momentjs2.js', 'momentjs2.js');
});

function bundleJS(inputJs, moduleName) {
    var bundle = browserify(inputJs).bundle();
    // Output bundles to './src/main/webapp/jsmodules/' because that's where
    // the 'jenkins-modules' module is going to load them from.
    // TODO: minifyify
    return bundle.pipe(source(moduleName))
        .pipe(gulp.dest('./src/main/webapp/jsmodules/'));
}