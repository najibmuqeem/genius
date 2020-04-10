var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  res.render("index");
});

router.get("/products", function (req, res, next) {
  res.render("products");
});

router.get("/login", function (req, res, next) {
  res.render("login_page");
});

module.exports = router;
