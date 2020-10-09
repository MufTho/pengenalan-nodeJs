const express = require("express");
const app = express();

app.get("/about", function (req, res, next) {
  console.log(req.query);
  res.send({ success: true, keyword: req.query.keyword });
});
app.get("/txt-response", function (req, res, next) {
  res.send("Hellow World");
});
app.get("product/:productId", function (req, res, next) {
  res.send({ success: true, productId: req.params.productId });
});

app.get("/error", (req, res, next) => {
  next(new Error("contoh error"));
});

app.get(
  "/multi-hendler",
  function (req, res, next) {
    //validasi request
    if (req.query.keyword === "satu") {
      return next();
    }

    return res.send("keyword harus satu");
  },
  function (req, res, next) {
    res.send("Suksess");
  }
);

app.get("/index", (req, res, next) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/pdf", (req, res, next) => {
  res.downlaod(__dirname + "/tugas.pdf", "tugas.pdf");
});

app.use((err, req, res, next) => {
  console.error(err);
  res.send("terjadi Error");
});

app.get("/category/:productCategory/product/productId", (req, res, next) => {
  res.send(req.params);
});

app.listen(8000, function () {
  console.log("app listen on port 8000");
});
