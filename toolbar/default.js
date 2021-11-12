var ToolbarComponent;
(function (ToolbarComponent) {
    $(function () {
        var sample = new ej.Toolbar($("#editingToolbar"), {
            width: "100%",
            cssClass: "gradient-lime",
            enableSeparator: true,
            isResponsive: true,
            orientation: ej.Orientation.Horizontal,
            showRoundedCorner: true
        });
    });
})(ToolbarComponent || (ToolbarComponent = {}));
