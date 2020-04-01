/// <reference path="../tsfiles/jquery.d.ts" />
/// <reference path="../tsfiles/ej.web.all.d.ts" />

module linesparkline {
    $(function () {

        var sparklinesample = new ej.Sparkline($("#line"), {
            dataSource: [12, 14, 11, 12, 11, 15, 12, 10, 11, 12, 15, 13, 12, 11, 10, 13, 15, 12, 14, 16, 14, 12, 11],
            tooltip: {
                visible: true,
                font: { size:"12px" }
            },
            type: "line",
            size: { height: "40", width:"170" },
        });
    });
}

module columnsparkline {
    $(function () {
        var sparkcolumnsample = new ej.Sparkline($("#column"), {
            dataSource: [2, 6, -1, 1, 12, 5, -2, 7, -3, 5, 8, 10,],
            negativePointColor: "red",
            highPointColor: "blue",
            tooltip: {
                visible: true,
                font: {
                    size: "12px",
                }
            },
            type: "column",
            size: { height: "100", width: "150" },
        });
    });
}

module areasparkline {
    $(function () {
        var sparkareasample = new ej.Sparkline($("#area"), {
            dataSource: [12, -10, 11, 8, 17, 6, 2, -17, 13, -6, 8, 10,],
            markerSettings: { visible: true },
            highPointColor: "blue",
            lowPointColor: "orange",
            type: "area",
            opacity: 0.5,
            tooltip: {
                visible: true,
                font: {
                    size: "12px",
                }
            },
            size: { height: "100", width: "150" },
        });
    });
}

module windlosssparkline {
    $(function () {
        var sparkwinlosssample = new ej.Sparkline($("#winloss"), {
            dataSource: [12, 15, -11, 13, 17, 0, -12, 17, 13, -15, 8, 10,],
            type: "winloss",
            size: { height: "100", width: "150" },
        });
    });
}

module piesparkline1 {
    $(function () {
        var sparkpiesample1 = new ej.Sparkline($("#pie1"), {
            dataSource: [4, 6, 7],
            type: "pie",
            tooltip: {
                visible: true,
                font: {
                    size: "12px",
                }
            },
            size: { height: "40", width: "40" },
        });
    });
}

module piesparkline2 {
    $(function () {
        var sparkpiesample2 = new ej.Sparkline($("#pie2"), {
            dataSource: [8, 9, 1,],
            type: "pie",
            tooltip: {
                visible: true,
                font: {
                    size: "12px",
                }
            },
            size: { height: "40", width: "40" },
        });
    });
}

module piesparkline3 {
    $(function () {
        var sparkpiesample3 = new ej.Sparkline($("#pie3"), {
            dataSource: [2, 3, 5],
            type: "pie",
            tooltip: {
                visible: true,
                font: {
                    size: "12px",
                }
            },
            size: { height: "40", width: "40" },
        });
    });
}

module piesparkline4 {
    $(function () {
        var sparkpiesample4 = new ej.Sparkline($("#pie4"), {
            dataSource: [10, 12, 11],
            type: "pie",
            tooltip: {
                visible: true,
                font: {
                    size: "12px",
                }
            },
            size: { height: "40", width: "40" },
        });
    });
}