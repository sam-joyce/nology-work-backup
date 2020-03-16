// JAVASCRIPT CHALLENGES

// 1. Print out the numbers from 17 to 35 in the console

// for (i = 17; i <= 35; i++) {
//     console.log(i);
// }


// 2. The user inputs their account balance into a browser prompt.
// If it's greater than 100, they are told they are rich!
// If it's between 20 and 100, they are told they are surviving.
// If it's less than 20, they are told they are poor.

// let balance = Number(prompt("Please enter your balance."))
// if (balance > 100) {
//     alert("You are rich!");
// } else if (balance >= 20) {
//     alert("You are surviving!");
// } else if (balance < 20) {
//     alert("You are poor!");
// } else {
//     alert("You are poor and stupid");
// }


// 3. The user types their name into a browser prompt.
// If it is 10 characters or longer, they are posh!
// If it is not, they are cool.

// let name = prompt("Enter your name");
// if (name.length >= 10) {
//     alert("You are posh")
// } else {
//     alert("You are cool")
// }


// 4. The user is asked to enter their name 4 times before being allowed some peace!

// for (i = 0; i < 4; i++) {
//     prompt("Please enter your name.");
// }
// alert("Thanks we will let you go.")


// 5. Extension - build rock, paper, scissors

let i = 0;
while (i < 10) {
    let userAction = prompt("Rock... Paper... Scissors.").toLowerCase();
    let answers = ["rock", "paper", "scissors"];
    let randomInt = Math.floor(Math.random() * 3);
    let computerAnswer = answers[randomInt];
    alert("Computer chooses " + computerAnswer)
    if (userAction === computerAnswer) {
        alert("You have drawn");
    } else if (userAction === "rock" && computerAnswer === "scissors") {
        alert("You win");
    } else if (userAction === "paper" && computerAnswer === "rock") {
        alert("You win");
    } else if (userAction === "scissors" && computerAnswer === "paper") {
        alert("You win");
    } else {
        alert("You lose");
    }
    i++
}