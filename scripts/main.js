// let myHeading = document.querySelector("h1");
// myHeading.textContent = "Hello World!";
//
// // Variable, operation, logical operators, if-else conditionals
// let iceCream = "chocolate";
// if (iceCream === "chocolate") {
//     alert("I love Ice Cream!");
// } else {
//     alert("I love chocolate.");
// }
//
// // Functions
// function multiply(num1, num2) {
//     let result = num1 * num2;
//     return result;
// }
//
// // Events
// document.querySelector("html").addEventListener("click", function () {
//     alert("I am a number!");
// })
// /**
//  * Or, equivalently,
//  * document.querySelector("html").addEventListener("click", () => {
//  *     alert("I am a number!");
//  * })
//  */

// Change Picture when Clicking
let myImage = document.querySelector("img");

myImage.onclick = function () {
    let mySrc = myImage.getAttribute("src");
    if (mySrc === "images/frontPic.jpg") {
        myImage.setAttribute("src", "images/anotherPic.jpg");
    } else {
        myImage.setAttribute("src", "images/frontPic.jpg");
    }
}

// Customized Welcoming Message for different Users
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    let myName = prompt("Please enter your name");
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = "Welcome to my website, " + myName;
    }
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    let storedName = localStorage.getItem("name");
    myHeading.textContent = "Welcome to my website, " + storedName;
}

myButton.onclick = function () {
    setUserName();
}