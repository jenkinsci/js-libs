/* jslint node: true */
/* global describe, it, expect */

"use strict";

var testUtil = require("./test-util");

describe("jquery.js", function () {

    it("- test", function (done) {
        testUtil.onJenkinsPage(function(window) {
            var $1 = require("../../main/js/jquery1");
            var $2 = require("../../main/js/jquery2");
            
            expect(window.$).not.toBeDefined();
            expect(window.jQuery).not.toBeDefined();
            
            expect($1('#divOnPage').text()).toBe('jQuery is everywhere');
            
            var $1_1 = require("../../main/js/jquery1");
            expect($1 === $1_1).toBe(true);

            var $1_2 = $1.newJQuery();
            expect($1 !== $1_2).toBe(true);
            
            expect($1('#divOnPage').text()).toBe('jQuery is everywhere');
            expect($1_2('#divOnPage').text()).toBe('jQuery is everywhere');

            var $2_1 = require("../../main/js/jquery2");

            expect($1('#divOnPage').jquery).toBe('1.9.1');
            
            expect(require("../../main/js/jquery2")).toBe(require("../../main/js/jquery2"));
            expect($2.newJQuery()).not.toBe($2_1);
            
            $1.fn.greenify = function() {
                this.css( "color", "green" );
            };

            $1("#divOnPage").greenify();

            try {
                $1_2("#divOnPage").greenify();
                expect('$1_2').toBe('throwing an exception');
            } catch (e) {
                // This is expected
            }
            
            done();
        });
    });
});
