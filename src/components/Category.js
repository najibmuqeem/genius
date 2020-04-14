import React from "react";
import "./components_styles/category.css";
import { Link } from "react-router-dom";
//let classNames = require("classnames");
const id = 1;
export default function Category(props) {
  return (
    <li class="category">
      <Link to={`/products/${id}`}>
        <h4>{props.name}</h4>
        <img src="" width="180" height="180" />
      </Link>
      <p> count: {props.count} </p>
      <p> items sum: ${props.sum / 100} </p>
    </li>
  );
}
