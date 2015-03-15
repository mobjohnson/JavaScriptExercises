var fs = require('fs');

// get directory listing
fs.readdir('./my-dir', function(err, files) {
  var count = files.length,
      results = {};

  // loop through and read all the files
  files.forEach(function(filename) {
    fs.readFile('./my-dir/' + filename, 'utf8', function(err, data) {
      results[filename] = data;
      
      count--;
      if ( count <= 0 ) {
        console.log(results);
      }
    });
  });
});
