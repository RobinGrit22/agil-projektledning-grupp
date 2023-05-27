
import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc, collection, query, where, getDocs} from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyA0tY2Svlzr0j8F6Dv0WSXeIrsG6F_cY3I",
  authDomain: "agil-projektledning-grupp.firebaseapp.com",
  databaseURL: "https://agil-projektledning-grupp-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "agil-projektledning-grupp",
  storageBucket: "agil-projektledning-grupp.appspot.com",
  messagingSenderId: "926760801750",
  appId: "1:926760801750:web:e5f6e20c18babccafec077"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Lägg till företag i databasen
setDoc(doc(db, "companies", "company13"), {
  name: "IoT Innovators",
  culture: "relaxed",
  size: "startup",
  workplace: "remote",
  industry: "IoT"
}).then(() => {
    console.log("Funkar, skickat!");
}).catch((error) => {
    console.error("Gick inte, error!: ", error);
});


//sortera företagen
async function getCompanies() {
  const companiesRef = collection(db, "companies");

  //tom array som håller alla företagen
  const companyQueries = [];

  //fetchar företagen beroende på användarens val
  const workplaces = ["remote", "onsite", "do not know"];
  const sizes = ["startup", "corporate", " do not know"];

  for(let workplace of workplaces){
    for(let size of sizes){
      const q = query(companiesRef, where("workplace", "==", "workplace"), where("size", "==", "size"));
      companyQueries.push(getDocs(q));
    }
  }

  //väntar på alla queries (kan ta tid om vi har många företag i db)
  const allSnapshots =  await Promise.all(companyQueries);

  //kombinera resultatet utifrån användarens val
  let allCompanies = [];
  for (let snapshot of allSnapshots){
    const companies = snapshot.docs.map(doc => ({...doc.data(), id: doc.id}));
    allCompanies = [...allCompanies, ...companies];
  }

  // const querySnapshot = await getDocs(q);

  allCompanies.forEach((company) => {
    console.log(company.id, " => ", company);
  });
}

getCompanies();