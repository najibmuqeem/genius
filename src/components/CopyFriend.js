import "./components_styles/product.css";
import React, { useState } from "react";
import { addProduct, getCategoriesForUser } from "../fetchers.js";

export default function ViewCard(props) {
  const toggleDropdown = (id) => {
    document.getElementById(id).classList.add("show");
    document.getElementsByClassName(id)[0].classList.add("filter-category");
  };

  const [categories, setCategories] = useState([]);

  const user = 1;
  if (categories.length === 0) {
    getCategoriesForUser(user).then((res) => {
      setCategories(() => res);
    });
  }

  let categoryList = categories.map((category) => {
    return (
      <option class="option" value={category.id}>
        {category.category_name}
      </option>
    );
  });

  const friendProduct = {};

  return (
    <>
      <li>
        <h4>
          <a target="_blank" href={props.web_url}>
            {props.product_name}
          </a>
        </h4>
        <p>${props.price}</p>
        <img width="100" height="100" src={props.img_src} />
        <p>{props.description}</p>
        <p>{props.store_name}</p>
        <div class={props.id}>
          <button
            onClick={() => {
              toggleDropdown(props.id);
            }}
          >
            Add to Wishlist
          </button>
        </div>
        <form class="filter-category" id={props.id}>
          <select class="mySelect" name="category_id">
            {categoryList}
          </select>
          <button
            onClick={(e) => {
              e.preventDefault();
              friendProduct.product_name = props.product_name;
              friendProduct.price = props.price;
              friendProduct.img_src = props.img_src;
              friendProduct.store_name = props.store_name;
              friendProduct.web_url = props.web_url;
              const currentItem = document.getElementById(props.id);
              friendProduct.category_id = currentItem.getElementsByClassName(
                "mySelect"
              )[0].value;
              addProduct(friendProduct);
              //console.log(friendProduct);
            }}
          >
            Submit
          </button>
        </form>
      </li>
    </>
  );
}
