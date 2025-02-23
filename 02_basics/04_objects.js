// const tinderUser = new Object() // This is a Singleton Object.
const tinderUser = {} // This is a non Singleton Object.

tinderUser.id = "123abc"
tinderUser.name = "Sam"
tinderUser.isLoggedIn = false

// console.log(tinderUser);


const regularUser = {
    email: "some@google.com",
    fullname: {
        userfullname: {
            firstname: "Krishna",
            lastname: "Thakur"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj4 = {5: "e", 6: "f"}

// obj3 = {obj1, obj2} // This will create problem like array. similar to array inside array.

// const obj3 = Object.assign({}, obj1, obj2, obj4) //This is the correct way to store object value into another object.
// We can also remove the curley braces from assign() method. But It is a good practice to keep empty array to store all the values.


const obj3 = {...obj1, ...obj2, ...obj4} // Most of the time we will use this method. This is call object spread(...object).

// console.log(obj3);


const users =  [
    {
        id: 1,
        email: "One@gmail.com"
    },
    {
        id: 2,
        email: "Two@gmail.com"
    },
    {
        id: 3,
        email: "Three@gmail.com"
    },
]

users[1].email

// console.log(tinderUser);

// console.log(Object.keys(tinderUser)); // It returns arrays of keys.
// console.log(Object.values(tinderUser)); // It returns arrays of values.
// console.log(Object.entries(tinderUser)); // It returns arrays of arrays of key and values. This method we use very less.

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


// ************ Object Destructuring *******************
// Notes:- Arrays are also destructured but very rarely used.

const course = {
    coursename: "Javascript course",
    price: "9999",
    courseInstructor: "Krishna"
}

// course.courseInstructor

// const {courseInstructor} = course // Most of the people are using it to access the object vaules. We can also give this to our own name

// const {courseInstructor: Instructor} = course // We can assigne our choice name to object keys like this.

// console.log(courseInstructor);
// console.log(Instructor);

// The below code from line 84 to 88 used in React to show that above method also used in React in the same way.

// const navbar = () => {

// }

// navbar(company = "google")

// ********************************************************************************************************************************************************
//                ******************************** API ********************************
// ********************************************************************************************************************************************************

// It is similar to object in javascript. but it has no name.

// JSON:- JavaScript Object Notation

// {
//     "name": "Krishna",
//     "coursename": "Javascrip course",
//     "price": "free"
// }

// Sometime we also recevie API in Arrays format.

[
    {},
    {},
    {}
]