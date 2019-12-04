const observableModule = require("tns-core-modules/data/observable");
const data = require('./data')

function MapViewModel() {
    const viewModel = observableModule.fromObject({

        /* Add your view model properties here */
        latitude: 45.64617545848487,
        longitude: 13.76670644815647,
        zoom: 14
    });

    return viewModel;
}

module.exports = MapViewModel;
