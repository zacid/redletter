let currentQuote = null;

// DOM elements
const quoteElement = document.getElementById('quote');
const yesButton = document.getElementById('yesBtn');
const noButton = document.getElementById('noBtn');
const feedbackElement = document.getElementById('feedback');
const feedbackTextElement = document.getElementById('feedbackText');
const nextButton = document.getElementById('nextBtn');

// Fisher-Yates shuffle algorithm
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Initialize the game
let shuffledQuotes = shuffleArray([...quotes]);
let currentQuoteIndex = 0;

function displayNextQuote() {
    if (currentQuoteIndex >= shuffledQuotes.length) {
        shuffledQuotes = shuffleArray([...quotes]);
        currentQuoteIndex = 0;
    }
    
    currentQuote = shuffledQuotes[currentQuoteIndex];
    quoteElement.textContent = currentQuote.text;
    feedbackElement.classList.add('hidden');
}

function checkAnswer(userAnswer) {
    const isCorrect = userAnswer === currentQuote.authentic;
    
    if (isCorrect) {
        feedbackTextElement.textContent = `Correct! This quote is from ${currentQuote.source}.`;
        feedbackElement.classList.remove('hidden');
        feedbackElement.classList.remove('bg-red-100');
        feedbackElement.classList.add('bg-green-100');
    } else {
        feedbackTextElement.textContent = `Incorrect! This quote is ${currentQuote.authentic ? '' : 'not '}from the Bible. Source: ${currentQuote.source}`;
        feedbackElement.classList.remove('hidden');
        feedbackElement.classList.remove('bg-green-100');
        feedbackElement.classList.add('bg-red-100');
    }
}

// Event listeners
yesButton.addEventListener('click', () => checkAnswer(true));
noButton.addEventListener('click', () => checkAnswer(false));
nextButton.addEventListener('click', () => {
    currentQuoteIndex++;
    displayNextQuote();
});

// Start the game
displayNextQuote(); 