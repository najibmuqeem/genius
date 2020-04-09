const { Pool } = require("pg");

const pool = new Pool({
  user: "development",
  password: "123",
  host: "localhost",
  database: "genius",
});
// all query functions

//export query functions
module.exports = {};
