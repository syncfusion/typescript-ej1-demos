var RotatorComponent;
(function (RotatorComponent) {
    $(function () {
        var rotatorInstance = new ej.Rotator($("#sliderContent"), {
            slideWidth: "100%",
            frameSpace: "0px",
            slideHeight: "auto",
            displayItemsCount: "1",
            navigateSteps: "1",
            pagerPosition: "outside",
            orientation: "horizontal",
            showPager: true,
            enabled: true,
            showCaption: true,
            allowKeyboardNavigation: true,
            showPlayButton: true,
            isResponsive: true,
            animationType: "slide"
        });
    });
})(RotatorComponent || (RotatorComponent = {}));
