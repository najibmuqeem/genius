import Button from "./Button.js";
import "./components_styles/filter.css";
import React, { useEffect, useState } from "react";
import { filterByPrice } from "../fetchers.js";
//let classNames = require("classnames");

export default function Filter(props) {
  const [filtered, setFiltered] = useState(false);
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
    setFiltered(true);
  };
  return (
    <span>
      {filtered ? (
        <Button
          onButtonClick={() => {
            setFiltered(false);
            props.viewAll();
          }}
        >
          View All
        </Button>
      ) : (
        <div></div>
      )}
      <form onSubmit={handleSubmit} class="filter-form">
        <label>
          Minimum: $<input name="min_price" type="text"></input>
        </label>
        <label>
          Maximum: $<input name="max_price" type="text"></input>
        </label>
        <input class="ext-button" type="submit" value="Filter"></input>
      </form>
    </span>
  );
}
