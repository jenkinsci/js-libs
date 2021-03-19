var builder = require('@jenkins-cd/js-builder');

//
// Bundle the module.
//
builder.bundle('handlebars', 'handlebars3')
    .inDir('src/main/webapp/jsmodules');
