import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyAJVcfBHSvl56K7M2lCb8-dC7ib0RtTfsg",
  authDomain: "bdtr-4a2a5.firebaseapp.com",
  databaseURL: "https://bdtr-4a2a5-default-rtdb.firebaseio.com",
  projectId: "bdtr-4a2a5",
  storageBucket: "bdtr-4a2a5.appspot.com",
  messagingSenderId: "961230166210",
  appId: "1:961230166210:web:a2932d18de6e387be3435b",
  measurementId: "G-JSCY83C584"
};
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const databaseApp = getFirestore(app);