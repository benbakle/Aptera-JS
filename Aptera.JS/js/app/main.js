
require(['aptera', 'bootstrap'], function (aptera) {

    // DOM ready
    $(function () {

        aptera.test();
        aptera.web.test();
        aptera.web.list.test();
        aptera.web.input.Init();

        //:: MOCK CONSOLE ::/

        //var $console = $(".console");
        //var $submit = $(".console-submit");
        //$submit.click(function () {
        //    var command = $console.val();
        //    var f = new Function(command);
        //    try {
        //        f();
        //    }
        //    catch (e) {
        //        command = e.message;
        //        console.log(command);
        //    }
        //    $console.val("");
        //    $(".console-display-text").append("<br />" + command);
        //    return false;

        //})

        var nav1 = $("#mergeListDemo .nav1");
        var nav2 = $("#mergeListDemo .nav2");
        var nav3 = $("#mergeListDemo .nav3");
        var nav4 = $("#mergeListDemo .nav4");

        var List = aptera.web.list;

        List.MergeInit(nav1, nav2, 2);
        List.MergeAsSub();
        List.MergeInit(nav3, nav2, 1);
        List.MergeAsDropdownItem("INSERT 1", 1);
        List.MergeInit(nav4, nav2, 3);
        List.MergeAsDropdownItem("INSERT 2", 1);

        //:: DROPDOWN ITEMS TOGGLE ::/
        $(".dropdown > a").click(function () {
            $(this).siblings("ul").stop(false, false).slideToggle();
            $(this).toggleClass("active");
        });
    })

});
