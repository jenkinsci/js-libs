var jquery = require('jquery-detached-2.1.4');
var $bootstrap = jquery.newJQuery();
var bootstrapDecorator = require('bootstrap-detached-3.3/decorator');

bootstrapDecorator.addToJQuery($bootstrap)

exports.getBootstrap = function() {
    return $bootstrap;
}
