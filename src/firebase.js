import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCAWhH2C_OAVn_lsaMxPwpM6WYYk9wE9JI",
  authDomain: "react-todo-61586.firebaseapp.com",
  projectId: "react-todo-61586",
  storageBucket: "react-todo-61586.appspot.com",
  messagingSenderId: "454162630164",
  appId: "1:454162630164:web:d6027e4a2e3e8b59804901"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
