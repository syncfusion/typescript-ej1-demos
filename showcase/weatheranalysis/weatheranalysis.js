var monthNames = ["Jan", "Feb", "Mar", "Apl", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
var skyCondition = ["Snow", "Rain Storm", "Thunder", "Rainy", "Cloudy", "Partly Cloudy", "Sunny", "Partly Sunny"];
var rowDefModel = {
    rowHeight: 24,
    lineColor: "#A8A8A8",
    lineWidth: 0.5,
    unit: "percentage"
};
var axesDefModel = {
    majorGridLines: { visible: false },
    majorTickLines: { visible: false },
    orientation: 'Vertical',
    opposedPosition: false,
    axisLine: { visible: false },
    hidePartialLabels: true,
    font: { color: 'transparent' }
};
var hourGridData;
var avgGridData;
var avgChartData;
var weatherDataClass = (function () {
    function weatherDataClass() {
        this.Date = new Date();
        this.SkyCondition = "";
        this.Humidity = this.Wind = this.Pressure = this.Temperature = this.FeelsLike = null;
    }
    return weatherDataClass;
}());
var weatherData;
var avgChartValuesObj = {
    "Precipitation": { mVal: 100, asVal: 20, innnerHtml: "Average Precipitation (mm)" },
    "Sunlight": { mVal: 12, asVal: 2, innnerHtml: "Average Sunlight (Hours)" },
    "Minimum Temperature": { mVal: 15, asVal: -5, innnerHtml: "Average Minimum Temperature (&deg;C)" },
    "Maximum Temperature": { mVal: 20, asVal: 25, innerHtml: "Average Maximum Temperature (&deg;C)" },
    "Wind": { mVal: 15, asVal: 0, innnerHtml: "Average Wind (mph)" }
};
var WeatherAnalysis;
(function (WeatherAnalysis) {
    $(function () {
        weatherData = [];
        weatherDataValues(0);
        setHtmlValues();
        for (var i = 1; i < 24; i++)
            weatherDataValues(i);
        window.WeatherDataObject = weatherData;
        var datamanager1 = new ej.DataManager(window.WeatherDataObject).executeLocal(new ej.Query());
        var hourGrid = new ej.Grid($("#HourGrid"), {
            dataSource: datamanager1, allowScrolling: true, enableAltRow: false,
            scrollSettings: { height: 400, width: 0 },
            columns: [
                { field: "Date", headerText: "Time", textAlign: ej.TextAlign.Center, width: 125, format: "{0:hh:mm tt}", customAttributes: { "class": "e-rowcell date" } },
                { field: "SkyCondition", headerText: "Sky Condition", textAlign: ej.TextAlign.Center, width: 120, format: "<div class=\"{SkyCondition}\" width=\"48px\" heigth=\"48px\" />", customAttributes: { "class": "e-rowcell skycondition" } },
                { field: "Temperature", headerText: "Temperature", textAlign: ej.TextAlign.Center, width: 100, format: "<label>{Temperature}&deg;c</label>", customAttributes: { "class": "e-rowcell temperature" } },
                { field: "SkyCondition", headerText: "Weather Description", textAlign: ej.TextAlign.Center, width: 150, customAttributes: { "class": "e-rowcell skycondition" } }
            ]
        });
        window.onresize = function () {
            $("#HourGrid .e-gridcontent").ejScroller("refresh");
        };
        var hourChartobj = new ej.datavisualization.Chart($("#HourChart"), {
            isResponsive: false,
            rowDefinitions: [{
                    rowHeight: 24,
                    lineColor: "#A8A8A8",
                    lineWidth: 0.5,
                    unit: 'percentage'
                },
                {
                    rowHeight: 24,
                    lineColor: "#A8A8A8",
                    lineWidth: 0.5,
                    unit: 'percentage'
                },
                {
                    rowHeight: 24,
                    lineColor: "#A8A8A8",
                    lineWidth: 0.5,
                    unit: 'percentage'
                },
                {
                    rowHeight: 24,
                    lineColor: "#A8A8A8",
                    lineWidth: 0.5,
                    unit: 'percentage'
                }],
            primaryXAxis: {
                range: { min: window.WeatherDataObject[0].Date, max: window.WeatherDataObject[window.WeatherDataObject.length - 1].Date, interval: 6 },
                intervalType: 'Hours',
                labelFormat: 'hh:mm tt',
                valueType: 'datetime',
                axisLine: { visible: false },
                majorGridLines: { visible: false }
            },
            primaryYAxis: {
                labelFormat: '{value}',
                majorTickLines: { visible: false },
                rangePadding: 'none',
                axisLine: { visible: false },
                majorGridLines: { visible: false },
                range: { min: -10, max: 45, interval: 15 }
            },
            commonSeriesOptions: {
                type: 'line', enableAnimation: true,
                marker: {
                    shape: 'circle',
                    size: { height: 6, width: 6 },
                    visible: true
                },
                border: { color: "white", width: 3 },
                tooltip: { format: "#series.name#: #point.y# " }
            },
            series: [{ name: 'Temperature' },
                { name: 'FeelsLike', yAxisName: 'yAxis1' },
                { name: 'Humidity', yAxisName: 'yAxis2' },
                { name: 'Wind', yAxisName: 'yAxis3' }],
            crosshair: {
                visible: true,
                type: 'trackball',
                trackballTooltipSettings: { border: { color: "#F4B16D" } },
                marker: { size: { height: 9, width: 9 }, visible: true }
            },
            load: hourChartLoad,
            size: { height: "500" },
            chartArea: { border: { color: "transparent" } },
            margin: { left: 20, top: 20 },
            legend: { visible: true, shape: 'circle', position: 'Bottom', itemStyle: { width: 10, height: 10 } }
        });
        var d = {}, AverageData = [];
        d["Average"] = "Precipitation";
        for (var i = 0; i < 12; i++) {
            var date = new Date();
            var monthValue = date.getMonth() + i;
            if (monthValue < 12)
                d[monthNames[new Date(date.setMonth(monthValue)).getMonth()]] = Math.floor((Math.random() * 100 + 20));
            else {
                monthValue = monthValue - 12;
                d[monthNames[new Date(date.setMonth(monthValue)).getMonth()]] = Math.floor((Math.random() * 100 + 20));
            }
        }
        AverageData.push(d);
        d = {};
        d["Average"] = "Sunlight";
        for (var i = 0; i < 12; i++) {
            var date = new Date();
            var monthValue = date.getMonth() + i;
            if (monthValue < 12)
                d[monthNames[new Date(date.setMonth(monthValue)).getMonth()]] = Math.floor((Math.random() * 12 + 2));
            else {
                monthValue = monthValue - 12;
                d[monthNames[new Date(date.setMonth(monthValue)).getMonth()]] = Math.floor((Math.random() * 12 + 2));
            }
        }
        AverageData.push(d);
        d = {};
        d["Average"] = "Minimum Temperature";
        for (var i = 0; i < 12; i++) {
            var date = new Date();
            var monthValue = date.getMonth() + i;
            if (monthValue < 12)
                d[monthNames[new Date(date.setMonth(monthValue)).getMonth()]] = Math.floor((Math.random() * 15 - 5));
            else {
                monthValue = monthValue - 12;
                d[monthNames[new Date(date.setMonth(monthValue)).getMonth()]] = Math.floor((Math.random() * 15 - 5));
            }
        }
        AverageData.push(d);
        d = {};
        d["Average"] = "Maximum Temperature";
        for (var i = 0; i < 12; i++) {
            var date = new Date();
            var monthValue = date.getMonth() + i;
            if (monthValue < 12)
                d[monthNames[new Date(date.setMonth(monthValue)).getMonth()]] = Math.floor((Math.random() * 20 + 25));
            else {
                monthValue = monthValue - 12;
                d[monthNames[new Date(date.setMonth(monthValue)).getMonth()]] = Math.floor((Math.random() * 20 + 25));
            }
        }
        AverageData.push(d);
        d = {};
        d["Average"] = "Wind";
        for (var i = 0; i < 12; i++) {
            var date = new Date();
            var monthValue = date.getMonth() + i;
            if (monthValue < 12)
                d[monthNames[new Date(date.setMonth(monthValue)).getMonth()]] = Math.floor((Math.random() * 15));
            else {
                monthValue = monthValue - 12;
                d[monthNames[new Date(date.setMonth(monthValue)).getMonth()]] = Math.floor((Math.random() * 15));
            }
        }
        AverageData.push(d);
        window.AverageData = AverageData;
        var avgchartobj = new ej.datavisualization.Chart($("#AverageChart"), {
            isResponsive: true,
            primaryXAxis: {
                opposedPosition: true,
                axisLine: { visible: false },
                majorGridLines: { visible: false },
                majorTickLines: { visible: false },
                valueType: "category"
            },
            primaryYAxis: {
                range: { min: 0, max: 150, interval: 25 },
                rangePadding: ej.datavisualization.Chart.RangePadding.None,
                labelFormat: '{value} mm',
                axisLine: { visible: false },
                majorGridLines: { width: 2 },
                valueType: "double"
            },
            axes: [{
                    majorGridLines: { visible: false },
                    opposedPosition: true,
                    axisLine: { visible: false },
                    range: { min: 0, max: 15, interval: 2.5 },
                    rangePadding: ej.datavisualization.Chart.RangePadding.None,
                    name: 'yAxis',
                    labelFormat: '{value} hrs',
                    valueType: "double"
                }],
            commonSeriesOptions: {
                tooltip: { visible: true }
            },
            series: [{
                    name: 'Average Precipitation',
                    type: ej.datavisualization.Chart.Type.Column,
                    enableAnimation: true,
                    fill: '#84c865',
                    tooltip: { template: 'precipitationTooltip' }
                },
                {
                    name: 'Average Sunlight',
                    type: ej.datavisualization.Chart.Type.Column,
                    enableAnimation: true,
                    yAxisName: 'yAxis',
                    fill: '#E94649',
                    tooltip: { template: 'sunlightTooltip' }
                }],
            load: averageChartLoad,
            chartArea: { border: { color: "transparent" } },
            margin: { left: 30 }, size: { height: "500" },
            legend: { visible: true, shape: ej.datavisualization.Chart.Shape.Circle, position: ej.datavisualization.Chart.Position.Bottom, itemStyle: { width: 10, height: 10 } }
        });
        var averageData = new ej.DataManager(window.AverageData).executeLocal(new ej.Query());
        var columnNames;
        columnNames = [];
        $.each(averageData[0], function (index, value) {
            if (index == "Average") {
                var column = { field: index, textAlign: ej.TextAlign.Center };
                columnNames.push(column);
            }
            else {
                columnNames.push({ field: index, textAlign: ej.TextAlign.Center, width: 50, customAttributes: { "class": "e-rowcell average" } });
            }
        });
        var gridavg = new ej.Grid($("#AverageGrid"), {
            dataSource: averageData,
            enableAltRow: false,
            allowGrouping: true,
            groupSettings: { groupedColumns: ["Average"] },
            columns: columnNames,
            queryCellInfo: queryCellInfo
        });
        $("#AverageGrid").find(".groupdroparea").hide();
        $("#HourChart").hide();
        $("#AverageGrid").hide();
        $('.buttons > a').bind('click', function () { weatherSelection(this); });
    });
})(WeatherAnalysis || (WeatherAnalysis = {}));
function weatherSelection(target) {
    switch (target.id) {
        case "ChartHour":
            if ($(target).hasClass("inactive")) {
                $(target).removeClass("inactive").addClass("active");
                $("#GridHour").removeClass("active").addClass("inactive");
                $("#HourGrid").hide();
                $("#HourChart").show();
                var chartobj = $("#HourChart").data("ejChart");
                chartobj.setModel({
                    axes: [
                        {
                            majorGridLines: { visible: false },
                            majorTickLines: { visible: false },
                            rowIndex: "1",
                            opposedPosition: false,
                            axisLine: { visible: false },
                            name: 'yAxis1',
                            range: { min: -10, max: 50, interval: 15 }
                        },
                        {
                            majorGridLines: { visible: false },
                            majorTickLines: { visible: false },
                            rowIndex: "2",
                            opposedPosition: false,
                            axisLine: { visible: false },
                            name: 'yAxis2',
                            range: { min: 30, max: 80, interval: 15 }
                        },
                        {
                            majorGridLines: { visible: false },
                            majorTickLines: { visible: false },
                            rowIndex: "3",
                            opposedPosition: false,
                            axisLine: { visible: false },
                            name: 'yAxis3',
                            range: { min: -5, max: 15, interval: 5 }
                        }
                    ]
                });
                chartobj.redraw();
            }
            break;
        case "GridHour":
            if ($(target).hasClass("inactive")) {
                $(target).removeClass("inactive").addClass("active");
                $("#ChartHour").removeClass("active").addClass("inactive");
                $("#HourChart").hide();
                $("#HourGrid").show();
            }
            break;
        case "ChartAverage":
            if ($(target).hasClass("inactive")) {
                $(target).removeClass("inactive").addClass("active");
                $("#GridAverage").removeClass("active").addClass("inactive");
                $("#AverageGrid").hide();
                $("#AverageChart").show();
                var chartobj = $("#AverageChart").data("ejChart");
                chartobj.redraw();
            }
            break;
        case "GridAverage":
            if ($(target).hasClass("inactive")) {
                $(target).removeClass("inactive").addClass("active");
                $("#ChartAverage").removeClass("active").addClass("inactive");
                $("#AverageChart").hide();
                $("#AverageGrid").show();
            }
            break;
    }
}
function queryCellInfo(args) {
    if ($(args.cell).hasClass("groupcaption")) {
        if (args.cell.innerHTML.indexOf("Precipitation") != -1)
            args.cell.innerHTML = "Average Precipitation (mm)";
        if (args.cell.innerHTML.indexOf("Sunlight") != -1)
            args.cell.innerHTML = "Average Sunlight (Hours)";
        if (args.cell.innerHTML.indexOf("Minimum Temperature") != -1)
            args.cell.innerHTML = "Average Minimum Temperature (&deg;C)";
        if (args.cell.innerHTML.indexOf("Maximum Temperature") != -1)
            args.cell.innerHTML = "Average Maximum Temperature (&deg;C)";
        if (args.cell.innerHTML.indexOf("Wind") != -1)
            args.cell.innerHTML = "Average Wind (mph)";
    }
}
function hourChartLoad(sender) {
    var data = getHourData();
    sender.model.series[0]["dataSource"] = data.Temperature;
    sender.model.series[0]["xName"] = "XValue";
    sender.model.series[0]["yName"] = "YValue";
    sender.model.series[1]["dataSource"] = data.FeelsLike;
    sender.model.series[1]["xName"] = "XValue";
    sender.model.series[1]["yName"] = "YValue";
    sender.model.series[2]["dataSource"] = data.Humidity;
    sender.model.series[2]["xName"] = "XValue";
    sender.model.series[2]["yName"] = "YValue";
    sender.model.series[3]["dataSource"] = data.Wind;
    sender.model.series[3]["xName"] = "XValue";
    sender.model.series[3]["yName"] = "YValue";
}
function getHourData() {
    var series1 = [];
    var series2 = [];
    var series3 = [];
    var series4 = [];
    $.each(window.WeatherDataObject, function (index, value) {
        var point1 = { XValue: value.Date, YValue: value.Temperature };
        var point2 = { XValue: value.Date, YValue: value.FeelsLike };
        var point3 = { XValue: value.Date, YValue: value.Humidity };
        var point4 = { XValue: value.Date, YValue: value.Wind };
        series1.push(point1);
        series2.push(point2);
        series3.push(point3);
        series4.push(point4);
    });
    var data = { Temperature: series1, FeelsLike: series2, Humidity: series3, Wind: series4 };
    return data;
}
function averageChartLoad(sender) {
    var data = getAverageData();
    sender.model.series[0]["dataSource"] = data.Precipitation;
    sender.model.series[0]["xName"] = "XValue";
    sender.model.series[0]["yName"] = "YValue";
    sender.model.series[1]["dataSource"] = data.Sunlight;
    sender.model.series[1]["xName"] = "XValue";
    sender.model.series[1]["yName"] = "YValue";
}
function getAverageData() {
    var series1 = [];
    var series2 = [];
    $.each(window.AverageData[0], function (index, value) {
        if (index != "Average") {
            var point1 = { XValue: index, YValue: value };
            series1.push(point1);
        }
    });
    $.each(window.AverageData[1], function (index, value) {
        if (index != "Average") {
            var point1 = { XValue: index, YValue: value };
            series2.push(point1);
        }
    });
    var data = { Precipitation: series1, Sunlight: series2 };
    return data;
}
function weatherDataValues(i) {
    var currentDate = new Date();
    weatherData.push({
        "Date": new Date(currentDate.setHours(currentDate.getHours() + i)),
        "SkyCondition": skyCondition[Math.floor((Math.random() * 7))],
        "Humidity": Math.floor(Math.random() * 40 + 35),
        "Wind": Math.floor(Math.random() * 10 + 1),
        "Pressure": Math.floor(Math.random() * 30 + 70),
        "Temperature": Math.floor((Math.random() * 7)) * 5 + Math.floor(Math.random() * 5),
        "FeelsLike": Math.floor((Math.random() * 7)) * 5 + Math.floor(Math.random() * 15)
    });
}
function setHtmlValues() {
    $("#CurrentDay").text(ej.format(new Date(), "dddd"));
    $("#Circle_Temperature").html(weatherData[0].Temperature + "&deg;c");
    $("#Circle_SkyCondition").html(weatherData[0].SkyCondition);
    $("#Circle_Time").html(ej.format(weatherData[0].Date, "hh:mm tt"));
    $("#Circle_Day").html(ej.format(weatherData[0].Date, "dddd"));
    $("#Circle_Humidity").html(weatherData[0].Humidity + "%");
    $("#Circle_DewPoint").html(Math.floor((Math.random() * 10 + 10)) + "&deg;c");
}
