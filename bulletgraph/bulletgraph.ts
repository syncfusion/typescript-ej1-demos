/// <reference path="../tsfiles/jquery.d.ts" />
/// <reference path="../tsfiles/ej.web.all.d.ts" />

module Bulletgraphcomponent {
    $(function () {
        var bulletsample = new ej.datavisualization.BulletGraph($("#BulletGraph"), {
            isResponsive: true,
            load: function () {
                var sender = $("#BulletGraph").data("ejBulletGraph");
                var bulletTheme = (<any>window).themeStyle + (<any>window).themeColor + (<any>window).themeVarient;
                if (bulletTheme) {
                    switch (bulletTheme) {
                        case "flatdark":
                        case "flatazuredark":
                        case "flatlimedark":
                        case "flatsaffrondark":
                        case "gradientdark":
                        case "gradientazuredark":
                        case "gradientlimedark":
                        case "gradientsaffrondark":
                        case "flathigh-contrast-01dark":
                        case "flathigh-contrast-02dark":
                            bulletTheme = "flatdark";
                            break;
                        case "flatoffice-365light":
                        case "flatmateriallight":
                            bulletTheme = "material";
                            break;
                        default:
                           bulletTheme = "flatlight";
                            break;
                    }
                    sender.model.theme = bulletTheme;
                }

            },
            tooltipSettings: { visible: true },
            quantitativeScaleSettings: {
                featureMeasures: [{
                    value: 8, comparativeMeasureValue:6.7
                }]
            },
            qualitativeRanges: [{
                rangeEnd: 4.3, rangeStroke:"#ebebeb",
            },
                {
                    rangeEnd: 7.3, rangeStroke:"#d8d8d8"
                },
                {
                    rangeEnd: 10, rangeStroke: "#7f7f7f"
                }
            ],
            captionSettings: {
                textPosition: 'right', text: 'Revenue YTD',
                subTitle: {
                    text: "$ in Thousands", textPosition:"right"
                }
            }
        });
    });
}

