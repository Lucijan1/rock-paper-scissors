let game = document.getElementById('game');
let playerSelection;
let computerSelection;
let gameOutcome;
let getComputerChoice = () => {
    let choices = ["rock", "paper", "scissors"];
    let computerChoice;
    let generateNumber = () => { computerChoice = Math.floor(Math.random() * 3) };
    generateNumber();
    return computerSelection = choices[computerChoice];
}

let playRound = () => {
    getComputerChoice();
    playerSelection = prompt("Choose one").toLowerCase();
    console.log(`I play ${computerSelection}!`);

    if (playerSelection === "rock" && computerSelection === "rock") {
        gameOutcome = "It's a draw, play again!"
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        gameOutcome = "You lose, play again!"

    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        gameOutcome = "You win,congratulations!"
    };

    if (playerSelection === "paper" && computerSelection === "rock") {
        gameOutcome = "You win,congratulations!"
    } else if (playerSelection === "paper" && computerSelection === "paper") {
        gameOutcome = "It's a draw, play again!"

    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        gameOutcome = "You lose, play again!"
    };

    if (playerSelection === "scissors" && computerSelection === "rock") {
        gameOutcome = "You lose, play again!"

    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        gameOutcome = "You win,congratulations!"


    } else if (playerSelection === "scissors" && computerSelection === "scissors") {
        gameOutcome = "It's a draw, play again!"

    };
    console.log(gameOutcome)
}
playRound();
