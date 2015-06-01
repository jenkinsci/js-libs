var jQuery1 = require('detached-jquery-1.9.1');

var sharedJQuery = jQuery1.getJQuery();
sharedJQuery.newJQuery = jQuery1.newJQuery;
module.exports = sharedJQuery;

// export the module so other Jenkins plugins can "require" it.
// See https://github.com/tfennelly/jenkins-modules
require('jenkins-modules').exportModule('jquery', 'jquery1', module.exports);