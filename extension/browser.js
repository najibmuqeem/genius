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
			'[data-test*="price"]',
			'[data-automation*="price"]',
		];

		let product_price

		
		let foundPrice;
		const dollarFinder = (node) => {
			let child, next;
			console.log(node);
			if (node.nodeType === 3) {
				console.log("value of text node "+ node.nodeValue)
				if (node.nodeValue.includes("$") && node.nodeValue.length < 8) {
					console.log(node);
					console.log("node value " + node.nodeValue);
					foundPrice = node.nodeValue;
					return foundPrice;
				}
			} else {
				console.log("go to childnodes")
				child = node.firstChild;
				while (child) {
					next = child.nextSibling;
					foundPrice = dollarFinder(child);
					console.log("found price " + foundPrice)
					if (foundPrice) {
						product_price = foundPrice;
						break;
					}
					child = next;
				}
			}
			return foundPrice
		};

		let priceFinder = function () {
		for (let selector of priceSelectors) {
			//console.log(selector)
			let priceElement = document.querySelector(selector);
			if (priceElement) {
				console.log(priceElement.innerText);
				if (priceElement.children.length === 0) {
					console.log("return inner text");
					return priceElement.innerText;
				} else {
					console.log("go and search deeper");
					dollarFinder(priceElement);
					console.log("dollarFinder found " + foundPrice);
					return foundPrice;
				}
			}
		}}
		product_price = priceFinder()
		console.log("priceFinder found " + product_price);


		

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
	