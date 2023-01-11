"use strict";

//this is used if we wanna work with the URL
var url = require('url');

var address = "https://www.youtube.com/watch?v=zQRrXTSkvfw"; //we can parse through and pull out any information we want from it using url.parse(urlLink, boolean) so we can work with it

var parsedUrl = url.parse(address, true); //then we can use different methods to get what we want

console.log(parsedUrl.host); //returns host name

console.log(parsedUrl.pathname); //returns /watch
//# sourceMappingURL=url.dev.js.map
