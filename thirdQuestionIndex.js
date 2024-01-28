const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const studRouter = require("./Std-api-router");

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use("/api", studRouter);

app.get("/", function (req, res) {
  res.send("My second Express API");
});

var server = app.listen(3000, function () {});
console.log("URL:http://localhost:3000");