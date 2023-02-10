function getComputerChoice(){
    let choiceArray = ["Rock", "Paper", "Scissors"];
    let random = choiceArray[Math.floor(Math.random() * 3)];
    
    return random;
}

function playRound(playerSelection,computerSelection) {
    if (playerSelection.toUpperCase() === "ROCK" && computerSelection.toUpperCase() === "ROCK") {
        return "There is a tie. Try again"
    }
    else if (playerSelection.toUpperCase() === "ROCK" && computerSelection.toUpperCase() === "PAPER") {
        return "You Lose! Paper beats Rock"
    }
    else if (playerSelection.toUpperCase() === "ROCK" && computerSelection.toUpperCase() === "SCISSORS") {
        return "You Won! Rock beats Scissors"
    }
    else if (playerSelection.toUpperCase() === "PAPER" && computerSelection.toUpperCase() === "PAPER") {
        return "There is a tie. Try again"
    }
    else if (playerSelection.toUpperCase() === "PAPER" && computerSelection.toUpperCase() === "SCISSORS") {
        return "You Lose! Scissors beats Paper"
    }
    else if (playerSelection.toUpperCase() === "PAPER" && computerSelection.toUpperCase() === "ROCK") {
        return "You Won! Paper beats Rock"
    }
    else if (playerSelection.toUpperCase() === "SCISSORS" && computerSelection.toUpperCase() === "SCISSORS") {
        return "There is a tie. Try again"
    }
    else if (playerSelection.toUpperCase() === "SCISSORS" && computerSelection.toUpperCase() === "PAPER") {
        return "You Won! Scissors beats Paper"
    }
    else if (playerSelection.toUpperCase() === "SCISSORS" && computerSelection.toUpperCase() === "ROCK") {
        return "You Lose! Rock beats Scissors"
    }
}

function game() {
    var playerCount = 0;
    var computerCount = 0;
    
    for (let i = 0; i < 5; i++) {
        var playerSelection = prompt("Choose rock,paper or scissors");  //user choice
        var computerSelection = getComputerChoice();     //computer choice
        result = playRound(playerSelection, computerSelection); //wynik gry tie won or lose

        if (result === "There is a tie. Try again") {
            playerCount += 1;
            computerCount += 1
            console.log(`There is a tie. 
            You: ${playerCount}
            Computer : ${computerCount}`)
        }
        else if (result === "You Won! Rock beats Scissors" || result === "You Won! Paper beats Rock" || result === "You Won! Scissors beats Paper" ) {
            playerCount += 1;
            console.log(`${result}
            You: ${playerCount}
            Computer : ${computerCount}`);
        }
        else if (result === "You Lose! Paper beats Rock" || result === "You Lose! Scissors beats Paper" || result === "You Lose! Rock beats Scissors") {
            computerCount += 1;
            console.log(`${result}
            You: ${playerCount}
            Computer : ${computerCount}`);
        }
    }
   
    if (playerCount === computerCount) {
        console.log(`You: ${playerCount}
        Computer : ${computerCount}
        There is tie.`);
    }
    else if (playerCount > computerCount) {
        console.log(`You: ${playerCount}
        Computer : ${computerCount}
        You are the winner. Congratulation!`)
    }
    else {
        console.log(`You: ${playerCount}  Computer : ${computerCount}
        You lose the game! Try again!`)
    }
}


game();
