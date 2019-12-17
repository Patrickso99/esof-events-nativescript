const observableModule = require("tns-core-modules/data/observable");

function CreditsViewModel() {
    const viewModel = observableModule.fromObject({

        /* Add your view model properties here */
        credits: ['Mario Rossi', 'Valentino Rossi', 'Vasco Rossi', 'Paolo Rossi']
    });

    return viewModel;
}

module.exports = CreditsViewModel;
