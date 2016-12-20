//define(function (require) {
// Load any app-specific modules
// with a relative require call,
// like:
//var $ = require('jquery');
//var bootstrap = require('bootstrap');

define(function (require) {

    // :: THE OBJECT TO RETURN :: //
    var _aptera_obj = {};

    var web = require('web');

    // :: ATTACH TO RETURN OBJECT _aptera_obj :: //
    _aptera_obj.web = web;
    _aptera_obj.test = function () { console.log(":: Aptera Object Test Successful ::") };


    // :: EXPOSE "aptera_obj" OBJECT TO THE WORLD :: //
    return _aptera_obj;
});