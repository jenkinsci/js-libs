var builder = require('jenkins-js-builder');

//
// Bundle the module.
//
builder.bundle('moment', 'momentjs2')
    .asJenkinsModuleResource()
    .export();