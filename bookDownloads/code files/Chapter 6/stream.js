var http = require('http'),
    fs = require('fs');

var server = http.createServer(function(request, response) {
  // create the stream
  var stream = fs.createReadStream('my-file.txt');
  
  // handle any errors
  stream.on('error', function(err) {
    response.statusCode = 500;
    response.end(String(err));
  });
  
  // pipe the response to the client
  stream.pipe(response);
});

server.listen(8000);