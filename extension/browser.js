document.onreadystatechange = function () {
	if (document.readyState == "complete") {
		let product_name = document.getElementsByTagName("h1")[0].innerText;
    console.log(product_name);
    

		// let priceArray = document.getElementsByTagName("*");
		// for (let i of priceArray) {
		// 	if (i.innerText.includes("$")) {
		// 		console.log(i);
		// 	}
		// }
	}
};
