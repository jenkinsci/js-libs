/* jslint node: true */
/* global describe, it, expect */

"use strict";

var testUtil = require("./test-util");

describe("jquery-ui.js", function () {

    it("- test", function (done) {
        testUtil.onJenkinsPage(function() {
            var jQueryUIModule = require("../js/jqueryui1");
            var jQueryUI = jQueryUIModule.getJQueryUI();            
            expect(jQueryUI).toBeDefined();
            
            // let's check if it has the jQuery UI dialog function added
            var divOnPage = jQueryUI('#divOnPage');
            expect(divOnPage.dialog).toBeDefined();
            expect(divOnPage.text()).toBe('jQuery is everywhere');

            // let's make sure that's not the case for a regular unpolluted jQuery
            var $ = require('jquery-detached-2.1.4').getJQuery();
            expect($.dialog).not.toBeDefined();

            done();
        });
    });
});
