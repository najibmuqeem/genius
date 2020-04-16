chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
  chrome.tabs.sendMessage(tabs[0].id, { greeting: "hello" }, function (
    response
  ) {
    document.querySelector("#title").value = response.farewell.title;
    document.querySelector("#price").value = "$" + response.farewell.price;
    document.querySelector("#url").value = response.farewell.url;
    document.querySelector("#store").value = response.farewell.store;
    document.querySelector("#img").src = response.farewell.img;
    document.querySelector("#img_src").value = response.farewell.img;
  });

  document.querySelector("form").addEventListener("submit", function () {
    document.querySelector("form").classList.add("hidden");
    document.querySelector(".after").classList.remove("hidden");
  });
});
