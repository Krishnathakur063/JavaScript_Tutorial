const name = "Krishna"
const repoCount = 25

// console.log(name + repoCount + " Value"); // Do not use this syntax, it is outdated. In modern days no one use it.
 
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); // This is a modern way for concatenating string. 
// This method is also called as String Interpolation.

const gameName = new String('Krishna-Thakur-com') // This is another way of string declaration.

// console.log(gameName[0]);
// console.log(gameName.__proto__);



// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(8));
// console.log(gameName.indexOf('k'));

const newString = gameName.substring(0, 4)
// console.log(newString);

const anotherString = gameName.slice(-14, 4)
// console.log(anotherString);

const newStringOne = "    krishna    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://krishna.com/krishna%20thakur"

console.log(url.replace('%20','-'))

console.log(url.includes('krishna'));
console.log(url.includes('google'));
 

console.log(gameName.split('-'));
