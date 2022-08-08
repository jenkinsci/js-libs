const builder = require('jenkins-js-builder');

//
// Bundle the module.
//
builder.bundle('handlebars', 'handlebars4')
    .asJenkinsModuleResource()
    .export();
