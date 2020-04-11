let product = {};

//
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  console.log("COMPLETE");

  // fetching product title from the page
  let productName = document.querySelector("h1").innerText;

  // fetching product price from the page
  let priceSelectors = [
    '[data-at*="price"]',
    '[class*="price"]',
    '[id*="price"]',
    '[data-test*="price"]',
    '[data-automation*="price"]',
  ];

  let productPrice;
  let foundPrice;

  // function to find text nodes with the  $ sign
  const dollarFinder = (node) => {
    let child, next;
    if (node.nodeType === 3) {
      console.log(node);
      if (
        (node.nodeValue.includes("$") || node.nodeValue.includes("CAD")) &&
        node.nodeValue.length < 40
      ) {
        foundPrice = node.nodeValue;
        return foundPrice;
      }
    } else {
      console.log("go to childnodes");
      child = node.firstChild;
      while (child) {
        next = child.nextSibling;
        foundPrice = dollarFinder(child);
        console.log("found price " + foundPrice);
        if (foundPrice) {
          productPrice = foundPrice;
          break;
        }
        child = next;
      }
    }
    return foundPrice;
  };

  // function to find DOM elements with selectors from priseSelectors
  let priceFinder = function () {
    for (let selector of priceSelectors) {
      let priceElement = document.querySelector(selector);
      if (priceElement) {
        console.log(priceElement.innerText);
        if (priceElement.children.length === 0) {
          console.log("return inner text");
          console.log(priceElement);
          console.log(priceElement.innerText);
          foundPrice = priceElement.innerText;
          return foundPrice;
        } else {
          console.log("go and search deeper");
          dollarFinder(priceElement);
          console.log("dollarFinder found " + foundPrice);
          return foundPrice;
        }
      }
    }
  };

  productPrice = priceFinder();
  console.log("priceFinder found " + productPrice);

  // function to convert price to number
  function priceToNumber(str) {
    let newStr = "";
    for (let char of str) {
      if (Number(char) || Number(char) === 0 || char === ".") {
        newStr += char;
      }
    }
    return Number(newStr.trim());
  }

  //product URL
  let productUrl = window.location.href;
  console.log("URL ", productUrl);
  product.url = productUrl;

  //store Name
  const storeName = (domain) => {
    let first = domain.indexOf(".") + 1;
    let last = domain.lastIndexOf(".");
    let pre = domain.substring(first, last);
    upper = pre.charAt(0).toUpperCase();
    rest = pre.slice(1);
    store = upper + rest;
    console.log(store);
  };

  product.store = storeName(window.location.hostname);

  const imgGetter = () => {
    for (let image of document.images) {
      if (image.height > 500 && !image.src.includes("LOADING")) {
        return image.src;
      }
    }
  };
  const img = imgGetter();
  console.log("************", img);
  product.img = img;

  product.title = productName;
  if (productPrice) {
    product.price = priceToNumber(productPrice);
  }

  // sending a responce to extension with a product object
  console.log(product);
  console.log(
    sender.tab
      ? "from a content script:" + sender.tab.url
      : "from the extension"
  );
  sendResponse({ farewell: product });
});
