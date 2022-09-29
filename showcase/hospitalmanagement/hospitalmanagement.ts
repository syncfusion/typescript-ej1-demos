/// <reference path="../../tsfiles/jquery.d.ts" />
/// <reference path="../../tsfiles/jsrender.d.ts" />
/// <reference path="../../tsfiles/ej.web.all.d.ts" />

var categoryclone = $.extend(true, [], (<any>window)["categorylist"]);
var doctorclone = $.extend(true, [], (<any>window)["doctorName"]);
var tempObj = [{ Text: "All", Color: "white", Value: "all", Designation: "All" }];
categoryclone.splice(0, 0, tempObj[0]);
doctorclone.splice(0, 0, tempObj[0]);
(<any>window)["list"] = (<any>window)["addlist"] = (<any>window)["appedit"] = (<any>window)["mediaQuery"] = (<any>window)['drop'] = (<any>window)["waitinglistedit"] = false;
ej.Schedule["Locale"]["en-US"] = { Resources: "DOCTORS" };
(<any>ej.Schedule.prototype)['_renderAppointmentCategory'] = function () {
    return;
}
var categoryCheck = true, doctorsCheck = true;
module AppointmentPlanner {
    $(function () {
        var schedule = new ej.Schedule($("#DoctorSchedule"), {
            width: "100%", cellWidth: "50px",
            height: "100%",
            currentDate: new Date(2016, 3, 1),
            orientation: "horizontal",
            views: ["day", "week", "month"],
            currentView: "day",
            showCurrentTimeIndicator: false,
            showQuickWindow: false,
            startHour: 7,
            endHour: 23,
            timeZone: "UTC -08:00",
            resourceHeaderTemplateId: "#resTemplate",
            appointmentTemplateId: "#doctortemplate",
            tooltipSettings: {
                enable: true,
                templateId: "#tooltipTemp"
            },
            group: { resources: ["Rooms", "Owners"] },
            resources: [{
                field: "RoomId", title: "Room", name: "Rooms", allowMultiple: false,
                resourceSettings: { dataSource: $.extend(true, [], (<any>window)["departmentName"]), text: "Text", id: "Id", groupId: "GroupId", color: "Color" }
            }, {
                    field: "OwnerId", title: "Owner", name: "Owners", allowMultiple: true,
                    resourceSettings: { dataSource: $.extend(true, [], (<any>window)["doctorName"]), text: "Text", id: "Id", groupId: "GroupId", color: "Color" }
                }],
            appointmentSettings: {
                dataSource: (<any>window)["hospitaldata"],
                id: "Id",
                subject: "Subject",
                startTime: "StartTime",
                endTime: "EndTime",
                description: "Description",
                allDay: "AllDay",
                recurrence: "Recurrence",
                recurrenceRule: "RecurrenceRule",
                resourceFields: "RoomId,OwnerId"
            },
            appointmentWindowOpen: onAppointmentWindowOpen,
            navigation: OnNavigation,
            queryCellInfo: onQueryCellInfo,
            actionComplete: onCustomization
        });
        var categoryLists = new ej.ListBox($("#categorylist"), {
            width: "100%",
            height: "100%",
            showCheckbox: true,
            checkedIndices: [0, 1, 2, 3, 4, 5, 6],
            dataSource: categoryclone,
            fields: { text: "Text" },
            checkChange: onListCheck,
            template: "<div id='clist' class='categoryname'>${Text}</div><div style='float:right;'><i class='icon-category' style='color:${Color}'></i></div>"
        });
        var doctorDesignation = new ej.DropDownList($("#doctorlist"), {
            dataSource: doctorclone,
            fields: { text: "Designation" },
            selectedIndex: 0,
            width: "100%",
            popupHide: onDoctorlistHide
        });
        var doctorLists = new ej.ListBox($("#doctorsdeptlist"), {
            width: "100%",
            height: "100%",
            showCheckbox: true,
            checkedIndices: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            dataSource: (<any>window)["doctorName"],
            fields: { text: "Text" },
            checkChange: onListCheck,
            template: "<div id='doctors'><div id='dtrimage'><img class='doctorimg' src='../../content/images/hospitalmanagement/${Text}.png' alt='doctor'/></div><div id='dtrdetails'><div class='doctorname'>${Name}</div><div class='designation'>${Designation}</div></div><div id='dtrcategory'><i class='icon-${Value}'></i></div></div>"
        });
        var calendar = new ej.DatePicker($("#datepicker"), {
            width: "100%",
            height: "100%",
            select: onSelected,
            showFooter: false,
            displayInline: true,
            value: new Date(2016, 3, 1)
        });
        var waitingList = new ej.ListBox($("#upcomming"), {
            width: "100%",
            height: "100%",
            dataSource: (<any>window)["waitinglist"],
            fields: { text: "Subject" },
            allowDrag: true,
            allowDrop: true,
            select: onListClick,
            itemDrag: onNodeDragging,
            itemDragStop: onDragStop,
            template: "<div id='waiting'><div id='waiticon'><div class='icon-waiticon'></div></div><div id='waitid'>${Id}</div><div id='waitdetails'><div id='waitlist'>${Subject}</div><div id='waitcategory'>${dept} - ${Category}</div></div><div id='waitcategoryicon'><i class='icon-category' style='color:${Categorycolor}'></i></div></div>"
        });
        var dateofbirth = new ej.DatePicker($("#patientdob"), {
            width: "170px"
        });
        var searchbox = new ej.Autocomplete($("#txtSearch"), {
            width: "140px",
            watermarkText: "Search",
            showEmptyResultText: true,
            showPopupButton: true,
            close: onSearchResultSelect,
            filterType: "equal"
        });
        var showhidesearchbtn = new ej.ToggleButton($("#searchbtn"), {
            size: "normal",
            width: "30px",
            height: "30px",
            showRoundedCorner: false,
            contentType: "imageonly",
            defaultPrefixIcon: "icon-search",
            activePrefixIcon: "icon-close datesearch",
            click: onSearchClick
        });
        var appcategory = new ej.DropDownList($("#category"), {
            width: "150px",
            dataSource: (<any>window)["categorylist"],
            selectedIndex: 0,
            fields: { text: "Text" }
        });
        var appstarttime = new ej.DateTimePicker($("#StartTime"), {
            width: "150px",
            timeDrillDown: {
                enabled: true,
                interval: 30,
                showMeridian: false
            }
        });
        var appendtime = new ej.DateTimePicker($("#EndTime"), {
            width: "150px",
            timeDrillDown: {
                enabled: true,
                interval: 30,
                showMeridian: false
            }
        });
        var searchtype = new ej.DropDownList($("#searchlist"), {
            dataSource: ["ID", "Name", "Category", "Description", "Date"],
            selectedIndex: 0,
            width: "100px",
            popupHide: onSearchtypeHide
        });
        var searchstartdate = new ej.DatePicker($("#startdatepicker"), {
            width: "120px",
            watermarkText: "From Date",
            select: onSearchDateChange,
            value: new Date(2016, 3, 1)
        });
        var searchenddate = new ej.DatePicker($("#enddatepicker"), {
            width: "120px",
            watermarkText: "To Date",
            select: onSearchDateChange,
            value: new Date(2016, 3, 1)
        });
        var buttonsubmit = new ej.Button($("#btnsubmit"), {
            size: "normal",
            width: "70px",
            showRoundedCorner: false
        });
        var buttoncancel = new ej.Button($("#btncancel"), {
            size: "normal",
            width: "70px",
            showRoundedCorner: false
        });
        var buttonappsubmit = new ej.Button($("#appsubmit"), {
            size: "normal",
            width: "70px",
            showRoundedCorner: false
        });
        var buttonappcancel = new ej.Button($("#appcancel"), {
            size: "normal",
            width: "70px",
            showRoundedCorner: false
        });
        var buttonrecsubmit = new ej.Button($("#recsubmit"), {
            size: "normal",
            width: "70px",
            showRoundedCorner: false
        });
        var buttonreccancel = new ej.Button($("#reccancel"), {
            size: "normal",
            width: "70px",
            showRoundedCorner: false
        });
        var buttonpatientsave = new ej.Button($("#patientsave"), {
            size: "normal",
            width: "70px",
            showRoundedCorner: false
        });
        var buttonpatientcancel = new ej.Button($("#patientcancel"), {
            size: "normal",
            width: "70px",
            showRoundedCorner: false
        });
        var buttonalertok = new ej.Button($("#alertok"), {
            size: "normal",
            width: "70px",
            showRoundedCorner: false
        });
        var buttonalertcancel = new ej.Button($("#alertcancel"), {
            size: "normal",
            width: "70px",
            showRoundedCorner: false
        });
        var frontbuttonnew = new ej.Button($("#new"), {
            size: "normal",
            width: "100%",
            click: onButtonClick
        });
        var frontbuttondelete = new ej.Button($("#delete"), {
            size: "normal",
            width: "100%",
            click: onButtonClick
        });
        var patientaddbtn = new ej.Button($("#patientadd"), {
            size: "normal",
            width: "100px",
            click: onPatientNew
        });
        var patientbuttonsave = new ej.Button($("#patientsave"), {
            click: onPatientDetails
        });
        var patientbuttoncancel = new ej.Button($("#patientcancel"), {
            click: onPatientDetails
        });
        var appointmentbuttonsubmit = new ej.Button($("#appsubmit"), {
            click: onAppointmentClick
        });
        var appointmentbuttoncancel = new ej.Button($("#appcancel"), {
            click: onAppointmentClick
        });
        var recurrencebuttonsubmit = new ej.Button($("#recsubmit"), {
            click: onRecurrenceClick
        });
        var recurrencebuttoncancel = new ej.Button($("#reccancel"), {
            click: onRecurrenceClick
        });
        var alertbuttonok = new ej.Button($("#alertok"), {
            click: onAlertClick
        });
        var alertbuttoncancel = new ej.Button($("#alertcancel"), {
            click: onAlertClick
        });
        var recurCheckbox = new ej.CheckBox($("#recurrence"), {
            checked: false,
            enabled: true,
            change: recurCheck
        });
        var recurrenceeditor = new ej.RecurrenceEditor($("#recurrenceEditor"), {
            selectedRecurrenceType: 0,
            frequencies: ["daily", "weekly", "monthly", "yearly", "everyweekday"]
        });
        var hospitaldepartments = new ej.DropDownList($("#dept"), {
            width: "150px",
            dataSource: (<any>window)["departmentName"],
            fields: { text: "Text", id: "Id", value: "Text" },
            popupHide: onDropdownHide
        });
        var hospitaldoctors = new ej.DropDownList($("#deptdoctors"), {
            width: "150px",
            dataSource: (<any>window)["doctorName"],
            fields: { text: "Text", id: "Id", value: "Text" }
        });
        var datesearchbtn = new ej.ToggleButton($("#datesearch"), {
            size: "normal",
            width: "30px",
            height: "30px",
            contentType: "imageonly",
            defaultPrefixIcon: "icon-search",
            activePrefixIcon: "icon-close datesearch",
            click: onDateSearch
        });
        var appointmentwindow = new ej.Dialog($("#customWindow"), {
            width: "auto",
            height: "auto",
            showOnInit: false,
            enableModal: true,
            title: "Patient Appointment Details",
            enableResize: false,
            allowKeyboardNavigation: false,
            close: clearFields
        });
        var patientwindow = new ej.Dialog($("#patientWindow"), {
            width: "auto",
            height: "auto",
            showOnInit: false,
            enableModal: true,
            title: "Patient Details",
            enableResize: false,
            allowKeyboardNavigation: false,
            close: clearFields
        });
        var tokenwindow = new ej.Dialog($("#tokenWindow"), {
            width: "auto",
            height: "auto",
            showOnInit: false,
            enableModal: true,
            title: "Appointment Token",
            enableResize: false,
            allowKeyboardNavigation: false,
            close: clearFields
        });
        var alertwindow = new ej.Dialog($("#alertWindow"), {
            width: "auto",
            height: "auto",
            showOnInit: false,
            enableModal: true,
            title: "Delete Confirmation",
            enableResize: false,
            allowKeyboardNavigation: false
        });
        var deletewindow = new ej.Dialog($("#deleteWindow"), {
            width: "auto",
            height: "auto",
            showOnInit: false,
            enableModal: true,
            title: "Delete Appointment",
            enableResize: false,
            allowKeyboardNavigation: false,
            close: clearFields
        });
    });
}
function onDateSearch(args: any) {
    if (args.isChecked) {
        $("#datesearch").ejToggleButton({ toggleState: false });
        var strDate = $("#startdatepicker").val();
        var endDate = $("#enddatepicker").val();
        if (strDate !== "" && strDate !== null && endDate !== "" && endDate !== null) {
            var schObj = $("#DoctorSchedule").ejSchedule('instance');
            var query = new ej.Predicate("StartTime", ej.FilterOperators.greaterThanOrEqual, new Date(strDate), false).and("StartTime", ej.FilterOperators.lessThanOrEqual, new Date(new Date(endDate).setHours(23, 59, 59)), false);
            var result = new ej.DataManager(schObj._processed).executeLocal(new ej.Query().where(<any>query));
            if ((<any>result).length > 0) {
                showResult(result, "DateSearch");
            }
        }
        else {
            $("#datesearch").ejToggleButton({ toggleState: false });
        }
    }
    else {
        onSearchClose();
    }
}

