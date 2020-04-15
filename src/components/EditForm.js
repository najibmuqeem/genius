import Button from "./Button.js";
import React, { useEffect } from "react";
import { editProduct } from "../fetchers.js";
//let classNames = require("classnames");

export default function EditForm(props) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const product = {
      name: e.target.name.value,
      price: e.target.price.value,
      img_src: e.target.img_src.value,
      description: e.target.description.value,
      store_name: e.target.store_name.value,
      web_url: e.target.web_url.value,
      id: props.id,
    };
    editProduct(product);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input name="name" type="text" defaultValue={props.name}></input>
      </label>
      <label>
        Price:
        <input name="price" type="text" defaultValue={props.price}></input>
      </label>
      <label>
        Image Source:
        <input name="img_src" type="text" defaultValue={props.img_src}></input>
      </label>
      <label>
        Description:
        <textarea
          name="description"
          type="text"
          defaultValue={props.description}
        ></textarea>
      </label>
      <label>
        Store Name:
        <input
          name="store_name"
          type="text"
          defaultValue={props.store_name}
        ></input>
      </label>
      <label>
        Web URL:
        <input name="web_url" type="text" defaultValue={props.web_url}></input>
      </label>
      <input type="submit" value="Submit"></input>
    </form>
  );
}
