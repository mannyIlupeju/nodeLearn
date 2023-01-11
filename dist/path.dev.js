"use strict";

//path is an inbuilt module used to confirm, modify, manipulate file paths in Node
//if we wanna work with files, paths or extensions, etc we can use the path module.
var path = require('path');

var fileLocation = path.join(__dirname, 'app.js'); //appends the app.js to the directory

console.log(fileLocation);
var fileName = path.basename(fileLocation); //returns the last data in the directory

console.log(fileName);
var fileExt = path.extname(fileName); //returns the extension name of the path - .js

console.log(fileExt);
//# sourceMappingURL=path.dev.js.map
