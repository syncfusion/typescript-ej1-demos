/// <reference path="../tsfiles/jquery.d.ts" />
/// <reference path="../tsfiles/ej.web.all.d.ts" />

var population_data: Array<Object> = [
    { Continent: "Asia", Country: "Indonesia", Growth: 3, Population: 237641326 },
    { Continent: "Asia", Country: "Russia", Growth: 2, Population: 152518015 },
    { Continent: "Asia", Country: "Malaysia", Growth: 1, Population: 29672000 },
    { Continent: "North America", Country: "United States", Growth: 4, Population: 315645000 },
    { Continent: "North America", Country: "Mexico", Growth: 2, Population: 112336538 },
    { Continent: "North America", Country: "Canada", Growth: 1, Population: 39056064 },
    { Continent: "South America", Country: "Colombia", Growth: 1, Population: 47000000 },
    { Continent: "South America", Country: "Brazil", Growth: 3, Population: 193946886 },
    { Continent: "Africa", Country: "Nigeria", Growth: 2, Population: 170901000 },
    { Continent: "Africa", Country: "Egypt", Growth: 1, Population: 83661000 },
    { Continent: "Europe", Country: "Germany", Growth: 1, Population: 81993000 },
    { Continent: "Europe", Country: "France", Growth: 1, Population: 65605000 },
    { Continent: "Europe", Country: "UK", Growth: 1, Population: 63181775 }
];

module treemapcomponent {
    $(function () {
        var treemapsample = new ej.datavisualization.TreeMap($("#treemap"), {
            leafItemSettings: { showLabels: true, labelPath: "Country" },
            rangeColorMapping: [
                { color: "#77D8D8", legendLabel: "1% Growth", from: 0, to: 1 },
                { color: "#AED960", from: 0, legendLabel: "2% Growth", to: 2 },
                { color: "#FFAF51", from: 0, legendLabel: "3% Growth", to: 3 },
                { color: "#F3D240", from: 0, legendLabel: "4% Growth", to: 4 }
            ],
            levels: [
                { groupPath: "Continent", groupGap: 5, headerHeight: 25, showHeader: true, headerTemplate: 'headertemplate' }
            ],
            dataSource: population_data,
            colorValuePath: "Growth",
            weightValuePath: "Population",
            borderThickness: 0,
            showLegend: true
        });
    });
}