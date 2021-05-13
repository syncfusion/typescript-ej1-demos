/// <reference path="../../tsfiles/jquery.d.ts" /> 
/// <reference path="../../tsfiles/ej.web.all.d.ts" />

module ExpenseAnalysis {
    $(function () {
        var gridmodel = new ej.Grid($("#ExpenseGrid"), {
            dataSource: {},
            allowPaging: true,
            allowSorting: true,
            enableRowHover: false,
            allowKeyboardNavigation: true,
            editSettings: { allowEditing: false, allowAdding: true, editMode: ej.Grid.EditMode.Dialog },
            pageSettings: { pageCount: 4 },
            isResponsive: true,
            enableResponsiveRow: false,
            columns: [{ field: "DateTime", headerText: 'Date', textAlign: ej.TextAlign.Right, width: 40, validationRules: { required: true }, format: "{0:MMM dd yyyy}", editType: ej.Grid.EditingType.DatePicker },
                { field: "CategoryName", headerText: 'CategoryName', validationRules: { required: true, minlength: 3 }, width: 100, visible: false },
                { field: "Description", headerText: 'Description', validationRules: { required: true, minlength: 3 }, width: 100 },
                { field: "SubCategory", headerText: 'Category', validationRules: { required: true, minlength: 3 }, width: 70 },
                { field: "Amount", headerText: 'Amount', validationRules: { required: true }, textAlign: ej.TextAlign.Right, editType: ej.Grid.EditingType.Numeric, editParams: { decimalPlaces: 2, minValue: 0 }, format: "{0:C}", width: 50 }]
        });

        var chartModel = new ej.datavisualization.Chart($("#ExpenseChart"), {
            isResponsive:true,
            series: [{
                type: ej.datavisualization.Chart.Type.Pie,
                name: "ExpenseChart",
                enableAnimation: true,
                labelPosition: "outside",
                marker: { dataLabel: { visible: true } },
                border: { width: 1 },
                explode: true,
                xName: "ExpenseCategory",
                yName: "Amount"
            }],
            pointRegionClick: chartRegionClick,
            animationComplete: pieChartAnimationComplete,
            seriesRendering: pieChartSeriesRendering,
            chartArea:{background: "transparent"},
            commonSeriesOptions:{enableSmartLabels: true},
            legend: { visible: false },

        });
        var dropDownListModel = new ej.DropDownList($("#selectMonth"), {
            targetID: "MonthList",
            width: "150px",
            height: "30px",
            select: dropDownSelect

        });
        dropDownListModel.selectItemByText(ej.preferredCulture().calendars.standard.months.names[new Date().getMonth()]);
        var btnbutton = new ej.Button($("#btnBack"), {
            size: ej.ButtonSize.Mini,
            click: buttonClick
        })
        $("#btnBack").hide();
        $(".add-image").bind("click", function () {
            $("#ExpenseGrid").ejGrid(<any>"addRecord");
            $("#ExpenseGrid_dialogEdit").ejDialog(<any>{isResponsive:true});	
        });

    });

}
function pieChartAnimationComplete(sender: any) {
    $("#btnBack")[sender.model.series[0].name !== "ExpenseChart" ? "show" : "hide"]();
}
function pieChartSeriesRendering(e: any) {
    $.each(e.data.series.points, function () {
        this.text = this.x + "- $" + formatNumber(parseInt((this.YValues)));
    });
}
function isMac() {
	return (/(ipad|iphone|ipod touch)/i).test(navigator.userAgent.toLowerCase()) && !(/trident|windows phone/i.test(navigator.userAgent.toLowerCase()))
}
function dropDownSelect(sender: any) {
    $(".add-filter-panel").ejWaitingPopup();
    $(".add-filter-panel").ejWaitingPopup("show");
	if (isMac())
        (<any>window).baseurl = "//js.syncfusion.com/ejServices/";
	else
		(<any>window).baseurl = (<any>window).baseurl;
    var dataManager:any = new ej.DataManager({
        url:  (<any>window).baseurl + "api/expense/get?month=" + sender.selectedText,
        offline: true, crossDomain:true,
        requiresFormat: false
    });
    dataManager["ready"].done(function (e: any) {
        $("#ExpenseGrid").data("ejGrid").dataSource(e.result[1]);
        $("#ExpenseChart").ejChart({
            series: [
                {
                    dataSource: e.result[0],
                    type: ej.datavisualization.Chart.Type.Pie,
                    name: "ExpenseChart",
                    enableAnimation: true,
                    labelPosition: "outside",
                    marker: { dataLabel: { visible: true, } },
                    border: { width: 1 },
                    explode: true,
                    xName: "ExpenseCategory",
                    yName: "Amount"
                }
            ]

        });
        $('.pos-amt').html("$" + formatNumber(parseInt(e.result[5])));
        $('.neg-amt').html("$" + formatNumber(parseInt(e.result[6])));
        $('.bal-amt').html("$" + formatNumber(parseInt(e.result[7])));
        $('.most-spent-amt').html(e.result[2]);
        $('.least-spent-amt').html(e.result[3]);
        $('.avg-spent-amt').html(e.result[4]);
        $('.pos-transc').html(e.result[8] + " Transactions");
        $('.neg-transc').html(e.result[9] + " Transactions");
        (<any>window).chartDS = e.result[0];
        (<any>window).sName = e.result[0];
        (<any>window).Home = e.result[10];
        (<any>window).DailyLiving = e.result[11];
        (<any>window).Entertainment = e.result[12];
        (<any>window).Health = e.result[13];
        (<any>window).Transportation = e.result[14];
        (<any>window).Personal = e.result[15];
        $(".add-filter-panel").ejWaitingPopup("hide");
    });
}

