 let myRequest = new Request(
		"http:///localhost:8000/categories/1"
 );

fetch(myRequest)
	.then(function (response) {
		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
    }
    response.json().then(function (data) {
      for (let i in data) {
        let option = document.createElement("option");
        option.value=data[i].id;
        option.innerText = data[i].category_name;
        document.querySelector(".filter-category").appendChild(option)
      }
		});
	})

