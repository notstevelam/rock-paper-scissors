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

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  // converts # choices to rock paper scissors string
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

  function getComputerChoice() {
    let random = Math.floor(Math.random() * 3) + 1; // picks number between 1-3
    return getSign(random.toString()); // sends number to getSign to determine which sign it is
  }

  function getHumanChoice() {
    let humanChoice = prompt(
      "Pick a number: 1 (Rock), 2 (Paper), 3 (Scissors)"
    );

    if (humanChoice === "1" || humanChoice === "2" || humanChoice === "3") {
      // console.log(getSign(humanChoice));
      return getSign(humanChoice);
    } else {
      console.log("sorry. not a valid choice.");
      return getHumanChoice();
    }
  }

  for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    function playRound(humanSelection, computerSelection) {
      console.log("computer: ", computerSelection);
      console.log("human: ", humanSelection);
      console.log("Round: ", i + 1);

      if (humanSelection === computerSelection) {
        console.log("It's a tie!"); // both chose the same
      } else if (
        (humanSelection === "rock" && computerSelection === "scissors") ||
        (humanSelection === "paper" && computerSelection === "rock") ||
        (humanSelection === "scissors" && computerSelection === "paper")
      ) {
        console.log("You win!");
        humanScore++;
      } else {
        console.log("You lose!");
        computerScore++;
      }
    }

    playRound(humanSelection, computerSelection);

    if (i === 4) {
      console.log(
        "Final Score: Human: ",
        humanScore,
        "Computer: ",
        computerScore
      );
      if (humanScore === computerScore) {
        console.log("wow its a tie!");
      } else if (humanScore > computerScore) {
        console.log("You won ", humanScore, " of 5 matches. Congrats!");
      } else {
        console.log("You lost ", computerScore, " of 5 matches. You suck!");
      }
    }
  }
}
