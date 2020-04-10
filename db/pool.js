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
    `,
    [user_id, category_name]
  );
};

const addFriends = function (user_1_id, user_2_id) {
  return pool.query(
    `
    INSERT INTO friends (user_1_id, user_2_id) VALUES ($1, $2)
    `,
    [user_1_id, user_2_id]
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

//export query functions
module.exports = {
  getProductsForUser,
  getCategoriesForUser,
  getProductsForCategory,
  getFriends,
  getPurchased,
  addUser,
  addCategory,
  addFriends,
  getMiscInfo,
};