function onSearchDateChange(args: any) {
    $("#datesearch").ejToggleButton({ toggleState: false });
}

function onWindowResize() {
    if (ej.isMobile()) return false;
    $("#DoctorSchedule").find(".e-scheduleheader").parent().append($("<tr></tr>").append("<div id='grid2'></div>"));
    $("#DoctorSchedule").find('*[id*=Appointment_]').height($("#DoctorSchedule").find(".e-workcells").height() - 1);
    var mediaQuery = window.innerWidth < 768;
    if (mediaQuery) {
        $(".leftcol").css("display", "none");
        $(".rightcol").css("display", "none");
    }
    else {
        $(".leftcol").removeClass("leftpanel");
        $(".rightcol").removeClass("rightpanel");
    }
    if ($("#searchdata").is(":visible")) $(".displayright").find(".e-togglebutton").click();
    $("#customWindow,#patientWindow,#deleteWindow,#alertWindow,#tokenWindow").ejDialog("close");
    onRefresh();
    setTimeout(function () { onCustomization(); }, 500);
}

function onRefresh() {
    $("#categorylist").ejListBox('instance').refresh();
    $("#doctorsdeptlist").ejListBox('instance').refresh();
    $("#upcomming").ejListBox('instance').refresh();
    onCustomization();
}

function onWaitingOpen(e: any) {
    (<any>window)["waitinglistedit"] = true;
    var schObj = $("#DoctorSchedule").ejSchedule('instance');
    var wid = parseInt($(e.currentTarget).find("#waitid").html());
    var waitAppointment = new ej.DataManager((<any>window)["waitinglist"]).executeLocal(new ej.Query().where("Id", ej.FilterOperators.equal, (<any>wid)));
    var schArgs = [{ appointment: (<any>waitAppointment)[0], edit: true, waitinglistedit: true, type: "appointmentWindowOpen", model: (<any>schObj).model, cancel: false }];
    onAppointmentWindowOpen(schArgs[0]);
}

function onSearchClick() {
    $("#searchdata").toggle();
    var btnObj = $("#searchbtn").ejToggleButton('instance');
    if (!btnObj.toggleState()) {
        $('#searchlist').ejDropDownList({ selectedIndex: 0 });
        $("#txtSearch").ejAutocomplete({ dataSource: [], enabled: true });
        $(".searchdatepicker,#datesearchpanel").css("display", "none");
    }
    onSearchClose();
}

function onPanelHide(e: any) {
    if ($(".leftcol").is(":visible") && !$(e.target).hasClass("icon-left") && $(e.target).closest(".leftcol").length == 0) {
        $(".leftcol").toggle();
        $("#lefticon").css("left", "10px");
        $("#lefticon").children().addClass("icon-right").removeClass("icon-left");
    }
    if ($(".rightcol").is(":visible") && !$(e.target).hasClass("icon-right") && $(e.target).closest(".rightcol").length == 0) {
        $(".rightcol").toggle();
        $("#righticon").css("right", "0px");
        $("#righticon").children().addClass("icon-left").removeClass("icon-right");
    }
}

function onLeftRightPanel(e: any) {
    var id = $(e.target).closest("#lefticon, #righticon").attr("id");
    switch (id) {
        case "lefticon":
            $(".leftcol").toggle();
            var leftshowhide = $(".leftcol").is(":visible");
            (leftshowhide) ? $(".leftcol").addClass("leftpanel") : $(".leftcol").removeClass("leftpanel");
            (leftshowhide) ? $("#lefticon").children().addClass("icon-left").removeClass("icon-right") : $("#lefticon").children().addClass("icon-right").removeClass("icon-left");
            $("#lefticon").css("left", (leftshowhide ? 260 : 10) + "px");

            var rightshowhide = $(".rightcol").is(":visible");
            if (leftshowhide && rightshowhide) {
                $(".rightcol").toggle();
                $(".rightcol").removeClass("rightpanel");
                $("#righticon").css("right", "0px");
                $("#righticon").children().addClass("icon-left").removeClass("icon-right");
            }
            onRefresh();
            break;
        case "righticon":
            $(".rightcol").toggle();
            var rightshowhide = $(".rightcol").is(":visible");
            (rightshowhide) ? $(".rightcol").addClass("rightpanel") : $(".rightcol").removeClass("rightpanel");
            (rightshowhide) ? $("#righticon").children().addClass("icon-right").removeClass("icon-left") : $("#righticon").children().addClass("icon-left").removeClass("icon-right");
            $("#righticon").css("right", (rightshowhide ? 250 : 0) + "px");

            var leftshowhide = $(".leftcol").is(":visible");
            if (leftshowhide && rightshowhide) {
                $(".leftcol").toggle();
                $(".leftcol").removeClass("leftpanel");
                $("#lefticon").css("left", "10px");
                $("#lefticon").children().addClass("icon-right").removeClass("icon-left");
            }
            onRefresh();
            break;
    }
}

function onResIconClick(e: any) {
    var schArgs = $("#DoctorSchedule").ejSchedule('instance');
    schArgs._onResourceClick(e);
    e.stopPropagation();
    $("#DoctorSchedule").find('*[id*=Appointment_]').height($("#DoctorSchedule").find(".e-workcells").height() - 1);
}

