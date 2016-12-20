define(function (require) {
    var Input = {
   // return {
        Replace: {
            _self: null,
            $formgroup: null,
            Init: function ($element) {
                _self = this;
                $formgroup = $element;
                this.toggleOnClick();

                // :: REMOVE BEFORE USING :: //
                $(".checkbox-console").text('InputReplace Inititialized');
                $(".radio-console").text('InputReplace Inititialized');
                // :: ------------------ :: //
            },
            toggleOnClick: function () {
                $formgroup.click(function () {
                    var $replaceWith = $(".input-replace-with", this);
                    _self.toggleInput(this);
                    _self.setActive();

                });
            },
            toggleInput: function ($formgroup) {
                var $input = $("input", $formgroup);
                var toggle = !($input.is(":checked"));
                $input.prop("checked", toggle);

                // :: REMOVE BEFORE USING :: //
                if ($input.attr("type") == "checkbox") {
                    $(".checkbox-console").text('"' + $(".checkbox-label", $formgroup).text() + '" state has been changed to "' + toggle + '"');
                } else {
                    $(".radio-console").text('"' + $(".radio-label", $formgroup).text() + '" state has been changed to "' + toggle + '"');
                }
                // :: ------------------ :: //
            },
            setActive: function () {
                $(".input-replace").each(function () {
                    var $replaceWith = $(".input-replace-with", this);
                    var isActive = $("input", this).is(":checked");
                    if (isActive) {
                        $replaceWith.addClass("active");
                    } else {
                        $replaceWith.removeClass("active");
                    }
                });
            },
            test: function () { console.log(":: INPUT ::");}
        }
    }
    return Input;


});
