import Button from "./Button.js";
import React, { useEffect, useState } from "react";
import { editProduct } from "../fetchers.js";
//let classNames = require("classnames");

export default function EditForm(props) {
  const [product, setProduct] = useState({
    name: props.name,
    price: props.price,
    img_src: props.img_src,
    description: props.description,
    store_name: props.store_name,
    web_url: props.web_url,
    id: props.id,
  });
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    const product = {
      name: e.target.name.value,
      price: e.target.price.value * 100,
      img_src: e.target.img_src.value,
      description: e.target.description.value,
      store_name: e.target.store_name.value,
      web_url: e.target.web_url.value,
      id: props.id,
    };
    editProduct(product).then((response) => {
      setProduct(response);
      setSubmitted(true);
    });
  };
  return (
    <div>
      {submitted ? (
        <li class="product-card">
          <h4>
            <a href={product.web_url}>{product.name}</a>
          </h4>
          <p>${product.price}</p>
          <img width="100" height="100" src={product.img_src} />
          <p>{product.description}</p>
          <p>{product.store_name}</p>
          <Button>Delete</Button>
          <Button id={product.id} onButtonClick={() => props.setEdit(true)}>
            Edit
          </Button>
        </li>
      ) : (
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input name="name" type="text" defaultValue={product.name}></input>
          </label>
          <label>
            Price:
            <input
              name="price"
              type="text"
              defaultValue={product.price}
            ></input>
          </label>
          <label>
            Image Source:
            <input
              name="img_src"
              type="text"
              defaultValue={product.img_src}
            ></input>
          </label>
          <label>
            Description:
            <textarea
              name="description"
              type="text"
              defaultValue={product.description}
            ></textarea>
          </label>
          <label>
            Store Name:
            <input
              name="store_name"
              type="text"
              defaultValue={product.store_name}
            ></input>
          </label>
          <label>
            Web URL:
            <input
              name="web_url"
              type="text"
              defaultValue={product.web_url}
            ></input>
          </label>
          <input type="submit" value="Submit"></input>
        </form>
      )}
    </div>
  );
}
