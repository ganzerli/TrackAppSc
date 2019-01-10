const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
// setup of app server
app.use(bodyParser.json());
// setup the engine of the index file
app.set("view engine", "ejs");
// make this path visible for the app, to be included in routes and all, if not in same folder, specify
app.use(express.static(path.resolve(__dirname, "..", "dist")));
// the app knows that the dist folder is available to serve or render.. or res.res.render does not work

app.get("/", (req, res) => {
  res.render(path.resolve("dist"));
  /*res.sendFile("index.html", {
    root: path.resolve("dist")
  });*/
});

app.post("/", (req, res) => {
  res.json({ response: "response" });
});

module.exports = app;
