const dbQuestions = [];

async function fetchQuestionsFromDB() {
  try {
    const response = await fetch(
      "https://agil-projektledning-grupp-default-rtdb.europe-west1.firebasedatabase.app/questions.json"
    );
    const questions = await response.json();

    // Convert the object of questions to an array and loop through it
    Object.values(questions).forEach((question) => {
      // Add the question to the dbQuestions array
      dbQuestions.push(question);
      renderQuestion();
    });

    console.log(dbQuestions);
  } catch (error) {
    console.error(error);
  }
}

fetchQuestionsFromDB();

const form = document.querySelector("form");
const questionText = document.querySelector("h2");
const answerText1 = document.getElementById("a1");
const answerText2 = document.getElementById("a2");
const answerRadios = Array.from(document.getElementsByName("answer"));

const userChoices = {};
let iteration = 0;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  answerRadios[0].value = dbQuestions[iteration].answer1;
  answerRadios[2].value = dbQuestions[iteration].answer2;
  const selectedAnswer = answerRadios.find((radio) => radio.checked)?.value;

  if (!selectedAnswer) {
    console.log("Please select an answer");
    return;
  }

  const { title } = dbQuestions[iteration];
  userChoices[title] = selectedAnswer;
  iteration++;

  if (iteration === dbQuestions.length) {
    cacheAnswers();
  } else {
    renderQuestion();
  }
});

// Renders the question
const renderQuestion = () => {
  const { question, answer1, answer2 } = dbQuestions[iteration];
  questionText.innerText = question;
  answerText1.innerText = answer1;
  answerText2.innerText = answer2;
};

// Caches the answers and redirects the user to forForetag.html
const cacheAnswers = () => {
  console.log(userChoices);
  localStorage.setItem("userChoices", JSON.stringify(userChoices));
  window.location.href = "results.html";
};
