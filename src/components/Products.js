import Product from "./Product.js";
import Header from "./Header.js";
import Footer from "./Footer.js";
import Tabs from "./Tabs.js";
import Filter from "./Filter.js";
import "./components_styles/products.css";
import {
  getProductsForCategory,
  deleteProduct,
  markPurchased,
  unmarkPurchased,
  editProduct,
} from "../fetchers.js";
import React, { useState, useEffect } from "react";
//let classNames = require("classnames");

export default function Products(props) {
  const [products, setProducts] = useState([]);

  const viewAll = () => {
    getProductsForCategory(1, props.id).then((res) => {
      setProducts(() => res);
    });
  };

  useEffect(() => {
    viewAll();
  }, [props.id]);

  const deleteProduct1 = (id) => {
    const newArrOfProduct = products.filter((product) => product.id !== id);
    deleteProduct(id);
    setProducts(newArrOfProduct);
  };

  const markSold = (id) => {
    console.log("mark purchased ", id);
    const newArrOfProduct = products.map((product) => {
      if (product.id === id) {
        if (product.purchased) {
          product.purchased = false;
          unmarkPurchased(id);
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

  const editProduct1 = (oldProduct) => {
    editProduct(oldProduct).then((res) => {
      const newArrOfProduct = products.filter(
        (product) => product.id !== oldProduct.id
      );
      newArrOfProduct.push(res);
      setProducts(newArrOfProduct);
    });
  };

  const filterProducts = (products) => {
    setProducts(products);
  };

  console.log("current products", products);
  const productList = products.map((product) => {
    //console.log(product);
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
        onEditSubmit={editProduct1}
      />
    );
  });

  return (
    <>
      <Header />
      <main class="page-main">
        <Tabs getCategoryId={props.getCategoryId} activeTab={props.id} />
        <Filter
          category_id={props.id}
          filterProducts={filterProducts}
          products={productList}
          viewAll={viewAll}
        ></Filter>
        <ul class="products">{productList}</ul>
      </main>
      <Footer />
    </>
  );
}
