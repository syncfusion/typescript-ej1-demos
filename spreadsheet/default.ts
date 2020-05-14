/// <reference path="../tsfiles/jquery.d.ts" />
/// <reference path="../tsfiles/ej.web.all.d.ts" />

module SpreadsheetComponent {
$(function () {
        var sample = new ej.Spreadsheet($("#basicSpreadsheet"), {
            scrollSettings: {
                height: 550,
            },
            importSettings: {
                importMapper: (<any>window).baseurl + "api/Spreadsheet/Import"
            },
            exportSettings: {
                excelUrl: (<any>window).baseurl + "api/Spreadsheet/ExcelExport",
                csvUrl: (<any>window).baseurl + "api/Spreadsheet/CsvExport",
                pdfUrl: (<any>window).baseurl + "api/Spreadsheet/PdfExport"
            },
            sheets: [{ rangeSettings: [{ dataSource: (<any>window).defaultData, startCell: "A1" }] }],
			loadComplete: () => {
			var spreadsheet = $("#basicSpreadsheet").data("ejSpreadsheet"), xlFormat = spreadsheet.XLFormat;
			if (!(<any>spreadsheet).isImport) {
        spreadsheet.setWidthToColumns([140, 128, 105, 100, 100, 110, 120, 120, 100]);
        xlFormat.format({ "style": { "font-weight": "bold" } }, "A1:H1");
        xlFormat.format({ "type": "currency" }, "E2:H11");
        spreadsheet.XLRibbon.updateRibbonIcons();
    }}
        });
    });
}