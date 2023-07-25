// // console.log("John")
// // console.log(30)

// // let firstName = "John"

// // firstName = "Captain Jack Sparrow"
// // console.log(firstName)

// // let age = "Twenty Nine"
// // age = 30
// // console.log(typeof age)

// // let myName;
// // myName = "John"
// // myName = true;
// // console.log(typeof myName)
// // console.log(myName)

// // console.log(typeof null)
// // here is our important variables
// /*
// console.log(random)
// let myFirstJob = "Software engineer"
// let mySecondJob = "Teacher"
// console.log(myFirstJob)
// console.log(mySecondJob)

// let job1 = "Software Engineer"
// let job2 = "Teacher"
// */
// // console.log(typeof true);
// // console.log(typeof 20);
// // console.log(typeof 'CodeBlock');
// // console.log(typeof 20.0);


// // //////////////////////////////////////////////////////////////////////////

// // Here we talk about const, let and var

// // we use let keyword to declare variables that can be changed in the future.

// // Let's value can be changed in the future
// // let age = 30; 
// // age = 40

// // console.log(age)

// // Const value can not be updated
// // const birthYear = 2000;
// // birthYear = 2010;
// // console.log(birthYear)

// // const age = 35;
// // const myName;

// // var myName = "Capt Jack Sparrow"
// // myName = "John wick"

// // Const are immutable
// // Let can be mutated
// // Var can also be mutated but they are function scoped


// // ================ Operators  ================================


// // Operators

// // calculate the age of a person born in 1960
// // let birthYear = 1960;
// // console.log(2022 - birthYear);
// // console.log(2022 - 1960)

// // Arithmetic operators
// // +, -, *, /, **
// // let number1 = 30;
// // let number2 = 20;
// // console.log(number1 + number2);
// // console.log(number1 - number2);
// // console.log(number1 *  number2);
// // console.log(number1 /  number2);

// // Assignment operators
// // let x = 20 + 5;
// // x = x + 10 longer way

// // x+=20

// // x = x - 10
// // x-=10
// // x*=10
// // x/=10
// // x++ //increament the current value by 1
// // x-- // decrement the current value by 1

// // console.log(x)

// // Comparision operators
// // let num1 = 30;
// // let num2 = 60;

// // console.log(num1 <  num2)


// // let fullAgeToEnterTheBar = 18;
// // let personAge = 19
// // console.log(personAge > 18)

// // Exponentiation Operation
// // console.log(12**3)
// // 2*2*2

// // Joining Strings using the + operator
// // const firstName = "John"
// // const lastName = "Wick"


// // console.log(firstName + " " +lastName)

// // Operators Precedence

// // const currentYear = 2025;
// // const ageJohn = currentYear - 1960;
// // const ageWick = currentYear - 1999;

// // const averageAge = (ageJohn + ageWick) / 2
                    
// // console.log(ageJohn, ageWick ,averageAge)
// // console.log(currentYear - 1991 > currentYear - 2001)

// // 2025 - 1991 > 2025 - 2001
// // 34 > 24
// // Left to right
// // console.log(30-20-2)

// //         10-2

// // Right to left operation
// // let x1 = 2**3
// // console.log(x1)


// // let n1, n2;

// // n1 = n2 = 30-10-2;

// //    n1 = n2 = 18
// // n1 = n2 = 18
// // n1 = 18


// // console.log(n1, n2);

// // console.log((2+2)/2)

// // ========================================================
// // Strings

// // const firstName = "Jack";
// // const job = "Pirate";
// // const birtYear = 1990;
// // const age = 2022 - birtYear;

// // const str = "Captain" +" " +firstName + " is a "+ job + " and was born in "+ birtYear;

// // const strTemplate = `Captain ${firstName} is a ${job} and was born in ${birtYear} and is ${2022-birtYear} year's old`

// // console.log(strTemplate)



// // "i'm a teacher"
// // 'i"m a teacher'

// // console.log(str)

// // ========================================================

// // If/Else Taking Decisions

// // const age = 15;

// // if(age >= 18){
// //     console.log('The person is a legal adult :)')
// // }else{
// //     console.log(`The person is not a legal adult or is a minor wait for ${18-age} years`)
// // }

// // Type Conversion and Coercion
// // const inputYear = "1991"
// // console.log(Number(inputYear), inputYear)
// // console.log(typeof inputYear)
// // const concatinated = Number(inputYear) + 18
// // console.log(concatinated)

// // console.log(Number('John Wick'))
// // console.log(typeof NaN)

// // console.log(String(99), 99)

// // when we add a string and a number the output is a string

// // Type Coercion
// /*
// console.log('Captain jack is a '+ '32' + ' Years old pirate')
// console.log('Captain jack is a '+ Number(32) + ' Years old pirate')

// console.log('30'-'10'-5)
// console.log('30' * '3')
// console.log('30' / '3')

// let n = '1' + 1; // '11'
// n = n - 1; // 11 - 1
// console.log(n)

// */

// // Truthy and falsy value

