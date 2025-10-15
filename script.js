
function getComputerChoice(getHumanChoice) {
    let random = Math.random()
       if(random < 0.33) {
    return "rock";
} else if(random >= 0.33 && random < 0.66) {
    return "paper"
} else {
   return 'Scissors'
   }
    

}

console.log(getComputerChoice());



function getHumanChoice() {
    let input = prompt("Enter your choice: rock, paper, or scissors")
    return input.toLowerCase();
}

console.log(getHumanChoice());