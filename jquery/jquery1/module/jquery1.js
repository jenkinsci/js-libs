var jenkins = require('jenkins-js-core');
var jQuery1;
    
exports.getjQuery = function() {
    return jQuery1;
}

var dollar = jenkins.saveGlobal("$");
try {
    jQuery1 = require("jquery");
    
    // We have jQuery v1 now. Remove everything from global scope. All other Jenkins modules will now use the 
    // "jenkins-js-core" module to get the version of jQuery that they require. See the "exportModule".
    jQuery1.noConflict(true);
    
    // export the module so other Jenkins plugins can "require" it.
    // See https://github.com/tfennelly/jenkins-js-core
    jenkins.exportModule('jquery', 'jquery1', exports);
} finally {
    dollar.restore();    
}
