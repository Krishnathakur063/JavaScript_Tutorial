// If Else Statement - Basic Syntax

// if (condition) {
    
// } else {
    
// }

const isUserLoggedIn = true

// if (isUserLoggedIn) {
//     console.log("User is logged in ...");
    
// }

// < , >, <=, >=, == (used for checking), = (used for assigning the value), != (not equal to), === (used for checking the value and type as well for e.g:- 2 == "2" )

// if (2 === "2") { // It is not executed because "2" -> is a string type value.
//     console.log("Value is equal.");
    
// }
// else{
//     console.log("Value is not equal");
    
// }

// console.log(2 !== 3);


// const temperature = 28

// if (temperature < 50) {
//     console.log("less than 50");    
// }
// else{
//     console.log("temperature is greated than 50");
// }

// const score = 200

// if (score > 100) {
//     const power = "fly"
//     console.log(`User power: ${power}`);
// }

// console.log(`User power: ${power}`); // This code throw error because of scope, because power is declare inside the if block.

// const balance = 1000

// if (balance > 500) console.log("test"), // This is Implicit Scope.
// console.log("test2"); // But this is not good practice to write second line of code after , (comma)

// if (balance < 500) {
//     console.log("Balance is less than 500");
    
// } else if(balance <750){
//     console.log("Balance is less than 750");
// }
// else if (balance < 900){
//     console.log("Balance is less than 900");
// }
// else{
//     console.log("Balance is less than 1200");
// }


const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2 == 3) {
    console.log("Allow to buy courses.");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User is logged in from email.");
}