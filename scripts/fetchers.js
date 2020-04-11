async function postData(url = "", data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *client
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

const addProduct = (product) => {
  postData("/products", product);
};

const addCategory = (user_id, category_name) => {
  postData("/categories", { user_id, category_name });
};

const addFriends = (user_1_id, user_2_id) => {
  postData("/friends", { user_1_id, user_2_id });
};

const addUser = (username, email, birthday, avatar) => {
  postData("/users", { username, email, birthday, avatar });
};
