// Strict Mode

"use strict";

// let canBeReleased = false;
// let isHealthy = true;

// if(isHealthy) {

//     canBereleased = true;
// }
// if(canBeReleased){
//     console.log('Yes you are fit')
// }else{
//     console.log('No you are not fit')
// }

// let private = "6712dgwu"
// console.log(private)

// Function Masterclass

// SAY "HELLO" TO ALL YOUR FIVE FRIENDS

// This is wet Code = Write everything twice
// console.log('Hello')
// console.log('Hello 2')
// console.log('Hello 3')
// console.log('Hello 4')
// console.log('Hello 4')
// console.log('Hello 4')

// DRY: Do not repeat Yourself

// keyword, name, codeblock

function sayHi() {
    // console.log('Hello')
    // console.log('Hello 1')
}
sayHi();

// Invoking, Calling, Running, Execution

// function sayHello(){
//     alert('Hello, There')
// }
// sayHello()
// let randomNum;
// console.log(randomNum)

//                      parameter
function sayHiToMyFriend(friend, rollNumber) {
    // console.log(`Hello ${friend} ${ rollNumber} `)
    //             hello Ram 1
    //             hello John 2
}
//               arguments passed to parameters
// sayHiToMyFriend('Ram', 1)
// sayHiToMyFriend('John', 2)
// sayHiToMyFriend('Sheetal', 3)
// sayHiToMyFriend('Rakhi', 4)

// =========================================
// Let's Summarise Function Class so far
/*
QUICK POINTS TO REMEMBER
1.) Function is a descriptive block that we create to use it again and again to do a certain task, it has more use cases than this but mainly it is created to reduce code duplicacy and format descriptive code in a block. example sayHi() will say Hi when you call it.

2.) Always write a descriptive function name

3.) A "parameter" is the local variable for function and we can pass it values while calling the function in the form of "agruments"

4.) If you have passed a parameter but have not passed an argument than it's totally fine it will simply be undefined.
*/

// =========================================

// Function declaration vs Function Expression
// and when function returns something

// fn declaration
// shoutMyName()
// function shoutMyName(){
//     console.log('Hello i am fn declaration')

// }

//
// shoutMyName2()
// let shoutMyName2 = function(){
//     console.log('Hello i am fn expression')
// }

let ageCalculator = function (yearOfBirth) {
    return 2025 - yearOfBirth;
    //console.log(2025 - yearOfBirth)
    //     2025 - 2001
};
const age = ageCalculator(2001);
// console.log(age)

const ageOfJohn = ageCalculator(2003);
// console.log(`Age of John in 2025 is ${ageOfJohn}`)

const ageOfMike = ageCalculator(2006);
// console.log(`Age of Mike in 2025 is ${ageOfMike}`)

/* Higher Order Function

// In javascript functions are the first class citizens which means
// 1.) We can assign a function to a variable (Function expressions)
// 2.) We can pass a function as an argument
// 3.) We can return a function within a function


function multiply(a, b){
    return a * b;
}
function add(a, b){
    return a + b;
}

function divide(a, b){
    return b / a
}

//                          12    40       multiply(a, b)
const calculator = function(num1, num2, typeOfCalculation){
    // console.log(num1, num2, typeOfCalculation)
    return typeOfCalculation(num1, num2)
}

const output = calculator(12, 40, add)
// console.log(output)


Arrow Functions
function sayHello(){
    console.log('Hi')
}
sayHello()

const sayHiAgain = function(){
    console.log('Hi')
}
sayHiAgain()

// Greet Someone

let greet = a => `hello ${a}`
const what = greet('Code')
console.log(what)

*/

// ARRAY MASTERCLASS

// const friend1 = "Sunaina";
// const friend2 = "Aman";
// const friend3 = "Abhinav";

//                         0        1           2       3       4
// const nameOfFriends = ['Sheetal', 'Mayank', 'Rakhi', 'Aman', 'Akash', 'Akansha', 'Aadrika', 'Riya', 'Abhinav']
// console.log(nameOfFriends[8])
// console.log(nameOfFriends[nameOfFriends.length - 1])
//                      [9-1]
//              nameOfFriends[8]

// nameOfFriends[2] = "John Wick"

// nameOfFriends = ['Raman', 'Prabhat']

// console.log(nameOfFriends)

// const personDetails = ['John', 'Wick', 47, false, true, ['Baba Yaga', 'Boogyman Slayer'], {firstName: 'John'}]
// console.log(personDetails[5][1])

// const simpleArray = ['John', 'Wick', 47, false, true]
// console.log(simpleArray.push(['Baba Yaga', 'Boogyman Slayer']))

// simpleArray.unshift('Mr')
// simpleArray.pop()

// simpleArray.shift()

// simpleArray.indexOf(true)

// console.log(simpleArray.indexOf())
// console.log(simpleArray.includes('Wicksss'))

// const years = new Array(1991, 2008, 2010, 2023, 2027)
// console.log(years)

// OBJECTS IN JAVASCRIPT
const personData = ["John Wick", 47, false, true, ["Baba Yaga", "Boogeyman"]];
// Array is ordered
// Object is unordered
/*
const person = {
    // key    value
    firstName: 'John',
    lastName: 'Wick',
    birthYear: 1980,
    hasADog: false,
    additionalData: ['Baba Yaga', 'Boogeyman'],

    calcAge(){
        console.log(this)
        console.log(2025 - this.birthYear)
    }
}
// console.log(person.calcAge)
person.calcAge()
// Methods are simple function inside of an object

// Dot Notation
// console.log(person)
// Bracket Notation
// console.log(person['age'])
// console.log(person.hasADog)

*/

// LOOPS
// I am exercising and did 1 push ups

// console.log('I am exercising and did 1 push ups')
// console.log('I am exercising and did 2 push ups')
// console.log('I am exercising and did 3 push ups')

// initialisation, condition, increment

// 0               true         1
// 1               true         2
// 2               true         3
// 10              true        11
//   11            false
for (let pushups = 0; pushups <= 10; pushups++) {
    // console.log(`I am exercising and did ${pushups} push ups`)
}

// for(let num=1; num <=100; num++) {
//     console.log(num)
// }

// const dummyarray = [true, false, "John", "Wick"];
// dummyarray[0]
// dummyarray[1]

// console.log(dummyarray.length)
//   0
//  0              true              1
// 1               true              2

const dummyarray = [true, false, "John", "Wick"];

for (let i = 0; i < dummyarray.length; i++) {
    // console.log(dummyarray[i])
    //             dummyarray[0]
    //             dummyarray[1]
}
console.log("====");

// 0.......3
// 3......0
console.log("======");

for (let i = dummyarray.length - 1; i >= 0; i--) {
    // 3                            true  2
    // 2                            true  1
    // 1                            true  0
    // 0                            true  0-1
    // -1   true 0-1                false
    // console.log(dummyarray[i])
}

// Another Loop while loop

// while this is true keep doing

// let num = 0
// while(num <= 10){
//     console.log(num)
//     num++
// }

// while(10 < 20){
//     console.log('10 is less than 20')
// }
