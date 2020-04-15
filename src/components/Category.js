import Button from "./Button.js";
import React from "react";
import "./components_styles/category.css";
import { Link } from "react-router-dom";
export default function Category(props) {
  return (
    <li class="category">
		<Link to="/products">
			<div class="category-link" onClick={() => props.getCategoryId(props.id)}>
				<h4>{props.name}</h4>
				<img src="" width="180" height="180" />
				<p> count: {props.count} </p>
				<p> items sum: ${props.sum / 100} </p>
			</div>
		</Link>
				<Button
					onButtonClick={() => {
						props.onButtonClick()
					}}
				>
					Delete
				</Button>
				<Button>Edit</Button>
    </li>
	);
}
