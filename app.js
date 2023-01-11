// Your Javascript Code Goes Here

// Note: The 'starter' folders that appear in this course's downloadable source code is here to give you a starting point to try out coding yourself. The 'finished' folder contains the code as it is when we finish the lecture. You can use the 'finished' folder to compare to your own code, or just examine the finished code.

//in Node JS we have access to exports, require, module, __filename, __dirname
// var a = 1;
// var b = 2;
// var c = a+b;
// console.log(c)

//to import the sayName function from the other JS file we use require('')
const getUserInfo = require('./sayName');

console.log(getUserInfo) //we receive an object of both functions exported in sayName file
getUserInfo.sayAddress(); //we can use the dot notation to access each function. returns sayAddress info 
getUserInfo.sayName();//we can use the dot notation to access each function. returns sayName info 

console.log(__dirname)//returns file path or file directory /Users/mannyilupeju/Desktop/NodeJSTUT
console.log(__filename)//returns the file path and the filename at the end of the path. /Users/mannyilupeju/Desktop/NodeJSTUT/app.js