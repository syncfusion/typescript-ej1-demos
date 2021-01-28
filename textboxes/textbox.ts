/// <reference path="../tsfiles/jquery.d.ts" />
/// <reference path="../tsfiles/ej.web.all.d.ts" />
module EditorComponent {
    $(function () {
        var num = new ej.NumericTextbox($("#numeric"), {
            value: 30,
            minValue: 1,
            maxValue: 100,
            name: "numeric",
            width: "100%"
        });
        var per = new ej.PercentageTextbox($("#percent"), {
            value: 60,
            minValue: 10,
            maxValue: 1000,
            name: "percent",
            width: "100%"
        });
        var cur = new ej.CurrencyTextbox($("#currency"), {
            value: 100,
            minValue: 10,
            maxValue: 1000,
            name: "currency",
            width: "100%"
        });
        var mask = new ej.MaskEdit($("#maskedit"), {
            name: "mask",
            value: "4242422424",
            maskFormat: "99 999-99999",
            width: "100%"
        })
    });
}

