/// <reference path="../tsfiles/jquery.d.ts" />
/// <reference path="../tsfiles/ej.web.all.d.ts" />


module SliderComponent {
    $(function () {
        var slider = new ej.Slider($("#minSlider"), {
            sliderType: "MinRange",
            value: 60,
            minValue: 0,
            maxValue: 100
        });
        var rangeslider = new ej.Slider($("#rangeSlider"), {
            sliderType: "Range",
            values: [30, 60],
            minValue: 0
        });

    });
}


