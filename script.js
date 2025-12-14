const resultsDiv = document.querySelector('#results');

let humanScore = 0;
let computerScore = 0;

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


function playRound(humanChoice, computerChoice) {
    if (humanScore === 5 || computerScore === 5) {
        resultsDiv.textContent = "The game is over! Reload to play again.";
        return;
    }

    let roundResult = ""; 


    if(humanChoice === computerChoice) {
        roundResult = `It's a tie! Both chose ${humanChoice}`;
    } 
    
    else if(
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
        humanScore++;
        roundResult = `You win! ${humanChoice} beats ${computerChoice}`;
    } 
   
    else {
        computerScore++;
        roundResult = `You lose! ${computerChoice} beats ${humanChoice}`;
    }

    
    resultsDiv.textContent = `${roundResult} (Score: You ${humanScore} - Com ${computerScore})`;


    if(humanScore === 5) {
        resultsDiv.textContent = "🎉 Congratulations! You won the game! (You reached 5 points)";
        resultsDiv.style.color = "green"; 
    } else if(computerScore === 5) {
        resultsDiv.textContent = "💻 Computer wins the game! (Computer reached 5 points)";
        resultsDiv.style.color = "red";
    }
}



const btnRock = document.querySelector('#rock');
const btnPaper = document.querySelector('#paper');
const btnScissors = document.querySelector('#scissors');

btnRock.addEventListener('click', () => {
    playRound("rock", getComputerChoice());
});

btnPaper.addEventListener('click', () => {
    playRound('paper', getComputerChoice());
});

btnScissors.addEventListener('click', () => {
    playRound('scissors', getComputerChoice());
});