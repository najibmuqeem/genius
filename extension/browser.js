let product = {};

	
	chrome.runtime.onMessage.addListener(function (
		request,
		sender,
		sendResponse
	) {
		console.log("COMPLETE");
		let product_name = document.querySelector("h1").innerText;
		
		//console.log(product_name);
		product.title = product_name;
    
		// let priceArray = []
		// priceArray.push(document.querySelector('[data-at*="price"]'));
		// priceArray.push(document.querySelector('[class*="price"]'));
		// priceArray.push(document.querySelector('[id*="price"]'));
		// priceArray.push(document.querySelector('[data-test*="price"]'));
		
		let priceSelectors = [
			'[data-at*="price"]',
			'[class*="price"]',
			'[id*="price"]',
			'[data-test*="price"]'
		];

		let product_price

		
		const dollarFinder = (node) => {
			let foundPrice;
			let child, next;
			console.log(node);
			// Base Case (exit condition)
			if (node.childNodes.length === 1) {
				if (node.innerText.includes("$") && node.innerText.length < 8) {
					console.log("node innertext " + node.innerText);
					return node.innerText;
				}
			} else {
				child = node.firstChild;
				while (child) {
					next = child.nextSibling;
					// track exit condition
					foundPrice = dollarFinder(child);
					if (foundPrice) {
						product_price = foundPrice;
						break; // break loop
					}
					child = next;
				}
			}
			return foundPrice;
		};

		let priceFinder = function () {
		for (let selector of priceSelectors) {
			//console.log(selector)
			if (document.querySelector(selector)) {
				console.log(document.querySelector(selector).innerText);
				// product_price = document.querySelector(selector).innerText;
				// return product_price;
				const foundPrice = dollarFinder(document.querySelector(selector));
				console.log(
					"dollarFinder found " + foundPrice
				);
				return foundPrice
			}
		}}
		priceFinder()
		console.log('priceFinder found ' + priceFinder())


		

		// priceFinder(document.body)


		

		product.title = product_name;
		product.price = product_price
		
		console.log(product);
		console.log(
			sender.tab
				? "from a content script:" + sender.tab.url
				: "from the extension"
		);
		sendResponse({ farewell: product });
	});
	