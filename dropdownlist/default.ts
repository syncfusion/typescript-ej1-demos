/// <reference path="../tsfiles/jquery.d.ts" />
/// <reference path="../tsfiles/ej.web.all.d.ts" />

module DropDownListComponent {
    var BikeList = [
        { empid: "bk1", text: "Apache RTR" }, { empid: "bk2", text: "CBR 150-R" }, { empid: "bk3", text: "CBZ Xtreme" },
        { empid: "bk4", text: "Discover" }, { empid: "bk5", text: "Dazzler" }, { empid: "bk6", text: "Flame" },
        { empid: "bk7", text: "Fazzer" }, { empid: "bk8", text: "FZ-S" }, { empid: "bk9", text: "Pulsar" },
        { empid: "bk10", text: "Shine" }, { empid: "bk11", text: "R15" }, { empid: "bk12", text: "Unicorn" }
    ];
    $(function () {
        var sample = new ej.DropDownList($("#bikeList"),{
            dataSource: BikeList,
            width: "100%",
            watermarkText: "Select a bike",
            fields: { id: "empid", text: "text", value: "text" },
            enableFilterSearch: true,
            caseSensitiveSearch: true,
            enableIncrementalSearch: true,
            enablePopupResize: true,
            delimiterChar: ";",
            multiSelectMode: ej.MultiSelectMode.Delimiter,
            maxPopupHeight: "300px",
            minPopupHeight: "150px",
            maxPopupWidth: "500px",
            minPopupWidth: "350px",
            showCheckbox: true,
            showRoundedCorner: true
        });
    });
}