import React from "react";
import { useState, useRef } from "react";

import useLongPress from "../../tools/useLongPress";
import "./Speed.css";

const Speed = () => {
  const [speed, setSpeed] = useState(60);
  const interval = useRef();

  const changeHandler = (e) => {
    setSpeed((prev) => parseInt(e.target.value));
  };

  const onLongPressPlus = () => {
    var time = 200;

    const request = () => {
      clearInterval(interval.current);
      setSpeed((prev) => {
        return prev < 300 ? parseInt(prev) + 1 : prev;
      });
      time = time * 0.95 < 40 ? 40 : time * 0.95;
      console.log(time);
      interval.current = setInterval(request, time);
    };

    interval.current = setInterval(request, time);
  };

  const onClickPlus = () => {
    setSpeed((prev) => parseInt(prev) + 1);
  };

  const onLongPressLeave = () => {
    clearInterval(interval.current);
  };

  const onLongPressMinus = () => {
    var time = 200;

    const request = () => {
      clearInterval(interval.current);
      setSpeed((prev) => {
        return prev > 1 ? parseInt(prev) - 1 : prev;
      });
      time = time * 0.95 < 40 ? 40 : time * 0.95;
      interval.current = setInterval(request, time);
    };

    interval.current = setInterval(request, time);
  };

  const onClickMinus = () => {
    setSpeed((prev) => parseInt(prev) - 1);
  };

  const defaultOptions = {
    shouldPreventDefault: true,
    delay: 500,
  };
  const longPressEventPlus = useLongPress(
    onLongPressPlus,
    onClickPlus,
    onLongPressLeave,
    defaultOptions
  );

  const longPressEventMinus = useLongPress(
    onLongPressMinus,
    onClickMinus,
    onLongPressLeave,
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
            max="260"
            onChange={changeHandler}
            value={speed}
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
