import * as firebase from 'firebase';

var admin = require('firebase-admin');

var config = {
    apiKey: "AIzaSyBJWQ-RWHiDZ32jrVWMci_ngHB7poowWAA",
    authDomain: "team8-55393.firebaseapp.com",
    databaseURL: "https://team8-55393.firebaseio.com",
    projectId: "team8-55393",
    storageBucket: "team8-55393.appspot.com",
    messagingSenderId: "268913630414"
};

firebase.initializeApp(config);

const database = firebase.database();

export {
    database,
};


