// 1. Write a function that takes in a lower case word and makes it upper 

// const convertWordToUpperCase = (lower) => lower.toUpperCase();
// const result = convertWordToUpperCase("hello");
// console.log(result);


// 2. Write a function that multiplies three numbers together and returns the result

// const shortMultiple = (num1, num2, num3) => num1 * num2 * num3;
// const shortResult = shortMultiple(3, 4, 5);
// console.log(shortResult);


// 3. Write a function that reverses a string so it reads backwards

// INITIAL SOLUTION
// const input = (normal) => {
//     const split = normal.split('');
//     const reverse = split.reverse();
//     const join = reverse.join('');
//     return join;
// }
// const result = input("nology");
// console.log(result);

// MOST EFFICIENT SOLUTION
// const reverseString = (str) => str.split("").reverse().join("");

// const result = reverseString("nology");
// console.log(result);


// 4. Write a function that checks whether a number is greater than 500
    // If the number is greater, return true
    // If the number is less, return false

// INITIAL SOLUTION
// const input = (number) => {
//     let figure = (number);
//     if (figure > 500) {
//         return true;
//     } else {
//         return false;
//     }
// }
// const another = input(600);
// console.log(another);

// MOST EFFICIENT SOLUTION
// const checkSize = (number) => number >= 500;
// const result = checkSize(400);
// console.log(result);

// 5. Write a function that takes in a letter and returns the letter before it in the alphabet


// const letterBefore = (letter) => {
//     const charCode = letter.charCodeAt(0) - 1;
//     return String.fromCharCode(charCode);
// }

// console.log(letterBefore('r'));