const builder = require('jenkins-js-builder');

//
// Bundle the module.
//

builder.gulp.src('./node_modules/handlebars/dist/handlebars.min.js')
.pipe(builder.gulp.dest('runtimes/'))

builder.bundle('handlebars', 'handlebars3')
    .asJenkinsModuleResource()
    .export();
