import Product from "./Product.js";
import { getProductsForUser } from "../fetchers.js";
import React, { useState } from "react";
//let classNames = require("classnames");

export default function Products() {
	const [products, setProducts] = useState([]);
	const user = 2;

	let a = getProductsForUser(user);
		console.log(a)

	if (products.length === 0) {
		getProductsForUser(user).then((res) => {
			setProducts(() => res);
		});
	}

	console.log(products);
	const productList = products.map((product) => {
		console.log(product);
		return <Product 
		product_name={product.product_name}
		price={product.price/100}
		description={product.description}
		store_name={product.store_name}
		img_src={product.img_src}

		 />;
	});

	return <div class="products">{productList}</div>;
}
