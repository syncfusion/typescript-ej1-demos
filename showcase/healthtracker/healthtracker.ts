/// <reference path="../../tsfiles/jquery.d.ts" />
/// <reference path="../../tsfiles/ej.web.all.d.ts" />
let sumColl: Object[];
module HealthTracker {

    $(function () {
		function isMac() {
            return (/(ipad|iphone|ipod touch)/i).test(navigator.userAgent.toLowerCase()) && !(/trident|windows phone/i.test(navigator.userAgent.toLowerCase()))
        }
		if (isMac())
			(<any>window).baseurl = "//js.syncfusion.com/ejServices/";
		else
			(<any>window).baseurl = (<any>window).baseurl;
        var dataManager1: any = new ej.DataManager({
            url: (<any>window).baseurl + "api/healthtracker/load", crossDomain:true,
            offline: true,
            requiresFormat: false
        });
        dataManager1["ready"].done(function (e: any) {
            $("#Grid").data("ejGrid").dataSource(e.result.FoodInfo);
            sumColl = getSummaryDetails();
            updateChartSeries(e);

            //render the series for calories chart
            var calChart = new ej.datavisualization.Chart($("#ChartCal"), {
            chartArea:
            {
                border: { width: 1 }
            },
            primaryXAxis:
            {
                edgeLabelPlacement: ej.datavisualization.Chart.EdgeLabelPlacement.Hide,
                title: { text: "Days", font: { fontStyle: ej.datavisualization.Chart.FontStyle.Normal, size: '14px', fontWeight: ej.datavisualization.Chart.FontWeight.Bold } },
                font: { fontStyle: ej.datavisualization.Chart.FontStyle.Normal, size: '8px' },
                range: { min: 0, max: 31, interval: 3 },
                majorGridLines: { visible: false },
                columnIndex: 0,
                valueType:"double"
            },
            primaryYAxis:
            {
                rowIndex: 0,
                rangePadding: ej.datavisualization.Chart.RangePadding.None,
                range: { min: 0, max: 1200, interval: 100 },
                font: { fontStyle: ej.datavisualization.Chart.FontStyle.Normal, size: '8px' },
                title: { text: "Calorie", font: { fontStyle: ej.datavisualization.Chart.FontStyle.Normal, size: '14px', fontWeight: ej.datavisualization.Chart.FontWeight.Bold } },
                valueType:"double"
            },
            series: [
                {
                    name: 'Calories Burnt',
                    type: ej.datavisualization.Chart.Type.Spline,
                    enableAnimation: true,
                    fill: "#24B7E5",
                    tooltip: { template: 'CalTooltip' },
                    xName: "XValue",
                    yName: "YValue"
                }
            ],
            commonSeriesOptions: {
                type: ej.datavisualization.Chart.Type.Line,
                tooltip: {
                    visible: true
                },
                enableAnimation: true,
                marker:
                {
                    size:
                    {
                        height: 10,
                        width: 10
                    },
                    visible: true,
                },
                border: { width: 2 }
            },
            isResponsive: true,
           // background: 'transparent',
            title: { text: 'CALORIES BURNT' },
            size: { height: "500" }
        });
            calChart.model.series[0].dataSource = e.result.ChartDB.CalData;

            //generate the series for steps moved chart
            var burntChart = new ej.datavisualization.Chart($("#ChartBurnt"), {
            chartArea:
            {
                border: { width: 1 }
            },
            primaryXAxis:
            {
                edgeLabelPlacement: ej.datavisualization.Chart.EdgeLabelPlacement.Hide,
                rangePadding: ej.datavisualization.Chart.RangePadding.None,
                title: { text: "Days", font: { fontStyle: ej.datavisualization.Chart.FontStyle.Normal, size: '14px', fontWeight: ej.datavisualization.Chart.FontWeight.Bold } },
                range: { min: 0, max: 31, interval: 3 },
                majorGridLines: { visible: false },
                font: { fontStyle: ej.datavisualization.Chart.FontStyle.Normal, size: '8px' },
                columnIndex: 0,
                valueType:"double"
            },
            primaryYAxis:
            {
                rowIndex: 0,
                rangePadding: ej.datavisualization.Chart.RangePadding.None,
                range: { min: 0, max: 1200, interval: 100 },
                title: { text: "Steps", font: { fontStyle: ej.datavisualization.Chart.FontStyle.Normal, size: '14px', fontWeight: ej.datavisualization.Chart.FontWeight.Bold } },
                font: { fontStyle: ej.datavisualization.Chart.FontStyle.Normal, size: '8px' },
                valueType:"double"
            },
            commonSeriesOptions: {
                tooltip: { visible: true }
            },
            series: [
                {
                    name: 'Steps Moved',
                    enableAnimation: true,
                    fill: "#8CC640",
                    tooltip: { template: "BurntTooltip" },
                    xName: "XValue",
                    yName: "YValue"
                }
            ],
            isResponsive: true,
            //background: "transparent",
            title: { text: "TOTAL STEPS" },
            size: { height: "500" }
            });
            burntChart.model.series[0]["dataSource"] = e.result.ChartDB.BurntData;

            //generate the series for meals intake chart
            var mealChart =  new ej.datavisualization.Chart($("#MealDetails"), {
            chartArea:
            {
                border: { width: 1 }
            },
            primaryXAxis:
            {
                edgeLabelPlacement: ej.datavisualization.Chart.EdgeLabelPlacement.Hide,
                rangePadding: ej.datavisualization.Chart.RangePadding.None,
                title: {
                    text: "Days", font: {
                        fontStyle: ej.datavisualization.Chart.FontStyle.Normal, size: '14px', fontWeight: ej.datavisualization.Chart.FontWeight.Bold
                    }
                },
                range: { min: 0, max: 31, interval: 3 },
                majorGridLines: { visible: false },
                columnIndex: 0,
                valueType:"double"
            },
            primaryYAxis:
            {
                rowIndex: 0,
                rangePadding: ej.datavisualization.Chart.RangePadding.None,
                range: { min: 0, max: 1200, interval: 100 },
                title: { text: "Cal", font: { fontStyle: ej.datavisualization.Chart.FontStyle.Normal, size: '14px', fontWeight: ej.datavisualization.Chart.FontWeight.Bold } },
                valueType:"double"
            },
            commonSeriesOptions: {
                tooltip: { visible: true }
            },
            series: [
                {
                    name: 'Carb',
                    type: ej.datavisualization.Chart.Type.Column,
                    enableAnimation: true,
                    fill: "#8CAA55",
                    tooltip: { template: 'HydrateTooltip' },
                    xName: "XValue",
                    yName: "YValue"

                },
                {
                    name: 'Protein',
                    type: ej.datavisualization.Chart.Type.Column,
                    enableAnimation: true,
                    fill: "#B34949",
                    tooltip: { template: 'ProteinTooltip' },
                    xName: "XValue",
                    yName: "YValue"
                },
                {
                    name: 'Fat',
                    type: ej.datavisualization.Chart.Type.Column,
                    enableAnimation: true,
                    fill: "#58A7C6",
                    tooltip: { template: "FatTooltip" },
                    xName: "XValue",
                    yName: "YValue"
                }
            ],
            isResponsive: true,
           // background: "transparent",
            title: { text: 'MEAL INTAKE' },
            size: { height: "500" }
        });
            mealChart.model.series[0]["dataSource"] = e.result.ChartDB.MealData.Open;
            calChart.model.series[0]["xName"] = burntChart.model.series[0].xName = mealChart.model.series[0].xName = mealChart.model.series[1].yName = mealChart.model.series[2].yName = "XValue";
            calChart.model.series[0].yName = burntChart.model.series[0].yName = mealChart.model.series[0].yName = mealChart.model.series[1].yName = mealChart.model.series[2].yName = "YValue";
            mealChart.model.series[1].dataSource = e.result.ChartDB.MealData.Close;
            mealChart.model.series[2].dataSource = e.result.ChartDB.MealData.OpenClose;
            calChart.redraw();
            burntChart.redraw();
            mealChart.redraw();
        });

        var grid = new ej.Grid($("#Grid"), {
            dataSource: {},
            showSummary: true,
            enableAltRow: false,
            allowKeyboardNavigation: true,
            editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true, editMode: ej.Grid.EditMode.DialogTemplate, dialogEditorTemplateID: "#healthAddTemplate" },
            columns: [
                { field: "Time", headerText: "TIME", width: 70, textAlign: ej.TextAlign.Center, validationRules: { required: true } },
                { field: "FoodName", headerText: "FOOD", width: 110, textAlign: ej.TextAlign.Center, validationRules: { required: true } },
                { field: "Fat", headerText: "FAT", textAlign: ej.TextAlign.Center, width: 60, format: "{0:N0}g", validationRules: { required: true } },
                { field: "Carbohydrate", headerText: "CARB", textAlign: ej.TextAlign.Center, width: 60, format: "{0:N0}g", validationRules: { required: true } },
                { field: "Protein", headerText: "PROTEIN", textAlign: ej.TextAlign.Center, width: 60, format: "{0:N0}g", validationRules: { required: true }, priority: 4 },
                { field: "Calorie", headerText: "CALORIES", width: 65, textAlign: ej.TextAlign.Center, format: "{0:N0}cal", validationRules: { required: true }, priority: 5 },
                { field: "FoodId", isPrimaryKey: true, visible: false }],
            gridLines: ej.Grid.GridLines.Horizontal,
            isResponsive: true,
            enableResponsiveRow: false,
            actionComplete: gridActionComplete,
            summaryRows: [
                { title: "Sum", summaryColumns: [{ summaryType: ej.Grid.SummaryType.Sum, displayColumn: "Fat", dataMember: "Fat", format: "{0:N0}g" }, { summaryType: ej.Grid.SummaryType.Sum, displayColumn: "Carbohydrate", dataMember: "Carbohydrate", format: "{0:N0}g" }, { summaryType: ej.Grid.SummaryType.Sum, displayColumn: "Protein", dataMember: "Protein", format: "{0:N0}g" }, { summaryType: ej.Grid.SummaryType.Sum, displayColumn: "Calorie", dataMember: "Calorie", format: "{0:N0}cal" }] }
            ]
        });

        //add new food dialog box is opened when "AddMeal" button is clicked
        $(".addbutton").bind("click", function () {
            $("#Grid").ejGrid(<any>"addRecord");
        });
        var chartobj = new ej.datavisualization.Chart($("#Chart"), {
            isResponsive:true,
            series: [{
                marker: { dataLabel: { visible: true, font: { color: "#707070", size: "15px", fontWeight: ej.datavisualization.Chart.FontWeight.Lighter } } },
                name: "Newyork", type: ej.datavisualization.Chart.Type.Doughnut, labelPosition: "outside", doughnutSize: 0.9, opacity: 0.8,
                border: { width: 1 }
            }],
            margin: { left: 10, top: 0, right: 0, bottom: 0 },
            size: { height: "270" },
            legend: { visible: false }
        });

        // render the  RDI gauge
        var gaugerdi = new ej.datavisualization.CircularGauge($("#GaugeRDI"), {
            frame: { frameType: "halfcircle" },
            width: 170,
            height: 155,
            distanceFromCorner: -5,
            gaugePosition: ej.datavisualization.CircularGauge.gaugePosition.BottomCenter,
            isResponsive: false,
            scales: [
                {
                    startAngle: 182,
                    sweepAngle: 176,
                    showRanges: true,
                    showLabels: false,
                    radius: 120,
                    minimum: 0,
                    maximum: 2200,
                    majorIntervalValue: 200,
                    pointerCap: { radius: 15, backgroundColor: "#3AB54B", borderColor: "#3AB54B", borderWidth: 15 },
                    pointers: [{ border: { color: "#3AB54B" }, needleType: "rectangle", width: 1, value: 450, length: 70 }],
                    ticks: [
                        {
                            color: "#FFFFFF",
                            height: 16,
                            width: 3
                        }, {
                            color: "#FFFFFF",
                            height: 7,
                            width: 1
                        }
                    ],
                    ranges: [
                        {
                            size: 10,
                            startValue: 0,
                            endValue: 449,
                            backgroundColor: "#3AB54B",
                            border: { color: "#3AB54B" }
                        }, {
                            size: 10,
                            startValue: 449,
                            endValue: 2200,
                            backgroundColor: "#B0D2C8",
                            border: { color: "#B0D2C8" }
                        }
                    ]
                }
            ]
        });

        // render the Burnt gauge
        var gaugeburnt = new ej.datavisualization.CircularGauge($("#GaugeBurnt"), {
            frame: { frameType: "halfcircle" },
            width: 170,
            height: 155,
            distanceFromCorner: -5,
            gaugePosition: ej.datavisualization.CircularGauge.gaugePosition.BottomCenter,
            isResponsive: false,
            scales: [
                {
                    startAngle: 182,
                    sweepAngle: 176,
                    showRanges: true,
                    showLabels: false,
                    radius: 120,
                    minimum: 0,
                    maximum: 1000,
                    majorIntervalValue: 200,
                    pointerCap: { radius: 15, backgroundColor: "#b24848", borderColor: "#b24848", borderWidth: 15 },
                    pointers: [{ border: { color: "#b24848" }, needleType: "rectangle", width: 1, value: 650, length: 70 }],
                    ticks: [
                        {
                            color: "#FFFFFF",
                            height: 16,
                            width: 3
                        }, {
                            color: "#FFFFFF",
                            height: 7,
                            width: 1
                        }
                    ],
                    ranges: [
                        {
                            size: 10,
                            startValue: 0,
                            endValue: 649,
                            backgroundColor: "#b24848",
                            border: { color: "#c98c8b" }
                        }, {
                            size: 10,
                            startValue: 649,
                            endValue: 1000,
                            backgroundColor: "#C9A5A6",
                            border: { color: "#C9A5A6" }
                        }
                    ]
                }
            ]
        });

        //number of steps pending chart is rendered
        var chartstep = new ej.datavisualization.Chart($("#ChartStep"), {
            series: [
                {
                    points: [
                        {
                            x: 9,
                            y: 10,
                            visibleOnLegend: "visible",
                            fill: "#D3C1D4"
                        }, {
                            x: 3,
                            y: 90,
                            visibleOnLegend: "visible",
                            fill: "#B26CAB"
                        }
                    ],
                    name: 'Newyork',
                    type: ej.datavisualization.Chart.Type.Doughnut,
                    doughnutSize: 0.9,
                    doughnutCoefficient: 0.7,
                    enableAnimation: false,
                    opacity: 0.8,
                    border: {
                        color: "#D3C1D4"
                    }
                }
            ],
            margin: { top: 0, bottom: 0, left: 10, right: 10 },
            size: {
                height: "170",
                width: "200"
            },
            legend: {
                visible: false
            },
            annotations: [
                {
                    visible: true,
                    content: "stepAnnotation",
                    region: ej.datavisualization.Chart.Region.Series
                }
            ]
        });

        //number of floors pending chart is rendered
        var chartfloor = new ej.datavisualization.Chart($("#ChartFloor"), {
            series: [
                {
                    points: [
                        {
                            x:9,
                            y: 6,
                            visibleOnLegend: "visible",
                            fill: "#7D70B3"
                        }, {
                            x: 3,
                            y: 4,
                            visibleOnLegend: "visible",
                            fill: "#BFBED9"
                        }
                    ],
                    name: 'Newyork',
                    type: ej.datavisualization.Chart.Type.Doughnut,
                    labelPosition: "outside",
                    doughnutSize: 0.9,
                    doughnutCoefficient: 0.7,
                    enableAnimation: false,
                    opacity: 0.8,
                    border: {
                        width: 1,
                        color: "#BFBED9"
                    }
                }
            ],
            margin: { top: 0, bottom: 0, left: 10, right: 10 },
            size: {
                height: "170",
                width: "200"
            },
            legend: {
                visible: false,
                font: {
                    size: '12px'
                },
                position: ej.datavisualization.Chart.Position.Bottom
            },
            annotations: [
                {
                    visible: true,
                    content: "floorAnnotation",
                    region: ej.datavisualization.Chart.Region.Series
                }
            ]
        });
    });

}



