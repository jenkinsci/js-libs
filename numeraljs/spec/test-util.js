var jsdom = require("jsdom");

var JENKINS_PAGE = '<html><head resURL="/jenkins"></head><body><div id="divOnPage">Numeral.js is everywhere</div></body></html>';

exports.onJenkinsPage = function (testFunc) {
    jsdom.env(JENKINS_PAGE, [],
        function (errors, window) {
            if (!window.navigator) {
                window.navigator = {
                    userAgent: 'JasmineTest'
                };
            }
            require("window-handle").setWindow(window);
            testFunc(window);
        }
    );
}