var jenkins = require('jenkins-js-core');

// Load Bootstrap v3 from the "bootstrap" plugin ...
jenkins.requireModule('bootstrap', 'bootstrap3')
    .then(function(bootstrap3) {
        // Do stuff with Bootstrap ...
        var $ = bootstrap3.getBootstrap();
        $('.bootstrap-3 .hint').tooltip();

//        $(function () {
//            $('[data-toggle="tooltip"]').tooltip()
//        })
    });

// Load jQuery UI v1 from the "jquery" plugin ...
jenkins.requireModule('jquery', 'jqueryui1')
    .then(function(jqueryui1) {
        // Do stuff with jQuery UI ...
        
    });