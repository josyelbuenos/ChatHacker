import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyANfut5vITXmqZANqHIYq-8Giowqk2lwYQ",
  authDomain: "hackerchat-c6b3c.firebaseapp.com",
  projectId: "hackerchat-c6b3c",
  storageBucket: "hackerchat-c6b3c.appspot.com",
  messagingSenderId: "784907107341",
  appId: "1:784907107341:web:366074f7f44c1035af6944",
};

const app = firebase.initializeApp(firebaseConfig);

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
