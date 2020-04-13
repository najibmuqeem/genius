import React from "react";


export default function Category() {
	let category ={
		category_name: "Skirts",
		total: 856,
		items: 12
	}

	return (
		<div>
			<h4>{category.category_name}</h4>
			<p>Total: ${category.total}</p>
			<p>{category.items} products in this category</p>
		</div>
	);
}
