var AccordionComponent;
(function (AccordionComponent) {
    $(function () {
        var sample = new ej.Accordion($("#basicAccordion"), {
            width: "100%",
            allowKeyboardNavigation: true,
            collapseSpeed: 500,
            collapsible: true,
            enableAnimation: true,
            enableMultipleOpen: true,
            events: "click",
            expandSpeed: 500,
            headerSize: "40px",
            htmlAttributes: { title: "Demo" },
            selectedItemIndex: 1,
            showCloseButton: true,
            showRoundedCorner: true
        });
    });
})(AccordionComponent || (AccordionComponent = {}));
