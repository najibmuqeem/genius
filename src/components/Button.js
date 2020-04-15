import React from "react";
import "./components_styles/button.css";
//let classNames = require("classnames");

export default function Button(props) {
	return (
		<button class="button cat-btn"
			onClick={props.onClick}
		>
			{props.children}
		</button>
	);
}
