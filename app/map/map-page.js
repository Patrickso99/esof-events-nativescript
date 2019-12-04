const MapViewModel = require("./map-view-model");
const mapsModule = require("nativescript-google-maps-sdk");

function onNavigatingTo(args) {
    const component = args.object;
    component.bindingContext = new MapViewModel();
}

function onMapReady(args)
{
    //console.log("onMapReady", args);
    const mapView = args.object;

    // Primo marker
    const primoMarker = new mapsModule.Marker();

    primoMarker.position = mapsModule.Position.positionFromLatLng(
        45.649268385921395,
        13.762092590332031
    );
    primoMarker.title = "Colazione";
    primoMarker.color = "red";
    primoMarker.userData = {index: 1};
    mapView.addMarker(primoMarker);

    // Secondo marker
    const secondoMarker = new mapsModule.Marker();

    secondoMarker.position = mapsModule.Position.positionFromLatLng (
        45.646283314737836,
        13.759925365447998
    );
    secondoMarker.title = "Pranzo";
    secondoMarker.color = "red";
    secondoMarker.userData = {index: 1};
    mapView.addMarker(secondoMarker);
}

exports.onMapReady = onMapReady;
exports.onNavigatingTo = onNavigatingTo;
