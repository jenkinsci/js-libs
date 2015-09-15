Twitter Bootstrap module bundle (see [jenkins-js-modules]).

`import` this bundle (see [jenkins-js-modules]) into your application bundle (in your plugin etc) instead of bundling
Twitter Bootstrap (and therefore jQuery) in your application bundle, making your app bundle
considerably lighter.

`import`<sub>ing</sub> this bundle will also result in the Twitter Bootstrap CSS being added to the page (namespaced).
 See below for more details.

# HPI Dependency
Your plugin needs to add a dependency on this plugin (to ensure it gets installed in Jenkins). 

```xml
<artifactItem>
    <groupId>org.jenkins-ci.ui</groupId>
    <artifactId>bootstrap</artifactId>
    <version>1.0</version>
</artifactItem>
```

# Using Bootstrap v3:

* __Bundle Id__: `bootstrap:bootstrap3`
* __CSS Namespace__: `bootstrap-3` (see below for more details)

There are 2 ways of using `bootstrap:bootstrap3` in your app bundle:
 
1. Normal `require` syntax (synchronous) on the `bootstrap-detached-3.3` NPM module, and then using a `withExternalModuleMapping` instruction ([jenkins-js-builder]) in the app bundle's `gulpfile.js`.  
1. Lower level `import` syntax (asynchronous).
  
## `require` (sync)
If using [jenkins-js-builder] to create yor application bundle, you can code your application's CommonJS modules to
use the more simple CommonJS style `require` syntax (synch), as opposed to the lower level `import` syntax (async)
of [jenkins-js-modules].
   
When doing it this way, your module code should require the `bootstrap-detached-3.3` NPM module and
call `getBootstrap` to get the Bootstrap instance (a clean/pristine jQuery instance decorated with the 
bootstrap plugin) e.g.

```javascript
var $bootstrap = require('bootstrap-detached-3.3').getBootstrap();

$bootstrap('[data-toggle="popover"]').popover();
```
    
> __Note__: You should install `bootstrap-detached-3.3` as a dev dependency i.e. `npm install --save-dev bootstrap-detached-3.3`
    
The above code will work fine as is, but the only downside is that your app bundle will be very bloated as it will
include both jquery and twitter bootstrap. To lighten your bundle for the browser (by using a shared instance of bootstrap),
use [jenkins-js-builder] to create your app bundle (in your `gulpfile.js`), telling it to "map" (transform) all
synchronous `require` calls for `bootstrap-detached-3.3` to async `import`<sub>s</sub> of the `bootstrap:bootstrap3`
bundle (which actually `export`<sub>s</sub> `bootstrap-detached-3.3`) e.g.

```javascript
var builder = require('jenkins-js-builder');

//
// Use the predefined tasks from jenkins-js-builder.
//
builder.defineTasks(['test', 'bundle']);

//
// Create the app bundle, mapping sync require calls for 'bootstrap-detached-3.3' to 
// async imports of 'bootstrap:bootstrap3'.
//
builder.bundle('src/main/js/myapp.js')
    .withExternalModuleMapping('bootstrap-detached-3.3', 'bootstrap:bootstrap3')
    .inDir('src/main/webapp/bundles');
```
    
All of the above "magically" translates the appropriate bits of your app bundle's JS code to use async `import` calls
(see below) in a way that just works.     

## `import` (async)  
You can also use the lower level asynchronous `import` call ([jenkins-js-modules]) to get your `$bootstrap` reference.  

```javascript
require('jenkins-js-modules')
    .import('bootstrap:bootstrap3')
    .onFulfilled(function(bootstrap3) {
        $bootstrap = bootstrap3.getBootstrap();
        
        $bootstrap('[data-toggle="popover"]').popover();
    });
```

> __Note__: Using this async `import` approach makes unit testing of your JavaScript modules more tricky because 
> your test scaffolding code will need to manually `export` the `bootstrap-detached-3.3` module as `bootstrap:bootstrap3`
> in order for the subsequent `import` to work without failure. This is not an issue when using the synchronous `require`
> approach (see above) because the bundle `import` is only introduced to the JS code as the bundle is being created.

## CSS Namespacing
`import`<sub>ing</sub> this bundle will also result in the Twitter Bootstrap CSS being added to the page (namespaced).
In order to apply Bootstrap 3 CSS rules to portions of page markup, the markup will need to be enclosed in an element
containing the `bootstrap-3` class.

```html
<div class="bootstrap-3">
   <!-- content in here can use Bootstrap 3 CSS rules. -->
<div>
```
 
> __Note__: Namespacing the CSS rules makes it safer to use multiple versions of the same CSS lib on the same page. 

# Notes

The `$bootstrap` instance (in the above examples) is a clean jQuery v2, with the Bootstrap 3 
plugins installed onto it i.e. it can be safely used in the browser alongside other jQuery instances of 
different versions, or with different (and possibly conflicting) jQuery extensions.
See [jquery-detached].

[jquery-detached]: https://github.com/tfennelly/jquery-detached
[jenkins-js-builder]: https://github.com/tfennelly/jenkins-js-builder
[jenkins-js-modules]: https://github.com/tfennelly/jenkins-js-modules