function pieSeries(seriesName?: any) {
    var returnData:any;
    switch (seriesName) {
        case "Home":
            returnData = genarateSeries(seriesName);
            break;
        case "Entertainment":
            (<any>window).Entertainment[1].Amount = 45;
            returnData = genarateSeries(seriesName);
            break;
        case "Daily Living":
            returnData = genarateSeries("DailyLiving");
            break;
        case "Health":
            returnData = genarateSeries(seriesName);
            break;
        case "Transportation":
            returnData = genarateSeries(seriesName);
            break;
        case "Personal":
            returnData = genarateSeries(seriesName);
            break;
        default:
            {
                return {
                    series: [
                        {
                            name: "ExpenseChart",
                            dataSource: (<any>window).chartDS,
                            xName: "ExpenseCategory",
                            yName: "Amount",
                            type: 'pie',
                            labelPosition: 'outside',
                            pieCoefficient: 0.8,
                            explode: true,
                            explodeOffset: 25,
                            enableAnimation: true,
                            AnimationComplete: false,
                            marker: {
                                dataLabel: {
                                    visible: true,
                                    shape: 'none',
                                    connectorLine: { color: null, width: 0.5 },
                                    font: { fontFamily: 'Segoe UI', fontStyle: 'Normal ', fontWeight: 'Regular', size: '12px', color: '#707070', opacity: 1 }
                                }
                            }
                        }
                    ],
                    legend: { visible: false },
                    AnimationComplete: false
                }
            }
    }
    return returnData;
}
function chartRegionClick(sender: any) {
    var isIe8 = ej.browserInfo().name === "msie" && parseInt(ej.browserInfo().version) === 8;
    if (sender.model.AnimationComplete || isIe8) {
        var index = sender.data.region.Region.PointIndex;
        if (sender.model.series[0].name === "ExpenseChart")
            $("#ExpenseChart").ejChart(<any>{ "drilldown": pieSeries(sender.model.series[0].points[index].x) });
        if (isIe8)
            $("#btnBack").show();
    }
}
function genarateSeries(sName: any) {
    var seriesData = {
        series: [{
            dataSource: (<any>window).sName,
            xName: "ExpenseCategory",
            yName: "Amount",
            type: 'pie',
            labelPosition: 'outside',
            pieCoefficient: 0.8,
            enableAnimation: true,
            explode: false,
            marker: {
                dataLabel: {
                    visible: true,
                    shape: 'none',
                    connectorLine: { color: 'black', width: 0.5 },
                    font: { fontFamily: 'Segoe UI', fontStyle: 'Normal ', fontWeight: 'Regular', size: '12px', color: '#707070', opacity: 1 }
                }
            }

        }],
        legend: { visible: false }
    }
    return seriesData;
}
function formatNumber(number :any) {
    return ej.format(number, "n0");
}
function buttonClick(sender: any) {
    $("#ExpenseChart").ejChart(<any>{ "pie": pieSeries() });
    $("#btnBack").hide();
}
