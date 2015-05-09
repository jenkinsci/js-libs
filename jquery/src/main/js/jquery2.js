var jQuery2 = require('detached-jquery-2.1.4');

exports.getJQuery = jQuery2.getJQuery;
exports.newJQuery = jQuery2.newJQuery;

// export the module so other Jenkins plugins can "require" it.
// See https://github.com/tfennelly/jenkins-js-core
require('jenkins-js-core').exportModule('jquery', 'jquery2', exports);