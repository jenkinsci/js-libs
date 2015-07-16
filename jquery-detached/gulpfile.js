var builder = require('jenkins-js-builder');

//
// Use the predefined tasks from jenkins-js-builder.
//
builder.defineTasks(['test', 'bundle']);

//
// Bundle the modules.
//
builder.bundle('js/jquery2.js')
    .asJenkinsModuleResource();
builder.bundle('js/jqueryui1.js')
    .less('js/jqueryui1/style.less')
    .asJenkinsModuleResource();
