// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBrlCwW9S0-revOkmwSrkCXVL_DoJAY4w",
  authDomain: "tour-project-eec80.firebaseapp.com",
  projectId: "tour-project-eec80",
  storageBucket: "tour-project-eec80.appspot.com",
  messagingSenderId: "335165137878",
  appId: "1:335165137878:web:3295594e46afa410b1ba77"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);
export const storage = getStorage(app);