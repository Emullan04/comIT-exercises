"use strict"

//exercise names array
let siblingNames = ["Nick", "Jr.", "Dee"];
let parentNames = ["Chrissy", "Gerald"];

//concat siblings and parent's names
let familyMemberNames = siblingNames.concat(parentNames);
console.log(familyMemberNames);

//push pets names
familyMemberNames.push("chia pet", "tamagochi");
console.log(familyMemberNames);

//reverse order of pets and family names
let reversedNames = familyMemberNames;
reversedNames = reversedNames.reverse();
console.log(reversedNames);

//access parent name and update it using index and square brack notation
console.log(familyMemberNames[3]);
familyMemberNames[3] = "Johnny";
console.log(familyMemberNames);

//loop over array using for loop
const logName = function(array) {
        for (let name = 0; name < array.length; name++) {
            console.log(familyMemberNames[name]);
        }
    }
    //loop over array us for...of loop
const logNameForOfLoop = function(array) {
    for (const name of array) {
        console.log(name);
    }
}

logName(familyMemberNames);
logNameForOfLoop(familyMemberNames);

//recipe card exercise 

let printRecipe = function(object) {
    console.log(`Recipe: ${object.title}`);
    console.log(`Total Servings: ${object.servings}`);
    console.log("Ingredients:");
    for (let ingredient of object.ingredients) {
        console.log(`-- ${ingredient}`);
    }
}

let recipe = {
    title: "oatmeal",
    servings: 3,
    ingredients: ["rolled oats", "water", "cinnamon", "brown sugar", "Raisins - optional"],
};

printRecipe(recipe);

//reading list exercise

const bookList = [
    { title: '1984', author: "George Orwell", "already read": true },
    { title: "The Crucible", author: "Arthur Miler", "already read": true },
    { title: "Wonky Donkey", author: "Craig Smith", "already read": false }
]

for (let bookCount = 0; bookCount < bookList.length; bookCount++) {
    let book = bookList[bookCount];
    let bookInfo = `${book.title} by ${book.author}`;
    if (book['already read']) {
        console.log(`You've previously read ${bookInfo}`);
    } else {
        console.log(`You have yet to read ${bookInfo}`);
    }
}

//extra exercise - write map function 
function map(arr, func) {
    let newArray = [];
    for (let index = 0; index < arr.length; index++) {
        let arrayItem = arr[index];
        let mutatedArrayItem = func(arrayItem);
        newArray.push(mutatedArrayItem);
    }
    return newArray;
}

const result = map([1, 2, 3], function(item) {
    return item * 2;
});

console.log(result); // [2, 4, 6]