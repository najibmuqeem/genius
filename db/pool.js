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
    SELECT products.id, category_id, product_name, price, img_src, store_name, description, web_url, purchased, misc_info
    FROM products
    JOIN categories ON category_id = categories.id
    WHERE user_id = $1;
    `,
    [user_id]
  );
};

const deleteProduct = function (product_id) {
  return pool.query(
    `
    DELETE
    FROM products
    WHERE id = $1;
    `,
    [product_id]
  );
};

const getCategoriesForUser = function (user_id) {
  return pool.query(
    `
    SELECT categories.id, categories.category_name, count(products.id), sum(products.price)
    FROM categories
    JOIN products ON category_id = categories.id
    WHERE user_id = $1
    GROUP by categories.id;
    `,
    [user_id]
  );
};

const getProductsForCategory = function (user_id, category_id) {
  return pool.query(
    `
    SELECT products.id, products.category_id, products.product_name, products.price, products.img_src, products.store_name, products.description, products.web_url, products.purchased
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

const addFriendProduct = function () {
  return pool.query(`INSERT INTO products()`);
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
  console.log("Hitting Pool", product.category_id);
  let price;
  if (typeof product.price === "string") {
    price = 100 * Number(product.price.substring(1));
  } else {
    price = 100 * product.price;
  }
  return pool.query(
    `
    INSERT INTO products (category_id, product_name, price, img_src, store_name, description, web_url) VALUES ($1, $2, $3, $4, $5, $6, $7)
    RETURNING *;
    `,
    [
      Number(product.category_id),
      product.product_name,
      price,
      product.img_src,
      product.store_name,
      product.description,
      product.web_url,
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

const unmarkPurchased = function (product_id) {
  return pool.query(
    `
    UPDATE products
    SET purchased = false
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

const editProduct = function (product) {
  console.log(product);
  return pool.query(
    `
    UPDATE products
    SET product_name = $1, price = $2, img_src = $3, store_name = $4, description = $5, web_url = $6
    WHERE id = $7
    RETURNING *;
    `,
    [
      product.name,
      product.price,
      product.img_src,
      product.store_name,
      product.description,
      product.web_url,
      product.id,
    ]
  );
};

const filterByPrice = function (user_id, category_id, min_price, max_price) {
  return pool.query(
    `
    SELECT products.id, products.category_id, products.product_name, products.price, products.img_src, products.store_name, products.description, products.web_url, products.purchased
    FROM products
    JOIN categories ON category_id = categories.id
    WHERE user_id = $1 AND category_id = $2 AND price >= $3 AND price <= $4;
    `,
    [user_id, category_id, min_price, max_price]
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
  getPriceForCategory,
  editProduct,
  unmarkPurchased,
  deleteProduct,
  filterByPrice,
};
