/* jslint node: true */
/* global describe, it, expect */

"use strict";

var jsTest = require("jenkins-js-test");

var JENKINS_PAGE = '<html><head resURL="/jenkins"></head><body><div id="divOnPage">Bootstrap is everywhere</div></body></html>';

describe("bootstrap3.js", function () {

    it("- test", function (done) {
        jsTest.onPage(function(window) {
            var bootstrap3 = require("../js/bootstrap3");
            var $bootstrap = bootstrap3.getBootstrap();
            
            expect($bootstrap.fn.jquery).toBe('2.1.4');

            expect(window.$).not.toBeDefined();
            expect(window.jQuery).not.toBeDefined();

            expect($bootstrap('#divOnPage').text()).toBe('Bootstrap is everywhere');
            expect($bootstrap.fn.modal).toBeDefined();
            expect($bootstrap.fn.dropdown).toBeDefined();            
            
            done();
        }, JENKINS_PAGE);
    });
});
