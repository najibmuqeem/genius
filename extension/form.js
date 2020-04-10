// let button = document.getElementsByTagName("button")[0];
// let fuck;

// button.addEventListener("click", (event) => {
// 	event.preventDefault();
// 	fuck = document.getElementsByTagName("textarea")[0].value;
// 	chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
// 		chrome.tabs.sendMessage(tabs[0].id, { fuck });
// 	});
// });

document.querySelector(".submit-btn").addEventListener('click', function () {
  document.querySelector("form").classList.add("hidden");
  console.log('1')
  document.querySelector(".after").classList.remove("hidden");
})


// chrome.runtime.onMessage.addListener(response => {
// 	console.log(
// 	responce.greeting
// 	);
// });