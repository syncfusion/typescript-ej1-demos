var ProgressBarComponent;
(function (ProgressBarComponent) {
    $(function () {
        var sample = new ej.ProgressBar($("#progressBar"), {
            width: 200,
            value: 45,
            height: 20,
            enablePersistence: true,
            maxValue: 200,
            minValue: 0,
            showRoundedCorner: true,
            text: 'loading...'
        });
    });
})(ProgressBarComponent || (ProgressBarComponent = {}));
