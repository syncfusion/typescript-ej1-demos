/// <reference path="../tsfiles/jquery.d.ts" />
/// <reference path="../tsfiles/ej.web.all.d.ts" />

module ListviewComponent {
    $(function () {
        var listviewInstance = new ej.ListView($("#defaultlistview"), {
            enableCheckMark: true,
		    width: 400
        });
    });
}