function onCustomization() {
    $("#categorylist_container").css("height", "100%");
    $("#categorylist li:first-child").find(".icon-category").hide();
    $('*[id*=_categorylist]').css({ float: "left", marginRight: "10px" });
    $('*[id*=_doctorsdeptlist]').css({ float: "left", marginTop: "3px" });
    $("#datepicker").children().css({ border: "none", backgroundColor: "white" });
    $("#datepicker").find(".e-week-header").css("background-color", "white");
    $("#datepicker").find(".e-header").css({ backgroundColor: "white", borderBottom: "none" });
    $(".listbox").children().css("border", "none");
    $("#doctorsdeptlist_container").css("border", "none");
    $("#datepicker").find("#e-datepicker").width($(".calendarcontent").width() - 1);
    $("#datepicker").find("#e-datepicker").children().width($(".calendarcontent").width() - 1);
    $("#upcomming_container").css("border", "none");
    $("#upcomming_container").find(".e-vscrollbar").remove();
    $("#upcomming").parent().css("width", "100%");
    $("#upcomming").children().addClass("waitinglistli");
    $("#txtSearch_dropdown").css({ borderLeft: "none", backgroundColor: "white", opacity: 0.5 });
    $(".e-ampmdisplay").css("margin-right", "4px");
    $("#DoctorSchedule").find(".e-headerdays table tr").first().children().css("background-color", "#F5F5F5");
    $("#DoctorSchedule").find('*[id*=Appointment_]').height($("#DoctorSchedule").find(".e-workcells").height() - 1);
    $("#DoctorSchedule").find(".e-scheduleheader").parent().append($("<tr></tr>").append("<div id='grid2'></div>"));
    onScroller();
    onHover();
    $(".showcasecontainer").ejWaitingPopup("hide");
}

function onHover() {
    $(".waitinglistli").mouseout(function (e) {
        $("#waitinglisttooltip").css("display", "none");
    }).mouseover(function (e) {
            var hoverObj = new ej.DataManager((<any>window)["waitinglist"]).executeLocal(new ej.Query().where("Id", ej.FilterOperators.equal, parseInt($(e.currentTarget).find("#waitid").html())));
            var hoverName = new ej.DataManager((<any>window)["doctorName"]).executeLocal(new ej.Query().where("Id", ej.FilterOperators.equal, (<any>hoverObj)[0].OwnerId));
            $("#waitinglisttooltip").css({ display: "block", top: ($(this).offset().top - $("#waitinglisttooltip").outerHeight()) + "px", left: ($(this).offset().left - 5) + "px" });
            $("#docname").html((<any>hoverName)[0].Text + "  (" + (<any>hoverName)[0].Designation + ")");
            $("#docstarttime").html((<any>hoverObj)[0].StartTime.toLocaleString());
            $("#docendtime").html((<any>hoverObj)[0].EndTime.toLocaleString());
        });
}

function onButtonClick(args: any) {
    if ($(args.e.currentTarget).hasClass("add")) {
        (<any>window)["addlist"] = true;
        var schArgs = $("#DoctorSchedule").ejSchedule('instance');
        if (!schArgs.model.readOnly) {
            //$("#customWindow").ejDialog(this.appointmentwindow);
            $("#subject").ejAutocomplete({
                width: "100%",
                dataSource: (<any>window)["patientlist"],
                watermarkText: "Select Patient Name",
                fields: { text: "Name" },
                showPopupButton: false
            });
            $("#customWindow").ejDialog("open");
            clearFields();
            $("#StartTime").ejDateTimePicker({ value: new Date() });
            $("#EndTime").ejDateTimePicker({ value: new Date(new Date().setMinutes(new Date().getMinutes() + 30)) });
            var resObj = $("#DoctorSchedule").ejSchedule('instance');
            if (!ej.isNullOrUndefined(resObj.model.resources)) {
                $(".department").css("display", "");
                var res = resObj.model.resources[resObj.model.resources.length - 2].resourceSettings.dataSource;
                $("#dept").ejDropDownList({ dataSource: res, fields: { text: "Text", id: "Id", value: "Text" } });
                (res.length > 0) && $("#dept").data("ejDropDownList").selectItemByText(res[0].Text);
                var res1 = new ej.DataManager(resObj.model.resources[resObj.model.resources.length - 1].resourceSettings.dataSource).executeLocal(new ej.Query().where(resObj.model.resources[resObj.model.resources.length - 2].resourceSettings["groupId"], ej.FilterOperators.equal, res[0].Id));;
                $("#deptdoctors").ejDropDownList({ dataSource: res1, fields: { text: "Text", id: "Id", value: "Text" } });
                ((<any>res1).length > 0) && $("#deptdoctors").data("ejDropDownList").selectItemByText((<any>res1)[0].Text);
            }
        }
    }
    else if ($(args.e.currentTarget).hasClass("delete")) {
        if ((<any>window)["list"]) {
            $("#alertWindow").ejDialog("open");
        }
        else {
            //$("#deleteWindow").ejDialog(this.deletewindow);
            $("#deleteWindow").ejDialog("open");
            clearFields();
        }
    }

}

function onAlertClick(args: any) {
    if ($(args.e.currentTarget).hasClass("alertdone")) {
        var listObj = $("#upcomming").ejListBox('instance');
        var index = listObj.getSelectedItems()[0].index;
        (<any>window)["waitinglist"].splice(index, 1);
        $("#upcomming").children().remove();
        $("#upcomming").ejListBox({ dataSource: (<any>window)["waitinglist"] });
        onWaitingList();
        (<any>window)["list"] = false;
    }
    $("#alertWindow").ejDialog("close");
}

function onPatientNew() {
    $("#customWindow").ejDialog("close");
    var newpatientId = ((<any>window)["patientlist"].length == 0) ? 1 : (<any>window)["patientlist"].length + 1;
    $("#patientid").val(newpatientId);
    $("#patientname,#patientdob,#patientmobile,#patientaddress").val("");
    //$("#patientWindow").ejDialog(this.patientwindow);
    $("#patientWindow").ejDialog("open");
}

function onPatientDetails(args: any) {
    if ($(args.e.currentTarget).hasClass("padd")) {
        if ($.trim($("#patientname").val()) == "") {
            $("#patientname").addClass("error");
            return false;
        }
        else if ($.trim($("#patientdob").val()) == "") {
            $("#patientdob").addClass("error");
            return false;
        }
        else if ($.trim($("#patientmobile").val()) == "") {
            $("#patientmobile").addClass("error");
            return false;
        }
        else if ($.trim($("#patientaddress").val()) == "") {
            $("#patientaddress").addClass("error");
            return false;
        }
        var obj = {};
        var formelement = $("#patientWindow").find("#patient").get(0);
        for (var index = 0; index < (<any>formelement).length; index++) {
            var columnName = (<any>formelement)[index].name;
            if (columnName != undefined) {
                if (columnName != "" && (<any>obj)[columnName] == null) {
                    var value = (<any>formelement)[index].value;
                    if (columnName == "Id" || columnName == "Mobile")
                        value = parseInt(value);
                    (<any>obj)[columnName] = value;
                }
            }
        }
        (<any>window)["patientlist"].push(obj);
        $("#subject").ejAutocomplete({
            width: "100%",
            dataSource: (<any>window)["patientlist"],
            watermarkText: "Select Patient Name",
            fields: { text: "Name" },
            showPopupButton: false
        });
    }
    $("#patientWindow").ejDialog("close");
    // $("#customWindow").ejDialog(this.appointmentwindow);
    $("#customWindow").ejDialog("open");
}

function onSchedule() {
    var schObj = $("#DoctorSchedule").ejSchedule('instance');
    var currentview = schObj.model.currentView;
    if (schObj.model.orientation == "vertical" && currentview == "month") $("#DoctorSchedule").find(".e-workcellstab td:first-child").css("border-left", "1px solid #c3c3c3");
    if (schObj.model.orientation == "vertical" && currentview != "month") $("#DoctorSchedule").find(".e-ampmdisplay").css("margin-right", "4px");
    $("#DoctorSchedule").find(".e-scheduleheader").parent().append($("<tr></tr>").append("<div id='grid2'></div>"));
}

function onWaitingList() {
    $("#upcomming_container").css("border", "none");
    $("#upcomming").children().addClass("waitinglistli");
    $("#upcomming_container").find(".e-vscrollbar").remove();
    $("#upcomming").parent().css("width", "100%");
}

function onAppointmentClick(args: any) {
    if ($(args.e.currentTarget).attr("id") == "appsubmit") save();
    else cancel();
}

function onRecurrenceClick(args: any) {
    if ($(args.e.currentTarget).attr("id") == "recsubmit") {
        var recObj = $("#recurrenceEditor").ejRecurrenceEditor('instance');
        recObj.closeRecurPublic();
        (<any>window)["recurRule"] = recObj._recRule;
    }
    if (($(args.e.currentTarget).attr("id") == "reccancel")) {
        $("#recurrence").ejCheckBox({ checked: false });
    }
    $("#recWindow").css("display", "none");
    $("#appWindow").css("display", "");
}

