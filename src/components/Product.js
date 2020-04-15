import Button from "./Button.js";
import "./components_styles/product.css";
import React, { useState, useEffect } from "react";
import EditForm from "./EditForm.js";
//let classNames = require("classnames");

export default function Product(props) {
  const [edit, setEdit] = useState(false);

  let product = {
    product_name: "Pleated Midi Skirt",
    price: 47,
    web_url:
      "https://shop.nordstrom.com/s/halogen-pleated-midi-skirt-regular-petite/5201656/full?origin=category-personalizedsort&breadcrumb=Home%2FWomen%2FClothing%2FSkirts&color=black-%20ivory%20lady%20dot",
    img_src:
      "https://n.nordstrommedia.com/id/sr3/623d89cd-9f23-481f-b705-0c4027e41bec.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2",
    store_name: "Nordstrom",
    description: "skirt",
    purchased: false,
  };

  return (
    <div>
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
          ></EditForm>
        </li>
      ) : (
        <li class="product-card">
          <h4>
            <a href={props.web_url}>{props.product_name}</a>
          </h4>
          <p>${props.price}</p>
          <img width="100" height="100" src={props.img_src} />
          <p>{props.description}</p>
          <p>{props.store_name}</p>
          <Button>Delete</Button>
          <Button id={props.id} onButtonClick={() => setEdit(true)}>
            Edit
          </Button>
        </li>
      )}
    </div>
  );
}
