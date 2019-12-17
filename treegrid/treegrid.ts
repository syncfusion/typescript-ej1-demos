/// <reference path="../tsfiles/jquery.d.ts" />
/// <reference path="../tsfiles/ej.web.all.d.ts" />

module TreeGridComponent {
    $(function () {
        var treegridInstance = new ej.TreeGrid($("#TreeGridContainer"), {
        dataSource: (<any>window).treeGridData,
        childMapping: "subtasks",
        allowSorting: true,
        allowMultiSorting: true,
        enableAltRow: true,
        allowFiltering: true,
        treeColumnIndex: 1,
        allowKeyboardNavigation: true,
        showColumnChooser: true,
        showColumnOptions: true,
        contextMenuSettings: {
            showContextMenu: true,
            contextMenuItems: ["add", "edit", "delete"]
        },
        columnDialogFields: ["field", "headerText", "editType", "width", "visible", "allowSorting", "textAlign", "headerTextAlign"],
        editSettings: {
            allowAdding: true,
            allowEditing: true,
            allowDeleting: true,
            editMode: "cellEditing",
            rowPosition: "belowSelectedRow"
        },
        toolbarSettings: {
            showToolbar: true,
            toolbarItems: ["add","edit","delete","update","cancel","expandAll","collapseAll"]
        },
        columns: [
            { field: "taskID", headerText: "Task Id", allowFiltering: false, editType: "numericedit", filterEditType: "numericedit" },
            { field: "taskName", headerText: "Task Name", editType: "stringedit", filterEditType: "stringedit" },
            { field: "startDate", headerText: "Start Date", editType: "datepicker", filterEditType: "datepicker", format:"{0:MM/dd/yyyy}" },
            { field: "endDate", headerText: "End Date", editType: "datepicker", filterEditType: "datepicker", format:"{0:MM/dd/yyyy}" },
            { field: "progress", headerText: "Progress", editType: "numericedit", filterEditType: "numericedit" }
        ],
        isResponsive: true,
    });
});
}