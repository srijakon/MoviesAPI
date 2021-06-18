import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyC_CNHO1Evbzib-qfWcnJ1QYdLNv4J7-ao",
  authDomain: "movies-app-9de44.firebaseapp.com",
  projectId: "movies-app-9de44",
  storageBucket: "movies-app-9de44.appspot.com",
  messagingSenderId: "225809249355",
  appId: "1:225809249355:web:fa6790e0671d5c0ac449ce",
  measurementId: "G-5FKWYZBCG0",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const provider = new firebase.auth.GoogleAuthProvider();

export const firestore = new firebase.firestore();
export default firebase;
