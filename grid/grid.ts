/// <reference path="../tsfiles/jquery.d.ts" />
/// <reference path="../tsfiles/ej.web.all.d.ts" />

module GridComponent {
    $(function () {
        var gridInstance = new ej.Grid($("#Grid"), {
            dataSource: (<any>window).gridData,
            allowGrouping: true,
            allowSorting: true,
            allowMultiSorting: true,
            enableAltRow: true,
            allowPaging: true,
            allowReordering: true,
            allowResizing: true,
            allowFiltering: true,
            allowScrolling: true,
            enableRowHover: true,
            selectionType: "multiple",
            selectionSettings: { enableToggle: true, selectionMode: ["row", "cell", "column"] },
            allowKeyboardNavigation: true,
            editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true, allowEditOnDblClick: true, showDeleteConfirmDialog: true },
            toolbarSettings: { showToolbar: true, toolbarItems: ["add", "edit", "delete", "update", "cancel", "search"] },
            columns: [
                { field: "OrderID", headerText: "Order ID", isPrimaryKey: true, width: 75, textAlign: ej.TextAlign.Right },
                { field: "CustomerID", headerText: "Customer ID", editType: ej.Grid.EditingType.String, width: 80 },
                { field: "EmployeeID", headerText: "Employee ID", width: 75, editType: ej.Grid.EditingType.Dropdown, textAlign: ej.TextAlign.Right, priority: 4 },
                { field: "Freight", width: 75, format: "{0:C}", editType: ej.Grid.EditingType.Numeric, textAlign: ej.TextAlign.Right, priority: 3 },
                { field: "OrderDate", headerText: "Order Date", width: 80, format: "{0:MM/dd/yyyy}", textAlign: ej.TextAlign.Right, priority: 2 },
                { field: "ShipCity", headerText: "Ship City", editType: ej.Grid.EditingType.Dropdown, width: 110, priority: 2 }
            ],
            isResponsive: true,
            minWidth: 700,
            showSummary: true,
            summaryRows: [{ title: "Sum", summaryColumns: [{ summaryType: ej.Grid.SummaryType.Sum, displayColumn: "Freight", dataMember: "Freight", format: "{0:C2}" }] }]
        });
    });
}