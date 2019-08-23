/// <reference path="../tsfiles/jquery.d.ts" />
/// <reference path="../tsfiles/ej.web.all.d.ts" />

module ButtonComponent {
    $(function () {
        var basicButton = new ej.Button($("#buttonnormal"), {
            size: "large",
            showRoundedCorner: true,
            contentType: "textandimage",
            prefixIcon: "e-icon e-save",
            text: "Save"
        });
        var toggleButton = new ej.ToggleButton($("#TextOnly"), {
            showRoundedCorner: true,
            size: "large",
            contentType: "textandimage",
            defaultPrefixIcon: "e-icon e-save",
            activePrefixIcon: "e-icon e-delete",
            defaultText: "Save",
            activeText: "Delete"
        });
        var splitbuttonnormal = new ej.SplitButton($("#splitbuttonnormal"), {
            showRoundedCorner: true,
            size: "large",
            prefixIcon: "e-icon e-file-empty",
            targetID: "menu1",
            contentType: "textandimage",
            text: "File"
        });
        var groupButton = new ej.GroupButton($("#groupButton"), {
            showRoundedCorner: true,
            size: "large"
        });
        var check1 = new ej.CheckBox($("#check1"), {
            size: "medium", enableTriState: true
        });
        var check2 = new ej.CheckBox($("#check2"), {
            size: "medium", enableTriState: true
        });
        var radio1 = new ej.RadioButton($("#radio1"), {
            size: "medium"
        });
        var radio2 = new ej.RadioButton($("#radio2"), {
            size: "medium", checked: true
        });
    });
}
