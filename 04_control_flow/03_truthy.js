// There are few value we have forcefully consider them they are either true or false.

// const userEmail = "krishna@google.com"
const userEmail = " "

if (userEmail) {
    console.log("Got User Email from databse: ",userEmail);
}
else{
    console.log("Don't have user email.");
}

// falsy values:- 
//  false, 0, -0, BigInt 0n, "" ->(empty string), null, undefined, NaN

// except above the falsy values all values are truthy value.

// truthy values:- 
// true, 1, "0", " " ->(space), []-> (empty array), 'false', {}-> (empty object), function(){} ->(empty function),


// -------- How to check empty Array --------------

const emptyArray = []

// if (emptyArray.length === 0){
//     console.log("Array is empty.");
// }

// -------- How to check empty Object --------------

const emptyObject = {}

if (Object.keys(emptyObject).length === 0) {
    console.log("Object is empty");
}
// --------------------------------------------------------------------------------------------------------
// Few statement need to remember:-
// --------------------------------------------------------------------------------------------------------
        // false == 0; 
        // false == ''; 
        //  0 == ''

        // All of above three statement are true.

        // console.log(false ==0);
        // console.log(false =='');
        // console.log(0 =='');

// --------------------------------------------------------------------------------------------------------
// Nullish Coalescing Operator (??):- null, undefined -->(Only focus on only these two keywords.)
// --------------------------------------------------------------------------------------------------------

let val1;
// val1 = 5 ?? 10

// console.log(val1);

// val1 = null ?? 10

// console.log(val1);

// val1 = undefined ?? 15

// console.log(val1);

// val1 = null ?? 10 ?? 15

// console.log(val1);

// val1 = null ?? undefined

// console.log(val1);

// val1 = undefined ?? null

// console.log(val1);


// --------------------------------------------------------------------------------------------------------
// Terniary Operator (?):- Terniary Operator and Nullish Coalescing Operator both are different.
// --------------------------------------------------------------------------------------------------------

// condition ? true : false

const iceTeaPrice = 999

iceTeaPrice <= 500 ? console.log("less than 500") : console.log("more than 500");

