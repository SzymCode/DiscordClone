import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAY2FlI9LzhfQnsGS13rEZ7bMaICfald88",
  authDomain: "discord-clone-64ab2.firebaseapp.com",
  projectId: "discord-clone-64ab2",
  storageBucket: "discord-clone-64ab2.appspot.com",
  messagingSenderId: "38896128132",
  appId: "1:38896128132:web:f4499837c8260347a072d1",
  measurementId: "G-V1NXYPPGY2"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore();
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account"
});

export { app, auth, provider, db };
