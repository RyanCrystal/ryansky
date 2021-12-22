import React from "react";
import { useState, useRef } from "react";

import useLongPress from "../../tools/useLongPress";
import "./Speed.css";

import "./Rhythm";
import Rhythm from "./Rhythm";

const Speed = () => {
  const [speed, setSpeed] = useState(60);
  const [isLongPressing, setIsLongPressing] = useState(false);
  const interval = useRef();

  const changeHandler = (e) => {
    setSpeed((prev) => parseInt(e.target.value));
  };

  const onLongPressPlus = () => {
    setIsLongPressing(true);
    var time = 200;

    const request = () => {
      clearInterval(interval.current);
      setSpeed((prev) => {
        return prev < 260 ? parseInt(prev) + 1 : prev;
      });
      time = time * 0.95 < 40 ? 40 : time * 0.95;
      interval.current = setInterval(request, time);
    };

    interval.current = setInterval(request, time);
  };

  const onClickPlus = () => {
    setSpeed((prev) => {
      return prev < 260 ? parseInt(prev) + 1 : prev;
    });
  };

  const onLongPressLeave = () => {
    setIsLongPressing(false);

    clearInterval(interval.current);
  };

  const onLongPressMinus = () => {
    setIsLongPressing(true);

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
    delay: 200,
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
      <div className="speed">{speed}</div>
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
      <Rhythm speed={speed} isLongPressing={isLongPressing} />
    </div>
  );
};

export default Speed;
