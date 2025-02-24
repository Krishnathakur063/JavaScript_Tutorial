// --------------------------------------------------------------------------------------------------------------------------------------------------


const user = {
    username: "Krishna",
    price: 9999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        // console.log(this);
        
    }
}

// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()

// --------------------------------------------------------------------------------------------------------------------------------------------------


// console.log(this); // In node enviornement this refer to empty object. If we run the same code in browser console
// then it will return Window object.

// function one(){
//     let username = "Krishna"
//     // console.log(this);
//     console.log(this.username); // this context only works in object not in function. I'm not able to use this in function.
    
    
// }

// one()'

// --------------------------------------------------------------------------------------------------------------------------------------------------

// const two = function () {
//     let username = "Krishna"
//     console.log(this.username); // This case is also similar to above case. It will also return undefined.
    
// }

// two()

// --------------------------------------------------------------------------------------------------------------------------------------------------

// const three = () => {
//     let username = "Krishna"
//     console.log(this);
//     console.log(this.username); // This is also similar case to above one.
    
// }

// three()

// --------------------------------------------------------------------------------------------------------------------------------------------------
//        ---------------------- Arrow Function ----------------------
// --------------------------------------------------------------------------------------------------------------------------------------------------

// const addTwo = (num1, num2) => {
//     return num1 + num2  // This is called Explicit return. Means we have to type 'return' explicitly.
// }

// const addTwo = (num1, num2) =>  num1 + num2 // This is called Implicit return. In implicit return we will write statement in on line.

// const addTwo = (num1, num2) =>  (num1 + num2) // This is called Implicit return. In implicit return we will write statement in on line.

// const addTwo = (num1, num2) =>  ({username: "Krishna"}) // If we have to provide object. then have to write curley braces inside parenthesis.

// console.log(addTwo(1,2))


// const myArr = [2, 5, 7, 9]

// myArr.forEach(()=> {}) // This we will discuss later.