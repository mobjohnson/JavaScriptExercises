// load http module
var http = require('http');

// create http server on port 8000
http.createServer( function(request, response){
  // header
  response.writeHeader(200, {
    'Content-type': 'text/plain'
  });

  // send the repsonse with the content
  response.end('Hello World!');

}).listen(8000);

// log it to the console
console.log('Server running on port 8000');

// 