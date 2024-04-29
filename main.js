const http = require("http");
const port = 3000;

// TODO: Create an HTTP server
const server = http.createServer((req, res) => {

    
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello, World!\n");
});

// TODO: Listen on port 3000
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});


// DO NOT EDIT BELOW THIS LINE (Uncomment it once you are done with your code)