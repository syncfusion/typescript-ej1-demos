/// <reference path="../tsfiles/jquery.d.ts" />
/// <reference path="../tsfiles/ej.web.all.d.ts" />

module ToolbarComponent {
    $(function () {
        var sample = new ej.Toolbar($("#editingToolbar"),{
            width: "100%",
            cssClass: "gradient-lime",
            enableSeparator: true,
            isResponsive: true,
            orientation: ej.Orientation.Horizontal,
            showRoundedCorner: true
        });
    });
}