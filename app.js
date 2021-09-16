const morgan = require("morgan");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(express.json());
app.use(express.static(`${__dirname}/public`));
console.log(__dirname);

app.post("/api/users", (req, res) => {
  res.status(200).send("started");
});
app.get("/api/welcome", (req, res) => {
  res.status(200).json({
    message: "successful",
    status: "okay",
  });
});

module.exports = app;
