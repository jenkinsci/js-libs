var builder = require('jenkins-js-builder');

//
// Bundle the modules.
//
builder.bundle('js/bootstrap3.js')
    .withExternalModuleMapping('jquery-detached-2.1.4', 'jquery-detached:jquery2')
    .less('js/bootstrap3/style.less')
    .asJenkinsModuleResource()
    .export();
