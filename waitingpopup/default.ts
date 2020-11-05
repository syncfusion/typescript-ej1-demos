/// <reference path="../tsfiles/jquery.d.ts" />
/// <reference path="../tsfiles/ej.web.all.d.ts" />

module WaitingPopupComponent {
    $(function () {
        var sample = new ej.WaitingPopup($("#target"),{
            showOnInit: true,
            showImage: true,
            text: 'waiting&hellip;',
			target: "#target",
			appendTo: "#waiting"
        });
    });

}
