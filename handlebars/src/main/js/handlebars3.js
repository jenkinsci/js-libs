var jenkins = require('jenkins-modules');
var handlebars = require('handlebars');

module.exports = handlebars;    

// Export so other Jenkins bundles can get it
jenkins.export('handlebars', 'handlebars3', module);