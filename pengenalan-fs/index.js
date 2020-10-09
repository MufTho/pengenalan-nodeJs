const http = require("http");
const fs = require("fs");

http
  .createServer((req, res) => {
    fs.readFile("index.html", function (err, data) {
      res.writeHead(200, { "Content-Type": "text/html" });
      if (err) {
        console.error(err);
        res.write("Terjadi kesalahan pada server");
        res.end();
        return;
      }
      res.write(data);
      res.end();
    });
  })
  .listen(8000);

console.log("server listen on port 8000");
