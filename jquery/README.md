Jenkins CI jQuery JavaScript modules (Browserified).

To use jQuery in a Jenkins plugin JavaScript module (CommonJS style):

```javascript
var $;

//
// add plugin exports etc here ...
// Need to make sure you add the relevant assertions to check that `$` is initialised (see below). 
//

// See https://www.npmjs.com/package/jenkins-js-core
require('jenkins-js-core').requireModule('jquery', 'jquery2')
    .then(function(jquery2) {
        // See https://github.com/tfennelly/jquery-detached
        $ = jquery2.getJQuery(); // Or you can create a spanking new/clean jQuery instance via jQuery.newJQuery().
        
        // jQuery 2 is now loaded from the 'jquery' plugin
    });
```

To use jQuery UI in a Jenkins plugin JavaScript module (CommonJS style):

```javascript
var $ui;

//
// add plugin exports etc here ...
// Need to make sure you add the relevant assertions to check that `$ui` is initialised (see below). 
//

// See https://www.npmjs.com/package/jenkins-js-core
require('jenkins-js-core').requireModule('jquery', 'jqueryui1')
    .then(function(jqueryui1) {
        $ui = jqueryui1.getJQueryUI();
        
        // jQuery UI 1 is now loaded from the 'jquery' plugin
        // + the CSS has been added to the page.
    });
```

__Note__ that the `$ui` instance (in the above example) is a clean jQuery v2, with the jQuery UI v1
plugins installed onto it i.e. it can be safely used in the browser alongside other jQuery instances of 
different versions, or with different (and possibly conflicting) jQuery extensions.
See [jquery-detached](https://github.com/tfennelly/jquery-detached).