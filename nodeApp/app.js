var express = require("express");
var app = express();

// Home route
app.get("/", function (req, res) {
  res.send('{ "response": "Hello, Welcome to Adomic Arts samin" }');
});

// Test route
app.get("/will", function (req, res) {
  res.send('{ "response": "Hello World" }');
});

// Ready route
app.get("/ready", function (req, res) {
  res.send('{ "response": "Great!, It works!" }');
});

module.exports = app;