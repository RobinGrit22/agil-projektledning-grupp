// Get references to the forms
const form1 = document.getElementById('question1');
const form2 = document.getElementById('question2');
const form3 = document.getElementById('question3');
const form4 = document.getElementById('question4');
const form5 = document.getElementById('question5');
const form6 = document.getElementById('question6');

// User choices object
let userChoices = {};

// Process form 1
form1.addEventListener('submit', function(event) {
    event.preventDefault(); 
    let selectedOccupation = Array.from(form1.elements.occupation)
        .filter((checkbox) => checkbox.checked)
        .map((checkbox) => checkbox.value);
    userChoices['occupation'] = selectedOccupation;

    // Hide first question, show second question
    form1.classList.add('hide');
    form2.classList.remove('hide');
    console.log(userChoices)
});

// Process form 2
form2.addEventListener('submit', function(event) {
    event.preventDefault(); 
    let selectedIndustry = Array.from(form2.elements.industry)
        .filter((checkbox) => checkbox.checked)
        .map((checkbox) => checkbox.value);
    userChoices['industry'] = selectedIndustry;

    // Hide second question, show third question
    form2.classList.add('hide');
    form3.classList.remove('hide');
    console.log(userChoices)
});

// Process form 3
form3.addEventListener('submit', function(event) {
    event.preventDefault(); 
    let selectedWorkplace;
    const workplaceOptions = document.getElementsByName("workplace");
    workplaceOptions.forEach(option => {
        if (option.checked) {
            selectedWorkplace = option.value;
        }
    });
    userChoices['workplace'] = selectedWorkplace;

    // Hide third question, show fourth question
    form3.classList.add('hide');
    form4.classList.remove('hide');
    console.log(userChoices)
});

// Process form 4
form4.addEventListener('submit', function(event) {
    event.preventDefault(); 
    let selectedCompanySize;
    const sizeOptions = document.getElementsByName("size");
    sizeOptions.forEach(option => {
        if (option.checked) {
            selectedCompanySize = option.value;
        }
    });
    userChoices['size'] = selectedCompanySize;


    form4.classList.add('hide');
    form5.classList.remove('hide');
    console.log(userChoices)
});


// Process form 5
form5.addEventListener('submit', function(event) {
    event.preventDefault(); 
    let selectedCulture;
    const cultureOptions = document.getElementsByName("culture");
    cultureOptions.forEach(option => {
        if (option.checked) {
            selectedCulture = option.value;
        }
    });
    userChoices['culture'] = selectedCulture;

    // Hide fifth question, show the sixth question...
    form5.classList.add('hide');
    form6.classList.remove('hide');
    console.log(userChoices)
});


// Process form 6
form6.addEventListener('submit', function(event) {
    event.preventDefault(); 
    let selectedLocation;
    const locationOptions = document.getElementsByName("location");
    locationOptions.forEach(option => {
        if (option.checked) {
            selectedLocation = option.value;
        }
    });
    userChoices['location'] = selectedLocation;
    console.log(userChoices); // will print final user choices
    localStorage.setItem('userChoices', JSON.stringify(userChoices));
    window.location.href = "forForetag.html"; // Redirects to forForetag.html
});

