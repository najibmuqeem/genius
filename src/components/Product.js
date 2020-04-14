import "./components_styles/product.css";
import React from "react";
//let classNames = require("classnames");

export default function Product(props) {
  
  
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
			<h4>
				<a href={product.web_url}>{props.product_name}</a>
			</h4>
			<p>${props.price}</p>
			<p>{props.description}</p>
			<p>{props.store_name}</p>
			<img width="100" height="100" src={props.img_src}/>
		</div>
	);
}
