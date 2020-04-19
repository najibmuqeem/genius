import Button from "./Button.js";
import React, { useState } from "react";
import "./components_styles/createForm.css";
let classNames = require("classnames");

export default function CreateForm(props) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const category = {
			user_id: 1,
			category_name: e.target.categoryName.value,
			public: e.target.public.value,
		};
    console.log("from create form ", category);
		props.submit(category);
		props.showForm(props.show);
  }
  return (
		<form class="create-category" onSubmit={handleSubmit}>
			<div class="create-name">
				<label for="categoryName">Category name: </label>
				<input
					type="text"
					id="categoryName"
					name="categoryName"
					autoComplete="off"
					required
				/>
			</div>
			<p class="create-text">Make category: </p>
			<div class="create-radio">
				<div class="radio-wrapper">
					<input
						class="visually-hidden"
						type="radio"
						id="public"
						name="public"
						value="true"
					/>
					<label for="public">Public</label>
				</div>
				<div class="radio-wrapper">
					<input
						class="visually-hidden"
						type="radio"
						id="private"
						name="public"
						value="false"
					/>
					<label for="private">Private</label>
				</div>
			</div>
			<button class="add-button" type="Submit">
				Add category
			</button>
		</form>
	);
    
}
