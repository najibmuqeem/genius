import Button from "./Button.js";
import React from "react";
import "./components_styles/category.css";
import { Link } from "react-router-dom";
export default function Category(props) {
  return (
		<Link to="/products">
			<li class="category" onClick={() => props.getCategoryId(props.id)}>
				<h4>{props.name}</h4>
				<img src="" width="180" height="180" />
				<p> count: {props.count} </p>
				<p> items sum: ${props.sum / 100} </p>
				<Button onButtonClick={() => console.log("clicked")}>Delete</Button>
				<Button>Edit</Button>
			</li>
		</Link>
	);
}
