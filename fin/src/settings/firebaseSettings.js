import firebase from 'firebase'
import '@firebase/firestore'

let config = { 
        apiKey: "AIzaSyAsQg2vCXQM-vZtGrkjQdhspCwD-FXAIKM",
        authDomain: "financeiro-react.firebaseapp.com",
        databaseURL: "https://financeiro-react.firebaseio.com",
        projectId: "financeiro-react",
        storageBucket: "financeiro-react.appspot.com",
        messagingSenderId: "721898395595"
};

//Iniciando a ligação com o firebase
const app = firebase.initializeApp(config);

//Separando os serviços
export const auth = app.auth();
export const db = app.firestore();
