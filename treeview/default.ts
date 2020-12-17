/// <reference path="../tsfiles/jquery.d.ts" />
/// <reference path="../tsfiles/ej.web.all.d.ts" />

module TreeViewComponent {
    $(function () {
        var tree = new ej.TreeView($("#treeView"), {
            allowEditing: true,
            allowDragAndDrop: true,
            allowDropChild: true,
            allowDropSibling: true,
        });
    });
}