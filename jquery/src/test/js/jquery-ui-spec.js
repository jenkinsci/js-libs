/* jslint node: true */
/* global describe, it, expect */

"use strict";

var testUtil = require("./test-util");

describe("jquery-ui.js", function () {

    it("- test", function (done) {
        testUtil.onJenkinsPage(function() {
            // require jQuery v2 and export it as a module, meaning jqueryui will be able to perform a "requireModule"
            // on it and not have to wait async for it.
            var jQueryModule = require("../../main/js/jquery2");
            jQueryModule.export();
            
            // require jqueryui. The module should be exported immediately because it doesn't need to wait 
            // for it's underlying jquery2 to be exported (because it already is).
            var jQueryUIModule = require("../../main/js/jqueryui1");
            var jQueryUI = jQueryUIModule.getJQueryUI();            
            expect(jQueryUI).toBeDefined();
            
            // let's check if it has the jQuery UI dialog function added
            var divOnPage = jQueryUI('#divOnPage');
            expect(divOnPage.dialog).toBeDefined();
            expect(divOnPage.text()).toBe('jQuery is everywhere');

            // let's make sure that's not the case for a regular unpolluted jQuery
            var $ = jQueryModule.getJQuery();
            expect($.dialog).not.toBeDefined();
            
            // Check that the CSS link was added to page
            var document = require('window-handle').getWindow().document;
            var cssEl = document.getElementById('jenkins-plugin-module:jquery:jqueryui1:css');            
            expect(cssEl).not.toBe(null);
            expect(cssEl.getAttribute('href')).toBe('/jenkins/plugin/jquery/jsmodules/jqueryui1/style.css');            

            done();
        });
    });
});
