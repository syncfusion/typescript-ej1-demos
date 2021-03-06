var radialEle = $('#defaultradialmenu'), action = 0, forRedo = 0;
var rteEle = $("#rteSample1");
var RadialMenuComponent;
(function (RadialMenuComponent) {
    $(function () {
        if (!(ej.browserInfo().name == "msie" && parseInt(ej.browserInfo().version) < 9)) {
            var radialmenuInstance = new ej.RadialMenu($("#defaultradialmenu"), {
                imageClass: "imageclass",
                backImageClass: "backimageclass",
                targetElementId: "radialtarget1"
            });
            $("#radialtarget1").parent().css("position", "relative");
        }
        else {
            $("#contentDiv").html("Radial Menu is only supported from Internet Explorer Versioned 9 and above.").css({ "font-size": "20px", "color": "red" });
        }
        var rteInstance = new ej.RTE($("#rteSample1"), {
            width: "100%",
            minWidth: "10px",
            change: function (e) { radialEle.ejRadialMenu("enableItem", "Undo"); },
            select: function (e) {
                var target = $("#radialtarget1"), radialRadius = 150, radialDiameter = 2 * radialRadius, iframeY = e.event.clientY, iframeX = e.event.clientX, x = iframeX > target.width() - radialRadius ? target.width() - radialDiameter : (iframeX > radialRadius ? iframeX - radialRadius : 0), y = iframeY > target.height() - radialRadius ? target.height() - radialDiameter : (iframeY > radialRadius ? iframeY - radialRadius : 0);
                radialEle.ejRadialMenu("setPosition", x, y);
                radialEle.focus();
                $('iframe').contents().find('body').blur();
            },
            showToolbar: false,
            showContextMenu: false
        });
        $(window).resize(function () {
            if (ej.isMobile() && ej.isPortrait())
                $('#defaultradialmenu').css({ "left": 25 });
        });
    });
})(RadialMenuComponent || (RadialMenuComponent = {}));
function bold(e) {
    rteObj = rteEle.data("ejRTE");
    rteObj.executeCommand("bold");
    data = rteObj._getSelectedHtmlString() ? true : false;
    if (data)
        action += 1;
    forRedo = action;
    radialEle.focus();
}
function italic(e) {
    rteObj = rteEle.data("ejRTE");
    rteObj.executeCommand("italic");
    data = rteObj._getSelectedHtmlString() ? true : false;
    if (data)
        action += 1;
    forRedo = action;
    radialEle.focus();
}
function undo(e) {
    rteObj = rteEle.data("ejRTE");
    rteObj.executeCommand("undo");
    action -= 1;
    if (action == 0)
        radialEle.ejRadialMenu("disableItem", "Undo");
    radialEle.ejRadialMenu("enableItem", "Redo");
    radialEle.focus();
}
function redo(e) {
    rteObj = rteEle.data("ejRTE");
    rteObj.executeCommand("redo");
    action += 1;
    if (forRedo == action)
        radialEle.ejRadialMenu("disableItem", "Redo");
    radialEle.ejRadialMenu("enableItem", "Undo");
    radialEle.focus();
}
