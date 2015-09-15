Module bundles for jQuery and jQuery UI (via [jquery-detached] and [jqueryui-detached]) (see [jenkins-js-modules]).

`import` this bundle (see [jenkins-js-modules]) into your application bundle (in your plugin etc) instead of bundling
jQuery or jQuery UI in your application bundle, making your app bundle considerably lighter.

`import`<sub>ing</sub> the jQuery UI bundle will also result in the jQuery UI CSS being added to the page (namespaced).
See below for more details.

# HPI Dependency
Your plugin needs to add a dependency on this plugin (to ensure it gets installed in Jenkins). 

```xml
<artifactItem>
    <groupId>org.jenkins-ci.ui</groupId>
    <artifactId>jquery-detached</artifactId>
    <version>1.0</version>
</artifactItem>
```

# Using jQuery v2:
(Scroll down for jQuery UI docs)

* __Bundle Id__: `jquery-detached:jquery2`

There are 2 ways of using `jquery-detached:jquery2` in your app bundle:
 
1. Normal `require` syntax (synchronous) on the `jquery-detached@2` NPM module, and then using a `withExternalModuleMapping` instruction ([jenkins-js-builder]) in the app bundle's `gulpfile.js`.  
1. Lower level `import` syntax (asynchronous).
  
## `require` (sync)
If using [jenkins-js-builder] to create yor application bundle, you can code your application's CommonJS modules to
use the more simple CommonJS style `require` syntax (synch), as opposed to the lower level `import` syntax (async)
of [jenkins-js-modules].
   
When doing it this way, your module code should require the `jquery-detached@2` NPM module and
call `getJQuery` to get the jQuery (`$`) instance e.g.

```javascript
var $ = require('jquery-detached').getJQuery();

var header = $('#header');
```
    
> __Note__: You should install `jquery-detached@2` as a dev dependency i.e. `npm install --save-dev jquery-detached@2`
    
The above code will work fine as is, but the only downside is that your app bundle will be very bloated as it will
include jQuery. To lighten your bundle for the browser (by using a shared instance of jQuery),
use [jenkins-js-builder] to create your app bundle (in your `gulpfile.js`), telling it to "map" (transform) all
synchronous `require` calls for `jquery-detached` to async `import`<sub>s</sub> of the `jquery-detached:jquery2`
bundle module (which actually `export`<sub>s</sub> `jquery-detached`) e.g.

```javascript
var builder = require('jenkins-js-builder');

//
// Use the predefined tasks from jenkins-js-builder.
//
builder.defineTasks(['test', 'bundle']);

//
// Create the app bundle, mapping sync require calls for 'jquery-detached' to 
// async imports of 'jquery-detached:jquery2'.
//
builder.bundle('src/main/js/myapp.js')
    .withExternalModuleMapping('jquery-detached', 'jquery-detached:jquery2')
    .inDir('src/main/webapp/bundles');
```
    
All of the above "magically" translates the appropriate bits of your app bundle's JS code to use async `import` calls
(see below) in a way that just works.     

## `import` (async)  
You can also use the lower level asynchronous `import` call ([jenkins-js-modules]) to get your `$` reference.  

```javascript
require('jenkins-js-modules')
    .import('jquery-detached:jquery2')
    .onFulfilled(function(jQuery) {
        var $ = jQuery.getJQuery();
        
        var header = $('#header');
    });
```

> __Note__: Using this async `import` approach makes unit testing of your JavaScript modules more tricky because 
> your test scaffolding code will need to manually `export` the `jquery-detached` module as `jquery-detached:jquery2`
> in order for the subsequent `import` to work without failure. This is not an issue when using the synchronous `require`
> approach (see above) because the bundle `import` is only introduced to the JS code as the bundle is being created.


# Using jQuery UI v1:

* __Bundle Id__: `jquery-detached:jqueryui1`
* __CSS Namespace__: `jquery-ui-1` (see below for more details)

There are 2 ways of using `jquery-detached:jqueryui1` in your app bundle:
 
1. Normal `require` syntax (synchronous) on the `jqueryui-detached-1.11` NPM module, and then using a `withExternalModuleMapping` instruction ([jenkins-js-builder]) in the app bundle's `gulpfile.js`.  
1. Lower level `import` syntax (asynchronous).
  
## `require` (sync)
If using [jenkins-js-builder] to create yor application bundle, you can code your application's CommonJS modules to
use the more simple CommonJS style `require` syntax (synch), as opposed to the lower level `import` syntax (async)
of [jenkins-js-modules].
   
