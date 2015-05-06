var gulp = require('gulp');
var jasmine = require('gulp-jasmine-phantom');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

gulp.task('default', ['test', 'bundle']);

gulp.task('test', function () {
    return gulp.src('spec/*-spec.js')
        .pipe(jasmine());
});

gulp.task('bundle', function () {
    bundle('./src/main/js/jquery1.js', 'jquery1.js');
    bundle('./src/main/js/jquery2.js', 'jquery2.js');
});

function bundle(inputJs, moduleName) {
    var bundle = browserify(inputJs).bundle();
    // Output bundles to './src/main/webapp/jsmodules/' because that's where
    // the 'jenkins-js-core' module is going to load them from.
    // TODO: minifyify
    return bundle.pipe(source(moduleName))
        .pipe(gulp.dest('./src/main/webapp/jsmodules/'));
}