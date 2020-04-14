import React from "react";
import "./components_styles/category.css";
//let classNames = require("classnames");

export default function Category(props) {
  return (
    <li class="category">
      <h4>{props.name}</h4>
      <img src="" width="180" height="180" />
      <p> count: {props.count} </p>
      <p> items sum: ${props.sum / 100} </p>
    </li>
  );
}
