//require(['jquery'], function ($) {

define(function (require) {

    //var web = (function () {

    // :: THE OBJECT TO RETURN :: //
    var _web_obj = {};
    var list = require('list');

    //// :: Aptera.Web.Input OBJECT :: //
    //var Input = {
    //    Replace: {
    //        _self: null,
    //        $formgroup: null,
    //        Init: function ($element) {
    //            _self = this;
    //            $formgroup = $element;
    //            this.toggleOnClick();

    //            // :: REMOVE BEFORE USING :: //
    //            $(".checkbox-console").text('InputReplace Inititialized');
    //            $(".radio-console").text('InputReplace Inititialized');
    //            // :: ------------------ :: //
    //        },
    //        toggleOnClick: function () {
    //            $formgroup.click(function () {
    //                var $replaceWith = $(".input-replace-with", this);
    //                _self.toggleInput(this);
    //                _self.setActive();

    //            });
    //        },
    //        toggleInput: function ($formgroup) {
    //            var $input = $("input", $formgroup);
    //            var toggle = !($input.is(":checked"));
    //            $input.prop("checked", toggle);

    //            // :: REMOVE BEFORE USING :: //
    //            if ($input.attr("type") == "checkbox") {
    //                $(".checkbox-console").text('"' + $(".checkbox-label", $formgroup).text() + '" state has been changed to "' + toggle + '"');
    //            } else {
    //                $(".radio-console").text('"' + $(".radio-label", $formgroup).text() + '" state has been changed to "' + toggle + '"');
    //            }
    //            // :: ------------------ :: //
    //        },
    //        setActive: function () {
    //            $(".input-replace").each(function () {
    //                var $replaceWith = $(".input-replace-with", this);
    //                var isActive = $("input", this).is(":checked");
    //                if (isActive) {
    //                    $replaceWith.addClass("active");
    //                } else {
    //                    $replaceWith.removeClass("active");
    //                }
    //            });
    //        }
    //    }
    //}

    //// :: ATTACH TO RETURN OBJECT _web_obj :: //
    _web_obj.list = list;
    //_web_obj.Input = Input;
    _web_obj.test = function () { console.log(":: Aptera Web Object Test Successful ::") };

    // :: EXPOSE "web_obj" OBJECT TO THE WORLD :: //
    return _web_obj;

    // })();

});