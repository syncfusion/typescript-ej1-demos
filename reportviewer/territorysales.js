var ReportViewerComponent;
(function (ReportViewerComponent) {
    $(function () {
        var report = new ej.ReportViewer($("#territoryReportViewer"), {
            reportServiceUrl: window.baseurl + 'api/ReportViewer',
            reportServerUrl: 'http://104.207.134.201/reportserver',
            processingMode: ej.ReportViewer.ProcessingMode.Remote,
            reportPath: "/SSRSSamples2/Territory Sales new",
            isResponsive: true
        });
    });
})(ReportViewerComponent || (ReportViewerComponent = {}));
