/// <reference path="../tsfiles/jquery.d.ts" />
/// <reference path="../tsfiles/ej.web.all.d.ts" />

module Barcodecomponent {
    $(function () {
        var barcodesample = new ej.datavisualization.Barcode($("#Barcode"), {
            text:"http://www.syncfusion.com"
        });
    });
}

