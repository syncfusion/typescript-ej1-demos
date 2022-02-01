/// <reference path="../tsfiles/jquery.d.ts" />
/// <reference path="../tsfiles/ej.web.all.d.ts" />


module SplitterComponent {
    $(function () {
        var splitterInstance = new ej.Splitter($("#outterSpliter"), {
            height: "250px",
            width: "50%",
            orientation: ej.Orientation.Vertical,
            properties: [{}, { paneSize: 80 }],
            isResponsive:true
        });
        var splitterInstance1 = new ej.Splitter($("#innerSpliter"), {
            isResponsive:true,
        });
    });
}