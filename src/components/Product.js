import React from "react";
let classNames = require("classnames");
import "./components_styles/product.css";

export default function Product() {
  
  
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

	const productClass = classNames("product-card", {
		"purchased": product.purchased
	});

	return (
		<div className={productClass}>
			<h4>
				<a href={product.web_url}>{product.product_name}</a>
			</h4>
			<p>{product.price}</p>
			<p>{product.description}</p>
			<p>{product.store_name}</p>
			<img width="30" height="30" src={product.img_src}/>
		</div>
	);
}
