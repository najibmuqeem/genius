import Tab from "./Tab.js";
import "./components_styles/tabs.css";
import { getCategoriesForUser } from "../fetchers.js";
import React, { useState } from "react";

export default function Tabs(props) {
  const [categories, setCategories] = useState([]);

	if (categories.length === 0) {
		getCategoriesForUser(1).then((res) => {
			setCategories(() => res);
		});
	}
	
	console.log(props.activeTab);
  
	const categoryList = categories.map((category) => {
		let active;
		if (props.activeTab === category.id) {
			active = true;
		}
			return (
				<Tab
					getCategoryId={props.getCategoryId}
					category_name={category.category_name}
					id={category.id}
					activeTab={active}
				/>
			);
	});


  return (
    <ul class="tabs">
      {categoryList}
    </ul>
  );
}
