const express = require("express");
const path = require("path");

const bcrypt = require("bcryptjs");

const passport = require("passport");

//
const Records = require("../database/Records");
const recDB = new Records();
/// init router
const router = express.Router();
router.use(express.static(path.resolve(__dirname, "..", "..", "dist")));

// to make private routes is needed a lybrary like passport, the server needs some middleware to get private requests using passport
// in app js is implemented the middleware for passport
router.get(
  "/mcsrg",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    // passport sets te data sent from the strategy jwt in req.user, whatever name has other else
    const email = req.user.email;
    const id = req.user.id;
    // check the
    res.json({ id, email });
  }
);

router.post(
  "/mcsrg",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    // passport sets te data sent from the strategy jwt in req.user, whatever name has other else
    const title = req.body.title;
    const body = req.body.body;
    console.log(req);
    // check the
    res.json({ title, body });
  }
);

module.exports = router;
