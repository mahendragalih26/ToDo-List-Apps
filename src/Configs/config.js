import firebase from 'firebase';
var firebaseConfig = {
  apiKey: 'AIzaSyDc1-YfXweZJFSIe8y1w9sMq4cnBLiAQhM',
  authDomain: 'delist-7292a.firebaseapp.com',
  databaseURL: 'https://delist-7292a.firebaseio.com',
  projectId: 'delist-7292a',
  storageBucket: 'delist-7292a.appspot.com',
  messagingSenderId: '1038451129055',
  appId: '1:1038451129055:web:803bb95765f040aff8876a',
  measurementId: 'G-93Q8XKZ9QC',
};
// Initialize Firebase
let app = firebase.initializeApp(firebaseConfig);

export const Database = app.database();
export const Auth = app.auth();
