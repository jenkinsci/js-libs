

var handlebars = {};

require('jenkins-js-modules').import('handlebars:handlebars4')
    .onFulfilled(function(handlebars4) {
        for (var member in handlebars4) {
            handlebars[member] = handlebars4[member];
        }
    });

module.exports = handlebars;
