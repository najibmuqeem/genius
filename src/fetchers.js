async function uploadData(url = "", data = {}, config) {
  // Default options are marked with *
  console.log("data", data);
  const response = await fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    // headers: {
    //   "Content-Type": "application/json",
    //   // 'Content-Type': 'application/x-www-form-urlencoded',
    // },
    headers: {
      "content-type": "multipart/form-data",
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *client
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}
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
  return; //response.json(); // parses JSON response into native JavaScript objects
}
async function editData(url = "", data = {}) {
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

async function deleteData(url = "", data = {}) {
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
  return; //response.json(); // parses JSON response into native JavaScript objects
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
  //console.log(product);
  return postData("http://localhost:8000/products", product);
};

const addCategory = (user_id, category_name, category_public) => {
  return editData("http://localhost:8000/categories", {
    user_id,
    category_name,
    category_public,
  });
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

const getPurchased = (user_id) => {
  return getData(`http://localhost:8000/products/purchase-history`);
};

const getProductsForUser = (user_id) => {
  return getData(`http://localhost:8000/products/friends`);
};

const editProduct = (product) => {
  return editData(`http://localhost:8000/products/edit`, product);
};

const deleteProduct = (product_id) => {
  return deleteData("http://localhost:8000/products/delete", { product_id });
};

const markPurchased = (product_id) => {
  return postData("http://localhost:8000/products/purchased", { product_id });
};

const unmarkPurchased = (product_id) => {
  return postData("http://localhost:8000/products/unpurchased", { product_id });
};

const postPicture = (picture, config) => {
  return uploadData("http://localhost:8000/picture", picture, config);
};

const getFriendsForUser = (user_id) => {
  return getData(`http://localhost:8000/friends`, {
    user_id,
  });
};

const filterByPrice = (user_id, category_id, min_price, max_price) => {
  return getData(
    `http://localhost:8000/filter/${user_id}/${category_id}/${min_price}/${max_price}`
  );
};

export {
  addProduct,
  addCategory,
  addFriends,
  addUser,
  getProductsForCategory,
  getCategoriesForUser,
  getProductsForUser,
  deleteProduct,
  markPurchased,
  unmarkPurchased,
  editProduct,
  getPurchased,
  getFriendsForUser,
  filterByPrice,
  postPicture,
};
