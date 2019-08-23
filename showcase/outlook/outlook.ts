/// <reference path="../../tsfiles/jquery.d.ts" /> 
/// <reference path="../../tsfiles/jquery.validation.d.ts" /> 
/// <reference path="../../tsfiles/ej.web.all.d.ts" />
var list: any, list1: any, data;
var listsource: any, dataList: any, listsource1: any, menusource: any = [];
var contact = [
    "Nancy@syncfusion.com",
    "Andrew@syncfusion.com",
    "Janet@syncfusion.com",
    "Margaret@syncfusion.com",
    "Steven@syncfusion.com", "Robert@syncfusion.com", "Michael@syncfusion.com", "Laura@syncfusion.com"
];
module WeatherAnalysis {
    $(function () {
        //$.validator.setDefaults({
        //    ignore: [],
        //    errorClass: 'e-validation-error',
        //    errorPlacement: function (error, element) {
        //        $(error).insertAfter(element.closest(".e-widget"));
        //    }
        //    // any other default options and/or rules
        //});     
        //listview,treeview and menu loaded with outlook information
        function isMac() {
            return (/(ipad|iphone|ipod touch)/i).test(navigator.userAgent.toLowerCase()) && !(/trident|windows phone/i.test(navigator.userAgent.toLowerCase()))
        }
        if (isMac())
            (<any>window).baseurl = "//js.syncfusion.com/ejServices/";
        else
            (<any>window).baseurl = (<any>window).baseurl;
        var dataManger1 = new ej.DataManager({
            url: (<any>window).baseurl + "api/WebMail/LoadData", crossDomain: true
        });
        dataManger1.executeQuery(new ej.Query()).done(function (e) {
            $("#templatelist").ejListView({ dataSource: e.result.OutlookItem });
            list = e.result.OutlookItem;
            $("#templatelist1").ejListView({ dataSource: e.result.OutlookItem1 });
            list1 = e.result.OutlookItem1;

            $("#treeView").ejTreeView({
                fields: { dataSource: e.result.TreeviewDB.TreeData }
            });
            $("#menujson").ejMenu({
                fields: { dataSource: e.result.MenuDB.MenuData }
            });
        });
        var ListViewModel = new ej.ListView($("#templatelist"), {
            showHeader: true,
            headerTitle: "Today",
            renderTemplate: true,
            height: "20%",
            width: "100%",
            templateId: 'listTempData',
            mouseDown: onMouseDown
        });
        var ListViewModel1 = new ej.ListView($("#templatelist1"), {
            showHeader: true,
            headerTitle: "Yesterday",
            renderTemplate: true,
            width: "100%",
            templateId: 'listTempData',
            mouseDown: onMouseDown
        });
        var autoCompleteModel = new ej.Autocomplete($("#autoTo"), {
            dataSource: contact,
            filterType: "contains",
            width: "593px",
            popupWidth: "230px",
            popupHeight: "250px",
            multiSelectMode: "visualmode",
            validationRules: {
                required: true
            },
            validationMessage: {
                required: " The message must have at least one recipient."
            }
        });
        var searchAuto = new ej.Autocomplete($("#searchAuto"), {
            width: "100%",
            watermarkText: "Search Mail and People",
            dataSource: contact,
            popupWidth: "300px",
            filterType: "contains"
        });
        var treeView = new ej.TreeView($("#treeView"), {
            fields: { id: "ID", parentId: "PID", text: "Name", hasChild: "HasChild", expanded: "Expanded" },
            nodeClick: nodeClick,
            template: "#treeTemplate"
        });
        var treeviewMenu = new ej.Menu($("#treeviewMenu"), {
            menuType: "contextmenu",
            contextMenuTarget: "#treeView",
            openOnClick: false,
        });
        var menujson = new ej.Menu($("#menujson"), {
            enableSeparator: false,
            width: "100%",
            fields: { id: "ID", parentId: "ParentId", text: "Text", spriteCssClass: "Sprite" },
            click: menuClick,
        });
        var listviewMenu = new ej.Menu($("#listviewMenu"), {
            menuType: "contextmenu",
            contextMenuTarget: "#templatelist,#templatelist1",
            openOnClick: false
        });
        var iconAccordion = new ej.Accordion($("#iconAccordion"), {
            enableMultipleOpen: true,
            customIcon: {
                header: "ej-icon-expander-down---01",
                selectedHeader: "ej-icon-up-arrow---01"
            }
        });
        var toButton = new ej.Button($("#toButton"), {
            width: "55px"
        });
        var ccButton = new ej.Button($("#ccButton"), {
            width: "55px"
        });
        var mailsubject = new ej.MaskEdit($("#mailsubject"), {
            watermarkText: "Enter subject here",
            width: "695px"
        });
        var autoCc = new ej.Autocomplete($("#autoCc"), {
            dataSource: contact,
            filterType: "contains",
            width: "593px",
            popupWidth: "230px",
            popupHeight: "250px",
            multiSelectMode: "visualmode",
        });
        var rteSample = new ej.RTE($("#rteSample"), {
            width: "710px",
            height: "350px",
            toolsList: ["formatStyle", "font", "style", "effects", "alignment", "lists", "indenting", "clipboard", "doAction", "clear", "casing", "print"]
        });
        var sendButton = new ej.Button($("#sendButton"), {
            width: "65px",
            type: "submit",
            click: Click
        });
        $("#textform").submit(function (e) {
            e.preventDefault();
        });
        function onMouseDown(args: any) {
            var selectnode: any, countnode: any, initialNode: any, initialNode1: any, data: any;
            selectnode = $("#treeView").data("ejTreeView").model.selectedNode;
            countnode = $(".e-treeview").find(".e-active").find("#count");
            initialNode = $($(".e-treeview").find("ul:not(ul:first)")[0]).find("li:first").find("#count");
            initialNode1 = $($(".e-treeview").find("ul:not(ul:first)")[1]).find("li:first").find("#count");
            data = $($(".e-treeview").find(".e-active").closest("ul").parent()).next().length !== 0 ? $($(".e-treeview").find(".e-active").closest("ul").parent()).next() : $($(".e-treeview").find(".e-active").closest("ul").parent()).prev();
            if (args.item.closest("#templatelist") && args.item.find(".subjectstyle").attr("style") != "undefined") {
                if (selectnode == -1 && args.item.find(".subjectstyle").css("font-weight") == "bold") {
                    initialNode.text(initialNode.text() - 1);
                    initialNode1.text(initialNode1.text() - 1);
                    if (initialNode.text() == "0")
                        initialNode.text("");
                    if (initialNode1.text() == "0")
                        initialNode1.text("");

                }
                if (countnode.length !== 0 && args.item.find(".subjectstyle").css("font-weight") == "bold") {
                    for (var j = 0; j < data.find("li").length; j++) {

                        if ($(".e-treeview").find(".e-active").find(".treeitem").text() == $(data.find("li")[j]).find(".treeitem").text()) {
                            $(data.find("li")[j]).find("#count").text(parseInt($(data.find("li")[j]).find("#count").text()) - 1);
                            countnode.text(countnode.text() - 1);
                            if ($(data.find("li")[j]).find("#count").text() == "0")
                                $(data.find("li")[j]).find("#count").text("");
                            if (countnode.text() == "0")
                                countnode.text("");
                        }
                    }
                }
            }
            $(".e-acrdn").css("display", "block");
            $(".paneltxt").css("display", "none");
            if ($(args.item).find(".descriptionstyle").text() == " No preview is available ")
                $("#accContent").attr("style", "display:none");
            else {
                $("#accCont").text($(args.item).find(".descriptionstyle").text());
                $("#accFrom").text($(args.item).find(".templatetext").text().trim().concat("."));
                $("#accTo").text($(args.item).find(".receiver").text().trim().concat(","));
            }
            $("#sub").text($(args.item).find(".subjectstyle").text());
            $("#date").text($(args.item).find(".designationstyle").text());
            $("#to").text($(args.item).find(".receiver").text());
            $(args.item).find(".designationstyle").css({ "font-weight": "normal", "font-family": "Segoe UI", color: "#333" });
            $(args.item).find(".subjectstyle").css({ "font-weight": "normal", "font-family": "Segoe UI", color: "#333" });
            $("#mailarea").addClass("hidden");
            $("#menujson li:nth-child(n+2)").css("display", "inline-block");
        }
        //compose menu item click
        function menuClick(args: any) {
            if (args.text == "New") {
                $("#autoTo").data("ejAutocomplete").clearText();
                $("#autoTo").data("ejAutocomplete").clearText();
                $("#mailsubject").ejMaskEdit({ "value": "" });
                $("#rteSample").ejRTE({ "value": "" });
                $("#mailarea").removeClass("hidden");
                $(".paneltxt").attr("style", "display:none");
                $("#iconAccordion").attr("style", "display:none");
                $("#menujson li:nth-child(n+2)").css("display", "none");
            }
        }
        //treenode click
        function nodeClick(args: any) {
            switch (args.currentElement.textContent) {
                case "Inbox":
                    $("#templatelist").ejListView({ "dataSource": list });
                    $("#templatelist1").ejListView({ "dataSource": list1 });
                    $("#ItemTitle").text("Inbox");
                    args.currentElement.nextSibling.textContent = "3";
                    setCount(args);
                    break;
                case "Clutter":
                    $("#templatelist").ejListView({ "dataSource": list });
                    $("#templatelist1").attr("style", "display:none");
                    $("#ItemTitle").text("Clutter");
                    args.currentElement.nextSibling.textContent = "3";
                    setCount(args);
                    break;
                case "Sent Items":
                    $("#templatelist1").ejListView({ "dataSource": list1 });
                    $("#templatelist").attr("style", "display:none");
                    $("#ItemTitle").text("Sent Items");
                    break;
                case "Drafts":
                    $("#templatelist").ejListView({ "dataSource": list });
                    $("#templatelist1").attr("style", "display:none");
                    $("#ItemTitle").text("Drafts");
                    args.currentElement.nextSibling.textContent = "3";
                    setCount(args);
                    break;
            }
            $("#iconAccordion").css("display", "none");
            $("#mailarea").addClass("hidden");
            $("#menujson li:nth-child(n+2)").css("display", "none");
            $(".paneltxt").attr("style", "display:block");
        }
        function setCount(option: any) {
            var value = $(option.currentElement).closest("li").parent().parent().next().length !== 0 ? $(option.currentElement).closest("li").parent().parent().next().find("ul") : $(option.currentElement).closest("li").parent().parent().prev().find("ul");
            for (var i = 0; i < value.children().length; i++) {
                if (option.currentElement.textContent == $(value.children()[i]).find(".treeitem").text()) {
                    $(value.children()[i]).find("#count").text("3");
                }
            }
        }
        //send button click
        function Click(args: any) {
            var val = $("#autoTo").data("ejAutocomplete").model.value;
            var name = val.substr(0, val.indexOf('@'));
            var title = $("#mailsubject").data("ejMaskEdit").model.value == null ? "(No Subject)" : $("#mailsubject").data("ejMaskEdit").model.value;
            var msg = $("#rteSample").data("ejRTE").model.value == "" ? "No preview is available" : $("#rteSample").data("ejRTE").model.value;
            if (val == "")
                return false;
            else {
                var obj = $("#templatelist1").data("ejListView");
                obj.addItem({ "ContactName": name, "ContactTitle": title, "Time": "9.00AM", "Message": msg, "To": "Krish Kael" }, 0, "");
                list1 = obj.model.dataSource;
                $("#mailarea").addClass("hidden");
                $(".paneltxt").attr("style", "display:block");
            }
        }
    });
}
