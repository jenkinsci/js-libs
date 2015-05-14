var jQuery1 = require('detached-jquery-1.9.1');

exports.getJQuery = jQuery1.getJQuery;
exports.newJQuery = jQuery1.newJQuery;

// export the module so other Jenkins plugins can "require" it.
// See https://github.com/tfennelly/jenkins-modules
require('jenkins-modules').exportModule('jquery', 'jquery1', exports);