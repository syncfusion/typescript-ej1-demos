/// <reference path="../tsfiles/jquery.d.ts" />
/// <reference path="../tsfiles/ej.web.all.d.ts" />
module lineargaugecomponent {
    $(function () {
        var linearsample = new ej.datavisualization.LinearGauge($("#LinearGauge"), {
            labelColor: "#8c8c8c", width: 500,
            isResponsive: true, enableAnimation: false,
            scales: [{
                width: 4, border: { color: "transparent", width: 0 }, showBarPointers: false, showRanges: true, length: 310,
                position: { x: 52, y: 50 }, markerPointers: [{
                    value: 50, length: 10, width: 10, backgroundColor: "#4D4D4D", border: { color: "#4D4D4D" }
                }],
                labels: [{ font: { size: "11px", fontFamily: "Segoe UI", fontStyle: "bold" }, distanceFromScale: { x: -13 } }],
                ticks: [{ type: "majorinterval", width: 1, color: "#8c8c8c" }],
                ranges: [{
                    endValue: 60,
                    startValue: 0,
                    backgroundColor: "#F6B53F",
                    border: { color: "#F6B53F" }, startWidth: 4, endWidth: 4
                }, {
                        endValue: 100,
                        startValue: 60,
                        backgroundColor: "#E94649",
                        border: { color: "#E94649" }, startWidth: 4, endWidth: 4
                    }]
            }]
        });
    });
}