var jquery = require('jquery-detached-2.1.4');
var $ui = jquery.newJQuery();
var decorator = require('jqueryui-detached-1.11/decorator');

decorator.addToJQuery($ui);

exports.getJQueryUI = function() {
    return $ui;
}