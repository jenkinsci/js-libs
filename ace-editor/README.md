[Ace Editor] module bundle (see [jenkins-js-modules]).

# HPI Dependency
Your plugin needs to add a dependency on this plugin (to ensure it gets installed in Jenkins). 

```xml
<artifactItem>
    <groupId>org.jenkins-ci.ui</groupId>
    <artifactId>ace-editor</artifactId>
    <version>[VERSION]</version>
</artifactItem>
```

> See _[wiki.jenkins-ci.org](https://wiki.jenkins-ci.org/display/JENKINS/ACE+Editor+Plugin)_ to get the latest version.

# Using Ace Editor v1.2.2:

* __Bundle Id__: `ace-editor:ace-editor-122`

Because of how the [Ace Editor] was developed, it is not possible to use it through the normal CommonJS
synchronous `require`. Therefore, it is only possible to use it in Jenkins (via [jenkins-js-modules])
by using the asynchronous `import`.

```javascript
var jenkinsJSModules = require('jenkins-js-modules');

jenkinsJSModules.import('ace-editor:ace-editor-122')
    .onFulfilled(function (acePack) {
        
        // 'ace-editor:ace-editor-122' supplies an "ACEPack" object.
        // ACEPack understands the hardwired async nature of the ACE impl and so
        // provides some async ACE script loading functions.
        
        // Create an "editor" instance on the element having an
        // id of 'acme-editor' ...
        acePack.edit('acme-editor', function() {
            var ace = acePack.ace;
            var editor = this.editor;
            
            // Use the "addScript" function to add some Ace extensions.
            // See the Ace docs for these.
            acePack.addScript('ext-language_tools.js', function() {
                // Configure the editor instance. See the Ace docs.
                ace.require("ace/ext/language_tools");                
                editor.$blockScrolling = Infinity;
                editor.session.setMode("ace/mode/groovy");
                editor.setTheme("ace/theme/tomorrow");
                editor.setAutoScrollEditorIntoView(true);
                editor.setOption("minLines", 20);
                
                // Etc ... hook the editor into your app's UI
            });            
        });
    });
```

See the [Jenkins Workflow Editor code](https://github.com/jenkinsci/workflow-plugin/blob/master/cps/src/main/js/workflow-editor.js)
as an example of how to use this library.

[Ace Editor]: https://ace.c9.io
[jenkins-js-builder]: https://github.com/tfennelly/jenkins-js-builder
[jenkins-js-modules]: https://github.com/tfennelly/jenkins-js-modules