/// <reference path="../tsfiles/jquery.d.ts" />
/// <reference path="../tsfiles/ej.web.all.d.ts" />

module PivotChartOlap {
    $(function () {
        var sample = new ej.PivotChart($("#PivotChart"),{
            dataSource: {
			data: "//bi.syncfusion.com/olap/msmdpump.dll",
			catalog: "Adventure Works DW 2008 SE",
			cube: "Adventure Works",
			rows: [
				{
					fieldName: "[Date].[Fiscal]"
				}
			],
			columns: [
				{
					fieldName: "[Customer].[Customer Geography]"
				}
			],
			values: [
				{
					measures: [
						{
							fieldName: "[Measures].[Internet Sales Amount]"
						}
                    ],
					axis: "columns"
				}
            ],
			filters:[]
        },
		isResponsive: true,zooming:{enableScrollbar: true},
        commonSeriesOptions: {
			type: "column"
		},
		size: { height: "460px", width: "100%" },
		primaryXAxis: { title: { text: "Date - Fiscal" }, labelRotation: 0 },
		primaryYAxis: { title: { text: "Internet Sales Amount" } },
		legend: { visible: true, rowCount: 2 },
        load: function () {
                var PivotChart = (<any>window).themeStyle + (<any>window).themeColor + (<any>window).themeVarient;
                PivotChart = PivotChart.toString();
                if (PivotChart.indexOf("dark") > -1 || PivotChart.indexOf("contrast") > -1)
                    PivotChart = "flatdark";
                else
                    PivotChart = "flatlight";
                this.model.theme = PivotChart;
            },
        });
    });
}