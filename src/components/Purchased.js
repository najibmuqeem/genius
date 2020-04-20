import ViewCard from "./ViewCard.js";
import Header from "./Header.js";
import Footer from "./Footer.js";
import { getPurchased } from "../fetchers.js";
import React, { useState } from "react";

export default function Purchased(props) {
  const [purchased, setPurchased] = useState([]);
  const user = 1;

  if (purchased.length === 0) {
    getPurchased(user).then((res) => {
      setPurchased(() => res);
    });
  }
  const purchasedList = purchased.map((product) => {
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
      <Header logout={props.logout} />
      <div class="products">{purchasedList}</div>
      <Footer />
    </>
  );
}
