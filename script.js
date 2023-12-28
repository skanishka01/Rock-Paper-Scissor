
let userScore = 0;
let computerScore = 0;

const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("com-score");
const userChoiceMsg = document.getElementById("user-choice-msg");
const comChoiceMsg = document.getElementById("com-choice-msg");
const result_p = document.querySelector("#msg");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function convertToWord(choice) {
  if (choice === "rock") return "Rock";
  if (choice === "paper") return "Paper";
  return "Scissors";
}

function win(userChoice, computerChoice) {
  userScore++;
  userScore_span.textContent = userScore;
  computerScore_span.textContent = computerScore;
  result_p.textContent = `${convertToWord(userChoice)} beats ${convertToWord(
    computerChoice
  )}. You win!`;
}

function lose(userChoice, computerChoice) {
  computerScore++;
  userScore_span.textContent = userScore;
  computerScore_span.textContent = computerScore;
  result_p.textContent = `${convertToWord(computerChoice)} beats ${convertToWord(
    userChoice
  )}. You lose!`;
}

function draw(userChoice, computerChoice) {
  result_p.textContent = "It's a draw!";
}

function displayChoices(userChoice, computerChoice) {
  userChoiceMsg.textContent += convertToWord(userChoice);
  comChoiceMsg.textContent += convertToWord(computerChoice);
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  userChoiceMsg.textContent = "Your choice: ";
  comChoiceMsg.textContent = "Computer's choice: ";
  displayChoices(userChoice, computerChoice);
  switch (userChoice + computerChoice) {
    case "rockscissors":
    case "paperrock":
    case "scissorspaper":
      win(userChoice, computerChoice);
      break;
    case "rockpaper":
    case "paperscissors":
    case "scissorsrock":
      lose(userChoice, computerChoice);
      break;
    case "rockrock":
    case "paperpaper":
    case "scissorsscissors":
      draw(userChoice, computerChoice);
      break;
  }
}

function main() {
  rock_div.addEventListener("click", () => game("rock"));
  paper_div.addEventListener("click", () => game("paper"));
  scissors_div.addEventListener("click", () => game("scissors"));
}

main();
