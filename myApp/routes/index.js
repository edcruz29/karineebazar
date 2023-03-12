var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index");
});
router.get("/produtos", function (req, res, next) {
  res.render("produtos");
});
router.get("/promocoes", function (req, res, next) {
  res.render("promocoes");
});
router.get("/sobre", function (req, res, next) {
  res.render("sobre");
});

module.exports = router;
