/// <reference path="../tsfiles/jquery.d.ts" />
/// <reference path="../tsfiles/ej.web.all.d.ts" />

$(function () {
    var diagram = new ej.datavisualization.Diagram($("#diagram"), {
        width: "1000px",
        height: "600px",
        pageSettings: {
            //Sets page size
            pageHeight: 500,
            pageWidth: 500,
            //Customizes the appearance of page
            pageBorderWidth: 4,
            pageBackgroundColor: "white",
            pageBorderColor: "lightgray",
            pageMargin: 25,
            showPageBreak: true,
            multiplePage: true,
            pageOrientation: ej.datavisualization.Diagram.PageOrientations.Portrait
        },
        scrollSettings: {
            horizontalOffset: 0,
            verticalOffset: 0
        },
        snapSettings: {
            snapConstraints: ej.datavisualization.Diagram.SnapConstraints.ShowLines
        },
        nodes: [
            createNode({ name: "NewIdea", width: 150, height: 60, offsetX: 300, offsetY: 60, labels: [createLabel({ "text": "New idea identified" })], type: "flow", shape: ej.datavisualization.Diagram.FlowShapes.Terminator }),
            createNode({ name: "Meeting", width: 150, height: 60, offsetX: 300, offsetY: 155, labels: [createLabel({ "text": "Meeting with board" })], type: "flow", shape: ej.datavisualization.Diagram.FlowShapes.Process }),
            createNode({
                name: "BoardDecision", width: 150, height: 110, offsetX: 300, offsetY: 280, labels: [createLabel({ text: "Board decides \nwhether \nto proceed", wrapText: "true", "margin": { left: 20, top: 0, right: 20, bottom: 0 } })],
                type: "flow", shape: ej.datavisualization.Diagram.FlowShapes.Decision
            }),
            createNode({ name: "Project", width: 150, height: 100, offsetX: 300, offsetY: 430, labels: [createLabel({ "text": "Find Project \nmanager" })], type: "flow", shape: ej.datavisualization.Diagram.FlowShapes.Decision }),
            createNode({
                name: "End", width: 150, height: 60, offsetX: 300, offsetY: 555, labels: [createLabel({ "text": "Implement and Deliver" })], type: "flow", shape: ej.datavisualization.Diagram.FlowShapes.Process }),
            createNode({ name: "Decision", width: 250, height: 60, offsetX: 550, offsetY: 60, labels: [createLabel({ "text": "Decision Process for new software ideas" })], type: "flow", shape: ej.datavisualization.Diagram.FlowShapes.Card, fillColor: "#858585", borderColor: "#858585" }),
            createNode({ name: "Reject", width: 150, height: 60, offsetX: 550, offsetY: 285, labels: [createLabel({ "text": "Reject and write report" })], type: "flow", shape: ej.datavisualization.Diagram.FlowShapes.Process }),
            createNode({ name: "Resources", width: 150, height: 60, offsetX: 550, offsetY: 430, labels: [createLabel({ "text": "Hire new resources" })], type: "flow", shape: ej.datavisualization.Diagram.FlowShapes.Process })
        ],
        connectors: [
            createConnector({ name: "connector1", sourceNode: "NewIdea", targetNode: "Meeting" }),
            createConnector({ name: "connector2", sourceNode: "Meeting", targetNode: "BoardDecision" }),
            createConnector({ name: "connector3", sourceNode: "BoardDecision", targetNode: "Project", labels: [createLabel({ "text": "Yes" })] }),
            createConnector({ name: "connector4", sourceNode: "Project", targetNode: "End", labels: [createLabel({ "text": "Yes" })] }),
            createConnector({ name: "connector5", sourceNode: "BoardDecision", targetNode: "Reject", labels: [createLabel({ "text": "No" })] }),
            createConnector({ name: "connector6", sourceNode: "Project", targetNode: "Resources", labels: [createLabel({ "text": "No" })] })
        ]
    });
});

function createNode(option: ej.datavisualization.Diagram.Node) {
    if (!option.fillColor) {
        option.borderColor = "#1BA0E2";
        option.fillColor = "#1BA0E2";
    }
    option.labels[0].fontColor = "white";
    return option;
}

function createConnector(option: ej.datavisualization.Diagram.Connector) {
    option.targetDecorator = { shape: ej.datavisualization.Diagram.DecoratorShapes.Arrow, borderColor: "#606060", width: 10, height: 10 };
    option.lineColor = "#606060";
    if (option.labels && option.labels.length > 0) {
        option.labels[0].fillColor = "white";
    }
    return option;
}

function createLabel(options : any) {
    return options;
}