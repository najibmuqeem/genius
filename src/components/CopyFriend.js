import "./components_styles/product.css";
import React, { useState } from "react";
import { addProduct, getCategoriesForUser } from "../fetchers.js";

export default function ViewCard(props) {
  const toggleDropdown = (id) => {
    document.getElementById(id).classList.add("show");
    document.getElementsByClassName(id)[0].classList.add("filter-category");
  };

  const [categories, setCategories] = useState([]);

  const user = 1;
  if (categories.length === 0) {
    getCategoriesForUser(user).then((res) => {
      setCategories(() => res);
    });
  }

  let categoryList = categories.map((category) => {
    return (
      <option class="option" value={category.id}>
        {category.category_name}
      </option>
    );
  });

	const friendProduct = {};
	
  return (
		<>
			<li class="product-card">
				<h4>
					<a target="_blank" href={props.web_url}>
						{props.product_name}
					</a>
				</h4>
				<div class="prod-props">
					<p>{props.store_name}</p>
					<p class="prod-price">${props.price}</p>
				</div>

				<img
					width="330"
					height="330"
					src={props.img_src}
					alt={props.product_name}
				/>
				<p class="prod-desc">{props.description}</p>
				<div class="copy-container">
					<div class={props.id}>
						<button
							onClick={() => {
								toggleDropdown(props.id);
							}}
							class="icon-btn copy-btn"
						>
							Add to Wishlist
						</button>
					</div>
				</div>
				<form class="filter-category" id={props.id}>
					<select class="mySelect" name="category_id">
						{categoryList}
					</select>
					<button
						onClick={(e) => {
							e.preventDefault();
							friendProduct.product_name = props.product_name;
							friendProduct.price = props.price;
							friendProduct.img_src = props.img_src;
							friendProduct.store_name = props.store_name;
							friendProduct.web_url = props.web_url;
							const currentItem = document.getElementById(props.id);
							friendProduct.category_id = currentItem.getElementsByClassName(
								"mySelect"
							)[0].value;
							addProduct(friendProduct);
							currentItem.classList.remove("show");
							const nextParagraph = document.getElementById(props.product_name);
							nextParagraph.classList.remove("visually-hidden");
							//console.log(friendProduct);
						}}
						class="button ext-button friend-btn"
					>
						Add
					</button>
				</form>
				<p class="visually-hidden add-notification" id={props.product_name}>
					{props.product_name} was added to your wishlist
				</p>
			</li>
		</>
	);
}
