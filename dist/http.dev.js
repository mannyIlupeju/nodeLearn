"use strict";

var http = require('http');

var fs = require('fs');

var path = require('path'); //function takes a callback and we have access to the request and response
//so we can listen to requests made to our server


var server = http.createServer(function (req, res) {
  if (req.url === '/') {
    fs.readFile(path.join(__dirname, 'index.html'), function (err, data) {
      if (err) throw err;
      res.writeHead(200, {
        'Content-Type': 'text/html'
      });
      res.write(data);
      res.end();
    });
  }

  if (req.url === '/users') {
    res.write('Welcome user 69');
    res.end();
  }
}); //after creating the server we can listen to requests made to that server.

server.listen(8080, function () {
  console.log('server is up and running');
});
//# sourceMappingURL=http.dev.js.map
