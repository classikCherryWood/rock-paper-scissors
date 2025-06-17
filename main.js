let humanScore = 0, computerScore = 0; 

let getComputerChoice = () => {
    let i = Math.floor(Math.random() * 3); 

    switch (i) {
        case 0: 
            //console.log("Computer chose ROCK!"); 
            return "Rock"; 

        case 1: 
            //console.log("Computer chose PAPER!"); 
            return "Paper"; 


        case 2: 
            //console.log("Computer chose SCISSORS!"); 
            return "Scissors"; 

    }
}

let getHumanChoice = () => {
    let humanChoice = prompt("Which option would you choose this time?\nPlease choose from -> 'ROCK', 'PAPER' or 'SCISSORS'."); 
    //console.log(`You have chosen: ${humanChoice}`); 
    return humanChoice; 
}

const humanChoice = getHumanChoice().toLowerCase(); 
const computerChoice = getComputerChoice().toLowerCase(); 

function playRound(humanChoice, computerChoice) {
    
    if (humanChoice === computerChoice) {
        console.log("Tie! No one gets a point!"); 
    }

    switch (humanChoice) {
        case "rock": 
            if (computerChoice === "paper"){
                console.log("You lost! Paper beats Rock! "); 
                computerScore++; 
            } else if (computerChoice === "scissors"){
                console.log("You won! Rock beats scissors! ");
                humanScore++; 
            }
            break; 
        
        case "paper": 
            if (computerChoice === "scissors"){
                console.log("You lost! Scissors beat paper! "); 
                computerScore++; 
            } else if (computerChoice === "rock"){
                console.log("You won! Paper beats rock! ");
                humanScore++; 
            }
            break;

        case "scissors": 
            if (computerChoice === "rock"){
                console.log("You lost! Rock beats scissors! "); 
                computerScore++; 
            } else if (computerChoice === "paper"){
                console.log("You won! Scissors beat paper! ");
                humanScore++; 
            }
            break;


    }

}

function playGame() {
    let count = 0;
    humanScore = 0; 
    computerScore = 0; 
    while (count < 5){
        const humanChoice = getHumanChoice().toLowerCase(); 
        const computerChoice = getComputerChoice().toLowerCase(); 
        playRound(humanChoice, computerChoice); 
        console.log(`Current Scores:\nYou:${humanScore}\nComputer:${computerScore}`); 
        count++;
    }
    if (count < 5) confirm("Ready for the next round?"); 
    
    if (humanScore === computerScore) {
        alert("Game Over! Tie!"); 
    } else if (humanScore > computerScore) {
        alert("Game Over! You won!"); 
    } else {
        alert("Game Over! You lost!")
    }

}