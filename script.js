let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
let highScore = 0;

const guessInput = document.getElementById("guessInput");
const checkBtn = document.getElementById("checkBtn");
const message = document.getElementById("message");
const attemptsDisplay = document.getElementById("attempts");
const history = document.getElementById("history");
const againBtn = document.getElementById("againBtn");
const secretDisplay = document.getElementById("secretNumber");
const highScoreDisplay = document.getElementById("highScore");

checkBtn.addEventListener("click", checkGuess);
againBtn.addEventListener("click", resetGame);

function checkGuess() {
    let guess = Number(guessInput.value);

    // validation
    if (!guess || guess < 1 || guess > 100) {
        message.textContent = "Enter number between 1 and 100!";
        return;
    }

    // add attempt
    attempts++;
    attemptsDisplay.textContent = attempts;

    // add history
    const li = document.createElement("li");
    li.textContent = guess;
    history.appendChild(li);

    // compare
    if (guess === secretNumber) {
        message.textContent = "🎉 Correct! You won!";
        secretDisplay.textContent = secretNumber;

        guessInput.disabled = true;
        checkBtn.disabled = true;

        againBtn.style.display = "inline-block";

        // high score logic
        if (highScore === 0 || attempts < highScore) {
            highScore = attempts;
            highScoreDisplay.textContent = highScore;
        }

    } else if (guess > secretNumber) {
        message.textContent = "📈 Too High!";
    } else {
        message.textContent = "📉 Too Low!";
    }

    guessInput.value = "";
}

function resetGame() {
    secretNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;

    attemptsDisplay.textContent = 0;
    message.textContent = "Start guessing...";
    history.innerHTML = "";
    secretDisplay.textContent = "?";

    guessInput.disabled = false;
    checkBtn.disabled = false;

    againBtn.style.display = "none";
}
