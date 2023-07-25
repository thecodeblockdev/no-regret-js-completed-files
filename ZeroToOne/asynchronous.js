"use strict";
// console.log("Line 1");
// console.log("Line 2");
// console.log("Line 3");
// alert("I am a simple alert");
// console.log("Line 4");
// console.log("Line 5");

// The problem is
// 1mb, 2mb, 3mb, 4mb, 5mb

/*
console.log("5mb photo size is uploading"); // 20 seconds to upload
console.log("4mb photo size is uploading");
console.log("1mb photo size is uploading"); // 4 seconds to upload
console.log("2mb photo size is uploading");
console.log("3mb photo size is uploading");

*/
// setTimeout(() => {
//     console.log("5mb photo uploaded");
// }, 10000);

// setTimeout(() => {
//     console.log("4mb photo uploaded");
// }, 8000);
// setTimeout(() => {
//     console.log("3mb photo uploaded");
// }, 6000);
// setTimeout(() => {
//     console.log("2mb photo uploaded");
// }, 4000);

// ✅ A Simple Quiz Question for you 😎

// console.log("Start");

// setTimeout(() => {
//     console.log("i am printed after 4 seconds");
// }, 4000);

// setTimeout(() => {
//     console.log("i am not waiting at all");
// }, 0);

// console.log("End");

// ========= Wrong
// Start
// i am ....
// End
// i am printed after 4 seconds

// ========== Right

// Start
// End
// i am not waiting at all should be executed quickly
// i am printed after 4 seconds

// Location example
// const printAllLocations = (locations) => {
//     locations.forEach((loc) => {
//         console.log(loc);
//     });
// };

// const locations = ["Patna", "Varanasi"];
// printAllLocations(locations);

// const x = 20;
// const y = 30;
// const sum = x + y;
// console.log(sum);

// printAllLocations(weatherLocations);
// Same above weather location example with simple function declaration
// const weatherLocations = ["Patna", "Varanasi"];
// function printLocations(locations) {
//     locations.forEach((loc) => {
//         console.log(loc);
//     });
// }

// function sleep(milliseconds) {
//     let start = new Date().getTime();
//     for (var i = 0; i < 1e7; i++) {
//         if (new Date().getTime() - start > milliseconds) {
//             break;
//         }
//     }
// }

// Design a user registration system
// 1.) Register
// 2.) Send OTP
// 3.) login
// 4.) Get user data
// 5.) Display user - render view

// network requests can delay
// function wait(ms) {
//     let start = new Date().getTime();
//     let end = start;
//     while (end < start + ms) {
//         end = new Date().getTime();
//     }
// }
// CallBack
/*
function registerUser(cb) {
    setTimeout(() => {
        console.log("Registration form filled");
        cb();
    }, 6000);
}

function sendOtp(cb) {
    setTimeout(() => {
        console.log("One time password sent");
        cb();
    }, 4000);
}
function login(cb) {
    setTimeout(() => {
        console.log("User Logged in successfully");
        cb();
    }, 3000);
}
function getUserData(cb) {
    setTimeout(() => {
        console.log("Getting user data");
        cb();
    }, 1000);
}
function displayUser() {
    setTimeout(() => {
        console.log("Displaying user data");
    }, 2000);
}
*/
// Callback Hell

// registerUser(function () {
//     sendOtp(function () {
//         login(function () {
//             getUserData(function () {
//                 displayUser();
//             });
//         });
//     });
// });

// console.log("===👇🏻Other Application Process===");
// console.log("✅ Loading suggested profile to follow");
// console.log(
//     "✅ Building view of a post by your artist whome you have subscribed"
// );

// Promise

function registerUser() {
    // pending: initial state, neither fulfilled nor rejected.
    // fulfilled: meaning that the operation was completed successfully.
    // rejected: meaning that the operation failed.
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Registration form filled");
            resolve("Success");
        }, 1000);
    });
}

function sendOtp() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // return reject(
            //     "Error in sending OTP sorry checking our backend thanks for your patience"
            // );
            console.log("One time password sent");
            resolve();
        }, 1000);
    });
}
function login(b) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("User Logged in successfully");
            resolve();
        }, 1000);
    });
}
function getUserData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Getting user data");
            resolve();
        }, 1000);
    });
}
function displayUser() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Displaying user data");
            resolve();
        }, 1000);
    });
}

// registerUser()
//     .then(sendOtp)
//     .then(login)
//     .then(getUserData)
//     .then(displayUser)
//     .catch((error) => {
//         console.log("Error", error);
//     });

// async await
async function authenticateUser() {
    try {
        const meesage = await registerUser();
        await sendOtp();
        await login();
        await getUserData();
        await displayUser();
        console.log(meesage);
    } catch (err) {
        console.log("Error", err);
        throw new Error();
    }
}
authenticateUser()
    .then(() => {
        console.log("😎All task executed");
    })
    .catch((err) => {
        console.log("Error:", err);
    });

console.log("===👇🏻Other Application Process===");
console.log("✅ Loading suggested profile to follow");
console.log(
    "✅ Building view of a post by your artist whome you have subscribed"
);