function onScroller() {
    $("#categorylist_container").find(".e-vscrollbar").css({ width: "8px", borderRight: "1px solid #c3c3c3" });
    $("#categorylist_container").find(".e-vscroll").children().first().css({ fontSize: "7px", borderRight: "1px solid #c3c3c3", borderTop: "1px solid #c3c3c3" });
    $("#categorylist_container").find(".e-vscroll").children().last().css({ fontSize: "7px", borderRight: "1px solid #c3c3c3", borderBottom: "1px solid #c3c3c3" });
    $(".doctorslist").find(".e-vscrollbar").css({ width: "8px", borderRight: "1px solid #c3c3c3", marginRight: "10px" });
    $("#doctorsdeptlist_container").find(".e-vscroll").children().first().css({ fontSize: "7px", borderRight: "1px solid #c3c3c3", borderTop: "1px solid #c3c3c3" });
    $("#doctorsdeptlist_container").find(".e-vscroll").children().last().css({ fontSize: "7px", borderRight: "1px solid #c3c3c3", borderBottom: "1px solid #c3c3c3" });
    $("#upcomming_container").find(".e-vscrollbar").css({ width: "8px", borderLeft: "1px solid #c3c3c3" });
    $("#upcomming_container").find(".e-vscroll").children().first().css("width", "7px");
    $("#upcomming_container").find(".e-vscroll").children().last().css("width", "7px");
    $("#upcomming_container").find(".e-vscroll").css("border-left", "none");
}

function _appointImages(id: any) {
    var schObj = $("#DoctorSchedule").ejSchedule('instance');
    var resObj = new ej.DataManager((<any>window)["doctorName"]).executeLocal(new ej.Query().where(schObj.model.resources[schObj.model.resources.length - 1].resourceSettings["id"], ej.FilterOperators.equal, id));
    if ((<any>resObj).length != 0) var resText = (<any>resObj)[0].Text;
    switch (resText) {
        case "":
            return null;
        default:
            return "<img src='../../content/images/hospitalmanagement/" + resText + ".png' style='width:40px;height:40px;border-radius:50%;'/>";
    }
}

function _resourceImages(id: any) {
    var schObj = $("#DoctorSchedule").ejSchedule('instance');
    var resObj = new ej.DataManager((<any>window)["doctorName"]).executeLocal(new ej.Query().where(schObj.model.resources[schObj.model.resources.length - 1].resourceSettings["id"], ej.FilterOperators.equal, id));
    if ((<any>resObj).length != 0) var resText = (<any>resObj)[0].Text;
    switch (resText) {
        case "":
            return null;
        default:
            return "<img src='../../content/images/hospitalmanagement/" + resText + ".png' style='width:25px;height:20px;float:left;border-radius:50%;margin-right:10px;'/>";
    }
}

function _doctorDesignation(type1: any) {
    var result = (<any>new ej.DataManager((<any>window)["categorylist"]).executeLocal(new ej.Query().where("Value", ej.FilterOperators.equal, type1)))[0].Text;
    return result;
}

function _color(cat: any) {
    var color = (<any>new ej.DataManager((<any>window)["categorylist"]).executeLocal(new ej.Query().where("Value", ej.FilterOperators.equal, cat)))[0].Color;
    var col = color.split("#")[1], amt = -25;
    var num = parseInt(col, 16);
    var r = (num >> 16) + amt;
    var b = ((num >> 8) & 0x00FF) + amt;
    var g = (num & 0x0000FF) + amt;
    var newColor = g | (b << 8) | (r << 16);
    return "#" + newColor.toString(16);
}

function _height(start: any, end: any) {
    var obj = $("#DoctorSchedule").ejSchedule('instance');
    var rStartTime = new Date(start);
    var rEndTime = new Date(end);
    var cellHeight = $(".e-workcells,.e-monthcells").height();
    var appHeight: any;
    if ((<any>obj).model.currentView != "month") {
        var srtTime = new Date(new Date((<any>rStartTime)).getTime());
        var endTime = new Date(new Date((<any>rEndTime)).getTime());
        var calTime = (<any>endTime) - (<any>srtTime);
        appHeight = ((parseFloat((<any>calTime))) / (60 * 1000) * (cellHeight * (<any>obj).model.timeScale.minorSlotCount) / ((<any>obj).model.timeScale.majorSlot)) - 1;
    }
    else
        appHeight = (cellHeight - $('.e-monthheader').height() - 15);
    return appHeight + "px";
}

function _timeformat(time1: any, time2: any) {
    var tFormat = ej.format(new Date(time1), "hh:mm") + " - " + ej.format(new Date(time2), "hh:mm");
    return tFormat;
}

function _appcolor(cat: any) {
    var color = (<any>new ej.DataManager((<any>window)["categorylist"]).executeLocal(new ej.Query().where("Value", ej.FilterOperators.equal, cat)))[0].Color;
    return color;
}

function _getResources(id: any, type1: any) {
    var result: any;
    var schObj = $("#DoctorSchedule").ejSchedule('instance');
    if (type1 == "image") {
        var resObj = new ej.DataManager((<any>window)["doctorName"]).executeLocal(new ej.Query().where(schObj.model.resources[schObj.model.resources.length - 1].resourceSettings["id"], ej.FilterOperators.equal, id));
        if ((<any>resObj).length != 0) var resText = (<any>resObj)[0].Text;
        result = "<img src='../../content/images/hospitalmanagement/" + resText + ".png' style='width:50px;height:50px;float:left;border-radius:50%;'/>";
    }
    else if (type1 == "room") {
        var resObj = new ej.DataManager((<any>window)["departmentName"]).executeLocal(new ej.Query().where(schObj.model.resources[schObj.model.resources.length - 1].resourceSettings["id"], ej.FilterOperators.equal, id));
        if ((<any>resObj).length != 0) result = (<any>resObj)[0].Text;
    }
    else if (type1 == "owner") {
        var resObj = new ej.DataManager((<any>window)["doctorName"]).executeLocal(new ej.Query().where(schObj.model.resources[schObj.model.resources.length - 1].resourceSettings["id"], ej.FilterOperators.equal, id));
        if ((<any>resObj).length != 0) result = (<any>resObj)[0].Text;
    }
    return result;
}

function onListClick(args: any) {
    (<any>window)["list"] = true;
    $("#waitid,#waitlist,#waitcategory,.icon-waiticon").removeClass("hovercolor");
    $(args.item).find("#waitid,#waitlist,#waitcategory,.icon-waiticon").addClass("hovercolor");
}

function OnNavigation(args: any) {
    $("#datepicker").ejDatePicker({ value: new Date(args.currentDate) });
}

function onSelected(args: any) {
    $("#DoctorSchedule").ejSchedule({ currentDate: new Date(args.value) });
    if ($(".rightcol").is(":visible") && window.innerWidth < 768) {
        $(".rightcol").toggle();
        $("#righticon").css("right", "0px");
        $("#righticon").children().addClass("icon-left").removeClass("icon-right");
    }
}

function onDropdownHide(args: any) {
    var schObj = $("#DoctorSchedule").ejSchedule('instance');
    var resObj = $.grep(args.model.dataSource, function (e) { return (<any>e).Text == args.text; });
    var res = new ej.DataManager(schObj.model.resources[schObj.model.resources.length - 1].resourceSettings.dataSource).executeLocal(new ej.Query().where(schObj.model.resources[schObj.model.resources.length - 1].resourceSettings["groupId"], ej.FilterOperators.equal, (<any>resObj[0]).Id));
    $("#deptdoctors").ejDropDownList({ dataSource: res, fields: { text: "Text", id: "Id", value: "Text" } });
    $("#deptdoctors").data("ejDropDownList").selectItemByText((<any>res)[0].Text);
}

function onSearchtypeHide(args: any) {
    if (args.value == "Date") {
        $("#txtSearch").ejAutocomplete({ dataSource: [], enabled: false });
        $("#datesearchpanel").css("display", "block");
        $(".searchdatepicker").css("display", "inline-block");
        $("#startdatepicker,#enddatepicker").val("");
    }
    else {
        $("#datesearchpanel").css("display", "none");
        $(".searchdatepicker").css("display", "none");
        $("#txtSearch").ejAutocomplete({ dataSource: [], enabled: true });
    }
    onSearchClose();
}

