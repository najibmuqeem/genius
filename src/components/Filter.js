import Button from "./Button.js";
import "./components_styles/filter.css";
import React, { useState } from "react";
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
		<div class="filter-box">
			<form onSubmit={handleSubmit} class="filter-form">
      <span>Filter products by price: </span>
        <div>
				  <label for="min-price">Minimum: $</label>
				  <input id="min-price" name="min_price" type="number" class="filter-price"></input>
        </div>
        <div>
				  <label for="max-price">Maximum: $</label>
				  <input id="max-price" name="max_price" type="number" class="filter-price"></input>  
        </div>
				<input class="fiter-btn" type="submit" value="Filter"></input>
			</form>
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
				<></>
			)}
		</div>
	);
}
