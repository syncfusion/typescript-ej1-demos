var PDFViewerComponent;
(function (PDFViewerComponent) {
    $(function () {
        var pdfviewerControl = new ej.PdfViewer($("#pdfviewer"), {
            serviceUrl: window.baseurl + "api/PdfViewer",
            isResponsive: true
        });
    });
})(PDFViewerComponent || (PDFViewerComponent = {}));
