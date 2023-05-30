import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, onValue } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyA0tY2Svlzr0j8F6Dv0WSXeIrsG6F_cY3I",
  authDomain: "agil-projektledning-grupp.firebaseapp.com",
  databaseURL:
    "https://agil-projektledning-grupp-default-rtdb.europe-west1.firebasedatabase.app/",
  projectId: "agil-projektledning-grupp",
  storageBucket: "agil-projektledning-grupp.appspot.com",
  messagingSenderId: "926760801750",
  appId: "1:926760801750:web:e5f6e20c18babccafec077",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
