/// <reference path="../tsfiles/jquery.d.ts" />
/// <reference path="../tsfiles/ej.web.all.d.ts" />

module DialogComponent {
    $(function () {
        var dialogInstance = new ej.Dialog($("#basicDialog"), {
            width: 550,
            minWidth: 310,
            minHeight: 215,
			target:".control",
            close:()=>{
			$("#btnOpen").show();}
        });
        var btnInstance = new ej.Button($("#btnOpen"), {
            size: "medium",
            click: ()=>{
			$("#btnOpen").hide();
        $("#basicDialog").ejDialog("open");},
            type: "button",
            height: 30,
            width: 150
        });
    });
}

