import React, { useEffect, useRef, useReducer } from "react";
import { useState } from "react";

import Steps from "./Steps";
import "./CustomMetronome.css";
import Sounds from "../../Helper/Sounds";
import IconList from "../Metronome/IconList";
import BufferLoader from "../../Helper/function";

const stepsTotalDataReducer = (state, action) => {
  let newState;
  switch (action.type) {
    case "change":
      newState = { ...state };
      let index = action.data.index;
      let field = action.data.field;
      let value = action.data.value;
      newState.stepsData[index][field] = value;
      break;
    case "add_step":
      newState = { ...state };
      newState.stepNumber = state.stepNumber + 1;
      newState.stepsData.push({
        timeSignature: "4/4",
        measureNumber: 4,
        tempo: 110,
        stressFirstBeat: true
      });
      break;
    case "delete_step":
      newState = { ...state };
      newState.stepNumber = state.stepNumber - 1;
      newState.stepsData.splice(action.data.index, 1);

      break;
    default:
      break;
  }
  return newState;
};

const CustomMetronome = () => {
  const [stepsTotalData, dispatch] = useReducer(stepsTotalDataReducer, {
    stepNumber: 1,
    stepsData: [
      {
        timeSignature: "4/4",
        measureNumber: 4,
        tempo: 110,
        stressFirstBeat: true
      }
    ]
  });

  const bufferLoader = useRef();
  const interval = useRef();
  let beatCount = useRef();
  let beat = useRef();
  let speed = useRef();
  const context = useRef();
  let stressFirstBeat = useRef();
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (isPlaying) {
      playBufferList(bufferLoader.current.bufferList);
    } else {
      clearInterval(interval.current);
    }
  }, [isPlaying]);

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
    beatCount.current =
      stepsTotalData.stepsData[0].measureNumber *
      parseInt(stepsTotalData.stepsData[0].timeSignature[0]);
    beat.current = parseInt(stepsTotalData.stepsData[0].timeSignature[0]);
    speed.current = stepsTotalData.stepsData[0].tempo;
    stressFirstBeat.current = stepsTotalData.stepsData[0].stressFirstBeat;
    console.log(beat.current);
  };

  const playBufferList = (bufferList) => {
    clearInterval(interval.current);
    if (beatCount.current != -1 || isPlaying) {
      interval.current = setInterval(() => {
        play(bufferList);
        console.log(beat.current);
        console.log(beatCount.current);
      }, 60000 / speed.current);
    }
  };

  const play = (bufferList) => {
    var source1 = context.current.createBufferSource();
    source1.buffer = bufferList[0];
    source1.connect(context.current.destination);

    var source2 = context.current.createBufferSource(); // accent
    source2.buffer = bufferList[1];
    source2.connect(context.current.destination);

    // setIndex((prev) => (prev + 1) % beat);
    beatCount.current = (beatCount.current + 1) % beat.current;

    if (
      stressFirstBeat.current &&
      (beatCount.current + beat.current) % beat.current == beat.current - 1
    ) {
      source2.start(0);
    } else {
      source1.start(0);
    }
  };

  const addStep = () => {
    dispatch({
      type: "add_step"
    });
  };

  const changeStepsData = (index, field, value) => {
    dispatch({
      type: "change",
      data: {
        index: index,
        field: field,
        value: value
      }
    });
  };

  const deleteStep = (index) => {
    dispatch({
      type: "delete_step",
      data: {
        index: index
      }
    });
  };

  const playCustomMetronome = () => {
    setIsPlaying((prev) => !prev);
  };

  return (
    <div className="container">
      <h1>Customize Metronome</h1>
      <button className="add-step-btn" onClick={addStep}>
        Add Step
      </button>
      <Steps
        stepsTotalData={stepsTotalData}
        changeStepsData={changeStepsData}
        deleteStep={deleteStep}
      />
      <IconList beat={beat.current} index={beatCount.current} />

      <div className="action-btns">
        <button onClick={playCustomMetronome}>Play</button>
      </div>
    </div>
  );
};

export default CustomMetronome;
