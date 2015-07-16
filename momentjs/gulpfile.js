var builder = require('jenkins-js-builder');

//
// Use the predefined tasks from jenkins-js-builder.
//
builder.defineTasks(['bundle']);

//
// Bundle the module.
//
builder.bundle('./momentjs2.js')
    .asJenkinsModuleResource();