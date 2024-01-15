// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//getAuth import
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
//getFirestore import
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBt2hQCPof8CLQgFjd_fhYuUWmp4gdrI2I",
  authDomain: "todolist-36cd3.firebaseapp.com",
  projectId: "todolist-36cd3",
  storageBucket: "todolist-36cd3.appspot.com",
  messagingSenderId: "1070623835296",
  appId: "1:1070623835296:web:22c6275001f698ce0bf5c5",
  measurementId: "G-YQ2BTNN9T7"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;
