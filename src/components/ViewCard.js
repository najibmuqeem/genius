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
				<div class="prod-props">
					<p>{props.store_name}</p>
					<p class="prod-price">${props.price}</p>
				</div>
				<img
					width="330"
					height="330"
					src={props.img_src}
					alt={props.product_name}
				/>
				<p class="prod-desc">{props.description}</p>
			</li>
		</div>
	);
}
