var jenkins = require('jenkins-js-core');
var jQuery2;
    
exports.getjQuery = function() {
    return jQuery2;
}

var dollar = jenkins.saveGlobal("$");
try {
    jQuery2 = require("jquery");
    
    // We have jQuery v2 now. Remove everything from global scope. All other Jenkins modules will now use the 
    // "jenkins-js-core" module to get the version of jQuery that they require. See the "exportModule".
    jQuery2.noConflict(true);
    
    // export the module so other Jenkins plugins can "require" it.
    // See https://github.com/tfennelly/jenkins-js-core
    jenkins.exportModule('jquery', 'jquery2', exports);
} finally {
    dollar.restore();    
}
