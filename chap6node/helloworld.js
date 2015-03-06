// load http module
var http = require('http');

// create http server
var server = http.createServer( function(request, response){
  // header
  response.writeHeader(200, {
    'Content-type': 'text/plain'
  });

  // write content
  response.write('Hello World!');

  // send the repsonse
  response.end();

});

// listen on port 8000
server.listen(8000)

// log it to the console
console.log('Server running on port 8000')

// 