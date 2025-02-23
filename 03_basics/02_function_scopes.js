// --------------------------------------------------------------------------------------------------------------------------------------------------
//                    ------------------------------ Var Scope Criterial ------------------------------
// --------------------------------------------------------------------------------------------------------------------------------------------------


// // var c = 300 

// if (true) {
//     let a = 10
//     const b = 20
//     // var c = 30    // var does not follow scope criteria
//     c = 30 // if we does not mention before the c then this again have same issue not to follow scope criteria.
// }

// // console.log(a); // This show error because let follow scope critera.
// // console.log(b); // This show error because const follow scope critera.
// console.log(c); // value of c is print, beacuse var does not follow scope criteria.

// --------------------------------------------------------------------------------------------------------------------------------------------------

let a = 300

if (true) {
    let a = 10
    const b = 20
    // console.log("Inner Scope: ", a);
    // console.log("Inner Scope: ", b);
    
}

// console.log("Global Scope: ", a);
// console.log("Global Scope: ", b);  

// --------------------------------------------------------------------------------------------------------------------------------------------------
//                 ---------------------------------- Nested Scope ----------------------------------
// --------------------------------------------------------------------------------------------------------------------------------------------------

function one(){
    const username = "Krishna"

    function two(){
        const website = "google.com"
        console.log("Inner function trying to access outer function variable... :",username);    
    }
    // console.log("Outer function trying to access inner function variable... :",website);
    
    two()
}

// one()


if (true) {
    const username = "bing.com"
    if (username === "bing.com") {
        const website = " facebook.com"
        // console.log(username + website);
        
    }
    // console.log(website);
    
}

// console.log(username);


// --------------------------------------------------------------------------------------------------------------------------------------------------
//                 ---------------------------------- Interesting  ----------------------------------
// --------------------------------------------------------------------------------------------------------------------------------------------------

console.log(addOne(20))


function addOne(num){
    return num + 1
}

console.log(addTwo(20)); // This is called Hoisting. In which we are assigned a function to a variable.
//  And try to use them just before the declaration.


const addTwo = function(num){ // This addTwo sometime is called expression.
    return num + 2
}

