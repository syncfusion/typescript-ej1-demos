/// <reference path="../tsfiles/jquery.d.ts" />
/// <reference path="../tsfiles/ej.web.all.d.ts" />

module PivotGridOlap {

    $(function () {
        var sample = new ej.PivotGrid($("#PivotGrid"),{
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
							fieldName: "[Measures].[Internet Sales Amount]",
						}
                    ],
					axis: "columns"
				}
			],
			filters:[]
		},
        enableGroupingBar: true,
        pivotTableFieldListID:"PivotSchemaDesigner"
        });
        $("#PivotSchemaDesigner").ejPivotSchemaDesigner();
    });
}