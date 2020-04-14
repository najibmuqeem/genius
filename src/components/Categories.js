import Category from "./Category.js";
import { getCategoriesForUser } from "../fetchers.js";
import React, { useState } from "react";
//let classNames = require("classnames");

export default function Categories() {
  const [categories, setCategories] = useState([]);
  const user = 1;
  if (categories.length === 0) {
    getCategoriesForUser(user).then((a) => {
      setCategories(() => a);
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

  return categoryList;
}
