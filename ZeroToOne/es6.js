"use strict";

// =====
// 1.) Destructuring
// const vehicles = ["Honda City,", "Scorpio N,", "Ashok Leyland", "Tata harrier"];

// old way
// const car = vehicles[0];
// const suv = vehicles[1];
// const truck = vehicles[2];

// Now Destructuring
// const [car, , suv, truck, suv2] = vehicles;
// console.log(car, suv, truck, suv2);

// Object destructuring
// let employee = {
//     // Object we want to destructure
//     firstname: "Jon",
//     lastname: "Snow",
//     dateofbirth: "1990",
// };

// // Destructuring the object into our variables
// var { firstname: fn, lastname: ln, dateofbirth } = employee;
// console.log(fn, ln, dateofbirth);

// react
// const [count, setCount] = useState();
//       👆🏻       👆🏻
// current state,  function to update state

// 2.) Default parameters
// function signup(username, password, profilePic = "userpic.jpg") {
//     console.log(username, password, profilePic);
// }
// signup("Code", "12243423", "codeblock.png");

// 3.) Enhanced Object Literals
const item = "appleLaptop";
const data = {
    [item]: "Laptop",
    price: 200,
    manufacturer: "Apple",
    buy() {
        console.log(" i bought this");
    },
};
// console.log(data);
// data.buy();

// [computed property key, Method definition Shorthand, property shorthand]

const accessToken = "kjacskjd";
const refreshToken = "ksjhdbck";

const userValidation = {
    accessToken,
    refreshToken,
};
// console.log(userValidation);

// 4.) Spread Operator and rest parameter
// 5.) for-in and for-of-loop
// 6.) find and

// The find() method returns the first element in an array that passes a test function. The following shows the syntax of the find() method:

// let names = ["jack", "bob", "john", "barbosa", "bob"];
// const findNameWithWordO = names.find((n) => n.includes("o"));
// console.log(findNameWithWordO);
// console.log(names);

// const isJohnContainsP = "john".includes("p");
// console.log(isJohnContainsP);

// 7.) findIndex

// let ranks = [1, 7, 5, 7, 8, 10, 7];
// let index = ranks.findIndex((rank) => rank === 5);
// console.log(index);

// 8.) Set

// const dataSet = ["1", "2", "3", "4", "5", "6", "7", "2", "3", "12"];
// const uniqueDataSet = new Set(dataSet);
// console.log(uniqueDataSet);

// 9.) Map

// let oddNumbers = [1, 3, 5, 7, 9];
// let convertToEven = oddNumbers.map((n) => n + 1);
// console.log(convertToEven);
// console.log(oddNumbers);

// convertToEven.map((item, index, array) => {
//     console.log(item);
//     console.log(index);
//     console.log(array);
//     return item;
// });

// 10.) Modules in Javascript (ESM)

// ================================================================

// 👉 Your Homework

// read about.........
// ✅ some and every
// ✅ filter
// ✅ reduce
// ✅ reduceRight
// ✅ concat
// ✅ fill
// ✅ flat
// ✅ flatMap
// ✅ splice
// ✅ keys
// ✅ values
// ✅ entries
// ✅ sort
// ✅ copyWithin

// 😎 Some amazing tutorials coming up

// ✅ OOPS in Javascript,
// ✅ Js Interview series,
// ✅ Backend with Node.js,
// ✅ React.js
// ✅ Next.js
// ✅ Python [i love it]
