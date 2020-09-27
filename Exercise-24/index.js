"use strict"
//for loop - adding up nubmers 0-1000 break when result is more than 400

let var1 = 0;
let var2 = 0;
for (var2 = 0; var2 <= 1000; var2++) {
    var1 += var2;
    console.log(var1);

    if (var1 > 400) {
        break;
    }
}

//while loop - output to console 0-10
let firstWhile = 0;

while (firstWhile <= 10) {
    console.log(firstWhile);
    firstWhile++;
}

//while loop- output to console 100-0
let secondWhile = 100;

while (secondWhile >= 0) {
    console.log(secondWhile);
    secondWhile--;
}

//while loop- output to console even numbers 0-100
let thirdWhile = 0;

while (thirdWhile <= 100) {
    console.log(thirdWhile);
    thirdWhile++;
    if (thirdWhile % 2 === 1) {
        continue;
    }
}

//do loop - output to console 0-10
let firstDo = 0;

do {
    console.log(firstDo);
} while (firstDo++ <= 10);

//do loop- output to console 100-0
let secondDo = 100;

do {
    console.log(secondDo);
} while (secondDo-- >= 0);

//do loop - output to console even number 0-100
let thirdDo = 0;

do {
    if (thirdDo % 2 == 0) {
        console.log(thirdDo);
    }
} while (thirdDo++ <= 100);


//for loop - output to console 0-10
let firstFor = 0;

for (firstFor = 0; firstFor <= 10; firstFor++) {
    console.log(firstFor);
}

//for loop- output to console 100-0
let secondFor = 100;

for (secondFor = 100; secondFor >= 0; secondFor--) {
    console.log(secondFor);
}

//for loop - output to console even numbers 0-100
let thirdFor = 0;

for (thirdFor = 0; thirdFor <= 100; thirdFor++) {
    if (thirdFor % 2 == 1) {
        continue;
    }
    console.log(thirdFor);
}

//fourth while output stars
let whileStar = "*";
let fourthWhile = 1;

while (fourthWhile < 14) {
    console.log(whileStar.repeat(fourthWhile));
    fourthWhile++;
}

//fourth for loop output stars
let forStar = "*";
let fourthFor = 1;

for (fourthFor = 1; fourthFor < 14; fourthFor++) {
    console.log(forStar.repeat(fourthFor));
}

//fourth do loop output stars 
let doStar = "*";
let fourthDo = 1;
do {
    console.log(doStar.repeat(fourthDo));
} while (fourthDo++ < 14)