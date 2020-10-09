const http = require("http");

const server = http.createServer(function (req, res) {
  res.end("Hi, Selamat datang di Node js");
});

server.listen(8000);
console.log("Server running on http");
