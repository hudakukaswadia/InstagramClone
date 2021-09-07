// For Firebase JS SDK v7.20.0 and later, measurementId is optional


import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyC_wCqOl-O0jfSR3N74ijhpEjAnQps5398",
    authDomain: "instagram-clone-88acc.firebaseapp.com",
    databaseURL: "https://instagram-clone-88acc.firebaseio.com",
    projectId: "instagram-clone-88acc",
    storageBucket: "instagram-clone-88acc.appspot.com",
    messagingSenderId: "504889211736",
    appId: "1:504889211736:web:94921469271303bfc3432d",
    measurementId: "G-0KTTXKDKZ4"
  });


const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };

