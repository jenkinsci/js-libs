/* jslint node: true */
/* global describe, it, expect */

"use strict";

var jsTest = require("jenkins-js-test");

var JENKINS_PAGE = '<html><head resURL="/jenkins"></head><body><div id="divOnPage">Bootstrap is everywhere</div></body></html>';

describe("bootstrap3.js", function () {

    it("- test", function (done) {
        jsTest.onPage(function(window) {
            require('jenkins-modules').export('jquery-detached', 'jquery2', require("jquery-detached-2.1.4"));
            
            var bootstrap3 = require("../js/bootstrap3");
            var $bootstrap = bootstrap3.getBootstrap();
            
            expect($bootstrap.fn.jquery).toBe('2.1.4');

            expect(window.$).not.toBeDefined();
            expect(window.jQuery).not.toBeDefined();

            expect($bootstrap('#divOnPage').text()).toBe('Bootstrap is everywhere');
            expect($bootstrap.fn.modal).toBeDefined();
            expect($bootstrap.fn.dropdown).toBeDefined();            
            
            // Check that the CSS link was added to page
            var document = require('window-handle').getWindow().document;
            var cssEl = document.getElementById('jenkins-plugin-module:bootstrap:bootstrap3:css');            
            expect(cssEl).not.toBe(null);
            expect(cssEl.getAttribute('href')).toBe('/jenkins/plugin/bootstrap/jsmodules/bootstrap3/style.css');            
            
            done();
        }, JENKINS_PAGE);
    });
});
