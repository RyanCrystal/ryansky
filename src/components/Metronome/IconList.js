import React from "react";

const IconList = (props) => {
  const n = [...Array(props.beat + 1).keys()].slice(1);

  return n.map((m) => (
    <div
      key={m}
      className={`icon ${props.index == m - 1 ? "active" : ""}`}
    ></div>
  ));
};

export default IconList;
