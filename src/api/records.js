const express = require("express");
const path = require("path");

const bcrypt = require("bcryptjs");

const passport = require("passport");

//
const Records = require("../database/Records");
const recDb = new Records();
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
    const id = req.user.id;
    // find msg by id
    recDb
      .searchAllUserId(id)
      .then(record => res.json(record))
      .catch(err => res.status(400).json(err));
  }
);

router.post(
  "/mcsrg",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    // passport sets te data sent from the strategy jwt in req.user, whatever name has other else
    const title = req.body.title;
    const body = req.body.body;
    const userId = req.user.id;
    const date = req.body.date;
    const sessionId = req.body.sessionId;
    //  console.log(req);
    recDb
      .insertRecord(userId, title, body, date, sessionId)
      .then(result => res.json(result))
      .catch(err => console.log(err));
  }
);

router.delete(
  "/mcsrg/:id",
  passport.authenticate("jwt",{session:false}),
  (req, res)=>{
    //get id from params
    const recordId = req.params.id;
    // get user id from jwt payload
    const userId = req.user.id;
    // getdata.user from token take id and delete
    recDb.deleteRecord(userId,recordId)
    .then(found=>{res.json(found)})
    .catch(err=>res.status(400).json({err:"record not found"}));
  }
);


module.exports = router;
