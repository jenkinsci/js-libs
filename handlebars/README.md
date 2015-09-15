[Handlebars] module bundle (see [jenkins-js-modules]).

`import` this bundle (see [jenkins-js-modules]) into your application bundle (in your plugin etc) instead of bundling
Handlebars in your application bundle, making your app bundle considerably lighter.

# HPI Dependency
Your plugin needs to add a dependency on this plugin (to ensure it gets installed in Jenkins). 

```xml
<artifactItem>
    <groupId>org.jenkins-ci.ui</groupId>
    <artifactId>handlebars</artifactId>
    <version>1.0</version>
</artifactItem>
```

# Using Handlebars v3:

* __Bundle Id__: `handlebars:handlebars3`

Using this bundle via the lower level `import` syntax (asynchronous) is not very easy because of how
the Handlebarsify module interacts with the bundling process. For that reason, it is highly recommended to use the
higher level `require` syntax (synchronous) on the `handlebars` NPM module, and then use a `withExternalModuleMapping`
instruction ([jenkins-js-builder]) in the app bundle's `gulpfile.js`.  

In either case, you should also add a runtime dependency on the `jenkins-handlebars-rt` NPM module:

```
npm install --save jenkins-handlebars-rt
```
  
## `require` (sync)
If using [jenkins-js-builder] to create yor application bundle, you can code your application's CommonJS modules to
use the more simple CommonJS style `require` syntax (synch), as opposed to the lower level `import` syntax (async)
of [jenkins-js-modules].
   
When doing it this way, your module code should require the standard `handlebars` NPM module
(you should really only need to access handlebars if registering helpers - Handlebarsify looks after normal
templating) e.g.

```javascript
var handlebars = require('handlebars');

handlebars.registerHelper(name, helper);
```
    
> __Note__: [jenkins-js-builder] has special built in support for [Handlebars] templates. 
    
The above code will work fine as is, but the only downside is that your app bundle will be very bloated as it will
include the `handlebars` NPM module. To lighten your bundle for the browser (by using a shared instance of `handlebars`),
use [jenkins-js-builder] to create your app bundle (in your `gulpfile.js`), telling it to "map" (transform) all
synchronous `require` calls for `handlebars` to async `import`<sub>s</sub> of the `handlebars:handlebars3`
bundle (which actually `export`<sub>s</sub> `handlebars`) e.g.

```javascript
var builder = require('jenkins-js-builder');

//
// Use the predefined tasks from jenkins-js-builder.
//
builder.defineTasks(['test', 'bundle']);

//
// Create the app bundle, mapping sync require calls for 'handlebars' to 
// async imports of 'handlebars:handlebars3'.
//
builder.bundle('src/main/js/myapp.js')
    .withExternalModuleMapping('handlebars', 'handlebars:handlebars3')
    .inDir('src/main/webapp/bundles');
```
    
All of the above "magically" translates the appropriate bits of your app bundle's JS code to use async `import` calls
(see below) in a way that just works.

[Handlebars]: http://handlebarsjs.com/
[jenkins-js-builder]: https://github.com/tfennelly/jenkins-js-builder
[jenkins-js-modules]: https://github.com/tfennelly/jenkins-js-modules