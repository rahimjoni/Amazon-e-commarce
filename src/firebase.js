// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyCWaCP9_OQEDG0lbSgmkvCMxis59Vkwl6E",
    authDomain: "clone-5ee3d.firebaseapp.com",
    databaseURL: "https://clone-5ee3d.firebaseio.com",
    projectId: "clone-5ee3d",
    storageBucket: "clone-5ee3d.appspot.com",
    messagingSenderId: "426767825254",
    appId: "1:426767825254:web:7f8da26e2bf1b6170af0a7",
    measurementId: "G-S5PSEGLZ3X"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth}