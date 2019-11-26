const observableModule = require("tns-core-modules/data/observable");
const data = require('./data')
const redata = data.map((item) => {
    item.sub = `${item.inizio} - ${item.fine} ${item.luogo}`
    return item
});

function ScheduleItemsViewModel() {
    const viewModel = observableModule.fromObject({
        items: redata
    });

    return viewModel;
}

module.exports = ScheduleItemsViewModel;
