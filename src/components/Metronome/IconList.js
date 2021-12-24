import React from "react";

const IconList = (props) => {
  if (isNaN(props.beat)) {
    return null;
  }
  const n = [...Array(props.beat + 1).keys()].slice(1);

  return (
    <div className="metronome-icons">
      {n.map((m) => (
        <div
          key={m}
          className={`icon ${props.index == m - 1 ? "active" : ""}`}
        ></div>
      ))}
    </div>
  );
};

export default IconList;
