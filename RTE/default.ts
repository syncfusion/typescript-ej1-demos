/// <reference path="../tsfiles/jquery.d.ts" />
/// <reference path="../tsfiles/ej.web.all.d.ts" />

module RTEComponent {
    $(function () {
        var sample = new ej.RTE($("#rteSample"),{
            width: "100%",
            minWidth: "150px",
            showFooter: true,
            showHtmlSource: true,
            allowEditing: true,
            allowKeyboardNavigation: true,
            autoFocus: true,
            autoHeight: true,
            colorPaletteColumns: 10,
            colorPaletteRows: 5,
            cssClass: 'gradient-lime',
            enableResize: true,
            enableTabKeyNavigation: true,
            fileBrowser: {
                filePath: (<any>window).baseurl + "Content/FileBrowser/",
                extensionAllow: "*.png, *.doc, *.pdf, *.txt, *.docx",
                ajaxAction: (<any>window).baseurl + "api/FileExplorer/FileOperations"
            },
            imageBrowser: {
                filePath: (<any>window).baseurl + "Content/FileBrowser/",
                extensionAllow: "*.png, *.gif, *.jpg, *.jpeg, *.docx",
                ajaxAction: (<any>window).baseurl + "api/FileExplorer/FileOperations"
            },
            isResponsive: true,
            showClearAll: true,
            showClearFormat: true,
            showDimensions: true,
            showCharCount: true,
            tools: {
                formatStyle: ["format"],
                edit: ["findAndReplace"],
                font: ["fontName", "fontSize", "fontColor", "backgroundColor"],
                style: ["bold", "italic", "underline", "strikethrough"],
                alignment: ["justifyLeft", "justifyCenter", "justifyRight", "justifyFull"],
                lists: ["unorderedList", "orderedList"],
                clipboard: ["cut", "copy", "paste"],
                doAction: ["undo", "redo"],
                indenting: ["outdent", "indent"],
                clear: ["clearFormat", "clearAll"],
                links: ["createLink", "removeLink"],
                images: ["image"],
                media: ["video"],
                tables: ["createTable", "addRowAbove", "addRowBelow", "addColumnLeft", "addColumnRight", "deleteRow", "deleteColumn", "deleteTable"],
                effects: ["superscript", "subscript"],
                casing: ["upperCase", "lowerCase"],
                view: ["fullScreen", "zoomIn", "zoomOut"],
                print: ["print"],
                customUnorderedList: [{
                    name: "unOrderInsert",
                    tooltip: "Custom UnOrderList",
                    css: "e-rte-toolbar-icon e-rte-unlistitems customUnOrder",
                    text: "Smiley",
                    listImage: "url('../content/images/rte/Smiley-GIF.gif')"
                }],
                customOrderedList: [{
                    name: "orderInsert",
                    tooltip: "Custom OrderList",
                    css: "e-rte-toolbar-icon e-rte-listitems customOrder",
                    text: "Lower-Greek",
                    listStyle: "lower-greek"
                }]
            }
        });
    });

}