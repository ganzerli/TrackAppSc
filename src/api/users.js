const express = require("express");
const path = require("path");
const router = express.Router();
const Users = require("../database/Users");

const db = new Users();

//util
const l = x => console.log(x);
///

router.use(express.static(path.resolve(__dirname, "..", "..", "dist")));
// needed to load css and the info in the dist folder
router.get("/index", (req, res) => {
  //res.render(path.resolve("dist"));
  //res.json({ wow: "yes" });
  res.sendFile("index.html", {
    root: path.resolve("dist")
  });
});

router.get("/login", (req, res) => {
  res.json({ response: "response" });
});

router.post("/register", (req, res) => {
  // check if the email already exists
  db.findEmail(req.body.email).then(user => {
    if (user) {
      res.status(400).json({ email: "email already exists" });
    } else {
      db.insertUser(req.body.email, req.body.password);
      res.json({ msg: "success" });
    }
  });
});

module.exports = router;
