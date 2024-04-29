
////
const http = require("http");
const fs = require("fs");
const port = 3000;

const filePath = process.argv[2];

const server = http.createServer((req, res) => {
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading file:", err);
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end("Error reading file");
      return;
    }
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello, World!\n");
  });
});

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});


// DO NOT EDIT BELOW THIS LINE (Uncomment it once you are done with your code)