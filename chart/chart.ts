/// <reference path="../tsfiles/jquery.d.ts" />
/// <reference path="../tsfiles/ej.web.all.d.ts" />

module ChartComponent {
    $(function () {
        var chartsample = new ej.datavisualization.Chart($("#Chart"), {
            primaryXAxis: {
                range: { min: 2005, max: 2011, interval: 1 },
                title: { text: "Year" },
                valueType: "category"
            },
            primaryYAxis: {
                range: { min: 25, max: 50, interval: 5 },
                labelFormat: "{value}%",
                title: { text: "Efficiency" },
            },
            commonSeriesOptions:
			{
                type: 'line', enableAnimation: true,
				tooltip:{ visible :true, template:'Tooltip'},
                marker:
                {
                    shape: 'circle',
                    size:
                    {
                        height: 10, width: 10
                    },
                    visible: true
                },
                 border : {width: 2}
            },
            series:
            [
                {
                    points: [{ x: 2005, y: 28 }, { x: 2006, y: 25 }, { x: 2007, y: 26 }, { x: 2008, y: 27 },
                        { x: 2009, y: 32 }, { x: 2010, y: 35 }, { x: 2011, y: 30 }],
                    name: 'India'
                },
                {
                    points: [{ x: 2005, y: 31 }, { x: 2006, y: 28 }, { x: 2007, y: 30 }, { x: 2008, y: 36 },
                        { x: 2009, y: 36 }, { x: 2010, y: 39 }, { x: 2011, y: 37 }],
                    name: 'Germany'
                },
                {
                    points: [{ x: 2005, y: 36 }, { x: 2006, y: 32 }, { x: 2007, y: 34 }, { x: 2008, y: 41 },
                        { x: 2009, y: 42 }, { x: 2010, y: 42 }, { x: 2011, y: 43 }],
                    name: 'England'
                },
                {
                    points: [{ x: 2005, y: 39 }, { x: 2006, y: 36 }, { x: 2007, y: 40 }, { x: 2008, y: 44 },
                        { x: 2009, y: 45 }, { x: 2010, y: 48 }, { x: 2011, y: 46 }],
                    name: 'France'
                }
            ],
            isResponsive: true,
            load: function () {
                var sender = $("#Chart").data("ejChart");
                if (!!window.orientation && sender) { //to modify chart properties for mobile view
                    var model = sender.model,
                        seriesLength = model.series.length;
                    model.legend.visible = false;
                    model.size.height = null;
                    model.size.width = null;
                    for (var i = 0; i < seriesLength; i++) {
                        if (!model.series[i].marker)
                            model.series[i].marker = {};
                        if (!model.series[i].marker.size)
                            model.series[i].marker.size = {};
                        model.series[i].marker.size.width = 6;
                        model.series[i].marker.size.height = 6;
                    }
                    model.primaryXAxis.labelIntersectAction = "rotate45";
                    if (model.primaryXAxis.title)
                        model.primaryXAxis.title.text = "";
                    if (model.primaryYAxis.title)
                        model.primaryYAxis.title.text = "";
                    model.primaryXAxis.edgeLabelPlacement = "hide";
                    model.primaryYAxis.labelIntersectAction = "rotate45";
                    model.primaryYAxis.edgeLabelPlacement = "hide";
                }
                var theme = (<any>window).themeStyle + (<any>window).themeColor + (<any>window).themeVarient;
                if (theme) {
                    switch (theme) {
                        case "flatdark":
                        case "flatazuredark":
                        case "flatlimedark":
                        case "flatsaffrondark":
                            theme = "flatdark";
                            break;
                        case "gradientlight":
                        case "gradientazurelight":
                        case "gradientlimelight":
                        case "gradientsaffronlight":
                            theme = "gradientlight";
                            break;
                        case "gradientdark":
                        case "gradientazuredark":
                        case "gradientlimedark":
                        case "gradientsaffrondark":
                            theme = "gradientdark";
                            break;
                        case "flatbootstraplight":
                            theme = "bootstrap";
                            break;
                        case "flathigh-contrast-01dark":
                        case "flathigh-contrast-02dark":
                            theme = "high-contrast-01";
                            break;
                        case "flatmateriallight":
                        case "flatoffice-365light":
                            theme = "material";
                            break;

                        default:
                            theme = "flatlight";
                            break;
                    }
                    sender.model.theme = theme;
                }
            },
            title: { text: 'Efficiency of oil-fired power production' },
            size: { height: "600" },
            legend: { visible: true},
        });
    });
}
