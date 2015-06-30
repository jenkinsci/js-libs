/* jslint node: true */
/* global describe, it, expect */

"use strict";

var testUtil = require("./test-util");

describe("handlebars3.js", function () {

    it("- test", function (done) {
        testUtil.onJenkinsPage(function(window) {
            // load handlebars3 to force the export
            require("../../main/js/handlebars3");
            
            var jenkins = require('jenkins-modules');
            jenkins.import("handlebars:handlebars3")
                .then(function(handlebars3) {                    
                    expect(handlebars3).toBeDefined();                                        
                    done();
                });
        });
    });
});
