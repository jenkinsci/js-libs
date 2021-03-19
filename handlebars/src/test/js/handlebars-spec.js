/* jslint node: true */
/* global describe, it, expect */

"use strict";

var jsTest = require('@jenkins-cd/js-test');

describe("handlebars3.js", function () {

    it("- test", function (done) {
        jsTest.onPage(() => {
            var jenkins = require('@jenkins-cd/js-modules');
            jenkins.exportModule('handlebars', 'handlebars3', require('handlebars'));

            jenkins.importModule('handlebars:handlebars3')
                .onFulfilled(function (handlebars) {
                    expect(handlebars).toBeDefined();
                    done();
                });
        });
    });
});
