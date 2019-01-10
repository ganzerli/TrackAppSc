const express = require("express");
const path = require("path");
const router = express.Router();

router.use(express.static(path.resolve(__dirname, "..", "..", "dist")));
// needed to load css and the info in the dist folder
router.get("/login", (req, res) => {
  //res.render(path.resolve("dist"));
  //res.json({ wow: "yes" });
  res.sendFile("index.html", {
    root: path.resolve("dist")
  });
});

router.post("/", (req, res) => {
  res.json({ response: "response" });
});

module.exports = router;
