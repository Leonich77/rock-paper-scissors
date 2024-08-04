const MIN = 0;
const MAX = 2;
const stringValues = ["rock", "paper", "scissors"];
const divStyles =
  "width: 30%; height: 3rem; padding: 0.5rem; display: flex; justify-content: space-evenly; background: lightgrey;";

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
  const buttons = [];
  const divButtons = document.createElement("div");
  divButtons.setAttribute("style", divStyles);

  const divResult = document.createElement("div");
  divResult.setAttribute("style", divStyles);

  const divScore = document.createElement("div");
  divScore.setAttribute("style", divStyles);

  const humanScoreDiv = document.createElement("div");
  const humanScoreLabelDiv = document.createElement("div");
  const computerScoreDiv = document.createElement("div");
  const computerScoreLabelDiv = document.createElement("div");
  humanScoreDiv.textContent = humanScore;
  humanScoreLabelDiv.textContent = "Human";
  computerScoreDiv.textContent = computerScore;
  computerScoreLabelDiv.textContent = "Computer";
  divScore.appendChild(humanScoreLabelDiv);
  divScore.appendChild(humanScoreDiv);
  divScore.appendChild(computerScoreLabelDiv);
  divScore.appendChild(computerScoreDiv);

  document.body.appendChild(divButtons);
  document.body.appendChild(divResult);
  document.body.appendChild(divScore);

  for (let i = 0; i < 3; i++) {
    buttons.push(document.createElement("button"));
    buttons[i].textContent = stringValues[i];
    buttons[i].addEventListener("click", () => {
      const humanSelection = buttons[i].textContent;
      const computerSelection = getComputerChoice();
      divResult.textContent = playRound(humanSelection, computerSelection);
      humanScoreDiv.textContent = humanScore;
      computerScoreDiv.textContent = computerScore;
      if (humanScore > 4) {
        divResult.textContent = "Human win this game!";
      } else if (computerScore > 4) {
        divResult.textContent = "Computer win this game!";
      }
    });
    divButtons.appendChild(buttons[i]);
  }
};

playGame();
