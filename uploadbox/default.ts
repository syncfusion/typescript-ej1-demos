/// <reference path="../tsfiles/jquery.d.ts" />
/// <reference path="../tsfiles/ej.web.all.d.ts" />

module UploadboxComponent {

    $(function () {
        var sample = new ej.Uploadbox($("#UploadDefault"),{
            saveUrl: (<any>window).baseurl + "api/uploadbox/Save",
            removeUrl: (<any>window).baseurl + "api/uploadbox/Remove",
            buttonText: {
                browse: "Choose File", upload: "Upload", cancel: "Cancel"
            },
            cssClass: "gradient- purple",
            dialogAction: {
                modal: false, closeOnComplete: false, drag: true
            },
            extensionsAllow: ".zip",
            multipleFilesSelection: true,
            showFileDetails: true
        });
    });

}