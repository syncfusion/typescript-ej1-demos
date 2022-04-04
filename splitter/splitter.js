var SplitterComponent;
(function (SplitterComponent) {
    $(function () {
        var splitterInstance = new ej.Splitter($("#outterSpliter"), {
            height: "250px",
            width: "50%",
            orientation: ej.Orientation.Vertical,
            properties: [{}, { paneSize: 80 }],
            isResponsive: true
        });
        var splitterInstance1 = new ej.Splitter($("#innerSpliter"), {
            isResponsive: true
        });
    });
})(SplitterComponent || (SplitterComponent = {}));
