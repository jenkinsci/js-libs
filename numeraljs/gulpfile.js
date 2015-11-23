var builder = require('jenkins-js-builder');

//
// Use the predefined tasks from jenkins-js-builder.
//
builder.defineTasks(['test', 'bundle']);

//
// Bundle the module.
//
builder.bundle('numeral', 'numeraljs1')
    .asJenkinsModuleResource()
    .export();