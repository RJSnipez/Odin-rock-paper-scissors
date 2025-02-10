
function getComputerChoice() {
  randomNumb = Math.floor(Math.random() * 3)
  if (randomNumb === 2) {
    return "rock";
  }
  else if (randomNumb === 1) {
    return "paper";
  }
  else if (randomNumb === 0) {
  return "scissors";
  }
}

function getHumanChoice() {
  while(true) {
    let choice = prompt("Choose rock, paper, or scissors?").toLowerCase();
  if (choice === "rock" || choice === "paper" || choice === "scissors") {
    return choice;
  }
    alert("Invalid choice, please choose either rock, paper, or scissors");
 }
}


function playGame() {
let humanScore =  0;
let computerScore = 0;
let round = 0;
        function playRound(humanChoice, computerChoice) {
            if (humanChoice === "rock") {
                if (computerChoice === "rock") {
                    round++;
                    console.log("Round " + round, "You both selected",computerChoice, "Your Score: ", humanScore, "Computer score: ", computerScore);
                } 
                else if (computerChoice === "scissors") {
                    console.log("Rock beats scissors, you win!")
                    humanScore++;
                    round++;
                    console.log("Round " + round, "Your Score:", humanScore, " Computer score:", computerScore);
                }
                else if (computerChoice === "paper") {
                    console.log("Paper beats rock, you lose!")
                    computerScore++;
                    round++;
                    console.log("Round " + round, "Your Score:", humanScore, " Computer score:", computerScore);
                }
            }
            else if (humanChoice === "paper") {
                if (computerChoice === "paper") {
                    round++;
                    console.log("Round " + round, "You both selected",computerChoice, "Your Score:", humanScore, " Computer score:", computerScore);    
                } 
                else if (computerChoice === "rock") {
                    console.log("Paper beats rock, you win!");
                    humanScore++;
                    round++;
                    console.log("Round " + round, "Your Score:", humanScore, " Computer score:", computerScore);
                }
                else if (computerChoice === "scissors") {
                    console.log("Scissors beats paper, you lose!");
                    computerScore++;
                    round++;
                    console.log("Round " + round, "Your Score:", humanScore, " Computer score:", computerScore);
                } 
            }
            else if (humanChoice === "scissors") {
                if (computerChoice === "scissors") {
                    round++;
                    console.log("Round " + round, "You both selected",computerChoice, "Your Score:", humanScore, " Computer score:", computerScore);
                } 
                else if (computerChoice === "paper") {
                    console.log("Scissors beats paper, you win!")
                    humanScore++;
                    round++;
                    console.log("Round " + round, "Your Score:", humanScore, " Computer score:", computerScore);
                }
                else if (computerChoice === "rock") {
                    console.log("Rock beats scissors, you lose!")
                    computerScore++;
                    round++;
                    console.log("Round " + round, "Your Score:", humanScore, " Computer score:", computerScore);
                } 
            }
        }
            //Game will be played for 5 rounds
            for (let i = 1; i <= 5; i++) {
                let humanSelection = getHumanChoice();
                let computerSelection = getComputerChoice();
                console.log("The computer selected: ", computerSelection);
                console.log("You Selected: ", humanSelection);
                playRound(humanSelection, computerSelection);
            }
            console.log("Game Over! Final Score");
            console.log("User: ", humanScore, "Computer: ", computerScore);
            if (computerScore > humanScore) {
                console.log("The computer wins!");
            }
            else if (computerScore < humanScore) {
                console.log("Congrats, you beat the computer!");
            }
            else if (computerScore === humanScore) {
                console.log("It's a tie, no winner!");
            } 
}

//Call the function play game to play 5 rounds of rock paper and scissors and determine a winner
playGame();


