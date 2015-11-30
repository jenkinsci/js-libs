var builder = require('jenkins-js-builder');

//
// Bundle the module.
//
builder.bundle('numeral', 'numeraljs1')
    .asJenkinsModuleResource()
    .export();