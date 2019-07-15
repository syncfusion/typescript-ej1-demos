/// <reference path="../tsfiles/jquery.d.ts" />
/// <reference path="../tsfiles/ej.web.all.d.ts" />
module SignatureComponent {
    $(function () {
        var basicSignature = new ej.Signature($("#signature"), {
            height: "400px",
            isResponsive: true,
            strokeWidth: 3
        });
    });
}