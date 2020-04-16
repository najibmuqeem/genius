import { Link } from "react-router-dom";
import React, { useState } from "react";
let classNames = require("classnames");

export default function Tab(props) {
  const tabClass = classNames("tab", {
		"active-tab": props.activeTab,
  });
  
  return (
		<li>
			<Link to="/products">
				<h4 class={tabClass} onClick={() => props.getCategoryId(props.id)}>
					{props.category_name}
				</h4>
			</Link>
		</li>
	);
}