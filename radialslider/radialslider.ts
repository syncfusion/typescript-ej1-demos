/// <reference path="../tsfiles/jquery.d.ts" />
/// <reference path="../tsfiles/ej.web.all.d.ts" />

module RadialSliderComponent {
    $(function () {
        var radialsliderInstance = new ej.RadialSlider($("#radialSlider"), {
           innerCircleImageUrl: "images/radialslider/chevron-right.png"
        });
    });
}