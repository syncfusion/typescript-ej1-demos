/// <reference path="../tsfiles/jquery.d.ts" />
/// <reference path="../tsfiles/ej.web.all.d.ts" />

module RatingComponent {
    $(function () {

        var sample1 = new ej.Rating($("#fullRating"),{
            value: 4,
            precision: ej.Rating.Precision.Full,
            allowReset: true,
            cssClass: "gradient-lime",
            enabled: true,
            enablePersistence: true,
            incrementStep: 2,
            maxValue: 10,
            minValue: 0,
            orientation: ej.Orientation.Horizontal,
            shapeHeight: 25,
            shapeWidth: 25,
            showTooltip: true
        });

        var sample2 = new ej.Rating($("#halfRating"),{
            precision: ej.Rating.Precision.Half,
            value: 3.5,
            allowReset: true,
            cssClass: "gradient-lime",
            enabled: true,
            enablePersistence: true,
            incrementStep: 2,
            maxValue: 10,
            minValue: 0,
            orientation: "horizontal",
            shapeHeight: 25,
            shapeWidth: 25,
            showTooltip: true
        });

        var sample3 = new ej.Rating($("#exactRating"),{
            precision: ej.Rating.Precision.Exact,
            value: 3.7,
            allowReset: true,
            cssClass: "gradient-lime",
            enabled: true,
            enablePersistence: true,
            incrementStep: 2,
            maxValue: 10,
            minValue: 0,
            orientation: "horizontal",
            shapeHeight: 25,
            shapeWidth: 25,
            showTooltip: true
        });
    });
}