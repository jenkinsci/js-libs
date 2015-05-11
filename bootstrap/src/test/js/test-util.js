/**
 * TODO: refactor out into a "jenkins-testutil" npm module? UIThemes has a "helper" module that could go there too.
 */
    
var jsdom = require("jsdom");

var JENKINS_PAGE = '<html><head resURL="/jenkins"></head><body><div id="divOnPage">Bootstrap is everywhere</div></body></html>';

exports.onJenkinsPage = function(testFunc) {
    jsdom.env(JENKINS_PAGE, [],
        function (errors, window) {
            if (!window.navigator) {
                window.navigator = {
                    userAgent: 'JasmineTest'
                };
            }
            require("window-handle").setWindow(window);
            require('jenkins-js-core').exportModule('jquery', 'jquery2', require("detached-jquery-2.1.4"));
            testFunc(window);
        }
    );    
}