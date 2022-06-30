/// <reference path="../tsfiles/jquery.d.ts" />
/// <reference path="../tsfiles/ej.web.all.d.ts" />

module ScrollerComponent {
    $(function () {
        var scrollerSample = new ej.Scroller($("#scrollcontent"), {
            height: "300px",
            width: "100%"
        });
        $(window).bind('resize', function () {
            scrollerSample.refresh();
        });
    });
}
