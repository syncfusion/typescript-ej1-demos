/// <reference path="../tsfiles/jquery.d.ts" />
/// <reference path="../tsfiles/ej.web.all.d.ts" />

module PivotTreeMap {
    $(function () {
        var sample = new ej.PivotTreeMap($("#PivotTreeMap"),{
            dataSource: {
			data: "//bi.syncfusion.com/olap/msmdpump.dll;Locale Identifier=1033;",
			catalog: "Adventure Works DW 2008 SE",
			cube: "Adventure Works",
			rows: [
				{
					fieldName: "[Customer].[Customer Geography]"
				}
			],
			columns: [
				{
					fieldName: "[Date].[Fiscal]"
				}
			],
            values: [
				{
					measures: [
						{
							fieldName: "[Measures].[Customer Count]",
						}
					],
					axis: "columns"
				}
			],
			filters:[]
		}
        });
    });
}