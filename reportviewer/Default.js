var ReportViewerComponent;
(function (ReportViewerComponent) {
    $(function () {
        var report = new ej.ReportViewer($("#DefaultReportViewer"), {
            reportServiceUrl: window.baseurl + 'api/ReportViewer',
            processingMode: ej.ReportViewer.ProcessingMode.Remote,
            reportPath: "ConditionalFormating.rdl",
            isResponsive: true
        });
    });
})(ReportViewerComponent || (ReportViewerComponent = {}));
