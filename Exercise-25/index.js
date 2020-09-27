"use strict"

//function - console.log day of the week using switch statement
function dayOfTheWeekSwitch(weekDayNumber) {
    switch (weekDayNumber) {
        case 1:
            console.log("Today is Monday");
            break;
        case 2:
            console.log("Today is Tuesday");
            break;
        case 3:
            console.log("Today is Wednesday");
            break;
        case 4:
            console.log("Today is Thursday");
            break;
        case 5:
            console.log("Today is Friday");
            break;
        case 6:
            console.log("Today is Saturday");
            break;
        case 7:
            console.log("Today is Sunday");
            break;
        default:
            console.log("Error: valid entry would be a number between 1-7");
            break;
    }
}

//function console.log day of the week using elseif statement
function dayOfTheWeekIfElse(weekDayNumber) {
    if (weekDayNumber === 1) {
        console.log("Today is monday");
    } else if (weekDayNumber === 2) {
        console.log("Today is tuesday");
    } else if (weekDayNumber === 3) {
        console.log("Today is wednesday");
    } else if (weekDayNumber === 4) {
        console.log("Today is thursday");
    } else if (weekDayNumber === 5) {
        console.log("Today is friday");
    } else if (weekDayNumber === 6) {
        console.log("Today is saturday");
    } else if (weekDayNumber === 7) {
        console.log("Today is sunday");
    } else {
        console.log("error: number not between 1-7");
    }
}

//function - console.log day of the week using switch statement- refractored
function dayOfTheWeekSwitchR(weekDayNumber) {
    let day;
    switch (weekDayNumber) {
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
            break;
        case 7:
            day = "Sunday";
            break;
        default:
            day = "Error- not a number between 1-7 silly.....";
            break;
    }
    if (weekDayNumber >= 1 && weekDayNumber <= 7) {
        console.log(`Today is ${day}.`);
    } else {
        console.log(day);
    }
}

//function console.log day of the week using elseif statement - refractored
function dayOfTheWeekIfElseR(weekDayNumber) {
    let day;
    if (weekDayNumber === 1) {
        day = "monday";
    } else if (weekDayNumber === 2) {
        day = "tuesday"
    } else if (weekDayNumber === 3) {
        day = "wednesday";
    } else if (weekDayNumber === 4) {
        day = "thursday";
    } else if (weekDayNumber === 5) {
        day = "friday";
    } else if (weekDayNumber === 6) {
        day = "saturday";
    } else if (weekDayNumber === 7) {
        day = "sunday";
    } else {
        day = "error: not a valid entry :("
    }

    weekDayNumber >= 1 && weekDayNumber <= 7 ? console.log(`Today is ${day}!`) : console.log(day);
}

dayOfTheWeekSwitch(1);
dayOfTheWeekSwitch(2);
dayOfTheWeekSwitch(3);
dayOfTheWeekSwitch(4);
dayOfTheWeekSwitch(5);
dayOfTheWeekSwitch(6);
dayOfTheWeekSwitch(7);
dayOfTheWeekSwitch(92);

dayOfTheWeekIfElse(7);
dayOfTheWeekIfElse(6);
dayOfTheWeekIfElse(5);
dayOfTheWeekIfElse(4);
dayOfTheWeekIfElse(3);
dayOfTheWeekIfElse(2);
dayOfTheWeekIfElse(1);
dayOfTheWeekIfElse("e");

dayOfTheWeekSwitchR(1);
dayOfTheWeekSwitchR(2);
dayOfTheWeekSwitchR(3);
dayOfTheWeekSwitchR(4);
dayOfTheWeekSwitchR(5);
dayOfTheWeekSwitchR(7);
dayOfTheWeekSwitchR(6);
dayOfTheWeekSwitchR(18);

dayOfTheWeekIfElseR(7);
dayOfTheWeekIfElseR(6);
dayOfTheWeekIfElseR(5);
dayOfTheWeekIfElseR(4);
dayOfTheWeekIfElseR(3);
dayOfTheWeekIfElseR(2);
dayOfTheWeekIfElseR(1);
dayOfTheWeekIfElseR("e");