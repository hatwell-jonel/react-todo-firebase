// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDSpa_JOct9gYYKEeeuL3H7ZhGw4dUdBr0",
  authDomain: "react-80ff9.firebaseapp.com",
  projectId: "react-80ff9",
  storageBucket: "react-80ff9.appspot.com",
  messagingSenderId: "167354454109",
  appId: "1:167354454109:web:58a68e153702dff0427db4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
