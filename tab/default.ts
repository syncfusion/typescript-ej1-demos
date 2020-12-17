/// <reference path="../tsfiles/jquery.d.ts" />
/// <reference path="../tsfiles/ej.web.all.d.ts" />

module TabComponent {
    $(function () {
        var sample = new ej.Tab($("#defaultTab"),{
            width: "500px",
            collapsible: true,
            events: "click",
            heightAdjustMode: ej.Tab.HeightAdjustMode.Content,
            showCloseButton: true,
            showRoundedCorner: false
        });
    });
}