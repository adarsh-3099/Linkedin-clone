import firebase from 'firebase'


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCWVSZE5Nn8T3ObAoO7x5li1FoGSzbT5Hs",
    authDomain: "linkedin-clone-aa6dd.firebaseapp.com",
    projectId: "linkedin-clone-aa6dd",
    storageBucket: "linkedin-clone-aa6dd.appspot.com",
    messagingSenderId: "540568750180",
    appId: "1:540568750180:web:d02cecf78ce9547f92f771",
    measurementId: "G-5F7RVBS3ML"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebase.firestore();

const auth = firebase.auth();

export { db,auth }; 