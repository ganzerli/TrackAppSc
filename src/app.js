// server
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const passport = require("passport");

//importing other ROUTES
const users = require("./api/users");
const records = require("./api/records");

//const profiles = require("./src/api/profiles");
const app = express();

// BODY PARSER NEEDS MIDDLEWARE
app.use(bodyParser.urlencoded({ extended: false }));
// setup of app server
app.use(bodyParser.json());

// setup the engine of the index file
app.set("view engine", "html");

// make this path visible for the app, to be included in routes and all, if not in same folder, specify
// the app knows that the dist folder is available to serve or render.. or res.res.render does not work
app.use(express.static(path.resolve(__dirname, "..", "dist")));

// PASSPORT MIDDLEWARE
app.use(passport.initialize());
//the file passport exports a function, is the JWT strategy, taking passport as argument
require("../config/passport")(passport);

//  USE ROUTES
app.get("/", (req, res) => {
  res.render(path.resolve("dist"));
  /*res.sendFile("index.html", {
    root: path.resolve("dist")
  });*/
});
app.post("/", (req, res) => {
  res.json({ response: "response" });
});

app.use("/api/users", users);
app.use("/api/records", records);

module.exports = app;
