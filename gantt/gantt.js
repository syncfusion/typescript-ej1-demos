var GanttComponent;
(function (GanttComponent) {
    $(function () {
        var ganttInstance = new ej.Gantt($("#GanttContainer"), {
            dataSource: window.projectData,
            allowColumnResize: true,
            allowSorting: true,
            allowSelection: true,
            enableContextMenu: true,
            taskIdMapping: "taskID",
            allowDragAndDrop: true,
            taskNameMapping: "taskName",
            startDateMapping: "startDate",
            showColumnChooser: true,
            showColumnOptions: true,
            progressMapping: "progress",
            durationMapping: "duration",
            endDateMapping: "endDate",
            childMapping: "subtasks",
            scheduleStartDate: "02/01/2017",
            scheduleEndDate: "04/09/2017",
            resourceInfoMapping: "resourceId",
            resourceNameMapping: "resourceName",
            resourceIdMapping: "resourceId",
            resources: window.projectResources,
            predecessorMapping: "predecessor",
            showResourceNames: true,
            toolbarSettings: {
                showToolbar: true,
                toolbarItems: ["add", "edit", "delete", "update", "cancel", "indent", "outdent", "expandAll", "collapseAll", "search"]
            },
            editSettings: {
                allowEditing: true,
                allowAdding: true,
                allowDeleting: true,
                allowIndent: true,
                editMode: "cellEditing"
            },
            sizeSettings: {
                width: "100%",
                height: "100%"
            },
            dragTooltip: { showTooltip: true },
            showGridCellTooltip: true,
            treeColumnIndex: 1,
            isResponsive: true
        });
    });
})(GanttComponent || (GanttComponent = {}));
