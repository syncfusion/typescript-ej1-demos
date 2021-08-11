var SliderComponent;
(function (SliderComponent) {
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
})(SliderComponent || (SliderComponent = {}));
