var Browser = require("zombie");
var browser = new Browser();

browser.debug();

describe("ACE Editor", function () {

    it("- test page load", function (done) {
        var jsLoads = [];
        
        browser.on('request', function(request) {
            var url = request.url;
            if (endsWith(url, '.js')) {
                jsLoads.push(url);
            }
        });
        
        browser.visit('http://localhost:18999/jenkins/plugin/ace-editor/test.html', function() {
            expect(browser.success).toBe(true);
            
            // Make sure all the scripts were loaded as expected.
            expect(browser.success).toBe(true);
            expect(jsLoads[0]).toBe('http://localhost:18999/jenkins/plugin/ace-editor/jsmodules/test.js');
            expect(jsLoads[1]).toBe('http://localhost:18999/jenkins/plugin/ace-editor/jsmodules/ace-editor-122.js');
            expect(jsLoads[2]).toBe('http://localhost:18999/jenkins/plugin/ace-editor/packs/ace-editor-122/ace.js');
            expect(jsLoads[3]).toBe('http://localhost:18999/jenkins/plugin/ace-editor/packs/ace-editor-122/ext-language_tools.js');
            expect(jsLoads[4]).toBe('http://localhost:18999/jenkins/plugin/ace-editor/packs/ace-editor-122/mode-groovy.js');
            expect(jsLoads[5]).toBe('http://localhost:18999/jenkins/plugin/ace-editor/packs/ace-editor-122/theme-tomorrow.js');
            expect(jsLoads[6]).toBe('http://localhost:18999/jenkins/plugin/ace-editor/packs/ace-editor-122/snippets/text.js');
            expect(jsLoads[7]).toBe('http://localhost:18999/jenkins/plugin/ace-editor/test-snippets/groovy.js');

            // Check the content
            browser.assert.element('pre#editor2 .ace_text-input');
            browser.assert.element('pre#editor2 .ace_gutter');
            browser.assert.element('pre#editor2 .ace_scroller');
            
            // Need to destroy the ACE editor or the test will be blocked
            // by an active event loop.
            browser.window.aceEditors.e122.destroy();
            
            done();
        });
    }, 20000);
});

function endsWith(string, suffix) {
    return string.indexOf(suffix, string.length - suffix.length) !== -1;
}