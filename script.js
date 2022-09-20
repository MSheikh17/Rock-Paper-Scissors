"use strict";
// 1. Create random generator numbers from 1 to 3
// 2. set the imput from the Computer to null

const randNUm = Math.floor(Math.random() * 3 + 1);
let computerchoice = null;

// 3. Create a function that assigns the the numbers 1 to 3 to Rock, Paper and Scissors
// 4. Assign the return value to ComputerChoice

const getComputerChoice = function() {
    if (randNUm === 1) {
        computerchoice = "Rock";
    } else if (randNUm === 2) {
        computerchoice = "Paper";
    } else {
        computerchoice = "Scissors";
    }
    return computerchoice;
};

// 5. Create a function with 2 arguments that take input from user and computer compares them

const playRound = function(playerSelection, computerSelection) {
    // input from User is Converted
    const userInput =
        playerSelection.slice(0, 1).toUpperCase() +
        playerSelection.slice(1).toLowerCase();

    if (userInput === "Rock" && computerSelection === "Paper") {
        return "You lose! Paper beats Rock";
    } else if (userInput === "Rock" && computerSelection === "Scissors") {
        return "You win! Rock beats Scissors";
    } else if (userInput === "Paper" && computerSelection === "Rock") {
        return "You win! Paper beats Rock";
    } else if (userInput === "Paper" && computerSelection === "Scissors") {
        return "You lose! Scissors beats Paper";
    } else if (userInput === "Scissors" && computerSelection === "Paper") {
        return "You win! Scissors  beats Paper";
    } else if (userInput === "Scissors" && computerSelection === "Rock") {
        return "You lose! Rock beats Scissors";
    } else {
        return "Draw";
    }
};

const computerSelection = getComputerChoice();
let UserScore = 0;
let ComputerScore = 0;

// Create a function that repeats the playRound function 5 times using a for loop

const game = function() {
    for (let i = 1; i <= 5; i++) {
        const playerSelection = prompt("Rock, Paper or Scissors");
        const roundScore = playRound(playerSelection, computerSelection);
        console.log(roundScore);
        if (roundScore.includes("win")) {
            UserScore++;
        } else if (roundScore.includes("lose")) {
            ComputerScore++;
        }

        console.log("User", UserScore, "Computer", ComputerScore);
    }

    const winner =
        UserScore > ComputerScore ?
        `User wins` :
        UserScore > ComputerScore ?
        `Computer wins` :
        `Draw`;

    return winner;
};

console.log(game());