import Button from "./Button.js";
import React from "react";
import "./components_styles/category.css";
import { Link } from "react-router-dom";
let classNames = require("classnames");

export default function Category(props) {
	const categoryClass = classNames("category", {
		"category-private": !props.public
	});


  return (
		<li class={categoryClass}>
			<Link to="/products">
				<div
					class="category-link"
					onClick={() => props.getCategoryId(props.id)}
				>
					<h4>{props.name}</h4>
					
					<p> count: {props.count} </p>
					<p> items sum: ${props.sum / 100} </p>
				</div>
			</Link>
			<Button
				onButtonClick={() => {
					props.onButtonClick();
				}}
			>
				Delete
			</Button>
			<Button>Edit</Button>
		</li>
	);
}
