var SignatureComponent;
(function (SignatureComponent) {
    $(function () {
        var basicSignature = new ej.Signature($("#signature"), {
            height: "400px",
            isResponsive: true,
            strokeWidth: 3
        });
    });
})(SignatureComponent || (SignatureComponent = {}));