function onDoctorlistHide(args: any) {
    doctorsCheck = false;
    var departmentlist = $.extend(true, [], (<any>window)["departmentName"]);
    var doctorlist1 = $.extend(true, [], (<any>window)["doctorName"]);
    var doctorlist = $.extend(true, [], doctorlist1);
    var schObj = $("#DoctorSchedule").ejSchedule('instance');
    var catObj = $("#categorylist").ejListBox('instance');
    var doctorlistChecked: any = [];
    if (args.text == "All") {
        $("#DoctorSchedule").ejSchedule({
            orientation: "horizontal",
            cellWidth: "50px",
            resources: [{
                field: "RoomId", title: "Room", name: "Rooms", allowMultiple: false,
                resourceSettings: { dataSource: departmentlist, text: "Text", id: "Id", groupId: "GroupId", color: "Color" }
            }, {
                    field: "OwnerId", title: "Owner", name: "Owners", allowMultiple: true,
                    resourceSettings: { dataSource: doctorlist, text: "Text", id: "Id", groupId: "GroupId", color: "Color" }
                }]
        });
        for (var a = 0; a < (<any>window)["doctorName"].length; a++) doctorlistChecked.push(a);
        $("#doctorsdeptlist").children().remove();
        $("#doctorsdeptlist").ejListBox({ dataSource: (<any>window)["doctorName"], checkedIndices: doctorlistChecked });
        $('*[id*=_doctorsdeptlist]').css({ float: "left", marginTop: "3px" });
    }
    else {
        var dtrlist = new ej.DataManager(doctorlist).executeLocal(new ej.Query().where("Designation", ej.FilterOperators.equal, args.text));
        var dptlist = new ej.DataManager(departmentlist).executeLocal(new ej.Query().where("Id", ej.FilterOperators.equal, (<any>dtrlist)[0].GroupId));
        var checklist: any = [];
        for (var a = 0; a < (<any>dtrlist).length; a++) {
            checklist.push(a);
            var index = doctorlist.indexOf((<any>dtrlist)[a]);
            (index != -1) && doctorlistChecked.push(index);
        }
        $("#doctorsdeptlist").children().remove();
        $("#doctorsdeptlist").ejListBox({ dataSource: dtrlist, checkedIndices: checklist });
        $('*[id*=_doctorsdeptlist]').css({ float: "left", marginTop: "3px" });
        $("#DoctorSchedule").ejSchedule({
            orientation: ((<any>dtrlist) > 2) ? "horizontal" : "vertical",
            cellWidth: ((<any>dtrlist) > 2) ? "50px" : "",
            resources: [{
                field: "RoomId", title: "Room", name: "Rooms", allowMultiple: false,
                resourceSettings: { dataSource: dptlist, text: "Text", id: "Id", groupId: "GroupId", color: "Color" }
            }, {
                    field: "OwnerId", title: "Owner", name: "Owners", allowMultiple: true,
                    resourceSettings: { dataSource: dtrlist, text: "Text", id: "Id", groupId: "GroupId", color: "Color" }
                }]
        });
    }
    onSchedule();
    $(".e-resourceicon").click(function (e) { onResIconClick(e); });

    var categorylistChecked = $.extend(true, [], catObj.model.checkedIndices);
    categorylistChecked.sort();
    if (categorylistChecked.indexOf(0) == 0) categorylistChecked.splice(0, 1);
    var filterResult = appFilter(categorylistChecked, doctorlistChecked, schObj);
    schObj._currentAppointmentData = filterResult;
    schObj._dataProcessing(schObj._currentAppointmentData);
    schObj._renderAppointmentAll();
    $("#DoctorSchedule").find('*[id*=Appointment_]').height($("#DoctorSchedule").find(".e-workcells").height() - 1);
    doctorsCheck = true;
}

function onListCheck(args: any) {
    if (!doctorsCheck)
        return;
    var schObj = $("#DoctorSchedule").ejSchedule('instance');
    var catObj = $("#categorylist").ejListBox('instance');
    var doctorlist = $.extend(true, [], (<any>window)["doctorName"]);
    if (args.item.parent().attr("id") == "categorylist" && categoryCheck) {
        categoryCheck = false;
        if (args.text == "All") {
            (args.index == 0 && args.isChecked) ? $("#categorylist").ejListBox('checkAll') : $("#categorylist").ejListBox('uncheckAll');
        }
        else {
            var checked = $.extend(true, [], args.model.checkedIndices);
            if (checked.indexOf(0) == 0) checked.splice(0, 1);
            if (checked.length == (<any>window)["categorylist"].length)
                $("#categorylist").ejListBox('checkAll');
            else
				(args.model.checkedIndices.indexOf(args.index) == -1) && catObj.uncheckItemByIndex(0);
        }
    }
    else if (args.item.parent().attr("id") == "doctorsdeptlist") {
        var newdoctorlist = $.extend(true, [], args.model.dataSource);
        var newlist: any = [];
        for (var i = 0; i < newdoctorlist.length; i++) {
            if ($($($("#doctorsdeptlist").children()[i]).children()[0]).attr("aria-checked") == "true") {
                newlist.push(newdoctorlist[i]);
            }
        }
        $("#DoctorSchedule").ejSchedule({
            orientation: (newlist.length > 2) ? "horizontal" : "vertical",
            cellWidth: (newlist.length > 2) ? "50px" : "",
            resources: [{
                field: "RoomId", title: "Room", name: "Rooms", allowMultiple: false,
                resourceSettings: { dataSource: $.extend(true, [], (<any>window)["departmentName"]), text: "Text", id: "Id", groupId: "GroupId", color: "Color" }
            }, {
                    field: "OwnerId", title: "Owner", name: "Owners", allowMultiple: true,
                    resourceSettings: { dataSource: newlist, text: "Text", id: "Id", groupId: "GroupId", color: "Color" }
                }]
        });
        onSchedule();
        args.model.dataSource = $.extend(true, [], newdoctorlist);
        (<any>window)["doctorName"] = $.extend(true, [], doctorlist);
    }
    categoryCheck = true;
    var catObj = $("#categorylist").ejListBox('instance');
    var categorylistChecked = $.extend(true, [], catObj.model.checkedIndices);
    categorylistChecked.sort();
    if (categorylistChecked.indexOf(0) == 0) categorylistChecked.splice(0, 1);
    var docObj = $("#doctorsdeptlist").ejListBox('instance');
    var doctorlistChecked: any = [];
    for (var a = 0; a < docObj.model.dataSource.length; a++) {
        for (var b = 0; b < (<any>window)["doctorName"].length; b++) {
            if ((<any>window)["doctorName"][b].Id == docObj.model.dataSource[a].Id) {
                var index = b;
                break;
            }
        }
        if ($($($("#doctorsdeptlist").children()[a]).children()[0]).attr("aria-checked") == "true")
            (index != -1) && doctorlistChecked.push(index);
    }
    doctorlistChecked.sort();

    var filterResult = appFilter(categorylistChecked, doctorlistChecked, schObj);
    schObj._currentAppointmentData = filterResult;
    schObj._dataProcessing(schObj._currentAppointmentData);
    schObj._renderAppointmentAll();
    $("#DoctorSchedule").find('*[id*=Appointment_]').height($("#DoctorSchedule").find(".e-workcells").height() - 1);
}

function appFilter(catlist: any, doclist: any, schObj: any) {
    var complexFilter: any = [];
    for (var a = 0; a < catlist.length; a++) {
        for (var b = 0; b < doclist.length; b++) {
            var query = new ej.Predicate("Category", ej.FilterOperators.equal, (<any>window)["categorylist"][catlist[a] - 1].Value, true).and("OwnerId", ej.FilterOperators.equal, ((<any>window)["doctorName"][doclist[b]].Id), true);
            var result = schObj._dataManager.executeLocal(new ej.Query().where(<any>query));

            if (result.length > 0) {
                for (var c = 0; c < result.length; c++) {
                    complexFilter.push(result[c]);
                }
            }
        }
    }
    return complexFilter;
}

function filterAppointments(filterConditions: any, schObj: any) {
    var result: any, queryManagar = new ej.Query(), matchcaseVal: any;
    if (!ej.isNullOrUndefined(filterConditions)) {
        var firstFilterCondition = filterConditions[0];
        matchcaseVal = ej.isNullOrUndefined(firstFilterCondition.matchcase) ? true : firstFilterCondition.matchcase;
        var predicate = new ej.Predicate(firstFilterCondition.field, firstFilterCondition.operator, firstFilterCondition.value, matchcaseVal);
        for (var i = 1; i < filterConditions.length; i++) {
            matchcaseVal = ej.isNullOrUndefined(filterConditions[i].matchcase) ? true : filterConditions[i].matchcase;
            predicate = (<any>predicate)[filterConditions[i].predicate](filterConditions[i].field, filterConditions[i].operator, filterConditions[i].value, matchcaseVal);
        }
        queryManagar.where(predicate);
        result = new ej.DataManager(schObj._processed).executeLocal(queryManagar);
    }
    return result;
}

