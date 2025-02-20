// Arrays

// const myArr = [0, 1, 2, 3, 4, 5, true, "Krishna"] // Value inside the square bracket are called Elements.
const myArr = [0, 1, 2, 3, 4, 5]
const myHeroes = ["IronMan","Superman","Batman"]
// console.log(myArr[0]); // We can access array element with Indexing. We can not access them with value name like myArr["one"].

const myArr2 = new Array(1,2,3,4)
// console.log(myArr[1]);

// *********************** Arrays Methods ***********************

// myArr.push(6)
// myArr.push(7)
// console.log(myArr);
// myArr.pop() // No need to give any argument. It will removed the last value of Array.
// console.log(myArr);

// myArr.unshift(9)
// console.log(myArr);
// myArr.shift() // No need to give any argument. It will removed the first value of Array.
// // console.log(myArr);

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(9)); // It shows -1 because 9 is not exist in array.
// console.log(myArr.indexOf(3));

// const newArr = myArr.join() // .join() convert values into strings.

// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);


// slice , splice

console.log("A", myArr);

const myn1 = myArr.slice(1, 3)
console.log(myn1);
console.log("B", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C", myArr);
console.log(myn2);


