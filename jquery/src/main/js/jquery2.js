var jQuery2 = require('detached-jquery-2.1.4');

exports.getJQuery = jQuery2.getJQuery;
exports.newJQuery = jQuery2.newJQuery;

exports.export = function () {
    // export the module so other Jenkins plugins can "require" it.
    // See https://github.com/tfennelly/jenkins-modules
    require('jenkins-modules').exportModule('jquery', 'jquery2', exports);
}

exports.export();