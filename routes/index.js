const express = require("express");
const router = express.Router();
const db = require("../db/pool");

router.get("/", (req, res) => {
  res.send("index");
});

router.get("/products/:user_id", (req, res) => {
  console.log("user id is: " + req.params.user_id);
  db.getProductsForUser(req.params.user_id).then((data) => {
    res.json(data);
  });
});

router.get("/products/:cat_id", (req, res) => {
  db.getProductsForCategory(req.body.user_id, req.params.cat_id).then(
    (data) => {
      res.json(data);
    }
  );
});

router.get("/login", (req, res) => {
  res.render("login_page");
});

router.get("/categories/:user_id", (req, res) => {
  db.getCategoriesForUser(req.params.user_id).then((data) => {
    res.json(data);
  });
});

router.post("/products", (req, res) => {
  db.addProduct(req.body).then((data) => {
    res.json(data);
  });
});

router.post("/categories", (req, res) => {
  db.addCategory(req.body.user_id, req.body.category_name).then((data) => {
    res.json(data);
  });
});

router.post("/friends", (req, res) => {
  db.addFriends(req.body.user_1_id, req.body.user_2_id).then((data) => {
    res.json(data);
  });
});

router.post("/users", (req, res) => {
  db.addUser(
    req.body.username,
    req.body.email,
    req.body.birthday,
    req.body.avatar
  ).then((data) => {
    res.json(data);
  });
});

module.exports = router;
