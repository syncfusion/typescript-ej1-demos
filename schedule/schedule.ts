/// <reference path="../tsfiles/jquery.d.ts" />
/// <reference path="../tsfiles/ej.web.all.d.ts" />

module ScheduleComponent {
    $(function () {
        var sample = new ej.Schedule($("#Schedule1"), {
            width: "100%",
            height: "525px",
            currentDate: new Date(2017, 5, 5),
            timeScale: {
                minorSlotCount: 4,
                majorSlot: 60
            },
            contextMenuSettings: {
                enable: true,
                menuItems: {
                    appointment: [
                        { id: "open", text: "Open Appointment" },
                        { id: "delete", text: "Delete Appointment" },
                        { id: "customMenu3", text: "Menu Item 3" },
                        { id: "customMenu4", text: "Menu Item 4" }
                    ],
                    cells: [
                        { id: "new", text: "New Appointment" },
                        { id: "recurrence", text: "New Recurring Appointment" },
                        { id: "today", text: "Today" },
                        { id: "gotodate", text: "Go to date" },
                        { id: "settings", text: "Settings" },
                        { id: "view", text: "View", parentId: "settings" },
                        { id: "timemode", text: "TimeMode", parentId: "settings" },
                        { id: "view_Day", text: "Day", parentId: "view" },
                        { id: "view_Week", text: "Week", parentId: "view" },
                        { id: "view_Workweek", text: "Workweek", parentId: "view" },
                        { id: "view_Month", text: "Month", parentId: "view" },
                        { id: "timemode_Hour12", text: "12 Hours", parentId: "timemode" },
                        { id: "timemode_Hour24", text: "24 Hours", parentId: "timemode" },
                        { id: "workhours", text: "Work Hours", parentId: "settings" },
                        { id: "customMenu1", text: "Menu Item 1" },
                        { id: "customMenu2", text: "Menu Item 2" }
                    ]
                }
            },
            resources: [{
                field: "ownerId",
                title: "Owner",
                name: "Owners", allowMultiple: true,
                resourceSettings: {
                    dataSource: [
                        { text: "Nancy", id: 1, groupId: 1, color: "#f8a398" },
                        { text: "Steven", id: 3, groupId: 2, color: "#56ca85" },
                        { text: "Michael", id: 5, groupId: 1, color: "#51a0ed" }
                    ],
                    text: "text", id: "id", groupId: "groupId", color: "color"
                }
            }],
            appointmentSettings: {
                dataSource: new ej.DataManager((<any>window).ResourcesData).executeLocal(new ej.Query().take(10)),
                id: "Id",
                subject: "Subject",
                startTime: "StartTime",
                endTime: "EndTime",
                description: "Description",
                allDay: "AllDay",
                recurrence: "Recurrence",
                recurrenceRule: "RecurrenceRule",
                resourceFields: "ownerId"
            }
        });
    });
}