// // Five falsy values in javascript:
// // 0, '', undefined, null, NaN
// // String()
// // Number()
// /*
// console.log(Boolean(0))
// console.log(Boolean(undefined))
// console.log(Boolean(null))
// console.log(Boolean(NaN))
// console.log(Boolean(''))
// console.log(Boolean('John Wick'))
// console.log(Boolean(-0))
// console.log(Boolean({}))

// let salary = 200;

// if(salary){
//     console.log('Well enjoy my friend')
// }else{
//     console.log('Hmm i hope you get paid soon :)')
// }

// let height = 0;
// if(height){
//     console.log('height is defined')
// }else{
//     console.log('height is not defined')
// }

// console.log(Boolean(-10))
// console.log(Boolean(-0))
// console.log(Boolean(0))

// */

// // Equality Operator
// /*
// const age = 18;

// if(age === 18){
//     console.log('Yay you turned an adult')
// }else{
//     console.log('I got different value')
// }
// */
// // === does not do type coercion (Strict operator)
// // (in video i have mistakenly said type conversion 🫣)
// // == does type coercion (loose equals operator)

// // An example

// // const age = '18';
// // if(Number(age) === 18){
// //     console.log('U turned an adult (Strict Comparision)')
// // }
// // if(age == 18){
// //     console.log('U turned an adult (loose Comparision)')
// // }

// // const favourite = Number(prompt("What is your favourite number?"))
// // console.log(favourite)
// // console.log(typeof favourite)
// /*
// if(favourite === 45){
//     console.log("45 is a cool number :)")
// }else if(favourite === 35){
//     console.log("35 is a cool number :)")
// }else if(favourite === "45"){
//     console.log("45 is a number but in string")
// }
// else{
//     console.log("Oh noo i did not recieved any number :(")
// }


// if (favourite !== 45){
//     console.log('Why not 45, this is also a cool number :)')
// }
// if (favourite !== 45) console.log('Why not 45, this is also a cool number :)')

// */


// // JavaScript Logical Operators
// // Logical operators perform logical operations: AND, OR and NOT.

// // Condition to enter a bar:
// // To enter a bar you have to be an adult +18 and have a partner

// // let isAdult = true;
// // let isWithPartner = false;

// // console.log(!isAdult)
// //in case of "And" operator both the value should be true then only the block will be considered true and codeblock will execute

// // true          false
// // if(isAdult && !isWithPartner){
// //     console.log('Enter the bar and enjoy')
// // }else{
// //     console.log('else block executed not allowed please fullfull all the conditions')
// // }
// // OR if any one of the variable is true then entire expression evaluates to true

// // Checking for multiple test cases
// // let isAdult = true;
// // let isWithPartner = true;
// // let areInBlackDress = false;

// // true        true              false
// // if((isAdult &&  isWithPartner) || areInBlackDress){
// //     console.log('Enter the bar and enjoy')
// // }else{
// //     console.log('else block executed')
// // }

// // let favNum = 60
// // if(favNum === 50 && favNum <=60){
// //     console.log('fav num is 50 and it is less than 60')
// // }else if(favNum === 50 || favNum === 60){
// //     console.log('fav num is either 50 or 60')
// // }
// // if ('wednesday' && 'thursday'){

// // }

// // Javascript Switch statements

// // const day = 'sunday'
// // day === 'monday'
// // switch(day){
// //     case 'monday':
// //         console.log('Prepare recording slides')
// //         console.log('Shoot videos')
// //         break;
// //     case 'tuesday':
// //         console.log('Read more')
// //         break;
// //     case 'wednesday':
// //     case 'thursday':
// //         console.log('prepare more slides')
// //         break;
// //     case 'friday':
// //         console.log('Actually go on to record and fix bugs')
// //         break;
// //     case 'saturday':
// //     case 'sunday':
// //         console.log('Play and enjoy weekends')
// //         break;
// //     default:
// //         console.log('No day was passed')

// // }

// // switch code in if/else

// // if(day === "monday"){
// //     console.log('Prepare recording slides')
// //     console.log('Shoot videos')
// // }else if(day==="tuesday"){
// //     console.log('')
// // }else if(day==="wednesday" && day==="thursday"){
// //     console.log('prepare more slides')
// // }else if(day==="friday"){
// //     console.log('Actually go on to record and fix bugs')
// // }else if(day === "saturday" || day=== "sunday"){
// //     console.log('yay my holiday')
// // }else{
// //     console.log('no day was provided')
// // }

// // Statements and expressions
// // expressions produces value on it's own
// // 30+40
// // 2004
// // const output = true && false && !true
// // console.log(output)
// // Statements are the whole structure that is executed and that does not produce a value on itself.
// // if(10>5){
// //     console.log('10 is greater than 5')
// // }

// // Ternary Operator also known as conditional operator

// // if a student scored more than 40 he/she is pass or else fail

// // let marks = prompt('Enter your marks:');

// // if(marks > 40) {
// //     console.log('Pass')
// // }else{
// //     console.log('fail')
// // }

// //           expression     true    false
// // let result = marks > 40 ? 'pass' : 'fail'
// // console.log(`You ${result}`)

// let isAdult = true;
// let canDrink = false;

// if(isAdult) {
//     let candrink = true;
//     console.log(candrink)
// }


