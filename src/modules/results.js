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
  const container = document.getElementById("lightblue-container");

  companies.forEach((company) => {
    const companyDiv = document.createElement("div");
    companyDiv.classList.add("white-container");
    const companyHeader = document.createElement("h3");
    companyHeader.innerText = company.name;
    companyDiv.appendChild(companyHeader);

    const companyInfo = document.createElement("p");
    companyInfo.innerText =
      '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."';

    companyDiv.appendChild(companyInfo);
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
