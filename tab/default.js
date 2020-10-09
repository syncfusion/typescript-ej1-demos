var TabComponent;
(function (TabComponent) {
    $(function () {
        var sample = new ej.Tab($("#defaultTab"), {
            width: "500px",
            collapsible: true,
            events: "click",
            heightAdjustMode: ej.Tab.HeightAdjustMode.Content,
            showCloseButton: true,
            showRoundedCorner: false
        });
    });
})(TabComponent || (TabComponent = {}));
