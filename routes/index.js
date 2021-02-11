var express = require("express");
var path = require("path");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.sendFile(path.join(__dirname + "/index.html"));
});

/* GET academy page. */
router.get("/academy", function (req, res, next) {
  res.sendFile(path.join(__dirname + "/academy.html"));
});

/* GET bootcamp page. */
router.get("/bootcamp", function (req, res, next) {
  res.sendFile(path.join(__dirname + "/bootcamp.html"));
});

/* GET immersion page. */
router.get("/immersion", function (req, res, next) {
  res.sendFile(path.join(__dirname + "/immersion.html"));
});

/* GET clientresults page. */
router.get("/clientresults", function (req, res, next) {
  res.sendFile(path.join(__dirname + "/clientresults.html"));
});

module.exports = router;
