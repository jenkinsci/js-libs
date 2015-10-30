var queue = [];
var inProcess = false;
var windowHandle = require('window-handle');

exports.add = function(queueEntry) {
    queue.push(queueEntry);
    
    if (!inProcess) {
        inProcess = true;
        processQueue();
    }
};

function processQueue() {
    var window = windowHandle.getWindow();
    var hasActiveScripts = hasActiveACEScripts();
    
    // If there's nothing in the queue and there are no active ACE editor
    // scripts (i.e. not fully loaded - the elements get removed after loading)
    // then we are done processing the queue for now. It will get fired
    // again next time something is added to the queue.
    if (queue.length === 0 && !hasActiveScripts) {
        // clear the ace object from the global namespace
        delete window.ace;
        inProcess = false;
        return;
    }    
    
    // Only process queue entries if there's nothing going on wrt loading
    // ACE scripts. If there are active scripts then fall through, set the
    // timer and come back in a while.
    if(queue.length > 0 && !hasActiveScripts) {
        var nextJob = queue[0];
        
        // And remove the first element from the array.
        queue.splice(0, 1);
        
        // Attach the ACE instance to the global scope. Yeah, this is horrible
        // but a fact of life - all of the ACE extensions etc expect it to be
        // there. We will remove it later once the config is completed i.e after
        // all the ace <script>s have loaded and been removed.
        window.ace = nextJob.ace;
        nextJob.configFunc.call(nextJob);
    }
    
    // Come back in a while and see can we do anything or clear the
    // ACE globals.
    setTimeout(function() {
        processQueue();
    }, 20);
}

function hasActiveACEScripts() {
    var scripts = getHeadElement().getElementsByTagName("script");
    for (var i = 0; i < scripts.length; i++) {
        // Is it an ace-editor script?
        if (isACEScript(scripts[i].getAttribute('src')) || isACEScript(scripts[i].getAttribute('data-referrer'))) {
            return true;
        }
    }    
    return false;
}

function isACEScript(url) {
    return (url && url.indexOf('plugin/ace-editor/packs/') !== -1);
}

function getHeadElement() {
    var window = windowHandle.getWindow();
    var docHead = window.document.getElementsByTagName("head");

    if (!docHead || docHead.length == 0) {
        throw 'No head element found in document.';
    }
    
    return docHead[0];
}
