import "./components_styles/product.css";

import React from "react";
let classNames = require("classnames");

export default function ViewCard(props) {
  const productClass = classNames("product-card", {
    "product-purchased": props.purchased,
  });
  return (
    <div>
      <li class={productClass}>
        <h4>
          <a target="_blank" href={props.web_url}>
            {props.product_name}
          </a>
        </h4>
        <p>${props.price}</p>
        <img width="100" height="100" src={props.img_src} />
        <p>{props.description}</p>
        <p>{props.store_name}</p>
      </li>
    </div>
  );
}
