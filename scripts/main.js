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
    return "Draw, good like in next round!";
  }
  if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    return "You win that round!";
  }
  computerScore++;
  return `You lose a round, ${computerChoice} beats ${humanChoice}!`;
};

const playGame = () => {
  //const humanSelection = '';
  for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    console.log(playRound(humanSelection, computerSelection));
  }
  if (humanScore === computerScore) {
    console.log("Draw, good like in next game!");
  } else if (humanScore > computerScore) {
    console.log("You win that game!");
  } else {
    console.log("You lose that game!");
  }
};

playGame();
