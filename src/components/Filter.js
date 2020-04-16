import Button from "./Button.js";
import React, { useEffect, useState } from "react";
import { filterByPrice } from "../fetchers.js";
//let classNames = require("classnames");

export default function Filter(props) {
  const handleSubmit = (e) => {
    e.preventDefault();
    filterByPrice(
      1,
      props.category_id,
      e.target.min_price.value * 100,
      e.target.max_price.value * 100
    ).then((res) => {
      console.log(res);
      props.filterProducts(res);
    });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Minimum: $<input name="min_price" type="text"></input>
        </label>
        <label>
          Maximum: $<input name="max_price" type="text"></input>
        </label>
        <input type="submit" value="Submit"></input>
      </form>
    </div>
  );
}
