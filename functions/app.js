// Normal function format
const addition = (num1, num2) => {
    return num1 + num2;
}

// Shorthand version
const shortAdd = (num1, num2) => num1 + num2;

// To see result
// const result = addition(12, 43);
// const shortResult = shortAdd(10, 13);
// console.log(result);
// console.log(shortResult);



const loom = (thread, dye) => {
    const cloth = "Cloth of color " + dye + " made with " + thread + " thread";
    return cloth;
}

const result = loom("cotton", "red");
console.log(result);


// function that does the square root
const squareTheNumber = (number) => Math.sqrt(number);

// dunction that checks if number is an integer
const checkIsInteger = (number) => Number.isInteger(number);

// combine both
const squareRoot = squareTheNumber(16);
const isInteger = checkIsInteger(squareRoot);

console.log(isInteger);