const user = {
    name: "Ellen Pieterson",
    dob: "02/02/1997",
    email: "ellen@rox.com",
    password: 1
}
const objectWithNumbers = {
    0: "something",
    1: "another",
    2: "third"
}
const dataGetter = "email";
// console.log(user.name);
// console.log(user[dataGetter]);
// console.log(objectWithNumbers[0]);

// for (const key in user) {
//     console.log(key);
//     console.log(user[key]);
// }

const users = [{
    name: "Andrew",
    dob: "07/06/1968",
    loginDetails: {
        email: "andy@old.com",
        password: "0lli3"
    },
    id: 2463995389,
    isAdmin: true
}, {
    name: "Sam",
    dob: "07/06/2004",
    loginDetails: {
        email: "sma@young.com",
        password: "tesco"
    },
    id: 34,
    isAdmin: false
}, {
    name: "Sophie",
    dob: "29/10/1990",
    loginDetails: {
        email: "sophie@szmd.com",
        password: "code"
    },
    id: 721255,
    isAdmin: true
}];

// console.log(users[0].loginDetails);

// const names = [];
// users.forEach((user) => {
//     names.push(user.name);
// })
// console.log(names);

users.splice(1,1);
console.log(users);