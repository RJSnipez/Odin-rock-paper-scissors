
//create a function that randomly returns either rock, paper, or scissors
//use Math.random and Math.floor to accomplish this
//Math.Random will generate a random number that is greater than or equal to 0 and less than 1
//Math.floor will round the number down to the nearest whole integer
//This will give a 3 values 0, 1, and 2 when we multiply Math.random by 3


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

//create a variable to store the user input
//input must be either rock, paper, or scissors
//if input does not match one of the three choices and alert message will be displayed

function getHumanChoice() {
  while(true) {
    let choice = prompt("Choose rock, paper, or scissors?").toLowerCase();
  if (choice === "rock" || choice === "paper" || choice === "scissors") {
    return choice;
  }
    alert("Invalid choice, please choose either rock, paper, or scissors");
 }
}



// Rock is greater than scissors:     Rock > Scissors
// Scissors is greater than paper:    Scissors > Paper
// Paper is greater than rock:        Paper > Rock
// Comapre the computer's choice to the human's choice
// increment the score of the winner by 1


//Summary of code below
//create a function playRound to compare the user's choice to the computer's choice
//Using an if-else statement to compare the human choice to each possible computer choice
//Increase the score of the winner for that round
//Move playRound into the declaration of the function playGame
//playGame will call the function playRound after it's declared
//Using a for loop, we can as many rounds as we want. 
//Need to generate new choices for each loop


function playGame() {
let humanScore =  0;
let computerScore = 0;
let round = 0;
        function playRound(humanChoice, computerChoice) {
            if (humanChoice === "rock") {
                if (computerChoice === "rock") {
                    round++;
                    console.log("Round " + round, "You both selected:",computerChoice, "Your Score: ", humanScore, "Computer score: ", computerScore);
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
                    console.log("Round " + round, "You both selected:",computerChoice, "Your Score:", humanScore, " Computer score:", computerScore);    
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
                    console.log("Round " + round, "You both selected:",computerChoice, "Your Score:", humanScore, " Computer score:", computerScore);
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
        //Now that playRound is declared a for loop is needed to run through the game for 5 rounds
        //First we need a human and computer choice to use as arguments for the playRound function
        //Added console.log to display the choices before each round of the game
        //After 5 rounds we should have a score for both the computer and human which are stored in variables defined
        //above but within the scope of play game
        for (let i = 1; i <= 5; i++) {
        humanSelection = getHumanChoice();
        computerSelection = getComputerChoice();
        console.log("The computer selected: ", computerSelection);
        console.log("You Selected: ", humanSelection);
        playRound(humanSelection, computerSelection);
        }
    //Display a message with the results after 5 rounds have been completed
    //Compare the human score to the computer score using if-else statements to declare a winner
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


