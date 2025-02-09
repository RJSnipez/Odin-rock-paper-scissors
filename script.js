
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





function playGame() {
let humanScore =  0;
let computerScore = 0;
let round = 0;
        //Create a function playRound that takes values returned by both humanChoice() and computerChoice() as arguments
        //Then create an if statement to compare the two choices and increment the score of the winner
        //Compare the human's choice to each possible choice the computer can make and increment the score based on those results
        //If the choices are the same, the result is the tie and score remains the same
        //display a message to the console with the winner
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
        //Now that playRound is declared a for loop is needed to run through the game for 5 rounds
        //First we need a human and computer choice to use as arguments for the playRound function
        //Declare two variables for each selection and initialize them with the return value of getHumanChoice() and getComputerChoice()
        //Added console.log to display the choices before each round of the game
        //use the value of each variable as an argument for the playRound() function
        //The for loop will start from i = 1 and will run for 5 rounds or until i = 5
        //Make sure the functions return new values each loop to use as arguments
        //After 5 rounds we should have a score for both the computer and human which are stored in variables defined
        //above but within the scope of play game
        for (let i = 1; i <= 5; i++) {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
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


