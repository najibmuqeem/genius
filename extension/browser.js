let product = {};
document.onreadystatechange = function () {
	if (document.readyState === "complete") {
		function getDataFromPage() {
			console.log("COMPLETE");
			let product_name = document.querySelector("h1").innerText;
			
			console.log(product_name);
			product.title = product_name;
			
			let priceArray = []
			priceArray.push(document.querySelector('[data-at*="price"]'));
	
			priceArray.push(document.querySelector('[class*="price"]'));
			priceArray.push(document.querySelector('[id*="price"]'));
			priceArray.push(document.querySelector('[data-test*="price"]'));
			for (element of priceArray) {
				if (element)
					{console.log(element.innerText);}
			}
			console.log(product);
			return product;
		}
		
		getDataFromPage().then((product)=>{
			console.log("message sent");
			chrome.runtime.sendMessage(product);
		})
	}};
		
// 		//chrome.runtime.sendMessage({ product })
// 			chrome.browserAction.onClicked.addListener(function (tab) {
// 				chrome.tabs.executeScript(null, { file: "testScript.js" });
// 				alert("1");
// 				console.log("1")
// 			});


// chrome.browserAction.onClicked.addListener(function (tab) {
// 	console.log("Injecting content script(s)");
// 	//On Firefox document.body.textContent is probably more appropriate
// 	chrome.tabs.executeScript(
// 		tab.id,
// 		{
// 			code: 'document.querySelector("h1").innerText;'
// 			//If you had something somewhat more complex you can use an IIFE:
// 			//code: '(function (){return document.body.innerText})();'
// 			//If your code was complex, you should store it in a
// 			// separate .js file, which you inject with the file: property.
// 		},
// 		receiveText
// 	);
// });

// //tabs.executeScript() returns the results of the executed script
// //  in an array of results, one entry per frame in which the script
// //  was injected.
// function receiveText(resultsArray) {
// 	console.log(resultsArray[0]);
// }