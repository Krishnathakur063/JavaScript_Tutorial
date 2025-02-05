// 1:- Primitive (Call By Value):- For these data types their reference is not given their value is copied
// seperately. And if you want to changes anything then you are changing in copied datatypes.

// 7 Types of Primitive Datatypes :- String, Numbers, Boolean, null, undefined, Symbol and BigInt.

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

const bigNumber = 34546343453463674435n //BigInt-> mostly we use 'n' in the end of number for BigInt.



// 2:- Reference Types (Non Primitive or Call By Reference):- For these data types their reference is given.

// Arrays, Objects, Functions

const heroes = ["BatMan","IronMan","SpiderMan"];
let myObj = {
    name:"Krishna",
    age:24,

} // This is an example of Object. Anything inside curley braces is Object. Datatype of object could be anything like Number, String or another object as well.

// const myFunction = function(){
//     console.log("Hello JavaScript");
    
// }

// console.log(typeof bigNumber);
// console.log(typeof id);
// console.log(typeof outsideTemp);
// console.log(typeof scoreValue);
// console.log(typeof heroes);
// console.log(typeof myObj);
// console.log(typeof myFunction);

// https://262.ecma-international.org/5.1/#sec-11.4.3



// ++++++++++++++++++++ Memory Allocation ++++++++++++++++++++++++++++++++++++++++++

// Sack (Primitive DataTypes) -> It provides a copy of declared variable.
// Heap (Non-Primitive DataTypes) -> It provides a reference of declared variable (original values).

let superHero = "Superman"

let anotherSuperHero = superHero

anotherSuperHero = 'BatMan'

console.log(superHero);
console.log(anotherSuperHero);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

userTwo = userOne

userTwo.email = "userTwo@google.com"

console.log(userOne);
console.log(userTwo);
