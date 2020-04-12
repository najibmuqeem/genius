const express = require("express");
const router = express.Router();
const db = require("../db/pool");

router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/products", (req, res, next) => {
  res.render("products");
});

router.get("/login", (req, res, next) => {
  res.render("login_page");
});

router.post("/products", (req, res, next) => {
  res.send("ok");
  db.addProduct(req.body);
});

router.post("/categories", (req, res, next) => {
  db.addCategory(req.body.user_id, req.body.category_name);
});

router.post("/friends", (req, res, next) => {
  db.addFriends(req.body.user_1_id, req.body.user_2_id);
});

router.post("/users", (req, res, next) => {
  db.addUser(
    req.body.username,
    req.body.email,
    req.body.birthday,
    req.body.avatar
  );
});

module.exports = router;
