var builder = require('jenkins-js-builder');

//
// Bundle modules.
//
builder.bundle('src/main/js/ace-editor-119.js')
    .asJenkinsModuleResource(); // manually exported
builder.bundle('src/main/js/ace-editor-122.js')
    .asJenkinsModuleResource(); // manually exported

//
// Test bundle
//
builder.bundle('src/main/js/test.js')
    .asJenkinsModuleResource(); // not exported

builder.onTaskStart('test', function() {
    builder.startTestWebServer({root: './src/test/webroot'});
});