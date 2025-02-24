// Immediately Invoked Function Expression (IIFE)

//  Sometime we want that we write a function and we need to invoke it immediately. For e.g:- Suppose we write a file
// in which we write a database connection. And we want whenever our application start then our database connection is also start.

// And also this is not only the case, Sometime we declare few variable inside global scope and sometime we write something inside 
// the function and we don't want that global variable create some problem inside these function. Some global variable can pollute the variable inside the function
// if we delcare values outside the function. So we want to protect them from global varaible pollution, and second thing we can run at the time of application.
// These two are our main reason. So that's why we create our own scope.

(function dbConnection(){
    // This is called Named IIFE because this function has some name.
    console.log(`DB CONNECTED`);
    
})(); // We have to terminate it with semicolon otherwise other function will not run and throw some error. Because IIFE invoke immediately but it forget where to end.

// ()() :- Here In First parenthesis we declare the function and second parenthesis is used for execution. No we don't need to call the function seperately.

// dbConnection()

( ()=> { 
    // This is called simple IIFE because it has no name.
    console.log(`DB CONNECTED TWO`);
} )();

// Passing arguments inside the IIFE function

( (name)=> { 
    console.log(`DB CONNECTED THREE ${name}`);
} )('Krishna')


