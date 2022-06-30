var ExplorerComponent;
(function (ExplorerComponent) {
    $(function () {
        var file = new ej.FileExplorer($("#fileExplorer"), {
            path: window.baseurl + "Content/FileBrowser/",
            width: "100%",
            minWidth: "150px",
            layout: "tile",
            isResponsive: true,
            ajaxAction: window.baseurl + "api/FileExplorer/FileOperations"
        });
    });
})(ExplorerComponent || (ExplorerComponent = {}));
