var dialogs = require("tns-core-modules/ui/dialogs");
const firebase = require("nativescript-plugin-firebase");
const ScheduleItemsViewModel = require("./schedule-items-view-model");

/*firebase.login({
    type: firebase.LoginType.PASSWORD,
    passwordOptions: {
        email: 'patrick.reichert@tecnicosuperiorekennedy.it',
        password: 'G4Mohki8'
    }
})
.then(result => {
    console.log('\n Accesso effettuato con successo!', '\n', result)
    alert({
        title: "Autenticazione avvenuta con successo!",
        message: `Ciao, ${result.email}`,
        okButtonText: 'Chiudi'
    })
})
.catch(error => console.error(error));
*/

/* firebase.logout()
.then(() => console.log('LOGOUT'))
.catch(error => console.error(error))
*/

/*
firebase.sendPasswordResetEmail('webnicola@gmail.com')
.then(() => console.log('Password reset by email'))
.catch(error => console.error('error', error))
*/

/* Anonymous login */
firebase.login(
    {
        type: firebase.LoginType.ANONYMOUS
    })
    .then(user => console.log("User uid: " + user.uid))
    .catch(error => console.log("Trouble in paradise: " + error));

const viewModel = new ScheduleItemsViewModel()
function onNavigatingTo(args) {
    const component = args.object;
    component.bindingContext = viewModel;
}

function showDialog() {
    console.log('LOGIN');
    dialogs.login({
        title: 'Login',
        message: 'Inserisci le credenziali per accedere alla app',
        okButtonText: "Invio",
        cancelButtonText: "Cancella",
        //neutralButtonText: "Neutrale",
        userName: "Utente",
        password: "Password"
    }).then(function (r) {
        console.log("Dialog result: " + r.result + ", user: " + r.userName + ", pwd: " + r.password);
        if (r.result) {
            firebase.login({
                type: firebase.LoginType.PASSWORD,
                passwordOptions: {
                    email: r.userName, // patrick.reichert@tecnicosuperiorekennedy.it
                    password: r.password // G4Mohki8
                }
            })
                .then(result => {
                    console.log('\n Accesso effettuato con successo!', '\n', result)
                    alert({
                        title: "Autenticazione avvenuta con successo!",
                        message: `Ciao, ${result.email}`,
                        okButtonText: 'Chiudi'
                    })
                    if (!result.emailVerified) {
                        console.log('emailVerified', result.emailVerified)
                    }
                    // set isLogIn=true
                    viewModel.set('isLogIn', true)
                })
                .catch(error => {
                    alert({
                        title: "Autenticazione fallita",
                        message: `I dati inseriti sono sbagliati o sono inesistenti: ${error}`,
                        okButtonText: 'Chiudi'
                    })
                    // set isLogIn=false
                    viewModel.set('isLogIn', false)
                    console.error(error)
                })
        }
        else {
            console.log('Cancel')
        }
    });
}

exports.onNavigatingTo = onNavigatingTo;
exports.showDialog = showDialog;
exports.showFunctions = function () {
    dialogs.prompt({
        title: "Una settimana di premi",
        message: "Inserisci qui il tuo codice",
        okButtonText: "CONTROLLA ORA!",
        cancelButtonText: "Cancella"
    }).then(function (r) {
        if (r.result) {
            fn(r.text)
                .then((mydata) => {
                    console.log('mydata.status', mydata.status)
                    if (mydata.status === 'OK') {
                        viewModel.set('isCorrect', '1')
                    } else {
                        viewModel.set('isCorrect', '0')
                    }
                })
                .catch((errorMessage) => {

                })

        }
        else {
            viewModel.set('isCorrect', '')
        }

        console.log("Dialog result: " + r.result + ", text: " + r.text);
    })
}
