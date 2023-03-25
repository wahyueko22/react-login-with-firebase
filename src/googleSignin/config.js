import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBmRrqZyn1rVacZ77FXwbPM63zhVUVOfcQ",
  authDomain: "test-one-eb77e.firebaseapp.com",
  projectId: "test-one-eb77e",
  storageBucket: "test-one-eb77e.appspot.com",
  messagingSenderId: "633487671416",
  appId: "1:633487671416:web:4e5d6990a1f232ba9fed8d",
  measurementId: "G-TNQ166LHJ5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
export {auth,provider};