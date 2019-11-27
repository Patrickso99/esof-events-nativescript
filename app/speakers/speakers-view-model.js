const observableModule = require("tns-core-modules/data/observable");
const sufix = 'Sign.'

function SpeakersViewModel() {
    const viewModel = observableModule.fromObject({
        /* Add your view model properties here */
        test: 'Ciao mondo',
        subtitle: ''
    });

    setTimeout(() => {
        viewModel.subtitle = `${sufix} Mario Rossi`
    }, 1200);

    return viewModel;
}

module.exports = SpeakersViewModel;