function onQueryCellInfo(args: any) {
    if (args.model.orientation == "vertical") {
        switch (args.requestType) {
            case "workcells":
                if (args.cell.resources.Text == "DENTAL")
                    args.element.css("background-color", "#fdecea");
                else if (args.cell.resources.Text == "GENERAL")
                    args.element.css("background-color", "#e1ebf7");
                else if (args.cell.resources.Text == "JohnXavier" || args.cell.resources.Text == "Paul" || args.cell.resources.Text == "Smith" || args.cell.resources.Text == "Benita" || args.cell.resources.Text == "Nancy" || args.cell.resources.Text == "WillSmith")
                    args.element.css("background-color", "#e1ebf7");
                else if (args.cell.resources.Text == "Annie" || args.cell.resources.Text == "Helen" || args.cell.resources.Text == "George" || args.cell.resources.Text == "Shirley")
                    args.element.css("background-color", "#fdecea");
                break;
            case "monthcells":
                if (args.cell.resources.Text == "DENTAL")
                    args.element.css("background-color", "#fdecea");
                else if (args.cell.resources.Text == "GENERAL")
                    args.element.css("background-color", "#e1ebf7");
                else if (args.cell.resources.Text == "JohnXavier" || args.cell.resources.Text == "Paul" || args.cell.resources.Text == "Smith" || args.cell.resources.Text == "Benita" || args.cell.resources.Text == "Nancy" || args.cell.resources.Text == "WillSmith")
                    args.element.css("background-color", "#e1ebf7");
                else if (args.cell.resources.Text == "Annie" || args.cell.resources.Text == "Helen" || args.cell.resources.Text == "George" || args.cell.resources.Text == "Shirley")
                    args.element.css("background-color", "#fdecea");
                break;
            case "alldaycells":
                if (args.cell.resources.Text == "DENTAL")
                    args.element.css("background-color", "#fdecea");
                else if (args.cell.resources.Text == "GENERAL")
                    args.element.css("background-color", "#e1ebf7");
                else if (args.cell.resources.Text == "JohnXavier" || args.cell.resources.Text == "Paul" || args.cell.resources.Text == "Smith" || args.cell.resources.Text == "Benita" || args.cell.resources.Text == "Nancy" || args.cell.resources.Text == "WillSmith")
                    args.element.css("background-color", "#e1ebf7");
                else if (args.cell.resources.Text == "Annie" || args.cell.resources.Text == "Helen" || args.cell.resources.Text == "George" || args.cell.resources.Text == "Shirley")
                    args.element.css("background-color", "#fdecea");
                break;
            case "headercells":
                args.element.css("color", "#333");
                if (!ej.isNullOrUndefined(args.resource) && args.resource.Text == "DENTAL")
                    args.element.css("background-color", "#fdecea");
                else if (!ej.isNullOrUndefined(args.resource) && args.resource.Text == "GENERAL")
                    args.element.css("background-color", "#e1ebf7");
                else if (args.resource.Text == "JohnXavier" || args.resource.Text == "Paul" || args.resource.Text == "Smith" || args.resource.Text == "Benita" || args.resource.Text == "Nancy" || args.resource.Text == "WillSmith")
                    args.element.css("background-color", "#e1ebf7");
                else if (args.resource.Text == "Annie" || args.resource.Text == "Helen" || args.resource.Text == "George" || args.resource.Text == "Shirley")
                    args.element.css("background-color", "#fdecea");
                break;
            case "resourceheadercells":
                if (args.cellType == "headercells") {
                    if (!ej.isNullOrUndefined(args.resource) && args.resource.Text == "DENTAL")
                        args.element.css({ backgroundColor: "#fdecea", color: "#333" });
                    else if (!ej.isNullOrUndefined(args.resource) && args.resource.Text == "GENERAL")
                        args.element.css({ backgroundColor: "#e1ebf7", color: "#333" });
                    else if (args.resource.Text == "JohnXavier" || args.resource.Text == "Paul" || args.resource.Text == "Smith" || args.resource.Text == "Benita" || args.resource.Text == "Nancy" || args.resource.Text == "WillSmith")
                        args.element.css("background-color", "#e1ebf7");
                    else if (args.resource.Text == "Annie" || args.resource.Text == "Helen" || args.resource.Text == "George" || args.resource.Text == "Shirley")
                        args.element.css("background-color", "#fdecea");
                }
                else
                    args.element.css("background-color", "#F5F5F5");
                break;
            case "timecells":
            case "leftindentcells":
            case "leftheadercells":
                args.element.css("background-color", "#F5F5F5");
                break;
        }
    }
    else {
        switch (args.requestType) {
            case "workcells":
                if (args.cell.resources.Text == "GENERAL")
                    args.element.css("background-color", "#e1ebf7");
                else if (args.cell.resources.Text == "DENTAL")
                    args.element.css("background-color", "#fdecea");
                else if (args.cell.resources.Text == "JohnXavier" || args.cell.resources.Text == "Paul" || args.cell.resources.Text == "Smith" || args.cell.resources.Text == "Benita" || args.cell.resources.Text == "Nancy" || args.cell.resources.Text == "WillSmith")
                    args.element.css("background-color", "#e1ebf7");
                else if (args.cell.resources.Text == "Annie" || args.cell.resources.Text == "Helen" || args.cell.resources.Text == "George" || args.cell.resources.Text == "Shirley")
                    args.element.css("background-color", "#fdecea");
                break;
            case "resourceheadercells":
                if (!ej.isNullOrUndefined(args.resource)) {
                    if (args.cellType == "headerdivcells") {
                        if (args.resource.Text == "GENERAL")
                            args.element.children().css({ backgroundColor: "#C3DAF1", color: "#333" });
                        else if (args.resource.Text == "DENTAL")
                            args.element.children().css({ backgroundColor: "#FBDBD8", color: "#333" });
                        else if (args.resource.Text == "JohnXavier" || args.resource.Text == "Paul" || args.resource.Text == "Smith" || args.resource.Text == "Benita" || args.resource.Text == "Nancy" || args.resource.Text == "WillSmith")
                            args.element.css({ backgroundColor: "#e1ebf7", color: "#333" });
                        else if (args.resource.Text == "Annie" || args.resource.Text == "Helen" || args.resource.Text == "George" || args.resource.Text == "Shirley")
                            args.element.css({ backgroundColor: "#fdecea", color: "#333" });
                    }
                    else {
                        if (args.resource.Text == "GENERAL")
                            args.element.css({ backgroundColor: "#C3DAF1", color: "#333" });
                        else if (args.resource.Text == "DENTAL")
                            args.element.css({ backgroundColor: "#FBDBD8", color: "#333" });
                        else if (args.resource.Text == "JohnXavier" || args.resource.Text == "Paul" || args.resource.Text == "Smith" || args.resource.Text == "Benita" || args.resource.Text == "Nancy" || args.resource.Text == "WillSmith")
                            args.element.css({ backgroundColor: "#e1ebf7", color: "#333" });
                        else if (args.resource.Text == "Annie" || args.resource.Text == "Helen" || args.resource.Text == "George" || args.resource.Text == "Shirley")
                            args.element.css({ backgroundColor: "#fdecea", color: "#333" });
                    }
                }
                break;
            case "resourcegroupheader":
            case "timecells":
            case "headerdate":
            case "headercells":
                args.element.css("background-color", "#F5F5F5");
                break;
        }
    }
}

function onNodeDragging(args: any) {
    $("#DoctorSchedule").find(".e-tooltip-wrap").css("display", "none");
    var cloneElement = $(args.items[0].event.element[0].children).clone();
    cloneElement.find("#waitid,#waitlist,#waitcategory,.icon-waiticon").css({ color: "#fff" });
    $(".e-dragClonelist").html("");
    $(".e-dragClonelist").removeAttr("id");
    $(".e-dragClonelist").append($(cloneElement));
    $(".e-dragClonelist").removeClass("icon-waiticon");
    if ($(args.target).hasClass("e-workcells") && !$(args.target).hasClass("e-resourceheadercells")) {
        var schObj = $("#DoctorSchedule").ejSchedule('instance');
        schObj._workCellIndex = $(args.target).parent().index();
        var temp = schObj._getResourceDetails($(args.target), $(args.target).index());
        (args.items[0].data.RoomId == temp[1].id) ? $(args.target).css("cursor", "default") : $(args.target).css("cursor", "no-drop");
        if ($(".rightcol").is(":visible") && window.innerWidth < 768) {
            $(".rightcol").toggle();
            $("#righticon").css("right", "0px");
            $("#righticon").children().addClass("icon-left").removeClass("icon-right");
        }
    }
    if ($(args.target).hasClass("e-resourceheadercells")) {
        $(args.target).css("cursor", "no-drop");
        var trgtIndex = $(args.target).parent().index();
        if (trgtIndex == 0 || trgtIndex == 7) {
            if ($($(".e-resourceheadertable tr")[trgtIndex]).find(".e-parentnodecategory").hasClass("e-resourceexpand")) {
                $($(".e-resourceheadertable tr")[trgtIndex]).find(".e-parentnodecategory").click();
            }
        }
    }
    $(args.target).hasClass("e-appointment") && $(args.target).css("cursor", "no-drop");
}

function onDragStop(args: any) {
    if ($(args.target).hasClass("e-workcells")) {
        var schObj = $("#DoctorSchedule").ejSchedule('instance');
        schObj._workCellIndex = $(args.target).parent().index();
        $(args.target).click();
        var resDetails = schObj._getResourceDetails($(args.target), $(args.target).index());
        if ((args.items[0].data.RoomId == resDetails[1].id)) {
            var dropAppointment = $.extend(true, {}, args.items[0].data);
            dropAppointment[schObj._appointmentSettings["startTime"]] = new Date(schObj.cur_StartTime);
            dropAppointment[schObj._appointmentSettings["endTime"]] = new Date(schObj.cur_EndTime);
            dropAppointment[schObj._appointmentSettings.resourceFields.split(",")[1]] = resDetails[0].id;
            var schArgs = [{ appointment: dropAppointment, edit: true, type: "appointmentWindowOpen", model: schObj.model, cancel: false }];
            (<any>window)["drop"] = true;
            onAppointmentWindowOpen(schArgs[0]);
        }
    }
    $("#DoctorSchedule").find(".e-workcells").css("cursor", "default");
    $("#DoctorSchedule").find(".e-appointment").css("cursor", "default");
}

