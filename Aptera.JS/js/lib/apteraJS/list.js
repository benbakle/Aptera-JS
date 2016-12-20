define(function (require) {

    // :: Return Object :: //
    var _list_obj = {};

    // :: Private variables :: //
    var _source;
    var _target;
    var _pos;
    var _setDataListSrc = function () {
        _self = this;
        $("li", _source).each(function () {
            if ($(this).attr("data-source-list") == undefined) {
                $(this).attr("data-source-list", _source.attr("class"));
            }
        });
    }
    var _createSub = function (li) {
        return $(li).addClass("dropdown").append("<ul></ul>");
    }
    var _toLinkListItem = function (itemName, href) {
        href = href || "javascript:void(0)";
        return "<li class='inserted-item'><a href='" + href + "'>" + itemName + "</a></li>"
    }

    // :: Public variables :: //
    var Source = function (list) {
        if (list == undefined) {
            return _source
        }
        _source = list
        _setDataListSrc();
    }
    var Target = function (list) {
        return ((list == undefined) ? _target : _target = list);
    }
    var Position = function (pos) {
        if (pos == undefined) {
            return _pos
        } else {
            _pos = pos;
        }
    }
    var MergeInit = function (source, target, position) {
        Source(source);
        Target(target);
        Position(position);
    }
    var Merge = function () {
        var ulItems = Items(_source);
        var position = _pos;
        AddClassToItems(_source, "appended-item");
        if (ItemCount(_target) == 0) {
            _target.append(ulItems);
        } else {
            (position == 1) ? ulItems.insertBefore($('> li:first-child', _target)) : ulItems.insertAfter($('> li:nth-child(' + (position - 1) + ')', _target))
        }
    }
    var MergeAsSub = function (newListItem) {
        if (newListItem || "") {
            var listItem = _toLinkListItem(newListItem);
            AddListItemToList(listItem, _target, _pos);
        }
        _createSub($("> li:nth-child(" + _pos + ")", _target));
        ulInsertInto = $("> li:nth-child(" + _pos + ") > ul", _target);
        Target(ulInsertInto);
        Merge();
    }



    //function insertListAsDropdownItem(itemName, subList, intoList, parentPosition, subPosition) {
    //    var targetParent = getNthListItem(intoList, parentPosition);
    //    if (listIsEmpty($(" > ul ", targetParent))) {
    //        createSubList(targetParent);
    //        $(" > ul", targetParent).append("<li style='display:none'></li>")
    //    }
    //    var insertItem = toLinkListItem(itemName);
    //    addListItemToList(insertItem, $("> li:nth-child(" + parentPosition + ") > ul", intoList), subPosition);
    //    mergeListAsSub(subList, $("> li:nth-child(" + parentPosition + ") > ul", intoList), subPosition);
    //}



    var MergeAsDropdownItem = function (itemName, subPosition) {
        var targetParent = GetNthListItem(_target, _pos);
        if (ListIsEmpty($(" > ul ", targetParent))) {
            _createSub(targetParent);
            $(" > ul", targetParent).append("<li style='display:none'></li>")
        }
        var insertItem = _toLinkListItem(itemName);
        AddListItemToList(insertItem, $("> li:nth-child(" + _pos + ") > ul", _target), subPosition);
        Position(subPosition);
        Target($("> li:nth-child(" + _pos + ") > ul", _target));
        MergeAsSub();
    }
    var Split = function () {
        $("li", _target).each(function () {
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
    }
    var Reverse = function (ul) {
        return ul.children().each(function (i, li) {
            ul.prepend(li).addClass("reversed")
        });
    }
    var ListLength = function (ul) {
        return ul.find(">li").length;
    }
    var AddClassToItems = function (ul, className) {
        $("li", ul).each(function () {
            $(this).addClass(className);
        });
    }
    var Items = function (ul) {
        return $('> li', ul);
    }
    var ItemCount = function (ul) {
        return ul.find(">li").length;
    }
    var GetNthListItem = function (ul, childNum) {
        return ul.find("> li:nth-child(" + childNum + ")");
    }
    var ListIsEmpty = function (ul) {
        return ListLength(ul) == 0;
    }
    var AddListItemToList = function (listItem, ul, position) {
        var ul_len = ListLength(ul);
        (position > ul_len) ? $("> li:last-child", ul).after(listItem) : $("> li:nth-child(" + position + ")", ul).before(listItem);
    }

    // :: Expose public variables through List object :: //
    _list_obj.Source = Source;
    _list_obj.Target = Target;
    _list_obj.Position = Position;
    _list_obj.MergeInit = MergeInit;
    _list_obj.Merge = Merge;
    _list_obj.MergeAsSub = MergeAsSub;
    _list_obj.MergeAsDropdownItem = MergeAsDropdownItem;
    _list_obj.Split = Split;
    _list_obj.Reverse = Reverse;
    _list_obj.ListLength = ListLength;
    _list_obj.AddClassToItems = AddClassToItems;
    _list_obj.Items = Items;
    _list_obj.ItemCount = ItemCount;
    _list_obj.GetNthListItem = GetNthListItem;
    _list_obj.ListIsEmpty = ListIsEmpty;
    _list_obj.AddListItemToList = AddListItemToList;
    _list_obj.test = function () { return "test" };


    // :: Return object :: //
    return _list_obj;
});