var Aptera = (function () {

    // :: THE OBJECT TO RETURN :: //
    var aptera_obj = {};

    var Web = (function () {

        var web_obj = {};
        // :::::::::::::::::::::::::::: //
        // :: APTERA.WEB.LIST OBJECT :: //
        // :::::::::::::::::::::::::::: //
        var List = {
            Source: null,
            Target: null,
            InsertPostion: null,
            Reverse: false,
            InitMerge: function (source, target, position) {
                this.SetSource(source);
                this.SetTarget(target);
                this.SetInsertPosition(position);
            },
            SetSource: function (source) {
                this.Source = source;
                this.SetDataListSource();
            },
            SetTarget: function (target) {
                this.Target = target;
            },
            SetInsertPosition: function (position) {
                this.InsertPosition = position;
            },
            Merge: function () {
                var ulItems = this.GetListItems(this.Source);
                var position = this.InsertPosition;
                if (this.GetListLength(this.Target) == 0) {
                    this.Target.append(ulItems);
                } else {
                    (position == 1) ? ulItems.insertBefore($('> li:first-child', this.Target)) : ulItems.insertAfter($('> li:nth-child(' + (position - 1) + ')', this.Target))
                }
            },
            SetDataListSource: function () {
                _self = this;
                $("li", this.Source).each(function () {
                    if ($(this).attr("data-source-list") == undefined) {
                        $(this).attr("data-source-list", _self.Source.attr("class"));
                        $(this).addClass("appended-item");
                    }
                });
            },
            Split: function () {
                $("li", this.Target).each(function () {
                    var dataSource = $(this).attr("data-source-list");
                    if (dataSource != undefined) {
                        var sourceListClassArray = ($(this).attr("data-source-list")).split(" ");
                        var sourceListClass = "";
                        $(sourceListClassArray).each(function () {
                            sourceListClass = sourceListClass + "." + this;
                        })
                        var $sourceList = $(sourceListClass);
                        $sourceList.append($(this));
                        $(this).removeClass("appended-item");
                    }
                })

            },
            GetListItems: function (ul) {
                return $('> li', ul);
            },
            GetListLength: function (ul) {
                return ul.find(">li").length;
            },
            Reverse: function (ul) {
                return ul.children().each(function (i, li) {
                    ul.prepend(li).addClass("reversed")
                });
            },
            AddClassToListItems: function (ul, className) {
                $("li", ul).each(function () {
                    $(this).addClass(className);
                });
            }

        }

        // ::::::::::::::::::::::::::::: //
        // :: APTERA.WEB.INPUT OBJECT :: //
        // ::::::::::::::::::::::::::::: //
        var Input = {
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
                }
            }
        }

        // ::  VARIABLES/OBJECTS ARE MADE PUBLIC BY :: //
        // :: ATTACHING THEM TO THE "web_obj" OBJECT :: //
        web_obj.List = List;
        web_obj.Input = Input;

        // :: EXPOSE "web_obj" OBJECT TO THE WORLD :: //
        return web_obj;

    })();

    // ::  VARIABLES/OBJECTS ARE MADE PUBLIC BY :: //
    // :: ATTACHING THEM TO THE "aptera_obj" OBJECT :: //
    aptera_obj.Web = Web;

    // :: EXPOSE "aptera_obj" OBJECT TO THE WORLD :: //
    return aptera_obj;




})();






//var nav1 = $(".nav1");
//var nav2 = $(".nav2");
//var nav3 = $(".nav3");
//var nav4 = $(".nav4");
//Aptera.List.InitMerge(nav1, nav2, 2);
//Aptera.List.Merge();

//var $inputReplace = $(".input-replace");
//Aptera.Input.Replace.Init($inputReplace);