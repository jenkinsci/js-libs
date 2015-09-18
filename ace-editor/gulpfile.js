var builder = require('jenkins-js-builder');

//
// Use the predefined tasks from jenkins-js-builder.
//
builder.defineTasks(['test', 'bundle']);

//
// Bundle the module.
//
builder.bundle('jenkins-ace-editor', 'aceeditor119')
    .asJenkinsModuleResource()
    .export();