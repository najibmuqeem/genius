import Button from "./Button.js";
import "./components_styles/product.css";

import React, { useState } from "react";
import EditForm from "./EditForm.js";
let classNames = require("classnames");

export default function Product(props) {
  const productClass = classNames("product-card", {
    "product-purchased": props.purchased,
  });
  const [edit, setEdit] = useState(false);

  return (
    <>
      {edit ? (
        <li class="product-card">
          <EditForm
            id={props.id}
            name={props.product_name}
            price={props.price}
            img_src={props.img_src}
            description={props.description}
            store_name={props.store_name}
            web_url={props.web_url}
            purchased={props.purchased}
            setEdit={setEdit}
          ></EditForm>
        </li>
      ) : (
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
          <Button
            onButtonClick={() => {
              props.onDeleteClick(props.id);
            }}
          >
            Delete
          </Button>
          <Button
            onButtonClick={() => {
              props.onSoldClick(props.id);
            }}
          >
            Mark purchased
          </Button>
          <Button>Edit</Button>
        </li>
      )}
    </>
  );
}
