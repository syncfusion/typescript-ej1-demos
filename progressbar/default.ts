/// <reference path="../tsfiles/jquery.d.ts" />
/// <reference path="../tsfiles/ej.web.all.d.ts" />

module ProgressBarComponent {
    $(function () {
        var sample = new ej.ProgressBar($("#progressBar"),{
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

}
