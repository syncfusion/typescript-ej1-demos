var UploadboxComponent;
(function (UploadboxComponent) {
    $(function () {
        var sample = new ej.Uploadbox($("#UploadDefault"), {
            saveUrl: window.baseurl + "api/uploadbox/Save",
            removeUrl: window.baseurl + "api/uploadbox/Remove",
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
})(UploadboxComponent || (UploadboxComponent = {}));
