var rangecomponent;
(function (rangecomponent) {
    $(function () {
        var linearsample = new ej.datavisualization.RangeNavigator($("#RangeNavigator"), {
            enableDeferredUpdate: true,
            padding: "15",
            allowSnapping: true,
            selectedRangeSettings: {
                start: "2010/5/1", end: "2011/10/1"
            },
            isResponsive: true,
            tooltipSettings: {
                visible: true, labelFormat: "MM/dd/yyyy", backgroundColor: "gray", tooltipDisplayMode: "ondemand"
            },
            load: function () {
                var rn = $("#RangeNavigator").data("ejRangeNavigator");
                rn.model.series = [
                    {
                        type: 'line',
                        dataSource: data.Open, xName: "XValue", yName: "YValue",
                        fill: '#69D2E7'
                    }
                ];
            },
            loaded: function () {
                var sender = $("#RangeNavigator").data("ejRangeNavigator");
                var theme = window.themeStyle + window.themeColor + window.themeVarient;
                if (theme) {
                    switch (theme) {
                        case "flatazurelight":
                            theme = "azurelight";
                            break;
                        case "flatlimelight":
                            theme = "limelight";
                            break;
                        case "flatsaffronlight":
                            theme = "saffronlight";
                            break;
                        case "gradientazurelight":
                            theme = "gradientazure";
                            break;
                        case "gradientlimelight":
                            theme = "gradientlime";
                            break;
                        case "gradientsaffronlight":
                            theme = "gradientsaffron";
                            break;
                        case "flatazuredark":
                            theme = "azuredark";
                            break;
                        case "flatlimedark":
                            theme = "limedark";
                            break;
                        case "flatsaffrondark":
                            theme = "saffrondark";
                            break;
                        case "gradientazuredark":
                            theme = "gradientazuredark";
                            break;
                        case "gradientlimedark":
                            theme = "gradientlimedark";
                            break;
                        case "gradientsaffrondark":
                            theme = "gradientsaffrondark";
                            break;
                        case "flathigh-contrast-01dark":
                            theme = "highcontrast01";
                            break;
                        case "flathigh-contrast-02dark":
                            theme = "highcontrast02";
                            break;
                        case "flatmateriallight":
                            theme = "material";
                            break;
                        case "flatoffice-365light":
                            theme = "office";
                            break;
                        default:
                            theme = "flatlight";
                            break;
                    }
                    sender.model.theme = theme;
                }
            }
        });
    });
})(rangecomponent || (rangecomponent = {}));
var data;
data = GetData();
function GetData() {
    var series1 = [];
    var series2 = [];
    var value = 100;
    var value1 = 120;
    for (var i = 1; i < 730; i++) {
        if (Math.random() > .5) {
            value += Math.random();
            value1 += Math.random();
        }
        else {
            value -= Math.random();
            value1 -= Math.random();
        }
        var point1 = { XValue: new Date(2010, 0, i), YValue: value };
        var point2 = { XValue: new Date(2010, 0, i), YValue: value1 };
        series1.push(point1);
        series2.push(point2);
    }
    data = { Open: series1, Close: series2 };
    return data;
}
;
