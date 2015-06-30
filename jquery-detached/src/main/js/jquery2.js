var jQuery2 = require('jquery-detached-2.1.4');

var sharedJQuery = jQuery2.getJQuery();
sharedJQuery.newJQuery = jQuery2.newJQuery;
module.exports = sharedJQuery;

// export the module so other Jenkins plugins can "require" it.
// See https://github.com/tfennelly/jenkins-modules
require('jenkins-modules').export('jquery', 'jquery2', module);
