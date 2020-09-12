import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCYMngHa2y8TYViYlsmpvT5nNR97VGRBlU",
  authDomain: "fir-4a7fe.firebaseapp.com",
  databaseURL: "https://fir-4a7fe.firebaseio.com",
  projectId: "fir-4a7fe",
  storageBucket: "fir-4a7fe.appspot.com",
  messagingSenderId: "356775774074",
  appId: "1:356775774074:web:e9d6f8246294e8246d78c3",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
