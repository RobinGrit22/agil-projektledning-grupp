
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, onValue } from "firebase/database";


const firebaseConfig = {
  apiKey: "AIzaSyA0tY2Svlzr0j8F6Dv0WSXeIrsG6F_cY3I",
  authDomain: "agil-projektledning-grupp.firebaseapp.com",
  databaseURL: "https://agil-projektledning-grupp-default-rtdb.europe-west1.firebasedatabase.app/",
  projectId: "agil-projektledning-grupp",
  storageBucket: "agil-projektledning-grupp.appspot.com",
  messagingSenderId: "926760801750",
  appId: "1:926760801750:web:e5f6e20c18babccafec077"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app)

// Lägg till företag i databasen
set(ref(db, 'companies/company13'), {
  name: "IoT Innovators",
  culture: "relaxed",
  size: "startup",
  workplace: "remote",
  industry: "IoT"
}).then(() => {
    console.log("Data sent successfully!");
}).catch((error) => {
    console.error("Error: ", error);
});

//sorterar företagen
async function getCompanies() {
  const companiesRef = ref(db, 'companies');
  onValue(companiesRef, (snapshot) => {
    const data = snapshot.val();
    for (let id in data) {
      console.log(id, " => ", data[id]);
    }
  });
}

getCompanies();

getCompanies();