const observableModule = require("tns-core-modules/data/observable");
const firebase = require("nativescript-plugin-firebase/app");
const ObservableArray = require("tns-core-modules/data/observable-array").ObservableArray;
const data = require('./data')
/*const redata = data.map((item) => {
    item.sub = `${item.inizio} - ${item.fine} ${item.luogo}`
    return item
});*/

const myObservableArray = new ObservableArray();

const firestore = firebase.firestore();
const schedule = firestore.collection("schedule");

schedule.get().then((document) => {
    document.forEach((doc) => {
        const tmp = doc.data()
        tmp.sub = `${tmp.inizio} - ${tmp.fine} ${tmp.luogo}`
        console.log(tmp.sub)
        myObservableArray.push(tmp);
    });
});
/*
// Creo un documento con l'ID automatico
schedule.add({
    "nome": "AUTO-ID Fine 2",
    "inizio": "11:00",
    "fine": "12:00",
    "luogo": "Piazza Unità d'Italia",
    "id": "@261as19",
    "group": "10:00 - 11:00"
  }).then(documentRef => {
    //console.log(`Document auto ID: ${documentRef.id}`);
    const doc = schedule.doc(documentRef.id);
    doc.update({
        id: documentRef.id
    }).then(() => {
        return documentRef.id
        //console.log("SF population updated");
    });
  });

// Creo un documento con l'ID manuale inserito da me
schedule.doc("@261as19").set({
    "nome": "Fine 2",
    "inizio": "11:00",
    "fine": "12:00",
    "luogo": "Piazza Unità d'Italia",
    "id": "@261as19",
    "group": "10:00 - 11:00"
 });

// Elimina un documento in base all'ID
schedule.doc("@261as19").delete().then(() => {
    console.log("@261as19 è stato cancellato!");
  });

// Query che mi mostra i programmi che iniziano alle 09:00
const query = schedule.where("inizio", "==", "09:00");
query.get().then(querySnapshot => {
      querySnapshot.forEach(doc => {
        console.log("Inizio alle 9: ", doc.data());
      });
    });
*/
function ScheduleItemsViewModel() {
    const viewModel = observableModule.fromObject({
        items: myObservableArray,
        myGroupingFunc: function (item) {
            return item.group
        },
        isLogIn: false,
        isCorrect: ''
    });

    return viewModel;
}

module.exports = ScheduleItemsViewModel;
