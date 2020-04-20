import Category from "./Category.js";
import Header from "./Header.js";
import Footer from "./Footer.js";
import CreateForm from "./CreateForm.js";
import "./components_styles/categories.css";
import {
  getCategoriesForUser,
  addCategory,
  getProductsForCategory,
} from "../fetchers.js";
import React, { useState } from "react";

export default function Categories(props) {
  const [categories, setCategories] = useState([]);
  const user = 1;

  if (categories.length === 0) {
    getCategoriesForUser(user).then((res) => {
      const duplicate = [...res];
      const promises = [];
      for (let category of duplicate) {
        category.product_img = [];
        promises.push(getProductsForCategory(1, category.id)); //.then((result) => {
      }

      Promise.all(promises).then((response) => {
        response.forEach((response, index) => {
          duplicate[index].product_img = [
            ...response.slice(0, 4).map((r) => r.img_src),
          ];
        });
        setCategories(duplicate);
      });
    });
  }

  const createCategory = (category) => {
    let newCat = addCategory(
      user,
      category.category_name,
      category.public
    ).then((res) => {
      getCategoriesForUser(user).then((res) => {
        setCategories(() => res);
      });
    });
  };
  const categoryList = categories.map((category) => {
    return (
      <Category
        id={category.id}
        name={category.category_name}
        count={category.count}
        sum={category.sum}
        public={category.public}
        getCategoryId={props.getCategoryId}
        onButtonClick={() => {
          props.onButtonClick();
        }}

        product_img={category.product_img}
      />
    );
  });

  const [show, setShow] = useState(false);

  const showForm = (show) => {
    return show ? setShow(false) : setShow(true);
  };

  return (
    <>
      <Header logout={props.logout} />
      <main class="page-main">
        <h1>Categories</h1>
        <div class="new-category">
          <button
            class="button btn-rose"
            type="button"
            onClick={() => showForm(show)}
          >
            Create new category
          </button>
          {show ? (
            <CreateForm
              submit={createCategory}
              showForm={showForm}
              show={show}
            />
          ) : (
            <></>
          )}
        </div>
        <ul class="categories">{categoryList}</ul>
      </main>
      <Footer />
    </>
  );
}
