import Button from "./Button.js";
import React from "react";
import "./components_styles/category.css";
import { Link } from "react-router-dom";
let classNames = require("classnames");

export default function Category(props) {
  const categoryClass = classNames("category", {
    "category-private": !props.public,
  });
  let displayImg =[]

  if (props.product_img) {
    
   displayImg = props.product_img.map((image, index) => {
      const classString = "img-" + index;
      return <img class={classString} height="350" width="330" src={image} alt="product from category"/>;
    });
  }

  return (
    <li class={categoryClass}>
      <Link to="/products">
        <div
          class="category-link"
          onClick={() => props.getCategoryId(props.id)}
        >
          <h4>{props.name}</h4>
          <div class="img-container">{displayImg}</div>
          <div class="cat-property">
            <p>Number of items:</p>
            <p>{props.count}</p>
          </div>
          <div class="cat-property">
            <p>Category total:</p>
            <p>${props.sum / 100}</p>
          </div>
        </div>
      </Link>
      <div class="cat-btns">
        <Button
          onButtonClick={() => {
            props.onButtonClick();
          }}
          icon={true}
          delete={true}
        >
          Delete
        </Button>
        <Button
          onButtonClick={() => {
            props.onButtonClick();
          }}
          icon={true}
          edit={true}
        >
          Edit
        </Button>
      </div>
    </li>
  );
}
