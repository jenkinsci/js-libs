const builder = require('jenkins-js-builder');

//
// Bundle the module.
//
builder.bundle('handlebars', 'handlebars3')
    .asJenkinsModuleResource()
    .export();
//
builder.bundle('handlebars', 'handlebars4')
    .asJenkinsModuleResource()
    .export();
