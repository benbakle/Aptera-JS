define(function (require) {

    // :: THE OBJECT TO RETURN :: //
    var _web = {};

    // :: ATTACH TO RETURN OBJECT _web_obj :: //
    _web.list = require('list');
    _web.input = require('input');
    _web.test = function () { console.log(":: Aptera Web Object Test Successful ::") };

    // :: EXPOSE "_web" OBJECT TO THE WORLD :: //
    return _web;

    // })();

});