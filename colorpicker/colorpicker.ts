/// <reference path="../tsfiles/jquery.d.ts" />
/// <reference path="../tsfiles/ej.web.all.d.ts" />

module ColorPickerComponent {
    $(function () {
        var colorSample = new ej.ColorPicker($("#colorpick"), {
            value: "#278787"
        });
    });
}
