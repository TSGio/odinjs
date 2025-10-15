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

// Play 5 rounds of the game
function playGame() {
    console.log("=== Starting New Game (5 Rounds) ===");
    // Reset scores for new game
    humanScore = 0;
    computerScore = 0;
    
    // Round 1
    console.log("Round 1");
    playRound(getHumanChoice(), getComputerChoice());
    console.log(`Score - Human: ${humanScore}, Computer: ${computerScore}`);
    
    // Round 2
    console.log("Round 2");
    playRound(getHumanChoice(), getComputerChoice());
    console.log(`Score - Human: ${humanScore}, Computer: ${computerScore}`);
    
    // Round 3
    console.log("Round 3 ");
    playRound(getHumanChoice(), getComputerChoice());
    console.log(`Score - Human: ${humanScore}, Computer: ${computerScore}`);
    
    // Round 4
    console.log("\n--- Round 4 ---");
    playRound(getHumanChoice(), getComputerChoice());
    console.log(`Score - Human: ${humanScore}, Computer: ${computerScore}`);
    
    // Round 5
    console.log("\n--- Round 5 ---");
    playRound(getHumanChoice(), getComputerChoice());
    console.log(`Score - Human: ${humanScore}, Computer: ${computerScore}`);
    
    // Determine winner
    console.log("\n=== GAME OVER ===");
    console.log(`Final Score - Human: ${humanScore}, Computer: ${computerScore}`);
    
    if(humanScore > computerScore) {
        console.log("🎉 Congratulations! You won the game!");
    } else if(computerScore > humanScore) {
        console.log("💻 Computer wins the game!");
    } else {
        console.log("🤝 It's a tie game!");
    }
}

// Start the game
playGame();