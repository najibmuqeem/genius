import React from "react";

export default function Category(props) {
  return (
    <div>
      <h4>
        {props.name} count: {props.count} items sum: ${props.sum / 100}
      </h4>
    </div>
  );
}
