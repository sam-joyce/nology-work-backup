// const myArray = [12, 4, 26, 44, 1043, 2];

// for (let i = 0; i < myArray.length; i++) {
//     console.log(myArray[i]);
// };

// // Rather than a loop, this is an array method
// myArray.forEach((number) => {
//     console.log(number);
// })

// // a 'for of' loop
// for (number of myArray) {
//     console.log(number);
// }


// const nology = [
//     ["Jonny", "Sunny", "Annika", "Sophie"],
//     ["Andy", "Nasir", "Sonia", "Sam"]
// ];

// console.log(nology[1][1]);

// 1. loop through
// 2. if the letter is i, replace it with a 1
// 3. console.log the new string
// BONUS: replace the s's with 5s

// const state = "mississippi";
// // Loop through the state and replace all the i's with 1s
// // 1. Loop through the string
// const newState = [...state];
// for (let i = 0; i < newState.length; i++) {
//     if (newState[i] === "i") {
//         newState[i] = 1;
//     }
// }
// console.log(newState);



// Fizzbuzz
// 1. console.log all numbers to 1000
// 2. If the number is divisible by 3, replace it with fizz
// 2. If the number is divisible by 5, replace it with buzz
// 3. divisible by both, fizzbuzz!!!!!!

for (let i = 0; i <= 1000; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('fizzbuzz');
    } else if (i % 5 === 0) {
        console.log('buzz');
    } else if (i % 3 === 0) {
        console.log('fizz');
    } else {
        console.log(i);
    }
}