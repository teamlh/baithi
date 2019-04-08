import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/database'
import 'firebase/functions'

// Replace this with your own config details
var config = {
    apiKey: "AIzaSyAUFQXswj5p-rL2OvYGPcRBOd2Wpr5lU9Y",
    authDomain: "baithi-f718e.firebaseapp.com",
    databaseURL: "https://baithi-f718e.firebaseio.com",
    projectId: "baithi-f718e",
    storageBucket: "baithi-f718e.appspot.com",
    messagingSenderId: "521929805893 "
};

firebase.initializeApp(config);
firebase.auth();
firebase.firestore().settings({ timestampsInSnapshots: true });
firebase.functions()

export default firebase 