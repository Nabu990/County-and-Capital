

const countryNameElement = document.getElementById('country-name');
const capitalInput = document.getElementById('capital-input');
const submitButton = document.getElementById('submit-btn');
const nextButton = document.getElementById('next-btn');
const resultMessage = document.getElementById('result-message');
const scoreContainer = document.getElementById('score-container');
const scoreElement = document.getElementById('score');
const restartButton = document.getElementById('restart-btn');

let currentCountryIndex = 0;
let score = 0;

function startQuiz() {
    scoreContainer.style.display = 'none';
    currentCountryIndex = 0;
    score = 0;
    nextButton.style.display = 'none';
    capitalInput.value = '';
    showCountry();
}

function showCountry() {
    const currentCountry = countries[currentCountryIndex];
    countryNameElement.innerText = `Country: ${currentCountry.name}`;
    capitalInput.value = '';
    resultMessage.innerText = '';
}

function checkAnswer() {
    const currentCountry = countries[currentCountryIndex];
    const userAnswer = capitalInput.value.trim().toLowerCase();
    if (userAnswer === currentCountry.capital.toLowerCase()) {
        resultMessage.innerText = "Correct!";
        resultMessage.style.color = "green";
        score++;
    } else {
        resultMessage.innerText = `Wrong! The correct answer is ${currentCountry.capital}.`;
        resultMessage.style.color = "red";
    }
    nextButton.style.display = 'block';
}

function showScore() {
    countryNameElement.style.display = 'none';
    capitalInput.style.display = 'none';
    submitButton.style.display = 'none';
    nextButton.style.display = 'none';
    scoreContainer.style.display = 'block';
    scoreElement.innerText = `${score} / ${countries.length}`;
}

submitButton.addEventListener('click', () => {
    checkAnswer();
});

nextButton.addEventListener('click', () => {
    currentCountryIndex++;
    if (currentCountryIndex < countries.length) {
        showCountry();
        nextButton.style.display = 'none';
    } else {
        showScore();
    }
});

restartButton.addEventListener('click', () => {
    countryNameElement.style.display = 'block';
    capitalInput.style.display = 'block';
    submitButton.style.display = 'block';
    startQuiz();
});

startQuiz();

