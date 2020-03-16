console.log("loops");

// My basic for loop
for (let i = 0; i < 5; i ++) {
    console.log(i);
}

// Basic while loop
let j = 0;
while (j < 5) {
    console.log(j);
    j++
}

// Turning the calculator into a loop so user can say they want to go again
let goAgain = "yes";
while (goAgain === "yes") {
    let firstNumber = Number(prompt("Enter first number"));
    let operator = prompt("Enter the operator");
    let secondNumber = Number(prompt("Enter second number"));
    
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

    switch (operator) {
        case "+":
                alert(firstNumber + secondNumber);
        case "-":
                alert(firstNumber - secondNumber);
        case "*":
                alert(firstNumber * secondNumber);
        case "/":
                alert(firstNumber / secondNumber);
    }

    goAgain = prompt("Do you want to go again?");
}
