var jenkinsJSModules = require('jenkins-js-modules');

jenkinsJSModules.import('ace-editor:ace-editor-119')
    .onFulfilled(function (acePack) {
        acePack.edit('editor1', function() {
            var ace = acePack.ace;
            var editor = this.editor;
                        
            acePack.addScript('ext-language_tools.js', function() {
                ace.require("ace/ext/language_tools");
                editor.session.setMode("ace/mode/javascript");
                editor.setTheme("ace/theme/twilight");
                editor.setAutoScrollEditorIntoView(true);
                editor.setOption("maxLines", 30);
                // enable autocompletion and snippets
                editor.setOptions({
                    enableBasicAutocompletion: true,
                    enableSnippets: true,
                    enableLiveAutocompletion: false
                });
            });
        });
    });


jenkinsJSModules.import('ace-editor:ace-editor-122')
    .onFulfilled(function (acePack) {
        acePack.edit('editor2', function() {
            var ace = acePack.ace;
            var editor = this.editor;
                        
            acePack.addScript('ext-language_tools.js', function() {
                ace.require("ace/ext/language_tools");
                editor.session.setMode("ace/mode/groovy");
                editor.setTheme("ace/theme/tomorrow");
                editor.setAutoScrollEditorIntoView(true);
                editor.setOption("maxLines", 30);
                // enable autocompletion and snippets
                editor.setOptions({
                    enableBasicAutocompletion: true,
                    enableSnippets: true,
                    enableLiveAutocompletion: false
                });
            });
        });
    });