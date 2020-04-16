import Category from "./Category.js";
import Header from "./Header.js";
import Footer from "./Footer.js";
import Button from "./Button.js";
import CreateForm from "./CreateForm.js";
import "./components_styles/categories.css";
import { getCategoriesForUser } from "../fetchers.js";
import React, { useState } from "react";
//let classNames = require("classnames");

export default function Categories(props) {
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
        id={category.id}
        name={category.category_name}
        count={category.count}
        sum={category.sum}
        public={category.public}
        getCategoryId={props.getCategoryId}
        onButtonClick={()=>{props.onButtonClick()}}
      />
    );
  });

  const [show, setShow] = useState(false);

  const showForm = (show) => {
    return show ? setShow(false) : setShow(true);
  }

  return (
    (
      <>
        <Header />
        <main>
          <div>Welcome to Genius</div>
          <h1>Categories</h1>
          <div class="new-category">
            <button type="button" onClick={() => {showForm(show); console.log(show)}}>Create new category</button>
            {show ? (<CreateForm />) : (<p></p>)}
          </div>
          <ul class="categories">{categoryList}</ul>
        </main>
        <Footer />
      </>
    )
  );
}
