const InformationViewModel = require("./information-view-model");

function onNavigatingTo(args) {
    const component = args.object;
    component.bindingContext = new InformationViewModel();
}

exports.onNavigatingTo = onNavigatingTo;
