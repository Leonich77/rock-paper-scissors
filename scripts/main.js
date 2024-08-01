const MIN = 0;
const MAX = 2;
const stringValues = ["rock", "paper", "scissors"];

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

console.log(getHumanChoice());
