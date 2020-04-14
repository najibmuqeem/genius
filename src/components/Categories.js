import Category from "./Category.js";
import Header from "./Header.js";
import Footer from "./Footer.js";
import { getCategoriesForUser } from "../fetchers.js";
import React, { useState } from "react";
//let classNames = require("classnames");

export default function Categories() {
  const [categories, setCategories] = useState([]);
  const user = 1;
  if (categories.length === 0) {
    getCategoriesForUser(user).then((res) => {
      setCategories(() => res);
    });
  }

  console.log(categories);
  const categoryList = categories.map((category) => {
    console.log(category);
    return (
      <Category
        name={category.category_name}
        count={category.count}
        sum={category.sum}
      />
    );
  });

  return (
    console.log("jo"),
    (
      <div>
        <Header />
        <main>
          <h1>Categories</h1>
          <div class="new-category">
            <button type="button">Create new category</button>
          </div>
          <ul class="categories">{categoryList}</ul>
        </main>
        <Footer />
      </div>
    )
  );
}
