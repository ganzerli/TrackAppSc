const express = require("express");

const app = express();

app.get("/", (req, res) => {
  console.log("route hit");
});

app.post("/", (req, res) => {
  console.log("route hit for posts");
});

module.exports = app;
