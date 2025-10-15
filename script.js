// Computer generates the random choice
function getComputerChoice() {
    let random = Math.random();
    if(random < 0.33) {
        return "rock";
    } else if(random >= 0.33 && random < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}

// User chooses
function getHumanChoice() {
    let input = prompt("Enter your choice: rock, paper, or scissors");
    return input.toLowerCase();
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    // TIE CONDITIONS
    if(humanChoice === computerChoice) {
        console.log(`It's a tie! Both chose ${humanChoice}`);
        return;
    }
    
    // HUMAN WINS
    if(humanChoice === 'paper' && computerChoice === 'rock') {
        humanScore++;
        console.log('You win! Paper beats Rock');
    } else if(humanChoice === 'rock' && computerChoice === 'scissors') {
        humanScore++;
        console.log('You win! Rock beats Scissors');
    } else if(humanChoice === 'scissors' && computerChoice === 'paper') {
        humanScore++;
        console.log('You win! Scissors beats Paper');
    }
    // COMPUTER WINS
    else if(humanChoice === 'paper' && computerChoice === 'scissors') {
        computerScore++;
        console.log('You lose! Scissors beats Paper');
    } else if(humanChoice === 'rock' && computerChoice === 'paper') {
        computerScore++;
        console.log('You lose! Paper beats Rock');
    } else if(humanChoice === 'scissors' && computerChoice === 'rock') {
        computerScore++;
        console.log('You lose! Rock beats Scissors');
    }
    
    // Display current score
    console.log(`Score - Human: ${humanScore}, Computer: ${computerScore}`);
}

// Play a single round
let humanAnswer = getHumanChoice();
let computerAnswer = getComputerChoice();
console.log(`You chose: ${humanAnswer}`);
console.log(`Computer chose: ${computerAnswer}`);
playRound(humanAnswer, computerAnswer);