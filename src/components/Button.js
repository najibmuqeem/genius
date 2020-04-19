import React from "react";
import "./components_styles/button.css";
//let classNames = require("classnames");

export default function Button(props) {
	return (
		<button
			class="button btn-rose cat-btn"
			onClick={(event) => {
				//event.stopPropagation();
				props.onButtonClick();
			}}
		>
			{props.children}
		</button>
	);
}
