/// <reference path="../tsfiles/jquery.d.ts" />
/// <reference path="../tsfiles/ej.web.all.d.ts" />



module ExplorerComponent {
    $(function () {
        var file = new ej.FileExplorer($("#fileExplorer"), {
            path: (<any>window).baseurl + "Content/FileBrowser/",
            width: "100%",
            minWidth: "150px",
            layout: "tile",
            isResponsive: true,
            ajaxAction: (<any>window).baseurl + "api/FileExplorer/FileOperations"
        });
    });
}

