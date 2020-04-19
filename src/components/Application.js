import Login from "./Login";
import Categories from "./Categories";
import Friends from "./Friends";
import Purchased from "./Purchased";
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Products from "./Products";
import Api from "./api";

function LoggedInApp(props) {
  return (
    <Router>
      <Switch>
        <Route path="/products">
          <Products id={props.categoryId} getCategoryId={props.getCategoryId} />
        </Route>
        <Route path="/friends">
          <Friends />
        </Route>
        <Route path="/purchased">
          <Purchased />
        </Route>
        <Route path="/picture">
          <Api />
        </Route>
        <Route path="/">
          <Categories
            getCategoryId={props.getCategoryId}
            onButtonClick={() => {
              console.log("click from app");
            }}
          />
        </Route>
      </Switch>
    </Router>
  );
}

export default function Application() {
  const [state, setState] = useState(false);
  const [categoryId, setCategoryId] = useState(0);
  const onClick = () => {
    setState(true);
  };
  const getCategoryId = (id) => {
    console.log(id);
    if (id !== categoryId) {
      setCategoryId(id);
    }
    console.log(id);
  };
  console.log("Application", categoryId);
  return state ? (
    <LoggedInApp getCategoryId={getCategoryId} categoryId={categoryId} />
  ) : (
    <Login onClick={onClick} />
  );
}
