var jenkins = require('jenkins-modules');

// Get jQuery v2 via 'jenkins-modules'. Of course we could "require" it directly, but then that would
// result in Browserify bundling jQuery directly into the Bootstrap bundle, and we don't want that
// to happen.
jenkins.import('jquery-detached:jquery2')
    .then(function() {
        var jquery = require('jquery-detached-2.1.4');
        var $bootstrap = jquery.newJQuery();
        var bootstrapUIFactory = require('bootstrap-detached-3.3');
        
        bootstrapUIFactory.addToJQuery($bootstrap)

        exports.getBootstrap = function() {
            return $bootstrap;
        }

        
        jenkins.export('bootstrap', 'bootstrap3', module);
        jenkins.addModuleCSSToPage('bootstrap', 'bootstrap3');
    });
