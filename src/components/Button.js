import React from "react";
import "./components_styles/button.css";
let classNames = require("classnames");

export default function Button(props) {
	const btnClass = classNames("button btn-rose cat-btn", {
		"ext-button": props.filter,
		"icon-btn": props.icon,
		"edit-btn": props.edit,
		"delete-btn": props.delete,
		"sold-btn": props.sold
	});

	return (
		<button
			class={btnClass}
			onClick={(event) => {
				//event.stopPropagation();
				props.onButtonClick();
			}}
		>
			{props.children}
		</button>
	);
}
