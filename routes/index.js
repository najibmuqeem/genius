const express = require("express");
const router = express.Router();
const db = require("../db/pool");
const api = require("../api.js");
var multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: "./public/uploads/",
  filename: function (req, file, cb) {
    cb(null, "IMAGE-" + Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({
  storage: storage,
  limits: { fileSize: 1000000 },
}).single("myImage");

router.get("/", (req, res) => {
  res.send("index");
});

router.get("/products/u/:id", (req, res) => {
  db.getProductsForUser(req.params.id).then((data) => {
    res.json(data.rows);
  });
});

router.get("/products/c/:id", (req, res) => {
  db.getProductsForCategory(1, req.params.id).then((data) => {
    res.json(data.rows);
  });
});

router.get("/products/friends", (req, res) => {
  db.getProductsForUser(2).then((data) => {
    res.json(data.rows);
  });
});

router.get("/products/purchase-history", (req, res, next) => {
  db.getPurchased(1).then((data) => {
    res.json(data.rows);
  });
});

router.get("/friends", (req, res, next) => {
  db.getFriends(1).then((data) => {
    res.json(data.rows);
  });
});

router.get("/login", (req, res) => {
  res.render("login_page");
});

router.get("/categories/:user_id", (req, res) => {
  db.getCategoriesForUser(req.params.user_id).then((data) => {
    res.json(data.rows);
  });
});

router.get("/filter/:uid/:cid/:min/:max", (req, res) => {
  db.filterByPrice(
    req.params.uid,
    req.params.cid,
    req.params.min,
    req.params.max
  ).then((data) => {
    res.json(data.rows);
  });
});

router.post("/products", (req, res) => {
  db.addProduct(req.body)
    .then((data) => {
      res.json(data.rows[0]);
    })
    .catch((err) => {
      res.status(500);
    });
});
router.post("/products/edit", (req, res) => {
  db.editProduct(req.body).then((data) => {
    res.json(data.rows[0]);
  });
});

router.post("/products/delete", (req, res) => {
  db.deleteProduct(req.body.product_id).then((data) => {
    res.json(data.rows[0]);
  });
});

router.post("/products/purchased", (req, res) => {
  db.markPurchased(req.body.product_id).then((data) => {
    res.json(data.rows[0]);
  });
});

router.post("/products/unpurchased", (req, res) => {
  db.unmarkPurchased(req.body.product_id).then((data) => {
    res.json(data.rows[0]);
  });
});

router.post("/categories", (req, res) => {
  db.addCategory(
    req.body.user_id,
    req.body.category_name,
    req.body.category_public
  ).then((data) => {
    res.json(data.rows[0]);
  });
});

router.post("/friends", (req, res) => {
  db.addFriends(req.body.user_1_id, req.body.user_2_id).then((data) => {
    res.json(data.rows[0]);
  });
});

router.post("/picture", (req, res) => {
  upload(req, res, (err) => {
    const thing = req.file.path;
    api(thing).then((data) => {
      const url = data[0];
      const sendToClient = res.json(url);
    });
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

router.post("/products", (req, res) => {
  db.addProduct(req.body).then((data) => {
    res.json(data.rows[0]);
  });
});
module.exports = router;
