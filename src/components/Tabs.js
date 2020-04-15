import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Tabs(props) {
  return (
    <ul>
      <li>
        <Link to="/products">
          <h4 onClick={() => props.getCategoryId(1)}>Skirts</h4>
        </Link>

        <Link to="/products">
          <h4 onClick={() => props.getCategoryId(2)}>Furniture</h4>
        </Link>

        <Link to="/products">
          <h4 onClick={() => props.getCategoryId(3)}>Other Clothes</h4>
        </Link>

        <Link to="/products">
          <h4 onClick={() => props.getCategoryId(4)}>Gifts for Friends</h4>
        </Link>
      </li>
    </ul>
  );
}
