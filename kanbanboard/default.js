var KanbanComponent;
(function (KanbanComponent) {
    $(function () {
        var sample = new ej.Kanban($("#Kanban"), {
            dataSource: new ej.DataManager(window.kanbanData).executeLocal(new ej.Query().take(20)),
            columns: [
                { headerText: "Backlog", key: "Open" },
                { headerText: "In Progress", key: "InProgress" },
                { headerText: "Testing", key: "Testing" },
                { headerText: "Done", key: "Close" }
            ],
            keyField: "Status",
            allowTitle: true,
            fields: {
                content: "Summary",
                primaryKey: "Id",
                imageUrl: "ImgUrl"
            },
            allowSelection: false
        });
    });
})(KanbanComponent || (KanbanComponent = {}));
