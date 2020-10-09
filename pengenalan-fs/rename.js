const fs = require("fs");

fs.rename("myText.txt", "myRenameFile.txt", function (err) {
  if (err) throw err;
  console.log("fileRename");
});