function gridActionComplete(args: any) {
    if (args.requestType == "beginedit" || args.requestType == "add") {
        var fattext = new ej.NumericTextbox($("#Fat"), { width: "120px", minValue: 1, maxValue: 1000, validateOnType: true });
        var carbstexts = new ej.NumericTextbox($("#Carbohydrate"), { width: "120px", minValue: 1, maxValue: 1000, validateOnType: true });
        var prottexts = new ej.NumericTextbox($("#Protein"), { width: "120px", minValue: 1, maxValue: 1000, validateOnType: true });
        var calstexts = new ej.NumericTextbox($("#Calorie"), { width: "120px", minValue: 1, maxValue: 1000, validateOnType: true });
        $("#EditDialog_Grid_Save").val("Done");
        $("#Fat, #Carbohydrate, #Protein, #Calorie,#Time, #FoodName").css("text-align", "left");
        $("#EditDialog_Grid_Cancel").remove();
        $('#Time').ejTimePicker();
        if (args.requestType == "beginedit")
            $("#MealSummary span.e-title").text("Edit");
        else {
            $("#Time").data("ejTimePicker").setCurrentTime();
            $("#MealSummary span.e-title").text("Add Food");
        }
    }
    if (args.requestType !== "refresh" && args.requestType === "save") {
        args.data.FoodId = getRandomNum(6, 50);
        sumColl = getSummaryDetails();
        updateChartSeries(args);
        updateGauge(sumColl[3]);
    }
}

