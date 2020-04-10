// 	chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
// 		chrome.tabs.sendMessage(tabs[0].id, { fuck });
// 	});
// });

document.querySelector(".submit-btn").addEventListener('click', function () {
  document.querySelector("form").classList.add("hidden");
  document.querySelector(".after").classList.remove("hidden");
})



  chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    console.log("hi")
    console.log(request)
  });



