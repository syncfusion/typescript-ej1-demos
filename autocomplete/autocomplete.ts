/// <reference path="../tsfiles/jquery.d.ts" />
/// <reference path="../tsfiles/ej.web.all.d.ts" />

module AutocompleteComponent{
    var carList = [
                "Audi S6", "Austin-Healey", "Alfa Romeo", "Aston Martin",
                "BMW 7", "Bentley Mulsanne", "Bugatti Veyron",
                "Chevrolet Camaro", "Cadillac",
                "Duesenberg J", "Dodge Sprinter",
                "Elantra", "Excavator",
                "Ford Boss 302", "Ferrari 360", "Ford Thunderbird",
                "GAZ Siber",
                "Honda S2000", "Hyundai Santro",
                "Isuzu Swift", "Infiniti Skyline",
                "Jaguar XJS",
                "Kia Sedona EX", "Koenigsegg Agera",
                "Lotus Esprit", "Lamborghini Diablo",
                "Mercedes-Benz", "Mercury Coupe", "Maruti Alto 800",
                "Nissan Qashqai",
                "Oldsmobile S98", "Opel Superboss",
                "Porsche 356", "Pontiac Sunbird",
                "Scion SRS/SC/SD", "Saab Sportcombi", "Subaru Sambar", "Suzuki Swift",
                "Triumph Spitfire", "Toyota 2000GT",
                "Volvo P1800", "Volkswagen Shirako"
            ];
    $(function () {
        var autocompleteInstance =new ej.Autocomplete($("#selectCar"), {
            width: "100%",
            watermarkText: "Select a car",
            dataSource: carList,
            enableAutoFill: true,
            showPopupButton: true,
            multiSelectMode: "delimiter"
        });
    });
}
