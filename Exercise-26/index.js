"use strict"

//function to log even numbers to console
function evenNumber() {
    for (let number = 0; number < 101; number++) {
        if (number % 2 === 1) {
            continue;
        }
        console.log(number);
    }
}
evenNumber();

//function to log personal information
function userInfo(name, age, phoneNumber, street, postalCode, married) {
    let status;
    if (!married) {
        status = "single as a pringle and ready to mingle ;)";
    } else {
        status = "currently weighed down by my big ol' ball and chain";
    }
    console.log(`My name is ${name} and I am ${age} years old.\nMy current phone number is ${phoneNumber} and my address is ${street} St. Nowhere, MB, ${postalCode}.\nIn case that wasn't enough personal information, my current marital status is ${status}.`);
}

userInfo("Joe", 104, "204.867.5309", "Easy", "90210", true);

//function expression- output log even numbers 0-100 (log 5 times)
let evenNumbers = function evenNumber() {
    for (let number = 0; number < 101; number++) {
        if (number % 2 === 1) {
            continue;
        }
        console.log(number);
    }
}

evenNumbers();

//function expression - fibonacci value at max

let printSequence = function fibonacciSequence(max) {
    let convertedMax = +max;
    if ((isNaN(convertedMax)) || (convertedMax <= 0)) {
        console.error("Invalid Number.")
        return -1;
    }

    if (convertedMax == 1) {
        return 0;
    }

    if (convertedMax == 2) {
        return 1;
    }

    if (convertedMax > 2) {
        let fibNum1 = 0;
        let fibNum2 = 1;
        let total;
        for (let value = 0; value < convertedMax; value++) {
            total = fibNum1 + fibNum2;
            fibNum1 = fibNum2;
            fibNum2 = total;
        }
        return (fibNum2);
    }
}
console.log(printSequence(5));
console.log(printSequence(-1));
console.log(printSequence(12));
console.log(printSequence('erica'));
console.log(printSequence(1));

//function expression - print name with specific format

let showName = function printName(name) {
    let convertedName = String(name);
    let equal = "=";
    let line = equal.repeat((convertedName.length) + 4);
    console.log(`${line}\n${equal} ${convertedName} ${equal}\n${line}`);
}

showName("Erica");
showName("~~ Cat ~~");
showName(23);
showName("Purple Seafish");
showName(true);

//calculating factorials using loop
let calculateFactorialLoop = function(number) {
    let convertedNumber = +number
    if (isNaN(convertedNumber) || (convertedNumber < 0)) {
        return "Invalid Number";
    }
    if (convertedNumber == 0) {
        return 1;
    } else {
        let factorialValue = 1;
        for (let value = 1; value <= convertedNumber; value++) {
            factorialValue = factorialValue * value;
        }
        return factorialValue;
    }
}

console.log(calculateFactorialLoop(5));
console.log(calculateFactorialLoop(7));
console.log(calculateFactorialLoop(9));