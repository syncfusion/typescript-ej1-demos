var ScrollerComponent;
(function (ScrollerComponent) {
    $(function () {
        var scrollerSample = new ej.Scroller($("#scrollcontent"), {
            height: "300px",
            width: "100%"
        });
        $(window).bind('resize', function () {
            scrollerSample.refresh();
        });
    });
})(ScrollerComponent || (ScrollerComponent = {}));
