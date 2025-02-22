function sayMyName(){
    console.log("K");
    console.log("R");
    console.log("I");
    console.log("S");
    console.log("H");
    console.log("N");
    console.log("A");
}

// sayMyName()
//:- sayMyName without parenthesis is called the reference 
// if we put () parenthesis after function name then it is called function execution like:- sayMyName()

//  function addTwoNumbers(number1, number2){ // Here the values are in parenthesis are called Parameters at the time of function declaration.
//     console.log(number1 + number2);
    
//  }


 function addTwoNumbers(number1, number2){ 
    // let result = number1 + number2
    // return result    

    return number1 + number2
 }

//  addTwoNumbers(3, 4) // Here the values are in parenthesis are called Arguments at the time of function calling.
//  addTwoNumbers(3, "4")
//  addTwoNumbers(3, "a")
//  addTwoNumbers(3, null)

const results = addTwoNumbers(3, 5)

// console.log("Result: ", results);

// function loginUserMessage(username){
//     // if (username === undefined) {
//     //     console.log("Please enter a username.");
//     //     return
//     // }
//     if (!username) { // The above If Block is similar to this If Block.
//         console.log("Please enter a username.");
//         return
//     }
//     return `${username} just logged in`
// }

function loginUserMessage(username = "Sam"){
    if (!username) { // The above If Block is similar to this If Block.
        console.log("Please enter a username.");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Krishna"))
// console.log(loginUserMessage())
// console.log(loginUserMessage("Krishna"))



// function calculateCartPrice(...num1){ // Here ...num1 is called rest operator.
// //  It is used for passing multiple value at the time of calling.
//     return num1
// }
// console.log(calculateCartPrice(200, 400, 500, 2000));

// function calculateCartPrice(val1, val2, ...num1){ // First 200 values goes to val1 and second 400 goes to val2. 
// // And Rest values goes to rest operator. We are not returning them so that's why they are not showing
//     return num1
// }
// console.log(calculateCartPrice(200, 400, 500, 2000));

function calculateCartPrice(val1, val2, ...num1){ // First 200 values goes to val1 and second 400 goes to val2. 
// And Rest values goes to rest operator. We are not returning them so that's why they are not showing
    return num1
}
// console.log(calculateCartPrice(200, 400, 500, 2000));

const user = {
    username: "Krishna",
    price: 199
}
const userTwo = {
    username: "Google",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}

// handleObject(user)
handleObject({ // We can pass object directly as well.
    username:"Sam",
    price: 99
})

const myNewArray = [200, 400, 100, 600]

function returnedSecondValue(getArray){
    return getArray[1]
}

// console.log(returnedSecondValue(myNewArray)) // We can also pass array to function at the time of calling.
console.log(returnedSecondValue([200, 400, 100, 600])) // It work's same like above code.