const observableModule = require("tns-core-modules/data/observable");
const data = require('./data');
const redata = data.map((item) => {
    if(item.cat=='A')
    {
        item.color = 'red'
    }

    item.interventoCompleto = `${item.nome} - ${item.inizio} ${item.fine}`
    return item
});

function SpeakersViewModel() {
    const viewModel = observableModule.fromObject({
        items: redata
    });

    //console.log('FIRE: ', viewModel);
    return viewModel;
}

module.exports = SpeakersViewModel;
