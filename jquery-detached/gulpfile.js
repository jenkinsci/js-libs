var builder = require('jenkins-js-builder');

//
// Bundle the modules.
//
builder.bundle('js/jquery2.js')
    .asJenkinsModuleResource()
    .export();

builder.bundle('js/jqueryui1.js')
    .less('js/jqueryui1/style.less')
    .withExternalModuleMapping('jquery-detached-2.1.4', 'jquery-detached:jquery2')
    .asJenkinsModuleResource()
    .export();
