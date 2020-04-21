import Login from "./Login";
import Categories from "./Categories";
import Friends from "./Friends";
import Purchased from "./Purchased";
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Products from "./Products";
import Api from "./api";
import Cookies from "universal-cookie";
const cookies = new Cookies();

function LoggedInApp(props) {
  return (
    <Router>
      <Switch>
        <Route path="/products">
          <Products
            id={props.categoryId}
            getCategoryId={props.getCategoryId}
            logout={props.logout}
          />
        </Route>
        <Route path="/friends">
          <Friends logout={props.logout} />
        </Route>
        <Route path="/purchased">
          <Purchased logout={props.logout} />
        </Route>
        <Route path="/picture">
          <Api logout={props.logout} />
        </Route>
        <Route path="/">
          <Categories
            getCategoryId={props.getCategoryId}
            onButtonClick={() => {
              console.log("click from app");
            }}
            logout={props.logout}
          />
        </Route>
      </Switch>
    </Router>
  );
}

export default function Application() {
  const [categoryId, setCategoryId] = useState(0);
  const onClick = () => {
    cookies.set("noah", "novick", { path: "/" });
    window.location.reload(false);
  };
  const getCategoryId = (id) => {
    console.log(id);
    if (id !== categoryId) {
      setCategoryId(id);
    }
    console.log(id);
  };

  const logout = () => {
    cookies.remove("noah");
    window.location.reload(false);
  };

  console.log("Application", categoryId);
  return cookies.get("noah") ? (
    <LoggedInApp
      getCategoryId={getCategoryId}
      categoryId={categoryId}
      logout={logout}
    />
  ) : (
    <Login onClick={onClick} />
  );
}
