import { getDatabase, ref, onValue } from "firebase/database";

// Get a reference to the database service
const db = getDatabase(app);

const companiesRef = ref(db, 'companies/');
onValue(companiesRef, (snapshot) => {
  const data = snapshot.val();
  console.log(data);
});
