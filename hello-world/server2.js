const http = require("http");

const server = http.createServer(function (req, res) {
  res.writeHead(200, { "Conten-Type": "text/html" });
  res.write("Helo <b>world</b>!");
  res.end();
});

server.listen(8000);
console.log("Server running on http");
