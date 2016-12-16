//define(function (require) {
    // Load any app-specific modules
    // with a relative require call,
    // like:
    //var $ = require('jquery');
    //var bootstrap = require('bootstrap');
    //$(document).ready(function () {

require(['jquery','./messages', 'print','bootstrap'], function ($, messages, print) {

        // DOM ready
        $(function(){

            //var aptera = require('./aptera');
          //  var messages = require();

            // Load library/vendor modules using
            // full IDs, like:
            //var print = require();


            print(messages.getHello());






            //:: DROPDOWN ITEMS TOGGLE ::/
            $(".dropdown > a").click(function () {
                $(this).siblings("ul").stop(false, false).slideToggle();
                $(this).toggleClass("active");
            });
        })

    });
