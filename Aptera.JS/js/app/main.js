//define(function (require) {
    // Load any app-specific modules
    // with a relative require call,
    // like:
    //var $ = require('jquery');
    //var bootstrap = require('bootstrap');
    //$(document).ready(function () {

require(['jquery','aptera', 'bootstrap'], function ($, aptera) {

        // DOM ready
        $(function(){
            console.log(aptera.web.list.test());

            //:: DROPDOWN ITEMS TOGGLE ::/
            $(".dropdown > a").click(function () {
                $(this).siblings("ul").stop(false, false).slideToggle();
                $(this).toggleClass("active");
            });
        })

    });
