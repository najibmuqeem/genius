import Login from "./Login";
import Categories from "./Categories";
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Products from "./Products";

function LoggedInApp() {
  return (
    <Router>
      <Switch>
        <Route path="/categories">
          <Categories />
        </Route>
        <Route path="/products">
          <Products />
        </Route>
      </Switch>
    </Router>
  );
}

export default function Application() {
  const [state, setState] = useState(true);
  const onClick = () => {
    setState(true);
  };
  return state ? <LoggedInApp /> : <Login onClick={onClick} />;
}
