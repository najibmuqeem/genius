import Button from "./Button.js";
import React, { useState } from "react";
let classNames = require("classnames");

export default function CreateForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
  }
  return (
		<form onSubmit={handleSubmit}>
			<label for="categoryName">Category name: </label>
			<input type="text" id="categoryName" name="categoryName" />
			<input type="radio" id="public" name="public" value="true" />
			<label for="public">Public</label>
			<input type="radio" id="private" name="public" value="false" />
			<label for="private">Private</label>
			<Button
				onButtonClick={() => {
					
					console.log("from form submit");
				}}
			>
				Add category
			</Button>
		</form>
	);
    
}
