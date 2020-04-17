import Button from "./Button.js";
import React, { useState } from "react";
import { promiseImpl } from "ejs";
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
  }
  return (
		<form onSubmit={handleSubmit}>
			<label for="categoryName">Category name: </label>
			<input type="text" id="categoryName" name="categoryName" />
			<input type="radio" id="public" name="public" value="true" />
			<label for="public">Public</label>
			<input type="radio" id="private" name="public" value="false" />
			<label for="private">Private</label>
			<button class="button" type="Submit"
			>
				Add category
			</button>
		</form>
	);
    
}
