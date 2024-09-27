/*
pseudocode:
rock paper scissors game

get the computers choice. 
  - randomly choose a number between 1 and 3. store that function/variable.
another function gets user to enter their choice.
  - prompt user for input
compare choices and see who wins. 
adjust score. ignore if its a tie. 
loop this 5 times.

*/

// 1 - Rock
// 2 - Paper
// 3 - Scissors

// helper function that converts # choices to rock paper scissors string
function getSign(result) {
  switch (result) {
    case "1":
      result = "rock";
      break;
    case "2":
      result = "paper";
      break;
    case "3":
      result = "scissors";
      break;
  }
  return result;
}

// utility function to update html with score results
function changeHeading(humanWin, humanScore, computerScore) {
  let whoWon = humanWin ? "You won!" : "You lost!";

  document.querySelector("#heading").innerHTML = "Final Score:";
  document.querySelector("#finalscore").innerHTML =
    "Human: " + humanScore + " | " + "Computer: " + computerScore;
  document.querySelector("#winner").innerHTML = whoWon;
}

function playGame() {
  function getComputerChoice() {
    let random = Math.floor(Math.random() * 3) + 1; // picks number between 1-3
    return getSign(random.toString()); // sends number to getSign to determine which sign it is. it converts to string because the human entry in getHumanChoice by default gets a string as well
  }

  function getHumanChoice() {
    let humanChoice = prompt(
      "Pick a number: 1 (Rock), 2 (Paper), 3 (Scissors)"
    ); // asks users to pick a number

    if (humanChoice === "1" || humanChoice === "2" || humanChoice === "3") {
      return getSign(humanChoice);
    } else if (humanChoice === "quit") {
      console.log("You have chosen to quit! Loser!");
      return;
    } else {
      console.log("sorry. not a valid choice.");
      return getHumanChoice(); // asks user again if they don't pick a valid number
    }
  }
  let humanScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    // play the game 5 times
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    function playRound(humanSelection, computerSelection) {
      console.log("computer: ", computerSelection);
      console.log("human: ", humanSelection);
      console.log("Round: ", i + 1);

      if (humanSelection === computerSelection) {
        // both chose the same
        console.log("It's a tie!");
      } else if (
        (humanSelection === "rock" && computerSelection === "scissors") ||
        (humanSelection === "paper" && computerSelection === "rock") ||
        (humanSelection === "scissors" && computerSelection === "paper")
      ) {
        console.log("You win!");
        humanScore++; // score for human!
      } else {
        console.log("You lose!");
        computerScore++; // score for computer! boo.
      }
    }

    playRound(humanSelection, computerSelection);

    if (i === 4) {
      // shows final score after 5 rounds. remember i starts at 0.
      let humanWon; // set true if you win

      if (humanScore > computerScore) {
        console.log("You won ", humanScore, " of 5 matches. Congrats!");
        humanWon = true;
      } else {
        console.log("You lost ", computerScore, " of 5 matches. You suck!");
        humanWon = false;
      }
      changeHeading(humanWon, humanScore, computerScore); // pass info to html display
    }
  }
}

//window.onload = playGame();\\

window.onload = function () {
  playGame();
};
