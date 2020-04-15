import Product from "./Product.js";
import Header from "./Header.js";
import Footer from "./Footer.js";
import Tabs from "./Tabs.js";
import "./components_styles/products.css";
import {
	getProductsForCategory,
	deleteProduct,
	markPurchased,
	unmarkPurchased
} from "../fetchers.js";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
//let classNames = require("classnames");

export default function Products(props) {
  const [products, setProducts] = useState([]);

  let a = getProductsForCategory(1, props.id);
  console.log(a);

  useEffect(() => {
    getProductsForCategory(1, props.id).then((res) => {
      setProducts(() => res);
    });
  }, [props.id]);

  const deleteProduct1 = (id) => {
    console.log("delete from products ", id);
    const newArrOfProduct = products.filter((product) => product.id !== id);
    deleteProduct(id);
    //console.log(newArrOfProduct);
    setProducts(newArrOfProduct);
    //console.log("new array", products);
  };

  const markSold = (id) => {
		console.log("mark purchased ", id);
		const newArrOfProduct = products.map((product) => {
      if (product.id === id) {
        if (product.purchased) {
          product.purchased = false;
          unmarkPurchased(id)
        } else {
          product.purchased = true;
					markPurchased(id);
        }
      }
      return product;
    });
		//markPurchased(id);
		//console.log(newArrOfProduct);
		setProducts(newArrOfProduct);
		//console.log("new array", products);
	};



  console.log("current products", products);
  const productList = products.map((product) => {
    console.log(product);
    return (

			<Product
				id={product.id}
				product_name={product.product_name}
				price={product.price / 100}
				description={product.description}
				store_name={product.store_name}
				img_src={product.img_src}
				web_url={product.web_url}
				purchased={product.purchased}
				onDeleteClick={deleteProduct1}
				onSoldClick={markSold}
			/>
		);

  });

  return (
    <>
      <Header />
      <main>
        <Tabs getCategoryId={props.getCategoryId} />
        <ul class="products">{productList}</ul>
      </main>
      <Footer />
    </>
  );
}
