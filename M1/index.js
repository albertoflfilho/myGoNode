const http = require('http');

http.createServer((req, res) => {
  res.write("Node.js");
  res.end();
}).listen(3000);