const { Pool } = require("pg");

const pool = new Pool({
  user: "development",
  password: "123",
  host: "localhost",
  database: "genius",
});
// all query functions

const getProductsForUser = function (user_id) {
  return pool.query(
    `
    SELECT *
    FROM products
    JOIN categories ON category_id = categories.id
    WHERE user_id = $1;
    `,
    [user_id]
  );
};

const getCategoriesForUser = function (user_id) {
  return pool.query(
    `
    SELECT *
    FROM categories
    WHERE user_id = $1;
    `,
    [user_id]
  );
};

const getProductsForCategory = function (user_id, category_id) {
  return pool.query(
    `
    SELECT *
    FROM products
    JOIN categories ON category_id = categories.id
    WHERE user_id = $1 AND category_id = $2;
    `,
    [user_id, category_id]
  );
};

const getFriends = function (user_id) {
  return pool.query(
    `
    SELECT *
    FROM users
    JOIN friends on users.id = friends.user_2_id
    WHERE user_1_id = $1;
    `,
    [user_id]
  );
};

const getPurchased = function (user_id) {
  return pool.query(
    `
    SELECT *
    FROM products
    JOIN categories ON category_id = categories.id
    WHERE user_id = $1 AND purchased = true;
    `,
    [user_id]
  );
};

const getUsers = function () {
  return pool.query(
    `
    SELECT * FROM users;
    `
  );
};

const getUserWithID = function (id) {
  return pool.query(
    `
    SELECT * FROM users
    WHERE id = $1;
    `,
    [id]
  );
};

const addUser = function (username, email, birthday, avatar) {
  return pool.query(
    `
    INSERT INTO users (username, email, birthday, avatar)
    VALUES ($1, $2, $3, $4)
    RETURNING *;
    `,
    [username, email, birthday, avatar]
  );
};

const addCategory = function (user_id, category_name) {
  return pool.query(
    `
    INSERT INTO categories (user_id, category_name) VALUES ($1, $2)
    RETURNING *;
    `,
    [user_id, category_name]
  );
};

const addFriends = function (user_1_id, user_2_id) {
  return pool.query(
    `
    INSERT INTO friends (user_1_id, user_2_id) VALUES ($1, $2)
    RETURNING *;
    `,
    [user_1_id, user_2_id]
  );
};

const addProduct = function (product) {
  let price = 100 * Number(product.price.substring(1));

  return pool.query(
    `
    INSERT INTO products (category_id, product_name, price, img_src, store_name, description, web_url, purchased, misc_info) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
    RETURNING *;
    `,
    [
      product.category_id,
      product.product_name,
      price,
      product.img_src,
      product.store_name,
      product.description,
      product.web_url,
      product.purchased,
      product.misc_info,
    ]
  );
};

const getMiscInfo = function (product_id) {
  return pool.query(
    `
    SELECT misc_info
    FROM products
    WHERE id = $1;
    `,
    [product_id]
  );
};

const markPurchased = function (product_id) {
  return pool.query(
    `
    UPDATE products
    SET purchased = true
    WHERE id = $1;
    `,
    [product_id]
  );
};

const getNumProductsForCategory = function (user_id, category_id) {
  return pool.query(
    `
    SELECT count(*)
    FROM products
    JOIN categories ON category_id = categories.id
    WHERE user_id = $1 AND category_id = $2;
    `,
    [user_id, category_id]
  );
};

const getPriceForCategory = function (user_id, category_id) {
  return pool.query(
    `
    SELECT sum(price)
    FROM products
    JOIN categories ON category_id = categories.id
    WHERE user_id = $1 AND category_id = $2;
    `,
    [user_id, category_id]
  );
};

//export query functions
module.exports = {
  getProductsForUser,
  getCategoriesForUser,
  getProductsForCategory,
  getFriends,
  getPurchased,
  getUsers,
  getUserWithID,
  addUser,
  addCategory,
  addFriends,
  addProduct,
  getMiscInfo,
  markPurchased,
  getNumProductsForCategory,
  getPriceForCategory
};
