console.log("hello world!");

const heading = document.getElementsByTagName('h1')[0];
heading.textContent = "OMG JAVASCRIPT";

const money = 1;

if (money > 15) {
    console.log("buy another pint");
} else if (money > 5 && money < 15) {
    console.log("buy crisps");
} else {
    console.log("I am poor.");
}

// alert("Here is the answer!");
// const number = prompt("enter number");


const firstNumber = Number(prompt("Enter first number"));
const operator = prompt("Enter the operator");
const secondNumber = Number(prompt("Enter second number"));

if (operator === "+") {
    alert(firstNumber + secondNumber);
} else if (operator === "-") {
    alert(firstNumber - secondNumber);
} else if (operator === "/") {
    alert(firstNumber / secondNumber);
} else if (operator === "*") {
    alert(firstNumber * secondNumber);
} else {
    alert("Invalid operator entered");
}

