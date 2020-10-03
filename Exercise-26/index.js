"use strict"

//function to log even numbers to console
function evenNumber() {
    for (let number = 0; number < 101; number++) {
        if (number % 2 === 1) {
            continue;
        }
        console.log(num);
    }
}
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
evenNumbers();
evenNumbers();
evenNumbers();
evenNumbers();



//function expression - fibonancci sequence accepting a maximum number of additions parameter

let printSequence = function fibonacciSequence(max) {
    let fibNum1 = 0;
    let fibNum2 = 1;
    let total;
    for (let i = 0; i < max; i++) {
        total = fibNum1 + fibNum2;
        fibNum1 = fibNum2;
        fibNum2 = total;
        console.log(fibNum2);
    }
}
printSequence(4);
printSequence(8);
printSequence(13);
printSequence(2);
printSequence(9);

//function expression - print name with specific format

let showName = function printName(name) {
    let equal = "=";
    let line = equal.repeat((name.length) + 4);
    console.log(`${line}\n${equal} ${name} ${equal}\n${line}`);
}

showName("Erica");
showName("~~ Cat ~~");
showName("Purple Seafish");