Jenkins CI Twitter Bootstrap JavaScript modules (Browserified).

To use in a Jenkins plugin JavaScript module (CommonJS style):

```javascript
var $bootstrap;

//
// add plugin exports etc here ...
// Need to make sure you add the relevant assertions to check that `$bootstrap` is initialised (see below). 
//

// See https://www.npmjs.com/package/jenkins-js-core
require('jenkins-js-core').requireModule('bootstrap', 'bootstrap3')
    .then(function(bootstrap3) {
        $bootstrap = bootstrap3.getBootstrap();
        
        // Bootstrap 3 is now loaded from the 'bootstrap' plugin
        // + the CSS has been added to the page.
    });
```