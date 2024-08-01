const MIN = 0;
const MAX = 2;
const stringValues = ["rock", "paper", "scissors"];

let humanScore = 0;
let computerScore = 0;

const getComputerChoice = () => {
  const randomValue = Math.floor(Math.random() * (MAX - MIN + 1) + MIN);
  return stringValues[randomValue];
};

const getHumanChoice = () => {
  const humanChoice = prompt("Choose rock, paper or scissors").toLowerCase();
  if (!humanChoice || !stringValues.includes(humanChoice)) {
    throw new Error("Invalid choice");
  }
  return humanChoice;
};

const playRound = (humanChoice, computerChoice) => {
  if (humanChoice === computerChoice) {
    return "Draw!";
  }
  if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    return "You win!";
  }
  computerScore++;
  return `You lose ${computerChoice} beats ${humanChoice}!`;
};

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log(playRound(humanSelection, computerSelection));
