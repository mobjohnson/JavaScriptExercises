// include the child_process module
var spawn = require('child_process').spawn;

// spawn a child process for ls
var ls = spawn('ls');

// handle standard output
ls.stdout.on('data', function(data) {
  console.log(data.toString());
});

// handle error
ls.stderr.on('data', function(data) {
  console.log('Error: ' + data);
});

// handle exit
ls.on('exit', function(code) {
  console.log('child process exited with code ' + code);
});