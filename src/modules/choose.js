// Frågorna kan läggas in i databasen så slipper vi ha de här
const dbQuestions = [
    {
        title: 'workplace',
        question: 'Skulle du hellre arbeta...',
        answer1: 'remote',
        answer2: 'on_site'
    },
    {
        title: 'size',
        question: 'Arbeta på ett...',
        answer1: 'startup',
        answer2: 'korporat'
    }
];

const form = document.querySelector('form');
const questionText = document.querySelector('h2');
const answerText1 = document.getElementById('a1');
const answerText2 = document.getElementById('a2');
const answerRadios = Array.from(document.getElementsByName('answer'));

const userChoices = {};
let iteration = 0;


form.addEventListener('submit', e => {
    e.preventDefault();
    answerRadios[0].value = dbQuestions[iteration].answer1;
    answerRadios[2].value = dbQuestions[iteration].answer2;
    const selectedAnswer = answerRadios.find((radio) => radio.checked)?.value;

    if (!selectedAnswer) {
        console.log('Please select an answer');
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
    localStorage.setItem('userChoices', JSON.stringify(userChoices));
    window.location.href = 'forForetag.html';
};


// Render first question
renderQuestion();
