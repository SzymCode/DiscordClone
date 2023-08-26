import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAY2FlI9LzhfQnsGS13rEZ7bMaICfald88",
  authDomain: "discord-clone-64ab2.firebaseapp.com",
  projectId: "discord-clone-64ab2",
  storageBucket: "discord-clone-64ab2.appspot.com",
  messagingSenderId: "38896128132",
  appId: "1:38896128132:web:f4499837c8260347a072d1",
  measurementId: "G-V1NXYPPGY2"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };