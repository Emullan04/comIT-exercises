name = prompt("Please enter your name to continue");

alert(`Well, Hi There ${name}! Enter two numbers to see if the first is greater than the second?`);

let firstNum = prompt("What is your first number?");

firstNum = Number(firstNum);

let secondNum = prompt("What is your second number?");

secondNum = Number(secondNum)

if (firstNum > secondNum) {
    alert(`Your first number is larger than your second number by ${firstNum - secondNum}`);
} else if (firstNum < secondNum) {
    alert(`Your second number is larger than your first number by ${secondNum - firstNum}`);
} else if (firstNum == secondNum) {
    alert("Your numbers are equal!");
}

result = confirm("Did you enjoy this game?");