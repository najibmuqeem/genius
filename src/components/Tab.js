import { Link } from "react-router-dom";
import React from "react";
let classNames = require("classnames");

export default function Tab(props) {
  const tabClass = classNames("tab", {
		"active-tab": props.activeTab,
  });
  
  return (
		<li class={tabClass}>
			<Link to="/products">
				<h4 onClick={() => props.getCategoryId(props.id)}>
					{props.category_name}
				</h4>
			</Link>
		</li>
	);
}