var TreeViewComponent;
(function (TreeViewComponent) {
    $(function () {
        var tree = new ej.TreeView($("#treeView"), {
            allowEditing: true,
            allowDragAndDrop: true,
            allowDropChild: true,
            allowDropSibling: true
        });
    });
})(TreeViewComponent || (TreeViewComponent = {}));
