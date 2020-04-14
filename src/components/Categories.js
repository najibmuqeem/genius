import Category from "./Category.js";
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
      <header>
        <nav>
          <ul class="main-nav">
            <li class="main-nav__item">
              <img src="public/stylesheets/images/genius.png" alt="" />
            </li>
            <li class="main-nav__item">
              <img
                src="./components_styles/images/genius.png"
                alt="Genius Logo"
                height="42"
                width="42"
              />
            </li>
          </ul>
          <ul class="user-nav">
            <li class="user-nav__item">
              <div class="friends">
                Friends
                <ul class="user-nav__friends">
                  <li class="user-nav__friend">Rachel Green</li>
                  <li class="user-nav__friend">Ross Geller</li>
                </ul>
              </div>
            </li>
            <li class="user-nav__item">
              <div class="account">
                Welcome, username
                <ul class="user-nav__user">
                  <li class="user-nav__friend">Profile</li>
                  <li class="user-nav__friend">Purchase history</li>
                </ul>
              </div>
            </li>
            <li class="user-nav__item">Log out</li>
          </ul>
        </nav>
      </header>
      <main>
        <h1>Categories</h1>
        <div class="new-category">
          <button type="button">Create new category</button>
        </div>
        <ul>{categoryList}</ul>
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
