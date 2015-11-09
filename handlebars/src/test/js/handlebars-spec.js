/* jslint node: true */
/* global describe, it, expect */

"use strict";

var testUtil = require("./test-util");

describe("handlebars3.js", function () {

    it("- test", function (done) {
        testUtil.onJenkinsPage(function() {
            var jenkins = require('jenkins-js-modules');
            jenkins.export('handlebars', 'handlebars3', require('handlebars'));
            jenkins.import("handlebars:handlebars3")
                .onFulfilled(function(handlebars3) {
                    expect(handlebars3).toBeDefined();                                        
                    done();
                });
        });
    });
});
