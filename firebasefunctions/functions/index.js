const functions = require('firebase-functions');
const data = require('./peoples');
const codice = 'HAet376DE-eyet'

const admin = require('firebase-admin');
admin.initializeApp();

/* Path chiave per usare l'emulatore */
// export GOOGLE_APPLICATION_CREDENTIALS='esof-events-5604f-1d019af65751'

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions

exports.helloWorld = functions.https.onRequest((request, response) => {
    response.send(`
    <h2> Hello, from Firebase! 🔥</h2>
    <p> Pagina HTML di default from <b>firebase Functions</b> </p>
    `);
});

exports.helloWorld2 = functions.https.onRequest((request, response) => {
    console.log(request.query.nome)
    response.send(`
    <h2> Ciao, ${request.query.nome}! 😁</h2>
    <p> Benvenuto nella pagina e bla bla bla... 🙄 </p>
    `);
});

exports.helloWorldJson = functions.https.onRequest((request, response) => {
    response.json({
        "people": data,
        "version": "0.0.1"
    });
});

// @data param
exports.helloNome = functions.https.onCall((data, context) => {
    const code = data === codice ? 'OK' : 'NO'
    return {
        status: code
    }
})

exports.myFunctionName = functions.firestore
    .document('schedule/H1RXGtSOKSZGvbiC9lsW').onWrite((change, context) => {
        console.log('change', change)
        console.log('context', context)
    });

/* API a pagamento!!! */
// exports.scheduleFunction = functions.pubsub.schedule('every 1 minutes').onRun((context) => {
//     console.log('FIRE ogni 5 minuti')
//     return null
// });
