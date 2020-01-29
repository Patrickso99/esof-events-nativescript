const observableModule = require("tns-core-modules/data/observable");
const firebase = require("nativescript-plugin-firebase/app");
const data = require('./data');
const ObservableArray = require("tns-core-modules/data/observable-array").ObservableArray;
/*const redata = data.map((item) => {
    item.interventoCompleto = `${item.nome} - ${item.inizio} ${item.fine}`
    return item
});*/

const myObservableArray = new ObservableArray();

const firestore = firebase.firestore();
const speakers = firestore.collection("speakers");

speakers.get().then((document) => {
    document.forEach((doc) => {
        const item = doc.data()
        item.interventoCompleto = `${item.nome} - ${item.inizio} ${item.fine}`
        console.log(item.interventoCompleto)
        myObservableArray.push(item);
    });
});

/*
// Creo un documento con l'ID automatico
speakers.add({
    "nome": "Franco Tell",
      "img": "https://i1.wp.com/www.bluegrassyouthballet.org/bybsite/wp-content/uploads/2014/08/Dia-Web-Graphic.jpg",
      "intervento": "Fine",
      "inizio": "10:00",
      "fine": "11:00",
      "desc": "Piripicchio piripicchia",
      "id": "77s@hs$"
  }).then(documentRef => {
    console.log(`Document auto ID: ${documentRef.id}`);
    const doc = speakers.doc(documentRef.id);
    doc.update({
        id: documentRef.id
    }).then(() => {
        return documentRef.id
        console.log("SF population updated");
    });
  });*/

function SpeakersViewModel()
{
    const viewModel = {
        items: myObservableArray
    };

    return viewModel;
}

module.exports = SpeakersViewModel;
