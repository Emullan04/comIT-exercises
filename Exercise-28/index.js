"use strict"

let user1 = {

}

console.log(user1);
console.log(typeof user1);

user1.userName = "batman";
user1.password = 'hunter2';

console.log(user1);
let user1login = function() {
    let enterUserName = prompt('Enter User Name');
    enterUserName = enterUserName.toLowerCase();
    let enterPassword = prompt('Enter User Password');
    enterPassword = String(enterPassword);
    if ((enterUserName == user1.userName) && (enterPassword == user1.password)) {
        confirm("you are successfully logged in");
        console.log("user1 logged in");
    } else {
        alert("incorrect password/username combo");
        console.error('error: invalid login info for user1');
    }
}

user1login();

let user2 = {
    userName: "wonder woman",
    password: "123123",
}

const greet = function() {
    alert(`Hello, I am ${user2.userName}`);
    console.log(`Current username is: ${user2.userName}`);
}

const updateUserName = function() {
    let newUserName = prompt("What would you like to update your username to?");
    user2.userName = newUserName;
    console.log(`Username has been updated to: ${user2.userName}`);
}

greet();
updateUserName();
greet();