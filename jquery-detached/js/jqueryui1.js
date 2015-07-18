var jenkins = require('jenkins-modules');

// Get jQuery v2 via 'jenkins-modules'. Of course we could "require" it directly, but then that would
// result in Browserify bundling jQuery directly into the jQuery UI bundle, and we don't want that
// to happen.
jenkins.import('jquery-detached:jquery2')
    .then(function() {
        var jquery = require('jquery-detached-2.1.4');
        var $ui = jquery.newJQuery();
        var jqueryUIFactory = require('jqueryui-detached-1.11');
        
        jqueryUIFactory.addToJQuery($ui)

        exports.getJQueryUI = function() {
            return $ui;
        }

        jenkins.export('jquery-detached', 'jqueryui1', module);
        jenkins.addModuleCSSToPage('jquery-detached', 'jqueryui1');
    });
