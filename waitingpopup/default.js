var WaitingPopupComponent;
(function (WaitingPopupComponent) {
    $(function () {
        var sample = new ej.WaitingPopup($("#target"), {
            showOnInit: true,
            showImage: true,
            text: 'waiting&hellip;',
            target: "#target",
            appendTo: "#waiting"
        });
    });
})(WaitingPopupComponent || (WaitingPopupComponent = {}));
