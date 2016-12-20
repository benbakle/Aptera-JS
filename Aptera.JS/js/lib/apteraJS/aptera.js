//define(function (require) {
// Load any app-specific modules
// with a relative require call,
// like:
//var $ = require('jquery');
//var bootstrap = require('bootstrap');

define(function (require) {

    // :: THE OBJECT TO RETURN :: //
    var _aptera = {};

    // :: ATTACH TO RETURN OBJECT _aptera_obj :: //
    _aptera.web = require('web');
    _aptera.input = require('input');
    _aptera.test = function () { console.log(":: Aptera Object Test Successful ::") };


    // :: EXPOSE "aptera_obj" OBJECT TO THE WORLD :: //
    return _aptera;
});