let product = {};

	
	chrome.runtime.onMessage.addListener(function (
		request,
		sender,
		sendResponse
	) {
		console.log("COMPLETE");
		let product_name = document.querySelector("h1").innerText;
		
		console.log(product_name);
		product.title = product_name;
    
		// let priceArray = []
		// priceArray.push(document.querySelector('[data-at*="price"]'));
		// priceArray.push(document.querySelector('[class*="price"]'));
		// priceArray.push(document.querySelector('[id*="price"]'));
		// priceArray.push(document.querySelector('[data-test*="price"]'));
		


		const priceFinder = (node) => {
			let child, next;
			if (node.childNodes.length === 1) {
				if (node.innerText.includes("$") && node.innerText.length < 8) {
					console.log(node.innerText);
				};
				return node
				//handleText(node);
			} else {
				child = node.firstChild;
				while (child) {
					next = child.nextSibling;
					priceFinder(child);
					child = next;
				}
			}
		};

		priceFinder(document.body)


		

		product.title = product_name;
		//console.log(priceArray);
		//product.price = priceArray[0].innerText;
		console.log(product);
		console.log(
			sender.tab
				? "from a content script:" + sender.tab.url
				: "from the extension"
		);
		sendResponse({ farewell: product });
	});
	