Jenkins CI Twitter Bootstrap JavaScript modules (Browserified).

To use in a Jenkins plugin JavaScript module (CommonJS style):

```javascript
var $bootstrap;

//
// add plugin exports etc here ...
// Need to make sure you add the relevant assertions to check that `$bootstrap` is initialised (see below). 
//

// See https://www.npmjs.com/package/jenkins-js-modules
require('jenkins-js-modules').import('bootstrap:bootstrap3')
    .then(function(bootstrap3) {
        $bootstrap = bootstrap3.getBootstrap();
        
        // Bootstrap 3 is now loaded from the 'bootstrap' plugin
        // + the CSS has been added to the page.
    });
```

__Note__ that the `$bootstrap` instance (in the above example) is a clean jQuery v2, with the Bootstrap 3 
plugins installed onto it i.e. it can be safely used in the browser alongside other jQuery instances of 
different versions, or with different (and possibly conflicting) jQuery extensions.
See [jquery-detached](https://github.com/tfennelly/jquery-detached).