var fs = require("fs");

fs.appendFile("mynewfile1.txt", "hello world", function (err) {
  if (err) throw err;
  console.log("saved!");
});
