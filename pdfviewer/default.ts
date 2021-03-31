/// <reference path="../tsfiles/jquery.d.ts" />
/// <reference path="../tsfiles/ej.web.all.d.ts" />

module PDFViewerComponent {
    $(function () {
        var pdfviewerControl = new ej.PdfViewer($("#pdfviewer"), {
            serviceUrl:(<any>window).baseurl+ "api/PdfViewer",
            isResponsive: true
        });
    });
}