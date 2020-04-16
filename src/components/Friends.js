import ViewCard from "./ViewCard.js";
import Header from "./Header.js";
import Footer from "./Footer.js";
import { getProductsForUser } from "../fetchers.js";
import React, { useState } from "react";
//let classNames = require("classnames");

export default function Friends() {
  const [products, setProducts] = useState([]);
  const user = 2;

  let a = getProductsForUser(user);
  console.log(a);

  if (products.length === 0) {
    getProductsForUser(user).then((res) => {
      setProducts(() => res);
    });
  }

  console.log(products);
  const productList = products.map((product) => {
    console.log(product);
    return (
      <ViewCard
        product_name={product.product_name}
        price={product.price / 100}
        description={product.description}
        store_name={product.store_name}
        img_src={product.img_src}
      />
    );
  });

  return (
    <>
      <Header />
      <div class="products">{productList}</div>
      <Footer />
    </>
  );
}
