var jquery = require('jquery-detached-2.1.4');
var $ui = jquery.newJQuery();
var jqueryUIFactory = require('jqueryui-detached-1.11');

jqueryUIFactory.addToJQuery($ui);

exports.getJQueryUI = function() {
    return $ui;
}