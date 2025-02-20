// Dates

let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toTimeString());
// console.log(myDate.toUTCString());

// console.log(typeof myDate);

// let myCreatedDate = new Date(2025, 0 ,21)  // Months in JavaScript start from 0. 
// let myCreatedDate = new Date(2025, 0 ,21, 5, 3)  
// let myCreatedDate = new Date("2024-01-14")  // In this format Months start from 1.
let myCreatedDate = new Date("01-14-2025")  

// console.log(myCreatedDate.toLocaleString());


let myTimeStamp = Date.now()

// console.log(myTimeStamp); // This shows timestamp in MilliSeconds.
// console.log(myCreatedDate.getTime()); //.getTime() function will convert date into MilliSeconds.
// console.log(Math.floor(Date.now()/1000)); // Converting into Seconds, Divide with 1000.

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()); // Month Start from 0 in JavaScript
console.log(newDate.getDay());
console.log(newDate.getDate());

// `${newDate.getDay()} and the time`

newDate.toLocaleString('default',{
    weekday: "long",
    
})
