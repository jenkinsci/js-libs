

var handlebars = {};

require('jenkins-js-modules').import('handlebars:handlebars3')
    .onFulfilled(function(handlebars3) {
        for (var member in handlebars3) {
            handlebars[member] = handlebars3[member];
        }
    });

module.exports = handlebars;
