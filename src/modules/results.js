const answers = JSON.parse(localStorage.getItem("userChoices"));
console.log(answers);

async function getAllCompanies() {
  const url =
    "https://agil-projektledning-grupp-default-rtdb.europe-west1.firebasedatabase.app/companies.json";
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  const companiesArray = Object.values(data);

  // Filter companies based on matching answers
  const filteredCompanies = companiesArray.filter((company) => {
    return Object.entries(answers).every(
      ([key, value]) => company[key] === value
    );
  });

  return filteredCompanies;
}

function displayCompanies(companies) {
  const container = document.getElementById("white-container");

  companies.forEach((company) => {
    const companyDiv = document.createElement("div");
    companyDiv.textContent = company.name;
    container.appendChild(companyDiv);
  });
}

async function getAllQuestions() {
  const url =
    "https://agil-projektledning-grupp-default-rtdb.europe-west1.firebasedatabase.app/questions.json";
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);

  const filteredCompanies = await getAllCompanies();
  displayCompanies(filteredCompanies);
}

getAllQuestions();
