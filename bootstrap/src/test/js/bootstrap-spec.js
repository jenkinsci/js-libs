/* jslint node: true */
/* global describe, it, expect */

"use strict";

var testUtil = require("./test-util");

describe("bootstrap3.js", function () {

    it("- test", function (done) {
        testUtil.onJenkinsPage(function(window) {
            var bootstrap3 = require("../../main/js/bootstrap3");
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
        });
    });
});
