import React from "react";
import { useState } from "react";

import useLongPress from "../../tools/useLongPress";
import "./Speed.css";

const Speed = () => {
  const [speed, setSpeed] = useState(60);
  const changeHandler = (e) => {
    setSpeed((prev) => e.target.value);
  };
  const decreaseSpeedHandler = () => {
    setSpeed((prev) => prev - 1);
  };
  const increaseSpeedHandler = () => {
    setSpeed((prev) => prev + 1);
  };

  const onLongPressPlus = () => {
    console.log("longpress plus is triggered");
  };

  const onClickPlus = () => {
    console.log("click plus is triggered");
  };

  const onLongPressMinus = () => {
    console.log("longpress minus is triggered");
  };

  const onClickMinus = () => {
    console.log("click minus is triggered");
  };

  const defaultOptions = {
    shouldPreventDefault: true,
    delay: 500,
  };
  const longPressEventPlus = useLongPress(
    onLongPressPlus,
    onClickPlus,
    defaultOptions
  );

  const longPressEventMinus = useLongPress(
    onLongPressMinus,
    onClickMinus,
    defaultOptions
  );
  return (
    <div className="text-center">
      <h1>{speed}</h1>
      <div className="speedometer">
        <div className="minus" {...longPressEventMinus}>
          <span>-</span>
        </div>
        <div className="speedometer-bar">
          <input
            type="range"
            min="20"
            max="300"
            onChange={changeHandler}
            defaultValue={speed}
          />
        </div>
        <div className="plus" {...longPressEventPlus}>
          <span>+</span>
        </div>
      </div>
    </div>
  );
};

export default Speed;
