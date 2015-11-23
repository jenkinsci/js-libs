/* jslint node: true */
/* global describe, it, expect */

"use strict";

var testUtil = require("./test-util");

describe("Numeral.js", function () {

    it("- test formatting", function (done) {
        testUtil.onJenkinsPage(function (window) {
            var numeral = require("numeral");
            var formattedNumber = numeral(0.54).format('0.0%');
            expect(formattedNumber).toBe("54.0%");
            done();
        });
    });
});