//update chart with summary values of grid
function updateChartSeries(sender: any) {
    $("#Chart").ejChart(<any>{
        series: [{
            "points": [{ x: 'Carb', y: sumColl[1], fill: "#B44A4A", text: this.sumColl[1] + "g" + " Carb" },
                { x: 'Protein', y: sumColl[2], fill: "#53B2C1", text: this.sumColl[2] + "g" + " Protein" },
                { x: 'Fat', y: sumColl[0], fill: "#F9AF3C", text: this.sumColl[0] + "g" + " Fat" }
            ]
        }]
    });
}

//update calories burnt gauge
function updateGauge(caloriesValue: any) {
    var gaugeObj = $("#GaugeRDI").data("ejCircularGauge");
    gaugeObj.model.scales[0].pointers[0].value=caloriesValue;
    gaugeObj.model.scales[0].ranges[0].startValue=0;
    gaugeObj.model.scales[0].ranges[1].startValue=caloriesValue;
    gaugeObj.model.scales[0].ranges[1].endValue=2200;
    gaugeObj.model.scales[0].ranges[0].endValue=caloriesValue;
    gaugeObj.redraw("");
    $(".rdilabel").text("Calories Intake - " + caloriesValue + "/1000");
    $(".rdipenlabel").text(2200 - caloriesValue + " calories pending");
}

//get the summary details of the grid
function getSummaryDetails() {
    var griddata = $("#Grid").data("ejGrid");
    var sumColl: Array<Object>; sumColl = [];
    $.each(griddata.model.summaryRows[0].summaryColumns, function (index, item) {
        sumColl.push(griddata.getSummaryValues(item, griddata.model.dataSource));
    });
    return sumColl;
}
//generate random numbers
function getRandomNum(ubound: any, lbound: any) {
    return (Math.floor(Math.random() * (ubound - lbound)) + lbound);
}
