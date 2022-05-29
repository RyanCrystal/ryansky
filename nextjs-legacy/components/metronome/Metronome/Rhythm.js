import React, { useState, useRef, useEffect } from "react";
import BufferLoader from "../Helper/function";

import IconList from "./IconList";
import ImageMove from "./ImageMove";
import Sounds from "../Helper/Sounds";
// import "./Rhythm.css";

const Rhythm = (props) => {
  const speed = props.speed;
  const isLongPressing = props.isLongPressing;
  const [isPlaying, setIsPlaying] = useState(false);
  const reached = useRef(true);
  const timeout = useRef();
  const interval = useRef();
  const [index, setIndex] = useState(-1);
  const [beat, setBeat] = useState(4);
  const [stressFirstBeat, setStressFirstBeat] = useState(true);
  const beatRange = [2, 3, 4, 5, 6];
  const bufferLoader = useRef();
  const context = useRef();

  if (!props.node && typeof window !== "undefined") {
    document.addEventListener("keyup", (e) => {
      if (e.key === " ") {
        onClickHandler(e);
        console.log("document space triggered");
      }
    });
  }

  useEffect(() => {
    return () => {
      console.log("unmounted");
      clearInterval(interval.current);
      clearTimeout(timeout.current);
    };
  }, []);

  useEffect(() => {
    if (isPlaying) {
      playBufferList(bufferLoader.current.bufferList);
    } else {
      clearInterval(interval.current);
      clearTimeout(timeout.current);
    }
  }, [speed, isPlaying, isLongPressing, index]);

  useEffect(() => {
    init();
  }, []);

  const init = () => {
    window.AudioContext = window.AudioContext || window.webkitAudioContext;
    context.current = new AudioContext();
    let r, r2;
    ({ r, r2 } = Sounds());

    bufferLoader.current = new BufferLoader(
      context.current,
      [r2, r],
      playBufferList
    );
    bufferLoader.current.load();
  };

  const playBufferList = (bufferList) => {
    clearInterval(interval.current);
    if (index != -1 || isPlaying) {
      interval.current = setInterval(() => {
        play(bufferList);
      }, 60000 / speed);
    }

    if (isLongPressing && reached.current) {
      timeout.current = setTimeout(() => {
        reached.current = true;
        play(bufferList);
      }, 60000 / speed);
      reached.current = false;
    }

    if (!isLongPressing) {
      clearTimeout(timeout.current);
      reached.current = true;
    }
  };

  const play = (bufferList) => {
    var source1 = context.current.createBufferSource();
    source1.buffer = bufferList[0];
    source1.connect(context.current.destination);
    // source1.start(0);

    var source2 = context.current.createBufferSource(); // accent
    source2.buffer = bufferList[1];
    source2.connect(context.current.destination);
    // source2.start(0);

    setIndex((prev) => (prev + 1) % beat);

    if (stressFirstBeat && (index + beat) % beat == beat - 1) {
      source2.start(0);
    } else {
      source1.start(0);
    }
  };

  const onClickHandler = (e) => {
    if (e.key == " ") {
      e.preventDefault();
    }
    console.log("click triggered");
    setIsPlaying((prev) => !prev);
  };

  const handleStressChange = (e) => {
    if (e.key === " ") {
      e.preventDefault();

      return;
    }
    setStressFirstBeat((prev) => !prev);
  };

  const onDecreaseBeatHandler = () => {
    setBeat((prev) => (beatRange.includes(prev - 1) ? prev - 1 : prev));
  };

  const onIncreaseBeatHandler = () => {
    setBeat((prev) => (beatRange.includes(prev + 1) ? prev + 1 : prev));
  };
  return (
    <div>
      <ImageMove index={index} beat={beat} node={props.node} />

      <IconList beat={beat} index={index} />

      <div className="play-btn" onClick={onClickHandler}>
        <div className={`button ${isPlaying ? "paused" : ""}`}></div>
      </div>
      <hr />
      <div className="tools-container">
        <div className="first-beat-checkbox">
          <label>
            Stress First Beat
            <br />
            第一拍重拍
            <input
              type="checkbox"
              checked={stressFirstBeat}
              onChange={handleStressChange}
              onKeyUp={handleStressChange}
            />
            <span className="checkmark"></span>
          </label>
        </div>
        <div className="beat-container">
          <div className="small-minus" onClick={onDecreaseBeatHandler}>
            <span>-</span>
          </div>
          <div className="beat">{beat}</div>
          <div className="small-plus" onClick={onIncreaseBeatHandler}>
            <span>+</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rhythm;

// https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API
