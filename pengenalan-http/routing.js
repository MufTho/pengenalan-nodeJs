const http = require("http");

const server = http.createServer(function (req, res) {
  res.writeHead(200, { "Conten-Type": "text/html" });
  switch (req.url) {
    case "/about":
      res.write("ini adalah halaman about");
      break;
    case "/produk":
      res.write("ini adalah halaman produk");
      break;
    case "/profile":
      res.write("ini adalah halaman profile");
      break;

    default:
      res.write("404 Halaman tidak bisa di temukan");
  }
  res.end();
});

server.listen(8000);
console.log("server running at port 80000");
