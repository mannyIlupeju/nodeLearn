"use strict";

var fs = require('fs'); //writeFile takes 3 arguments, the file name, the content within the file and a callback function.
//this is an asynchronous function so we must put error handling
//to write a file
// fs.writeFile('message.txt', 'hello there node', function (err){
//   if(err) throw err;
//   console.log('file has been written')
// })
// console.log('hello')


fs.readFile('./message.txt', 'utf8', function (err, data) {
  if (err) throw err;
  console.log(data);
});
//# sourceMappingURL=fs.dev.js.map
