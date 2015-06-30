var gulp = require('gulp');
var del = require('del');
var jasmine = require('gulp-jasmine-phantom');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var less = require('gulp-less');

gulp.task('default', ['test', 'bundle']);

gulp.task('test', function () {
    return gulp.src('src/test/js/*-spec.js')
        .pipe(jasmine());
});

gulp.task('bundle', ['clean', 'bundleJS', 'bundleCSS']);

gulp.task('clean', function () {
    del.sync('./src/main/webapp/jsmodules');
});

gulp.task('bundleJS', function () {
    bundleJS('./src/main/js/jquery2.js', 'jquery2.js');
    bundleJS('./src/main/js/jqueryui1.js', 'jqueryui1.js');
});

gulp.task('bundleCSS', function () {
    gulp.src('./src/main/js/jqueryui1/style.less')
        .pipe(less())
        .pipe(gulp.dest('./src/main/webapp/jsmodules/jqueryui1'));
    
    // And the images used by the CSS
    gulp.src(['./src/main/js/jqueryui1/images/*'])
        .pipe(gulp.dest('./src/main/webapp/jsmodules/jqueryui1/images'));
});

function bundleJS(inputJs, moduleName) {
    var bundle = browserify(inputJs).bundle();
    // Output bundles to './src/main/webapp/jsmodules/' because that's where
    // the 'jenkins-modules' module is going to load them from.
    // TODO: minifyify
    return bundle.pipe(source(moduleName))
        .pipe(gulp.dest('./src/main/webapp/jsmodules/'));
}