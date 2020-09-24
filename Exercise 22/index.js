name = prompt("Please enter your name to continue");

alert(`Well, Hi There ${name}! Let's play a game! Do you think you can guess my random number between 1-10 (inclusive)?`);

let playerGuess = prompt("Please enter your number!");

playerGuess = Number(playerGuess);

randomNum = Math.round(Math.random() * 10);

if (playerGuess <= 10 && playerGuess >= 1) {
    if (playerGuess > randomNum || playerGuess < randomNum) {
        alert(`You lose! You guessed ${playerGuess} and my number was ${randomNum}! Better Luck next time `);
    } else {
        alert(`Congratulations, You've won! We both guessed ${playerGuess}. You're absolutely amazing at guessing!`);
    }
} else {
    alert(`You automatically lose! Your guess of ${playerGuess} is not between 1-10!`);
}

result = confirm("Hope you enjoyed playing me! Let's play again soon!");