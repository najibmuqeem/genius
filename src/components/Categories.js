import Category from "./Category.js";
import { getCategoriesForUser } from "../fetchers.js";
import React from "react";
//let classNames = require("classnames");

export default function Products() {
  const user = 1;
  const categories = getCategoriesForUser(user).then((a) => {
    console.log(a);
  });
  console.log(getCategoriesForUser(user));

  // const categoryList = categories.map((category) => {
  //   return <Category />;
  // });
  return <div>hi</div>;
}
