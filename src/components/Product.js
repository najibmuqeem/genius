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
						submit={props.onEditSubmit}
						onDeleteClick={props.onDeleteClick}
						onSoldClick={props.onSoldClick}
					></EditForm>
				</li>
			) : (
				<li class={productClass}>
					<h4>
						<a target="_blank" href={props.web_url}>
							{props.product_name}
						</a>
					</h4>
					<div class="prod-props">
						<p>{props.store_name}</p>
						<p class="prod-price">${props.price}</p>
					</div>
					<img width="330" height="330" src={props.img_src} />
					<p class="prod-desc">{props.description}</p>
					<div class="prod-btn-container">
						<Button
							onButtonClick={() => {
								props.onDeleteClick(props.id);
							}}
							delete={true}
							icon={true}
						>
							Delete
						</Button>
						<Button
							onButtonClick={() => {
								props.onSoldClick(props.id);
							}}
							sold={true}
							icon={true}
						>
							Mark purchased
						</Button>
						<Button onButtonClick={() => setEdit(true)} edit={true} icon={true}>
							Edit
						</Button>
					</div>
				</li>
			)}
		</>
	);
}
