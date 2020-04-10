DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS friends CASCADE;
DROP TABLE IF EXISTS categories CASCADE;
DROP TABLE IF EXISTS products CASCADE;

CREATE TABLE users(
  id SERIAL PRIMARY KEY,
  username VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  birthday DATE,
  avatar TEXT NOT NULL
);

CREATE TABLE friends(
  user_1_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  user_2_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE categories(
  id SERIAL PRIMARY KEY,
  user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  category_name VARCHAR(255) NOT NULL,
  public BOOLEAN NOT NULL DEFAULT false
);


CREATE TABLE products(
  id SERIAL PRIMARY KEY,
  category_id INTEGER NOT NULL REFERENCES categories(id) ON DELETE CASCADE,
  product_name VARCHAR (255) NOT NULL,
  price INTEGER NOT NULL,
  img_src TEXT, -- not making a default, on product card will hav a default 'missing image placeholder'
  store_name VARCHAR (255),
  description TEXT,
  web_url TEXT,
  purchased BOOLEAN DEFAULT false,
  misc_info JSON
);