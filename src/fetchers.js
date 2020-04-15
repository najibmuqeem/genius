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

async function getData(url = "", data = {}) {
  //Default options are marked with *

  const response = await fetch(url, {
    //method: "GET", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "omit", // include, *same-origin, omit
    // headers: {
    //   "Content-Type": "application/json",
    //   // 'Content-Type': 'application/x-www-form-urlencoded',
    // },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *client
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

const addProduct = (product) => {
  postData("http://localhost:8000/products", product);
};

const addCategory = (user_id, category_name) => {
  postData("http://localhost:8000/categories", { user_id, category_name });
};

const addFriends = (user_1_id, user_2_id) => {
  postData("http://localhost:8000/friends", { user_1_id, user_2_id });
};

const addUser = (username, email, birthday, avatar) => {
  postData("http://localhost:8000/users", {
    username,
    email,
    birthday,
    avatar,
  });
};

const getProductsForCategory = (user_id, category_id) => {
  return getData(`http://localhost:8000/products/c/${category_id}`, {
    user_id,
  });
};

const getCategoriesForUser = (user_id) => {
  return getData(`http://localhost:8000/categories/${user_id}`);
};

const getProductsForUser = (user_id) => {
  return getData(`http://localhost:8000/products/u/${user_id}`);
};

const editProduct = (product) => {
  return postData(`http://localhost:8000/products/edit`, product);
};

export {
  addProduct,
  addCategory,
  addFriends,
  addUser,
  getProductsForCategory,
  getCategoriesForUser,
  getProductsForUser,
  editProduct,
};
