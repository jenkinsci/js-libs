# JavaScript Framework Library "bundle" plugins

This repository contains a number JavaScript libraries packaged as Jenkins bundle plugins that `export`
themselves to [jenkins-js-modules], allowing their top level module (JavaScript framework library) to be
`import`<sub>ed</sub> by modules in other bundles. This means that those "other" bundles do not need to include these
framework libs in their bundle, making them lighter etc.
  
See the README.md files for the different bundle plugins (sub-modules of this repo) for details on how to use them
e.g. [jQuery/jQueryUI](https://github.com/jenkinsci/js-libs/tree/master/jquery-detached),
[Twitter Bootstrap](https://github.com/jenkinsci/js-libs/tree/master/bootstrap) and
[Moment.js](https://github.com/jenkinsci/js-libs/tree/master/momentjs).  

[jenkins-js-modules]: https://github.com/tfennelly/jenkins-js-modules