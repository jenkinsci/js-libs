var jQuery2 = require('jquery-detached-2.1.4');

var sharedJQuery = jQuery2.getJQuery();
sharedJQuery.getJQuery = jQuery2.getJQuery;
sharedJQuery.newJQuery = jQuery2.newJQuery;
module.exports = sharedJQuery;