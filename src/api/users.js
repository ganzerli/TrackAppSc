const express = require("express");
const path = require("path");

const Users = require("../database/Users");
const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");

const passport = require("passport");

//init DATABASE
const db = new Users();

//util
const l = x => console.log(x);

/// init router
const router = express.Router();
router.use(express.static(path.resolve(__dirname, "..", "..", "dist")));
// needed to load css and the info in the dist folder
router.get("/index", (req, res) => {
  //res.render(path.resolve("dist"));
  //res.json({ wow: "yes" });
  res.sendFile("index.html", {
    root: path.resolve("dist")
  });
});

router.get("/all", (req, res) => {
  db.getAll()
    .then(response => res.json({ all: response }))
    .catch(empty => res.status(400).json(empty));
});

router.post("/register", (req, res) => {
  db.findEmail(req.body.email).then(user => {
    if (user) {
      res.status(400).json({ email: "email already exists" });
    } else {
      //crypt password
      bcrypt.genSalt(10, (err, salt) => {
        // when salt is generated crypt the password
        bcrypt.hash(req.body.password, salt, (err, hash) => {
          if (err) l(err);
          hashedPassword = hash;
          //save
          db.insertUser(req.body.email, hashedPassword).then(all =>
            res.json(all)
          );
        });
      });
    }
  });
});

router.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  //check email first, then get password
  db.findEmail(email).then(user => {
    if (user) {
      // got user obj from db
      bcrypt.compare(password, user.password).then(passwordMatch => {
        if (passwordMatch) {
          //return the object
          console.log("password matched , signing JWTtoken");
          //
          const payload = { id: user.id, email: user.email };
          //creaating token, that has data, to send as response
          jwt.sign(
            payload,
            keys.secretOrKey,
            { expiresIn: 3600 * 10 },
            (err, token) => {
              res.json({
                success: true,
                token: "Bearer " + token
              });
            }
          );
          //
          //res.json(user);
        } else {
          res.status(400).json({ err: "Password does not match" });
        }
      });
    } else {
      // find email return alwais a promise, with user or undefined
      res.status(400).json({ err: "User not found" });
    }
  });
});

module.exports = router;
