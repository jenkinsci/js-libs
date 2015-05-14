var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

gulp.task('default', ['bundle', 'test']);

gulp.task('bundle', function () {
    bundleJS('./src/main/js/demo.js', 'demo.js');
});

gulp.task('test', function () {
    // TODO
});

function bundleJS(inputJs, moduleName) {
    var bundle = browserify(inputJs).bundle();
    // Output bundles to './src/main/webapp/jsmodules/' because that's where
    // the 'jenkins-modules' module is going to load them from.
    // TODO: minifyify
    return bundle.pipe(source(moduleName))
        .pipe(gulp.dest('./target/generated-adjuncts/org/jenkinsci/'));
}
