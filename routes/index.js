const express = require("express");
const router = express.Router();
const db = require("../db/pool");

router.get("/", (req, res) => {
  res.send("index");
});

router.get("/products/u/:id", (req, res, next) => {
  db.getProductsForUser(req.params.id).then((data) => {
    res.json(data.rows);
  });
});

router.get("/products/c/:id", (req, res, next) => {
  db.getProductsForCategory(1, req.params.id).then((data) => {
    res.json(data.rows);
  });
});

router.get("/products/:cat_id", (req, res) => {
  db.getProductsForCategory(req.body.user_id, req.params.cat_id).then(
    (data) => {
      res.json(data.rows);
    }
  );
});

router.get("/login", (req, res) => {
  res.render("login_page");
});

router.get("/categories/:user_id", (req, res) => {
  db.getCategoriesForUser(req.params.user_id).then((data) => {
    res.json(data.rows);
    console.log(data.rows);
  });
});

router.post("/products", (req, res) => {
  db.addProduct(req.body).then((data) => {
    res.json(data.rows[0]);
  });
});

router.post("/products/edit", (req, res) => {
  db.editProduct(req.body).then((data) => {
    console.log(data.rows[0]);
    res.json(data.rows[0]);
  });
});

router.post("/categories", (req, res) => {
  db.addCategory(req.body.user_id, req.body.category_name).then((data) => {
    res.json(data.rows[0]);
  });
});

router.post("/friends", (req, res) => {
  db.addFriends(req.body.user_1_id, req.body.user_2_id).then((data) => {
    res.json(data.rows[0]);
  });
});

router.post("/users", (req, res) => {
  db.addUser(
    req.body.username,
    req.body.email,
    req.body.birthday,
    req.body.avatar
  ).then((data) => {
    res.json(data.row[0]);
  });
});

module.exports = router;
