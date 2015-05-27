var jenkins = require('jenkins-modules');
var moment = require('moment');

module.exports = moment;    

// Export so other Jenkins bundles can get it
jenkins.exportModule('momentjs', 'momentjs2', module.exports);