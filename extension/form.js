  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
		chrome.tabs.sendMessage(tabs[0].id, { greeting: "hello" }, function (
			response
		) {
      //console.log(response.farewell.title);
      document.querySelector("#title").value = response.farewell.title;
      //document.querySelector("#price").value = response.farewell.price;
    });
    

    document
			.querySelector(".submit-btn")
			.addEventListener("click", function () {
				document.querySelector("form").classList.add("hidden");
				document.querySelector(".after").classList.remove("hidden");
			});
	});

  


