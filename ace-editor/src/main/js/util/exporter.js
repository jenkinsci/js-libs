var windowHandle = require('window-handle');

exports.exportACE = function(acepack) {
    var acepackObj = new ACEPack(acepack);
    
    acepackObj.addScript('ace.js', function () {
        var window = windowHandle.getWindow();
        var jenkinsJSModules = require('jenkins-js-modules');
    
        acepackObj.setACE(window.ace);
        delete window.ace;
        // We only export the acepackObj after the ace instance
        // has been attached.
        jenkinsJSModules.export('ace-editor', acepack, acepackObj);
    });    
};

function ACEPack(acepack) {
    this.acepack = acepack;
}

ACEPack.prototype.setACE = function (ace) {
    var net = ace.require('ace/lib/net');

    // We replace ACE's own loadScript function with our own so as to
    // track the load state via the data-onload-complete attribute.
    var jenkinsJSModules = require('jenkins-js-modules');
    net.loadScript = function(path, callback) {
        jenkinsJSModules.addScript(path, {
            scriptSrcBase: '',
            success: callback,
            removeElementOnLoad: true
        });
    };
    
    this.ace = ace;
};

ACEPack.prototype.addScript = function (scriptName, callback) {
    var jenkinsJSModules = require('jenkins-js-modules');
    jenkinsJSModules.addScript('plugin/ace-editor/packs/' + this.acepack + '/' + scriptName, {
        success: callback,
        removeElementOnLoad: true
    });
};

ACEPack.prototype.edit = function(element, configClosure) {
    require('./config-queue').add({
        acePack: this,
        ace: this.ace,
        editor: this.ace.edit(element),
        configFunc: configClosure
    });
};
