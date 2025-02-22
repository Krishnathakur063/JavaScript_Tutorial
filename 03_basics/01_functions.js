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

console.log("Result: ", results);
