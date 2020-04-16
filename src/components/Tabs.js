import { getCategoriesForUser } from "../fetchers.js";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Tabs(props) {
  const [categories, setCategories] = useState([]);
	const user = 1;
	if (categories.length === 0) {
		getCategoriesForUser(1).then((res) => {
			setCategories(() => res);
		});
  }
  
	const categoryList = categories.map((category) => {
    console.log(category)
		return (
      <li>
			  <Link to="/products">
			  	<h4 onClick={() => props.getCategoryId(category.id)}>{category.category_name}</h4>
			  </Link>
      </li>
		);
	});


  return (
    <ul>
      {categoryList}
    </ul>
  );
}
