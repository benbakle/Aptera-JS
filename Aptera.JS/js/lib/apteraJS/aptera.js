
define(function (require) {

    // :: THE OBJECT TO RETURN :: //
    var _aptera_obj = {};

    var web = require('web');

    // :: ATTACH TO RETURN OBJECT _aptera_obj :: //
     _aptera_obj.web = web;

    // :: EXPOSE "aptera_obj" OBJECT TO THE WORLD :: //
    return _aptera_obj;
});