/// <reference path="../tsfiles/jquery.d.ts" />
/// <reference path="../tsfiles/ej.web.all.d.ts" />
module digitalgaugecomponent {
    $(function () {
        var digitalgaugesample = new ej.datavisualization.DigitalGauge($("#DigitalGauge"), {
            width: 525,
            height: 305,
            isResponsive: true,
            items: [{
                segmentSettings: {
                    width: 1,
                    spacing: 0,
                    color: "#8c8c8c"
                },
                characterSettings: {
                    opacity: 0.8,
                },
                value: "Syncfusion",
                position: { x: 52, y: 52 }
            }]
        });
    });
}


