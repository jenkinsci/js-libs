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
        // See https://www.npmjs.com/package/detached-jquery
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