/// <reference path="../tsfiles/jquery.d.ts" />
/// <reference path="../tsfiles/ej.web.all.d.ts" />

module ReportViewerComponent {
	$(function () {
        var report = new ej.ReportViewer($("#DefaultReportViewer"), {
			reportServiceUrl: (<any>window).baseurl + 'api/ReportViewer',
			processingMode: ej.ReportViewer.ProcessingMode.Remote,
            reportPath: "ConditionalFormating.rdl",
			isResponsive: true
		});
	});
}
