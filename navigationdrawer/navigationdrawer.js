var NavigationDrawerComponent;
(function (NavigationDrawerComponent) {
    $(function () {
        var navigationdrawerInstance = new ej.NavigationDrawer($("#navpane"), {
            targetId: "butdrawer",
            contentId: "content_container",
            type: "overlay",
            direction: "left",
            enableListView: true,
            listViewSettings: {
                width: 300,
                selectedItemIndex: 0
            },
            position: "normal"
        });
        $("#navpane_listview").click(function (e) {
            var text = e.target["text"] || $(e.target).closest("li.e-list").text();
            $("#butdrawer").parent().children("h2").text(text);
        });
    });
})(NavigationDrawerComponent || (NavigationDrawerComponent = {}));
