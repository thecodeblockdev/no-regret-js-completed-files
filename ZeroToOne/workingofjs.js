"use strict";

// Scope

// function houseA() {
//     console.log(mangoesOnTree);
//     function houseA1() {
//         let mangoesOnTree = 10;
//         console.log(mangoesOnTree);
//     }
//     houseA1();
// }
// houseA();

// function houseB() {
//     console.log(mangoesOnTree);
// }
// houseB();

// function houseC() {
//     console.log(mangoesOnTree);
// }
// houseC();

const myName = "CodeBlock"; // Global scope accesible everywhere in the code

function first() {
    const age = 21;
    let allowedToDrive = true;
    if (age >= 18) {
        // let allowedToDrive = true;
        var canEnrollForArmy = true;
        console.log(canEnrollForArmy);
    }
    // console.log(job);
    function second() {
        const job = "Software engineer";
        console.log(
            `${myName} is ${age} year's old ${job} can drive? ${allowedToDrive}`
        );
    }
    // second();
}
// first();

// Variables declared using let and const are block scoped
// Variables declared using the var keyword are function scoped

// function grandpa() {
//     const chocolate = "Cadburry";
//     function papa() {
//         const car = "Scorpio N";
//         console.log(chocolate, chocolateOfChild);
//         function child() {
//             const chocolateOfChild = "dairy milk";
//             console.log(car, chocolate);
//         }
//         child();
//     }
//     papa();
// }
// grandpa();

// const firstName = "John Wick";

// if (firstName === "John Wick") {
//     console.log(`${firstName} is a ${job}`);
//     const age = 2030 - 1974;
//     console.log(age);
//     const job = "Boogeyman Slayer";
//     console.log(x);
// }

// HOISTING

// console.log(a);
// console.log(intro);
// console.log(year);

var a = 10;
let intro = "John Wick";
const year = 2025;

// Hoisting with functions
// console.log(addDeclaration(20, 40));
// console.log(addExp(20, 40));
// console.log(addArrow(20, 40));
// console.log(addExp);
// console.log(addArrow);

// function addDeclaration(a, b) {
//     return a + b;
// }

// var addExp = function (a, b) {
//     return a + b;
// };

// var addArrow = (a, b) => a + b;

// Hoisting only works with function declaration

// This keyword
//
// console.log(this);

function sayHi() {
    console.log(this);
}
// sayHi();

const obj = {
    fName: "John ",
    lName: "Wick",
    yearOfBirth: 1998,
    sayMyName: function () {
        // console.log(obj.fName);
        console.log(this.fName + this.lName); // will be obj.fName + obj.lName
    },
    calculateAge: function () {
        console.log(2026 - this.yearOfBirth);
    },
};
// obj.sayMyName();
// obj.calculateAge();

const captSparrow = {
    yearOfBirth: 1978,
};

captSparrow.calculateAge = obj.calculateAge;
// console.log(captSparrow);
// captSparrow.calculateAge();

// ✅ This in arrow function
var firstName = "John wick";
const jack = {
    firstName: "Jack",
    year: 1978,
    calcAge: function () {
        console.log(2026 - this.year);

        // const isBornAfter80 = function () {
        //     console.log(this);
        //     undefined.year;
        //     console.log(this.year <= 1980);
        // };
        // isBornAfter80();
    },
    greet: function () {
        console.log(this);
        console.log(this.firstName);
    },
};

// jack.calcAge();
// jack.greet();

// Primitives data types vs Objects(reference values)
let password = 100;
let oldPassword = password;
password = 101;

console.log("Password:", password);
console.log("old password:", oldPassword);

const myDetails = {
    fName: "Jack",
    age: 23,
};
const friend = myDetails;
friend.age = 34;

console.log("my details:", myDetails);
console.log("my friend:", friend);
