import Button from "./Button.js";
import "./components_styles/editForm.css";
import React, { useEffect, useState } from "react";
import { editProduct } from "../fetchers.js";


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
    props.submit(product);
    setSubmitted(true);
    setProduct(product);
    props.setEdit(false);
  };

  return (
		<>
			{submitted ? (
				<li class="product-card">
					<h4>
						<a target="_blank" href={props.web_url}>
							{props.name}
						</a>
					</h4>
					<p>${props.price}</p>
					<img width="330" height="330" src={props.img_src} />
					<p>{props.description}</p>
					<p>{props.store_name}</p>
					<Button onButtonClick={props.onDeleteClick}>Delete</Button>
					<Button onButtonClick={props.onSoldClick}>Mark purchased</Button>
					<Button id={props.id} onButtonClick={props.setEdit}>
						Edit
					</Button>
				</li>
			) : (
				<form class="edit-form" onSubmit={handleSubmit}>
					<div class="parameter">
						<label class="parameter__label">Name:</label>
						<input
							class="parameter__text"
							name="name"
							type="text"
							defaultValue={product.name}
						></input>
					</div>
					<div class="parameter">
						<label class="parameter__label">Price:</label>
						<input
							class="parameter__text"
							name="price"
							type="text"
							defaultValue={product.price}
						></input>
					</div>
					<div class="parameter">
						<label class="parameter__label"> Store:</label>
						<input
							class="parameter__text"
							name="store_name"
							type="text"
							defaultValue={product.store_name}
						></input>
					</div>
					<div class="parameter">
						<label class="parameter__label"> Image Source:</label>
						<input
							class="parameter__text"
							name="img_src"
							type="text"
							defaultValue={product.img_src}
						></input>
					</div>

					<div class="parameter">
						<label class="parameter__label" for="description">
							Description
						</label>
						<textarea
							class="parameter__text"
							name="description"
							id="description"
							defaultValue={product.description}
						></textarea>
					</div>

					<div class="parameter">
						<label class="parameter__label"> Link:</label>
						<input
							class="parameter__text"
							name="web_url"
							type="text"
							defaultValue={product.web_url}
						></input>
					</div>

					<input type="submit" value="Submit" class="button ext-button"></input>
				</form>
			)}
		</>
	);
}