function onAppointmentWindowOpen(args: any) {
    $("#recurrence").ejCheckBox({ checked: false, enabled: true });
    $("#recWindow").css("display", "none");
    $("#editApp").css("display", "none");
    $("#appWindow").css("display", "block");
    if (!args.model.readOnly) {
        var schObj = $("#DoctorSchedule").ejSchedule('instance');
        args.cancel = true;
        $("#StartTime").ejDateTimePicker({ value: args.startTime });
        $("#EndTime").ejDateTimePicker({ value: args.endTime });
        if (ej.isNullOrUndefined(args.edit)) {
            var res = args.model.resources[0].resourceSettings.dataSource;
            $("#dept").ejDropDownList({ dataSource: res, fields: { text: "Text", id: "Td", value: "Text" } });
            var res2 = new ej.DataManager(res).executeLocal(new ej.Query().where(args.model.resources[args.model.resources.length - 1].resourceSettings["id"], ej.FilterOperators.equal, args.resources.GroupId));
            var res1 = new ej.DataManager(args.model.resources[args.model.resources.length - 1].resourceSettings.dataSource).executeLocal(new ej.Query().where(args.model.resources[args.model.resources.length - 1].resourceSettings["groupId"], ej.FilterOperators.equal, args.resources.GroupId));
            $("#deptdoctors").ejDropDownList({ dataSource: res1, fields: { text: "Text", id: "Td", value: "Text" } });
            $("#deptdoctors").data("ejDropDownList").selectItemByText(args.resources.Text);
            $("#dept").data("ejDropDownList").selectItemByText((<any>res2)[0].Text);
        }
        else {
            var res: any = new ej.DataManager(args.model.resources[0].resourceSettings.dataSource).executeLocal(new ej.Query().where(args.model.resources[0].resourceSettings["id"], ej.FilterOperators.equal, args.appointment.RoomId));
            $("#dept").data("ejDropDownList").selectItemByText(res[0].Text);
            var res2 = new ej.DataManager(args.model.resources[args.model.resources.length - 1].resourceSettings.dataSource).executeLocal(new ej.Query().where(args.model.resources[args.model.resources.length - 1].resourceSettings["groupId"], ej.FilterOperators.equal, res[0].Id));
            $("#deptdoctors").ejDropDownList({ dataSource: res2, fields: { text: "Text", id: "Id", value: "Text" } });
            var res1 = new ej.DataManager(args.model.resources[args.model.resources.length - 1].resourceSettings.dataSource).executeLocal(new ej.Query().where(args.model.resources[args.model.resources.length - 1].resourceSettings["id"], ej.FilterOperators.equal, args.appointment.OwnerId));
            $("#deptdoctors").data("ejDropDownList").selectItemByText((<any>res1)[0].Text);
            (<any>window)["appedit"] = ej.isNullOrUndefined(args.waitinglistedit) ? true : false;
        }
        if (!ej.isNullOrUndefined(args.target)) {
            $('#recurrence').prop('disabled', false);
            recurCheck();
            $("#StartTime,#EndTime").ejDateTimePicker({ enabled: ($(args.target.currentTarget).hasClass("e-alldaycells") || $(args.target.currentTarget).hasClass("e-monthcells") || args.model.currentView == "month") ? false : true });
        }
        if (!ej.isNullOrUndefined(args.appointment)) {
            (<any>window)["appointmentRule"] = null;
            (<any>window)["appointedit"] = true;
            $("#customId").val(args.appointment.Id);
            $("#subject").val(args.appointment.Subject);
            $("#customdescription").val(args.appointment.Description);
            $("#StartTime").ejDateTimePicker({ value: new Date(args.appointment.StartTime) });
            $("#EndTime").ejDateTimePicker({ value: new Date(args.appointment.EndTime) });
            var category = new ej.DataManager((<any>window)["categorylist"]).executeLocal(new ej.Query().where("Value", ej.FilterOperators.equal, args.appointment.Category));
            var index = (<any>window)["categorylist"].indexOf((<any>category)[0]);
            index = (index < 0) ? 0 : index;
            $("#category").ejDropDownList({ selectedIndex: index });
            $("#category").val((<any>category)[0].Text);
            if (args.appointment.Recurrence) {
                $("#recurrence").ejCheckBox({ checked: args.appointment.Recurrence, enabled: ((<any>schObj)._currentAction == "editSeries") ? true : false });
                if ((<any>schObj)._currentAction == "editSeries") {
                    $("#editApp").css("display", "block");
                    (<any>window)["appointmentRule"] = args.appointment.RecurrenceRule;
                }
            }
            else
                $("#recurrence").ejCheckBox({ checked: false, enabled: true });
            $("#recWindow").css("display", "none");
            $("#appWindow").css("display", "block");
        }
        else {
            (<any>window)["appointedit"] = false;
            //$("#customWindow").ejDialog(this.appointmentwindow);

            $("#subject").ejAutocomplete({
                width: "100%",
                dataSource: (<any>window)["patientlist"],
                watermarkText: "Select Patient Name",
                fields: { text: "Name" },
                showPopupButton: false
            });
        }
        $("#customWindow").ejDialog("open");
    }
}

function save() {
    if ($.trim($("#subject").val()) == "") {
        $("#subject").addClass("error");
        return false;
    }
    var obj = {}, temp = {}, rType: any;
    var formelement = $("#customWindow").find("#custom").get(0);
    for (var index = 0; index < (<any>formelement).length; index++) {
        var columnName = (<any>formelement)[index].name, $element = $((<any>formelement)[index]);
        if (columnName != undefined) {
            if (columnName == "")
                columnName = (<any>formelement)[index].id;
            if (columnName != "" && (<any>obj)[columnName] == null) {
                var value = (<any>formelement)[index].value;
                if (columnName == "Id" && value != "") {
                    value = parseInt(value);
                }
                else if (columnName == "Id" && value == "")
                    value = parseInt(ej.isNullOrUndefined((<any>window)["waitinglist"][(<any>window)["waitinglist"].length - 1]) ? 1 : (<any>window)["waitinglist"][(<any>window)["waitinglist"].length - 1].Id + 1);
                if ($element.hasClass("e-datetimepicker"))
                    value = new Date(value);
                if ((<any>formelement)[index].type == "checkbox")
                    value = (<any>formelement)[index].checked;
                if ((<any>formelement)[index].type == "hidden") {
                    var resdata = (columnName == "dept") ? (<any>window)["departmentName"] : (<any>window)["doctorName"];
                    var dptId = new ej.DataManager(resdata).executeLocal(new ej.Query().where("Text", ej.FilterOperators.equal, value));
                    if ((<any>dptId).length > 0)
                        (columnName == "dept") ? (<any>obj)["RoomId"] = (<any>dptId)[0].Id : (<any>obj)["OwnerId"] = (<any>dptId)[0].Id;
                }
                if (columnName == "Category") {
                    var color = new ej.DataManager((<any>window)["categorylist"]).executeLocal(new ej.Query().where("Text", ej.FilterOperators.equal, value));
                    if ((<any>color).length > 0) {
                        (<any>obj)["Categorycolor"] = (<any>color)[0].Color;
                        value = (<any>color)[0].Value;
                    }
                    else {
                        (<any>obj)["Categorycolor"] = (<any>window)["categorylist"][0].Color;
                        value = (<any>window)["categorylist"][0].Value;
                    }
                }
                if (columnName != "dept_hidden" && columnName != "deptdoctors" && columnName != "deptdoctors_hidden" && columnName != "patientadd")
                    (<any>obj)[columnName] = value;
            }
        }
    }
    (<any>obj)["RecurrenceRule"] = ((<any>obj).Recurrence) ? (<any>window)["recurRule"] : null;
    $("#customWindow").ejDialog("close");

    var schObj = $("#DoctorSchedule").ejSchedule('instance');
    var predicate1 = new ej.Predicate((<any>schObj)._appointmentSettings["startTime"], ej.FilterOperators.lessThanOrEqual, (<any>new Date((<any>obj).StartTime)), true).and((<any>schObj)._appointmentSettings["endTime"], ej.FilterOperators.greaterThanOrEqual, new Date((<any>new Date((<any>obj).EndTime))), true);
    var predicate = (<any>predicate1)["and"]((<any>schObj)._appointmentSettings.resourceFields.toString().split(',')[(<any>schObj).model.resources.length - 1].trim(), ej.FilterOperators.equal, (<any>obj)[(<any>schObj)._appointmentSettings.resourceFields.split(",")[1]]);
    var result = new ej.DataManager((<any>schObj)._processed).executeLocal(new ej.Query().where(predicate));

    (<any>window)["addlist"] = ((<any>result).length > 0) ? true : false;

    if (!(<any>window)["addlist"] && !(<any>window)["waitinglistedit"]) {
        var clone = $.extend(true, {}, obj);
        if (!(<any>window)["appointedit"] || (<any>window)["drop"]) (<any>obj)["Id"] = "";
        schObj.saveAppointment(obj);
        $("#tokenWindow").find("#apptoken").css("display", "none");
        $("#tokenWindow").find("#appstatus").css("display", "block");
        $("#tokenWindow").ejDialog("open");
        if (!(<any>window)["appointedit"] || (<any>window)["drop"]) {
            index = (<any>window)["waitinglist"].indexOf((<any>new ej.DataManager((<any>window)["waitinglist"]).executeLocal(new ej.Query().where("Id", ej.FilterOperators.equal, clone.Id)))[0]);
            (index != -1) ? (<any>window)["waitinglist"].splice(index, 1) : "";
            $("#upcomming").children().remove();
            $("#upcomming").ejListBox({ dataSource: (<any>window)["waitinglist"] });
            setTimeout(function () { onWaitingList(); }, 1);
        }
        (<any>window)["appointedit"] = false;
        (<any>window)["drop"] = false;
    }
    else {
        if ((<any>window)["waitinglistedit"]) {
            new ej.DataManager((<any>window)["waitinglist"]).remove("Id", (<any>obj).Id, "waitinglist");
        }
        (<any>window)["waitinglist"].push(obj);
        (<any>window)["waitinglist"].sort(function (a: any, b: any) { return (a.Id - b.Id); });
        if ((<any>window)["appedit"]) {
            var editapp = new ej.DataManager(schObj._processed).executeLocal(new ej.Query().where(schObj._appointmentSettings.id, ej.FilterOperators.equal, (<any>obj).Id));
            schObj.deleteAppointment((<ej.DataManager & Object[]>editapp)[0]);
        }
        $("#upcomming").children().remove();
        $("#upcomming").ejListBox({ dataSource: (<any>window)["waitinglist"] });
        onWaitingList();
        onHover();
        $("#tokenWindow").find("#appstatus").css("display", "none");
        $("#tokenWindow").find("#apptoken").css("display", "block");
        $("#tokenWindow").ejDialog("open");
        $("#tokenWindow").find("#lbltext").html((<any>obj).Id);
        (<any>window)["addlist"] = false;
        (<any>window)["waitinglistedit"] = false;
        clearFields();
    }
}

