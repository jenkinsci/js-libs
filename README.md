# ❗ This repository is unmaintained and end of life!
<h2>
    All provided plugins are deprecated. <br>
    Dependents of these plugins are advised to migrate to modern and maintained ways to bundle libraries, like NPM or Yarn.
</h2>

# JavaScript Framework Library "bundle" plugins

This repository contains Jenkins HPI plugins that "externalize" common/shared JavaScript libraries
that can't be externalized via the [easy/recommended externalization process].

> __Note__: The [easy/recommended externalization process] was created after this repository was created.
> Before the new/easy process was created, all JavaScript libraries needed to be externalized via HPI plugins, which was a bit painful.
> This is the reason why you still see HPI plugins sub-modules here for some libraries that can now work via the
> [easy/recommended externalization process]. In each of these cases, the top level README.md files will indicate
> that the [easy/recommended externalization process] can now be used.

# Available Libs
See the README.md files for the different bundle plugins (sub-modules of this repo) for details on how to use them
e.g. 

* [Ace Editor](https://github.com/jenkinsci/js-libs/tree/master/ace-editor)  
* [Handlebars.js](https://github.com/jenkinsci/js-libs/tree/master/handlebars)
  
Other sub-modules in this repo (`momentjs` etc) contain plugin definitions for common/shared JavaScript libraries
that __can__ be externalized via the [easy/recommended externalization process].

> Also see __[sample plugins](https://github.com/jenkinsci/js-samples)__. 

[jenkins-js-modules]: https://github.com/tfennelly/jenkins-js-modules
[easy/recommended externalization process]: https://github.com/jenkinsci/js-samples/blob/master/step-04-externalize-libs/HOW-IT-WORKS.md#configure-node-build-to-externalize-dependencies
