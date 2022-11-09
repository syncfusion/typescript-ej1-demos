/// <reference path="../tsfiles/jquery.d.ts" />
/// <reference path="../tsfiles/ej.web.all.d.ts" />

module MenuComponent {
    $(function () {
        var sample = new ej.Menu($("#syncfusionProducts"),{
            width: "100%",
            animationType: ej.AnimationType.Default,
            cssClass: 'gradient-lime ',
            enableAnimation: true,
            enableSeparator: true,
            height: 40,
            htmlAttributes: { "aria-label": "menu" },
            menuType: "normalmenu",
            orientation: ej.Orientation.Horizontal,
            showRootLevelArrows: true,
            showSubLevelArrows: true,
            subMenuDirection: ej.Direction.Right,
            titleText: "Menu",
        });
    });
}