When doing it this way, your module code should require the `jqueryui-detached-1.11` NPM module and
call `getJQueryUI` to get the jQuery UI instance (a clean/pristine jQuery instance decorated with the 
jQuery UI plugin) e.g.

```javascript
var $ui = require('jqueryui-detached-1.11').getJQueryUI();

$ui("#dialog").dialog();
```
    
> __Note__: You should install `jqueryui-detached-1.11` as a dev dependency i.e. `npm install --save-dev jqueryui-detached-1.11`
    
The above code will work fine as is, but the only downside is that your app bundle will be very bloated as it will
include both jQuery and jQuery UI. To lighten your bundle for the browser (by using a shared instance of jQuery UI),
use [jenkins-js-builder] to create your app bundle (in your `gulpfile.js`), telling it to "map" (transform) all
synchronous `require` calls for `jqueryui-detached-1.11` to async `import`<sub>s</sub> of the `jquery-detached:jqueryui1`
bundle (which actually `export`<sub>s</sub> `jqueryui-detached-1.11`) e.g.

```javascript
var builder = require('jenkins-js-builder');

//
// Use the predefined tasks from jenkins-js-builder.
//
builder.defineTasks(['test', 'bundle']);

//
// Create the app bundle, mapping sync require calls for 'jqueryui-detached-1.11' to 
// async imports of 'jquery-detached:jqueryui1'.
//
builder.bundle('src/main/js/myapp.js')
    .withExternalModuleMapping('jqueryui-detached-1.11', 'jquery-detached:jqueryui1')
    .inDir('src/main/webapp/bundles');
```
    
All of the above "magically" translates the appropriate bits of your app bundle's JS code to use async `import` calls
(see below) in a way that just works.     

## `import` (async)  
You can also use the lower level asynchronous `import` call ([jenkins-js-modules]) to get your `$ui` reference.  

```javascript
require('jenkins-js-modules')
    .import('jquery-detached:jqueryui1')
    .onFulfilled(function(jQueryUI) {
        $ui = jQueryUI.getJQueryUI();
        
        $ui("#dialog").dialog();
    });
```

> __Note__: Using this async `import` approach makes unit testing of your JavaScript modules more tricky because 
> your test scaffolding code will need to manually `export` the `jqueryui-detached-1.11` module as `jquery-detached:jqueryui1`
> in order for the subsequent `import` to work without failure. This is not an issue when using the synchronous `require`
> approach (see above) because the bundle `import` is only introduced to the JS code as the bundle is being created.

## CSS Namespacing / Scoping
`import`<sub>ing</sub> this bundle will also result in the jQuery UI CSS being added to the page (namespaced).
In order to apply jQuery UI v1 CSS rules to portions of page markup, the markup will need to be enclosed in an element
containing the `jquery-ui-1` class.

```html
<div class="jquery-ui-1">
   <!-- content in here can use jQuery UI v1 CSS rules. -->
<div>
```
 
> __Note__: Namespacing the CSS rules makes it safer to use multiple versions of the same CSS lib on the same page. 


### Namespacing pitfalls 
The above trick of wrapping the content in a `<div class="jquery-ui-1">` will not work for all jQuery UI
widgets because, in some cases, jQuery UI will unwrap the content and move it somewhere else before rendering. The
[Dialog] is one such widget that exhibits this behaviour (and apparently
[Autocomplete](https://jqueryui.com/autocomplete/) too).
  
Working around this is not all that difficult, but is a bit of a pain. The trick is to do the namespace wrapping
via JavaScript after the [Dialog] has been rendered (and jQuery UI has done it's thing). In the case of the
[Dialog] widget, it offers a `dialogClass` configuration option which can help with locating of the dialog
post rendering.
  
```javascript
$('#modal-dialog-content').dialog({
    dialogClass: "jenkins-plugin-XYZ-dialog",
    modal: true,
    buttons: {
        Ok: function () {
            $(this).dialog("close");
            // etc
        }
    }
});

// Use the dialogClass (from the options - see above) to locate
// the dialog and then wrap...
$('.jenkins-plugin-XYZ-dialog').wrap('<div class="jquery-ui-1"></div>');
```  

[jquery-detached]: https://github.com/tfennelly/jquery-detached
[jqueryui-detached]: https://github.com/tfennelly/jqueryui-detached
[jenkins-js-builder]: https://github.com/tfennelly/jenkins-js-builder
[jenkins-js-modules]: https://github.com/tfennelly/jenkins-js-modules
[Dialog]: https://jqueryui.com/dialog/