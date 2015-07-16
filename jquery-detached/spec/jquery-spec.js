/* jslint node: true */
/* global describe, it, expect */

"use strict";

var testUtil = require("./test-util");

describe("jquery.js", function () {

    it("- test", function (done) {
        testUtil.onJenkinsPage(function(window) {
            var $2 = require("../js/jquery2");
            
            expect(window.$).not.toBeDefined();
            expect(window.jQuery).not.toBeDefined();
            
            expect($2('#divOnPage').text()).toBe('jQuery is everywhere');
            
            var $2_1 = require("../js/jquery2");
            expect($2 === $2_1).toBe(true);

            var $2_2 = $2.newJQuery();
            expect($2 !== $2_2).toBe(true);
            
            expect($2('#divOnPage').text()).toBe('jQuery is everywhere');
            expect($2_2('#divOnPage').text()).toBe('jQuery is everywhere');

            done();
        });
    });
});
