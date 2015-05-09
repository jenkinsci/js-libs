/* jslint node: true */
/* global describe, it, expect */

"use strict";

var testUtil = require("./test-util");

describe("jquery.js", function () {

    it("- test", function (done) {
        testUtil.onJenkinsPage(function(window) {
            var jquery1 = require("../../main/js/jquery1");
            var jquery2 = require("../../main/js/jquery2");
            var $1 = jquery1.getJQuery();
            
            expect(window.$).not.toBeDefined();
            expect(window.jQuery).not.toBeDefined();
            
            expect($1('#divOnPage').text()).toBe('jQuery is everywhere');
            
            var $2 = jquery1.getJQuery();
            expect($1 === $2).toBe(true);

            var $3 = jquery1.newJQuery();
            expect($1 !== $3).toBe(true);
            
            expect($1('#divOnPage').text()).toBe('jQuery is everywhere');
            expect($3('#divOnPage').text()).toBe('jQuery is everywhere');

            var $4 = jquery2.getJQuery();

            expect($1('#divOnPage').jquery).toBe('1.9.1');
            
            expect(jquery2.getJQuery()).toBe(jquery2.getJQuery());
            expect(jquery2.newJQuery()).not.toBe(jquery2.getJQuery());
            
            $1.fn.greenify = function() {
                this.css( "color", "green" );
            };

            $1("#divOnPage").greenify();

            try {
                $3("#divOnPage").greenify();
                expect('$3').toBe('throwing an exception');
            } catch (e) {
                // This is expected
            }
            
            done();
        });
    });
});
