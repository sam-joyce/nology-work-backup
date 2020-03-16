const names = ["Benny", "Anna", "Bjorn", "Anna"];
// 1. Loop through the names and print each one
// names.forEach((name) => {
//     console.log(name);
// })

// 2. Print every letter from the second name in the list
// [...string] turns a string into an array
// const name = names[1];
// [...name].forEach((item) => {
//     console.log(item);
// })

// 3. Loop through the array and print the length of each name
// names.forEach((name) => {
//     console.log(name.length);
// })

// 4. Use an array method to find the index of the name "Bjorn"
// if used for Anna, it will return 1 as only picks up the first one
// if used for "Sam", it will return -1 (used to check if a name is in the array i.e. if it is the number will be > 0)
// console.log(names.indexOf("Bjorn"));

// 5. Loop through the array and print each item in alphabetical order
// names.sort().forEach((person) => {
//     console.log(person);
// })

// EXTENSION
    // 1. Sort the array by the length of the names, shortest to largest
    // const abbaLengthSort = names.sort((a, b) => {
    //     return a.length - b.length;
    // });
    // console.log(abbaLengthSort);

    // 2. Only return names that start with a "B"
    // const startsWithB = names.filter((name) => name.startsWith("B")) unfinished

    // 3. Using the sort and reduce methods, return the word "ABBA" using the array
    // names.sort();
    // names.push(names.shift());
    // const firstLetter = (response.word) unfinished

    // 4. Using map, print each name adding "the legend" to the end of each.
    const names = ["Benny", "Anna", "Bjorn", "Anna"];
    
    const legends = names.map((name) => `${name} the legend`);
    console.log(legends);