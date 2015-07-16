var builder = require('jenkins-js-builder');

//
// Use the predefined tasks from jenkins-js-builder.
//
builder.defineTasks(['test', 'bundle']);

//
// Bundle the modules.
//
builder.bundle('js/bootstrap3.js')
    .less('js/bootstrap3/style.less')
    .asJenkinsModuleResource();
