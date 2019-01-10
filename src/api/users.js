const express = require("express");
const path = require("path");
const router = express.Router();
const Users = require("../database/Users");
const bcrypt = require("bcryptjs");
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

router.get("/all", (req, res) => {
  db.getAll()
    .then(response => res.json({ all: response }))
    .catch(empty => res.status(400).json(empty));
});

router.post("/register", (req, res) => {
  // check if the email already exists
  db.findEmail(req.body.email).then(user => {
    if (user) {
      res.status(400).json({ email: "email already exists" });
    } else {
      // if no email is found, free..
      bcrypt.genSalt(10, (err, salt) => {
        // when salt is generated crypt the password
        bcrypt.hash(req.body.password, salt, (err, hash) => {
          if (err) throw err;
          hashedPassword = hash;
          //save
          db.insertUser(req.body.email, hashedPassword);
          //respond
          res.json({ msg: "success" });
        });
      });
    }
  });
});

module.exports = router;
