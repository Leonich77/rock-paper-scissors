const MIN = 0;
const MAX = 2;
const stringValues = ["rock", "paper", "scissors"];

const getComputerChoice = () => {
  const randomValue = Math.floor(Math.random() * (MAX - MIN + 1) + MIN);
  return stringValues[randomValue];
};

console.log(getComputerChoice());
