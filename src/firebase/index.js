import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyDKmf-LGnWjQKOvJc7Uio0iUfW8Pr6v5m8",
    authDomain: "reactjss-940ab.firebaseapp.com",
    databaseURL: "https://reactjss-940ab.firebaseio.com",
    projectId: "reactjss-940ab",
    storageBucket: "reactjss-940ab.appspot.com",
    messagingSenderId: "491832085503",
    appId: "1:491832085503:web:f2ca19ba8a64e88bf9f5ca",
    measurementId: "G-Q0SH9R4FML"
};
// Initialize Firebase
firebase.initializeApp(config);

export default firebase