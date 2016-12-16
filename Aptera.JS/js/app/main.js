define(function (require) {
    // Load any app-specific modules
    // with a relative require call,
    // like:

    var aptera = require('./aptera');
    var messages = require('./messages');

    // Load library/vendor modules using
    // full IDs, like:
    var print = require('print');


    print(messages.getHello());
});
