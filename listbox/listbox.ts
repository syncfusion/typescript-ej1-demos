/// <reference path="../tsfiles/jquery.d.ts" />
/// <reference path="../tsfiles/ej.web.all.d.ts" />

module ListBoxComponent {
    $(function () {
        var listboxInstance = new ej.ListBox($("#selectcar"), {
            showCheckbox: true
        });
    });
}