import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';


export const firebaseConfig = {
    apiKey: "AIzaSyBEA4Lwkwqj7Boi6-Ip0EAyoUehlLLCiUI",
    authDomain: "dash-65a9d.firebaseapp.com",
    projectId: "dash-65a9d",
    storageBucket: "dash-65a9d.appspot.com",
    messagingSenderId: "954430471729",
    appId: "1:954430471729:web:282b4934ebe4aafa06df10",
    measurementId: "G-1T3K8M6GR2"
   
};

let app;

if (firebase.apps.length === 0) {
   app= firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app
}

export const db = app.firestore();
export const auth = firebase.auth()