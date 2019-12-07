const MapViewModel = require("./map-view-model");
const mapsModule = require("nativescript-google-maps-sdk");
const geoJson = require("./data");

function onNavigatingTo(args)
{
    const component = args.object;
    component.bindingContext = new MapViewModel();
}

function isValidGEOJSON(obj)
{
    try
    {
        if (obj.hasOwnProperty('features') && obj.features.length > 0)
        {
            return true
        }
        else
        {
            console.error('Il tuo geoJson non è valido!')
        }
    }
    catch
    {
      return false;
    }
}

function onMapReady(args)
{
    //console.log("onMapReady", args);
    const mapView = args.object;

    // Se il geoJSON è valido, allora...
    if (isValidGEOJSON(geoJson))
    {
        geoJson.features.forEach(feature => {

            console.log('feature', feature.geometry.coordinates[0]);

            const marker = new mapsModule.Marker();

            marker.position = mapsModule.Position.positionFromLatLng (

                feature.geometry.coordinates[1],
                feature.geometry.coordinates[0]
            );

            marker.title = feature.properties.evento;
            marker.color = "blue";
            marker.userData = {index: 1};

            mapView.addMarker(marker);
        });
    }

    /* // Primo marker
    const primoMarker = new mapsModule.Marker();

    primoMarker.position = mapsModule.Position.positionFromLatLng (
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
    mapView.addMarker(secondoMarker); */
}

exports.onMapReady = onMapReady;
exports.onNavigatingTo = onNavigatingTo;
