import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDGDSFJBX_saZn6iZ-rOlyaMegZWndok2o",
  authDomain: "react-todo-dcf6a.firebaseapp.com",
  projectId: "react-todo-dcf6a",
  storageBucket: "react-todo-dcf6a.appspot.com",
  messagingSenderId: "1056744636177",
  appId: "1:1056744636177:web:a270c48549dedcc421d6b0"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
