/// <reference path="../tsfiles/jquery.d.ts" />
/// <reference path="../tsfiles/ej.web.all.d.ts" />

module ReportViewerComponent {
	$(function () {
		var report = new ej.ReportViewer($("#territoryReportViewer"), {
			reportServiceUrl: (<any>window).baseurl + 'api/ReportViewer',
			reportServerUrl: 'http://104.207.134.201/reportserver',
			processingMode: ej.ReportViewer.ProcessingMode.Remote,
			reportPath: "/SSRSSamples2/Territory Sales new",
			isResponsive: true
		});
	});
}
