import Category from "./Category.js";
import Header from "./Header.js";
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
    <div>
      <Header />
      <main>
        <h1>Categories</h1>
        <div class="new-category">
          <button type="button">Create new category</button>
        </div>
        <ul class="categories">{categoryList}</ul>
      </main>
      <footer>
        <ul class="footer-list">
          <li class="footer-list__item">
            <a href="mailto: undefined@gmail.com">Contact us</a>
          </li>
          <li class="footer-list__item">XYZ</li>
          <li class="footer-list__item">&copy; Undefined</li>
        </ul>
      </footer>
    </div>
  );
}
