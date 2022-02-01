var DialogComponent;
(function (DialogComponent) {
    $(function () {
        var dialogInstance = new ej.Dialog($("#basicDialog"), {
            width: 550,
            minWidth: 310,
            minHeight: 215,
            target: ".control",
            close: function () {
                $("#btnOpen").show();
            }
        });
        var btnInstance = new ej.Button($("#btnOpen"), {
            size: "medium",
            click: function () {
                $("#btnOpen").hide();
                $("#basicDialog").ejDialog("open");
            },
            type: "button",
            height: 30,
            width: 150
        });
    });
})(DialogComponent || (DialogComponent = {}));
