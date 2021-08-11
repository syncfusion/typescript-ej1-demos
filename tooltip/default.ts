/// <reference path="../tsfiles/jquery.d.ts" />
/// <reference path="../tsfiles/ej.web.all.d.ts" />

module TooltipComponent {
    $(function () {

        var sample1 = new ej.Tooltip($("#link1"),{
            content: "ECMAScript (or ES) is a trademarked scripting-language specification standardized by Ecma International in ECMA-262 and ISO/IEC 16262.",
            associate: "mousefollow",
            autoCloseTimeout: 5000,
            collision: "fit",
            containment: ".frame",
            showRoundedCorner: true,
            showShadow: true
        });

        var sample2 = new ej.Tooltip($("#link2"),{
            content: "The World Wide Web (WWW) is an information space where documents and other web resources are identified by URLs, interlinked by hypertext links, and can be accessed via the Internet.",
            position: {
                stem: {
                    horizontal: "right",
                    vertical: "center"
                },
                target: {
                    horizontal: "left",
                    vertical: "center"
                }
            },
            autoCloseTimeout: 5000,
            collision: "fit",
            containment: ".frame",
            showRoundedCorner: true,
            showShadow: true
        });

        var sample3 = new ej.Tooltip($("#link3"),{
            content: 'Object-oriented programming (OOP) is a programming language model organized around objects rather than "actions" and data rather than logic.',
            position: {
                stem: {
                    horizontal: "right",
                    vertical: "center"
                },
                target: {
                    horizontal: "left",
                    vertical: "center",
                },
            },
            associate: "mousefollow",
            autoCloseTimeout: 5000,
            collision: "fit",
            containment: ".frame",
            showRoundedCorner: true,
            showShadow: true
        });
    });
}