function clearFields() {
    $("#subject,#customdescription,#category,#deleteId").val("");
    $("#allday").prop("checked", false);
    $("#recurrence").prop("checked", false);
    $("tr.recurrence").css("display", "none");
    $("#StartTime,#EndTime").ejDateTimePicker({ enabled: true });
    $("#patientname,#patientdob,#patientmobile,#patientaddress").removeClass("error");
}

function recurCheck() {
    var recChkObj = $("#recurrence").ejCheckBox('instance');
    if (recChkObj.checked()) {
        $("#recWindow").css("display", "block");
        $("#appWindow").css("display", "none");
    }
    else {
        $("#recWindow").css("display", "none");
    }
}

function onRecurrenceRule() {
    $("#recWindow").css("display", "block");
    $("#appWindow").css("display", "none");
    (<any>window)["recurRule"] = (<any>window)["appointmentRule"];
}

function showResult(list: any, searchString: any) {
    if (!ej.isNullOrUndefined(list) && list.length != 0 && searchString != "") {
        $("#DoctorSchedule").find(".e-datecommondiv").hide();
        $("#DoctorSchedule").find(".e-scheduleheader").next().hide();
        $("#DoctorSchedule").find(".e-scheduleheader").next().next().hide();
        $("#DoctorSchedule").find(".e-viewsdiv").css("visibility", "hidden");
        $("#grid2").show();
        $("#grid2").data("ejGrid") && $("#grid2").ejGrid("destroy");
        $("#grid2").ejGrid({
            width: "100%",
            dataSource: list,
            allowPaging: true,
            isResponsive: true,
            pageSettings: { pageSize: 10 },
            recordDoubleClick: "detailsClick",
            columns: [
                { field: "AppTaskId", headerText: "ID" },
                { field: "Subject", headerText: "Name" },
                { field: "Description", headerText: "Description" },
                { field: "StartTime", headerText: "Start Time", format: "{0:MM/dd/yyyy hh:mm tt}" },
                { field: "EndTime", headerText: "End Time", format: "{0:MM/dd/yyyy hh:mm tt}", },
                { field: "Category", headerText: "Category" },
                { field: "RoomId", headerText: "DepartmentID" },
                { field: "OwnerId", headerText: "DoctorID" }
            ]
        });
        $("#txtSearch").removeClass("error");
    }
    else {
        onSearchClose();
        $("#txtSearch").addClass("error");
    }
}

function onSearchClose() {
    $("#DoctorSchedule").find(".e-datecommondiv").show();
    $("#DoctorSchedule").find(".e-scheduleheader").next().show();
    $("#DoctorSchedule").find(".e-scheduleheader").next().next().show();
    $("#DoctorSchedule").find(".e-viewsdiv").css("visibility", "");
    $("#grid2").hide();
    $("#txtSearch,#startdatepicker,#enddatepicker").val("");
    $("#txtSearch").ejAutocomplete({ dataSource: [] });
    $("#txtSearch_dropdown").children().removeClass("icon-close").addClass("e-icon e-search");
}

function detailsClick(args: any) {
    $("#DoctorSchedule").ejSchedule({ currentDate: new Date(args.data.StartTime) });
    onSearchClose();
    $("#datesearch").ejToggleButton({ toggleState: false });
}

function onSearchResultSelect(args: any) {
    var schObj = $("#DoctorSchedule").ejSchedule('instance');
    var srchObj = $("#searchlist").ejDropDownList('instance');
    var searchlist: any = [], result: any;
    switch (srchObj.selectedTextValue) {
        case "ID":
            result = new ej.DataManager(args.model.dataSource).executeLocal(new ej.Query().where("AppTaskId", ej.FilterOperators.equal, (<any>parseInt(args.model.value))));
            break;
        case "Name":
            if (!$.isNumeric(parseInt(args.model.value))) searchlist.push({ field: "Subject", operator: "contains", value: args.model.value });
            if (searchlist.length > 0) result = filterAppointments(searchlist, schObj);
            break;
        case "Description":
            result = new ej.DataManager(args.model.dataSource).executeLocal(new ej.Query().where("Description", ej.FilterOperators.equal, args.model.value));
            break;
        case "Category":
            if (!$.isNumeric(parseInt(args.model.value))) searchlist.push({ field: "Category", operator: "contains", value: args.model.value });
            if (searchlist.length > 0) result = filterAppointments(searchlist, schObj);
            break;
        default:
            break;
    }

    if (result.length > 0) {
        showResult(result, srchObj.selectedTextValue);
    }
}

$(document).bind('contextmenu', function (e) { e.preventDefault(); });
$(window).on('resize', function (e) { onWindowResize(); });
$(function () {
    onCustomization();
    onHover();
    $(".e-resourceicon").click(function (e) { onResIconClick(e); });
    $(".waitinglistli").dblclick(function (e) { onWaitingOpen(e); });
    $("#lefticon, #righticon").click(function (e) { onLeftRightPanel(e); });
    $("#appWindow").find(".recuredit").click(function () { onRecurrenceRule(); });
    $(document).click(function (e) { onPanelHide(e) });
});

$.views.helpers({
    appoint: _appointImages,
    doctor: _doctorDesignation,
    apptime: _timeformat,
    appcolor: _color,
    appbgm: _appcolor,
    lineheight: _height,
    resimages: _resourceImages,
    format: _getResources
});

function searchKeyUp() {
    var searchlist: any = [], searchString = $("#txtSearch").val();
    var srchObj = $("#searchlist").ejDropDownList('instance');
    if (searchString != "") {
        switch (srchObj.selectedTextValue) {
            case "ID":
                if ($.isNumeric(parseInt(searchString)))
                    searchlist.push({ field: "AppTaskId", operator: "contains", value: parseInt(searchString) });
                if (searchlist.length > 0) {
                    var schObj = $("#DoctorSchedule").ejSchedule('instance');
                    var list = filterAppointments(searchlist, schObj);
                    $("#txtSearch").ejAutocomplete({
                        dataSource: list,
                        fields: { key: "AppTaskId", text: "AppTaskId" }
                    });
                }
                else $("#txtSearch").addClass("error");
                break;
            case "Name":
                $("#txtSearch").ejAutocomplete({
                    dataSource: (<any>window)["patientlist"],
                    fields: { key: "Id", text: "Name" }
                });
                break;
            case "Description":
                if (!$.isNumeric(parseInt(searchString)))
                    searchlist.push({ field: "Description", operator: "contains", value: searchString });
                if (searchlist.length > 0) {
                    var schObj = $("#DoctorSchedule").ejSchedule('instance');
                    var list = filterAppointments(searchlist, schObj);
                    $("#txtSearch").ejAutocomplete({
                        dataSource: list,
                        fields: { key: "AppTaskId", text: "Description" }
                    });
                }
                else $("#txtSearch").addClass("error");
                break;
            case "Category":
                $("#txtSearch").ejAutocomplete({
                    dataSource: (<any>window)["categorylist"],
                    fields: { key: "Value", text: "Value" }
                });
                break;
            default:
                break;
        }
    }
    else {
        $("#DoctorSchedule").find(".e-datecommondiv").show();
        $("#DoctorSchedule").find(".e-scheduleheader").next().show();
        $("#DoctorSchedule").find(".e-scheduleheader").next().next().show();
        $("#DoctorSchedule").find(".e-viewsdiv").css("visibility", "");
        $("#grid2").hide();
        $("#txtSearch").removeClass("error");
        $("#txtSearch_dropdown").children().removeClass("icon-close").addClass("e-icon e-search");
    }
}

function cancel() {
    clearFields();
    $("#customWindow").ejDialog("close");
    $("#deleteWindow").ejDialog("close");
    $("#tokenWindow").ejDialog("close");
}

function done() {
    var delId = parseInt($("#deleteId").val());
    var result = $.grep((<any>window)["waitinglist"], function (e) { return (<any>e).Id == delId; });
    var index = (<any>window)["waitinglist"].indexOf(result[0]);
    (<any>window)["waitinglist"].splice(index, 1);
    $("#upcomming").children().remove();
    $("#upcomming").ejListBox({ dataSource: (<any>window)["waitinglist"] });
    $("#upcomming_container").css("border", "none");
    $("#upcomming").children().addClass("waitinglistli");
    $("#deleteWindow").ejDialog("close");
}

function temp() {
    $("#subject,#patientaddress,#patientmobile,#patientdob,#patientname").removeClass("error");
}