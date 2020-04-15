import "./components_styles/product.css";
import React from "react";
//let classNames = require("classnames");

export default function Product(props) {
  return (
    <li class="product-card">
      <h4>
        <a href={props.web_url}>{props.product_name}</a>
      </h4>
      <p>${props.price}</p>
      <img width="100" height="100" src={props.img_src} />
      <p>{props.description}</p>
      <p>{props.store_name}</p>
    </li>
  );
}
