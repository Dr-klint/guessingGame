const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function guessingGame(input) {
  const randomNumber = Math.floor(Math.random() * 10 + 1);
  if (randomNumber === +input) {
    console.log(`you won 😊 \n`);
    rl.question("Guess a number between 1 and 10? ", guessingGame);
  } else if (input === "exit") {
    rl.close();
  } else {
    console.log(`You lost sucker 😜, the number is ${randomNumber} \n`);
    rl.question("Guess a number between 1 and 10? ", guessingGame);
  }
}

rl.question("Guess a number being 1 and 10? ", guessingGame);
