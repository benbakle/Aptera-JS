define(function (require) {
    // Load any app-specific modules
    // with a relative require call,
    // like:
    var $ = require('jquery');

    //var aptera = require('./aptera');
    var messages = require('./messages');

    // Load library/vendor modules using
    // full IDs, like:
    var print = require('print');


    print(messages.getHello());

    $(document).ready(function () {
        console.log($(".nav2"));
        //:: DROPDOWN ITEMS TOGGLE ::/
        $(".dropdown > a").click(function () {
            $(this).siblings("ul").stop(false, false).slideToggle();
            $(this).toggleClass("active");
        });
    })

});
