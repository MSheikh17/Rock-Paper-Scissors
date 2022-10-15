// User and Computer Scores and Round
const playerScore = document.querySelector(".userScore");
const computerScore = document.querySelector(".computerScore");
const roundNum = document.querySelector(".roundNum");

// User Buttons
const rockPlayer = document.querySelector(".rock-btn");
const paperPlayer = document.querySelector(".paper-btn");
const ScissorsPlayer = document.querySelector(".scissors-btn");

const userChoice = document.querySelectorAll(".btn");

// Computer images
const computerRock = document.querySelector(".compRock");
const computerPaper = document.querySelector(".compPaper");
const computerScissors = document.querySelector(".compScissors");

// User Images
const rockUser = document.querySelector(".rockUser");
const paperUser = document.querySelector(".paperUser");
const scissorsUser = document.querySelector(".scissorsUser");

//Final Message
const message = document.querySelector(".winner");

// New Game
const newGame = document.querySelector(".reset");

//

//  Initialisers
let compScore = 0;
let userScore = 0;
let round = 0;

// Create ComputerChoice function

// Animation to Computer

function resetImg() {
    // Set image size to original
    img.style.transform = "scale(1)";
    img.style.transition = "transform 0.25s ease";
}

function playRound(playerChoice, computerSelection) {
    if (
        userScore <= 4 &&
        compScore <= 4 &&
        ((playerChoice === "Rock" && computerSelection === "Scissors") ||
            (playerChoice === "Paper" && computerSelection === "Rock") ||
            (playerChoice === "Scissors" && computerSelection === "Paper"))
    ) {
        userScore++;
    }

    if (
        compScore <= 4 &&
        userScore <= 4 &&
        ((playerChoice === "Rock" && computerSelection === "Paper") ||
            (playerChoice === "Paper" && computerSelection === "Scissors") ||
            (playerChoice === "Scissors" && computerSelection === "Rock"))
    ) {
        // round++;
        compScore++;
    }

    if (userScore === 5) {
        message.textContent = "You Win";
    } else if (compScore === 5) {
        message.textContent = "You Lose";
    }
}

function playgame() {
    userChoice.forEach((btn) =>
        btn.addEventListener("click", function(e) {
            const playerChoice = e.target.value;

            if (userScore < 5 && compScore < 5) {
                round++;
            }
            console.log(playerChoice);

            const randNum = Math.floor(Math.random() * 3 + 1);
            let computerChoice = null;

            const getComputerchoice = function() {
                if (randNum === 1) {
                    computerChoice = "Rock";
                } else if (randNum === 2) {
                    computerChoice = "Paper";
                } else {
                    computerChoice = "Scissors";
                }
                return computerChoice;
            };
            const computerSelection = getComputerchoice();

            function enlarge() {
                if (computerSelection === "Rock") {
                    computerRock.style.transform = "scale(1.1)";
                    computerRock.style.transition = "transform 0.25s ease";
                }
                if (computerSelection === "Paper") {
                    computerPaper.style.transform = "scale(1.1)";
                    computerPaper.style.transition = "transform 0.25s ease";
                }
                if (computerSelection === "Scissors") {
                    computerScissors.style.transform = "scale(1.1)";
                    computerScissors.style.transition = "transform 0.25s ease";
                }
            }

            enlarge();

            function resize() {
                if (computerSelection === "Rock") {
                    computerRock.style.transform = "scale(1)";
                    computerRock.style.transition = "transform 0.25s ease";
                }
                if (computerSelection === "Paper") {
                    computerPaper.style.transform = "scale(1)";
                    computerPaper.style.transition = "transform 0.25s ease";
                }
                if (computerSelection === "Scissors") {
                    computerScissors.style.transform = "scale(1)";
                    computerScissors.style.transition = "transform 0.25s ease";
                }
            }

            setTimeout(resize, 260);

            console.log(computerSelection);

            const roundScore = playRound(playerChoice, computerSelection);

            computerScore.textContent = `${compScore}`;
            playerScore.textContent = `${userScore}`;
            roundNum.textContent = `${round}`;
        })
    );
}

playgame();

newGame.addEventListener("click", function() {
    compScore = 0;
    userScore = 0;
    round = 0;
    computerScore.textContent = 0;
    playerScore.textContent = 0;
    roundNum.textContent = 0;
    message.textContent = `You...`;
});