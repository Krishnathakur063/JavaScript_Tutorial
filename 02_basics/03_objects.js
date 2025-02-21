// Singleton :- When we are creating object from construction then it is call singleton.
// Object.create

// Object Literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Krishna",
    "full name": "Krishna Thakur",
    [mySym]: "mykey1",   // To use mySym as a Symbol we have to write it in Square Bracket.
    age: 17,
    location: "Delhi",
    email: "Krishna@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["full name"]);
// console.log(JsUser["email"]);
// console.log(JsUser[mySym]);
// console.log(typeof JsUser[mySym]);

JsUser.email = "Krishna@facebook.com"
// Object.freeze(JsUser) // It is used to freeze the object, so no one can change the value.
JsUser.email = "Krishna@twitter.com"

// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS User !")
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS User ! ${this.name}`)
}


console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
