const http = require('http');
const fs = require('fs');


if (process.argv.length < 3) {
  console.error('Please provide a file path as an argument.');
  process.exit(1);
}


const filePath = process.argv[2];


fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the file:', err.message);
    process.exit(1);
  }
 
  
  console.log('File contents:', data);
});


// TODO: Create an HTTP server

// TODO: Listen on port 3000


//create a server object:
http.createServer(function (req, res) {
  
  res.statusCode = 200;
 
  res.end("Hello, World!\n");
}).listen(3000); 
// DO NOT EDIT BELOW THIS LINE (Uncomment it once you are done with your code)

