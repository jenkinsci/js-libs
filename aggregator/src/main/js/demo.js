var jenkins = require('jenkins-modules');

// Load Bootstrap v3 from the "bootstrap" plugin ...
jenkins.requireModule('bootstrap:bootstrap3')
    .then(function(bootstrap3) {
        // Do stuff with Bootstrap ...
        var $ = bootstrap3.getBootstrap();
        var bootEl = $('.bootstrap-3');
        
        var hints = $('.hint', bootEl);               
        hints.mouseenter(function() {
            var marker = $('<div>');
            marker.insertBefore(bootEl);        
            bootEl.remove();
            bootEl.insertAfter(marker);
            marker.remove();
            hints.tooltip();
        });

    });
