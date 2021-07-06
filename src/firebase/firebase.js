import firebase from "firebase"

var firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBXgNCwVYDMptIwG6JyXqROs8G-7cde8y0",
    authDomain: "personal-web-site-b312d.firebaseapp.com",
    projectId: "personal-web-site-b312d",
    storageBucket: "personal-web-site-b312d.appspot.com",
    messagingSenderId: "659069792001",
    appId: "1:659069792001:web:5bced55203a2bdae2c3500"
})

var db = firebaseApp.firestore();

export {db};