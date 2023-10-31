import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBojhtKiudqQg5gFnJ3H3srWKhG-Bt44Io",
  authDomain: "todo-d355b.firebaseapp.com",
  projectId: "todo-d355b",
  storageBucket: "todo-d355b.appspot.com",
  messagingSenderId: "298170984628",
  appId: "1:298170984628:web:e29dda0d3905f7fa050fe1",
  measurementId: "G-BHHDQ4CXR8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: import.meta.env.REACT_APP_CLIENT_ID,
//   authDomain: import.meta.env.REACT_AUTHDOMAIN,
//   projectId: import.meta.env.REACT_PROJECTID,
//   storageBucket: import.meta.env.REACT_STORAGEBUCKET,
//   messagingSenderId: import.meta.env.REACT_MESSAGINGSENDERID,
//   appId: import.meta.env.REACT_APPID,
//   measurementId: import.meta.env.REACT_MEASUREMENTID
// };

// const app = initializeApp(firebaseConfig);
// export const db = getFirestore(app);