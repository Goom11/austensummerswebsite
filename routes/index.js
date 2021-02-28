var express = require("express");
var path = require("path");
var router = express.Router();
var colombiablocker = require("./colombiablocker");

/*
router.get("/.well-known/acme-challenge/Mi6cv3k8yXVZTmrWfJFVlTTupOiuWPKRroCeu1QJ1mk", function (req, res, next) {
  res.send("Mi6cv3k8yXVZTmrWfJFVlTTupOiuWPKRroCeu1QJ1mk.3Luu3iycHojEMnXuYlPpDZlywOShzGIvtre3S1yQHfo");
});

router.get("/.well-known/acme-challenge/ab7mULAPx9Uj5vmEavpCaDxD7C5AbwzHRpsfekYqZh4", function (req, res, next) {
  res.send("ab7mULAPx9Uj5vmEavpCaDxD7C5AbwzHRpsfekYqZh4.3Luu3iycHojEMnXuYlPpDZlywOShzGIvtre3S1yQHfo");
});
*/

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

/* GET immersion page. Colombia Blocker Middleware */
router.get("/immersion", colombiablocker, function (req, res, next) {
  res.sendFile(path.join(__dirname + "/immersion.html"));
});

/* GET clientresults page. */
router.get("/clientresults", function (req, res, next) {
  res.sendFile(path.join(__dirname + "/clientresults.html"));
});

router.get("/terms", function (req, res, next) {
  res.sendFile(path.join(__dirname + "/terms.html"));
});

router.get("/collab", function (req, res, next) {
  res.sendFile(path.join(__dirname + "/collab.html"));
});

router.get("/disclaimer", function (req, res, next) {
  res.sendFile(path.join(__dirname + "/disclaimer.html"));
});

// NOTE: careers points to jobs.html not careers.html
router.get("/careers", function (req, res, next) {
  res.sendFile(path.join(__dirname + "/jobs.html"));
});

router.get("/contact", function (req, res, next) {
  res.sendFile(path.join(__dirname + "/contact.html"));
});

router.get('*', function(req, res) {
  res.redirect('/');
});


module.exports = router;
