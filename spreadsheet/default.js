var SpreadsheetComponent;
(function (SpreadsheetComponent) {
    $(function () {
        var sample = new ej.Spreadsheet($("#basicSpreadsheet"), {
            scrollSettings: {
                height: 550
            },
            importSettings: {
                importMapper: window.baseurl + "api/Spreadsheet/Import"
            },
            exportSettings: {
                excelUrl: window.baseurl + "api/Spreadsheet/ExcelExport",
                csvUrl: window.baseurl + "api/Spreadsheet/CsvExport",
                pdfUrl: window.baseurl + "api/Spreadsheet/PdfExport"
            },
            sheets: [{ rangeSettings: [{ dataSource: window.defaultData, startCell: "A1" }] }],
            loadComplete: function () {
                var spreadsheet = $("#basicSpreadsheet").data("ejSpreadsheet"), xlFormat = spreadsheet.XLFormat;
                if (!spreadsheet.isImport) {
                    spreadsheet.setWidthToColumns([140, 128, 105, 100, 100, 110, 120, 120, 100]);
                    xlFormat.format({ "style": { "font-weight": "bold" } }, "A1:H1");
                    xlFormat.format({ "type": "currency" }, "E2:H11");
                    spreadsheet.XLRibbon.updateRibbonIcons();
                }
            }
        });
    });
})(SpreadsheetComponent || (SpreadsheetComponent = {}));
