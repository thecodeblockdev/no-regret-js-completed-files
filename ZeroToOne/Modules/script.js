// Database connection
import { db } from "./db.js";
import { userSignup as signup, sayHi } from "./userSignup.js";

import { randomName } from "./errorHandling.js";
import errorHandler from "./errorHandling.js";

console.log(randomName);

console.log(db);
// User signup
console.log(signup);

// develop dynamic pages based on the user information
sayHi();
errorHandler();
