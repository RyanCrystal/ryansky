import React, { useEffect, useRef, useReducer } from "react";
import { useState } from "react";

import Steps from "./Steps";
import "./CustomMetronome.css";
import Sounds from "../../Helper/Sounds";
import IconList from "../Metronome/IconList";
import BufferLoader from "../../Helper/function";

const initState = {
  stepsData: [
    {
      timeSignature: "4/4",
      measureNumber: 4,
      tempo: 110,
      stressFirstBeat: true,
      beat: 4
    }
  ],
  currentStepIndex: 0,
  beatCount: -1,
  currentStepCount: -1
};
const stepsTotalDataReducer = (state, action) => {
  let newState;
  switch (action.type) {
    case "change":
      newState = { ...state };
      let index = action.data.index;
      let field = action.data.field;
      let value = action.data.value;
      newState.stepsData[index][field] = value;
      if (field == "timeSignature") {
        newState.stepsData[index]["beat"] = parseInt(value[0]);
      }

      break;
    case "add_step":
      newState = { ...state };

      newState.stepsData.push({
        timeSignature: "4/4",
        measureNumber: 4,
        tempo: 110,
        stressFirstBeat: true,
        beat: 4
      });
      break;
    case "delete_step":
      newState = { ...state };
      newState.stepsData.splice(action.data.index, 1);
      break;
    case "changeBeatCount":
      newState = { ...state };
      newState.beatCount = newState.beatCount + 1;
      newState.currentStepCount = newState.currentStepCount + 1;
      break;
    case "playNextStep":
      newState = { ...state };
      newState.currentStepIndex = newState.currentStepIndex + 1;
      newState.currentStepCount = -1;
      break;
    case "reset":
      newState = {
        stepsData: [
          {
            timeSignature: "4/4",
            measureNumber: 4,
            tempo: 110,
            stressFirstBeat: true,
            beat: 4
          }
        ],
        currentStepIndex: 0,
        beatCount: -1,
        currentStepCount: -1
      };

    default:
      break;
  }
  return newState;
};

const CustomMetronome = () => {
  const [stepsTotalData, dispatch] = useReducer(
    stepsTotalDataReducer,
    initState
  );

  const bufferLoader = useRef();
  const interval = useRef();

  const context = useRef();
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (isPlaying) {
      playBufferList(bufferLoader.current.bufferList);
    } else {
      clearInterval(interval.current);
    }
  }, [isPlaying, stepsTotalData.beatCount]);

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
    if (stepsTotalData.beatCount != -1 || isPlaying) {
      interval.current = setInterval(() => {
        play(bufferList);
      }, 60000 / stepsTotalData.stepsData[stepsTotalData.currentStepIndex].tempo);
    }
  };

  const play = (bufferList) => {
    var source1 = context.current.createBufferSource();
    source1.buffer = bufferList[0];
    source1.connect(context.current.destination);

    var source2 = context.current.createBufferSource(); // accent
    source2.buffer = bufferList[1];
    source2.connect(context.current.destination);
    let sum = 0;
    for (let i = 0; i <= stepsTotalData.currentStepIndex; i++) {
      sum +=
        stepsTotalData.stepsData[i].beat *
        stepsTotalData.stepsData[i].measureNumber;
    }
    sum = sum - 2;
    if (
      stepsTotalData.stepsData[stepsTotalData.currentStepIndex]
        .stressFirstBeat &&
      (stepsTotalData.currentStepCount +
        stepsTotalData.stepsData[stepsTotalData.currentStepIndex].beat) %
        stepsTotalData.stepsData[stepsTotalData.currentStepIndex].beat ==
        stepsTotalData.stepsData[stepsTotalData.currentStepIndex].beat - 1
    ) {
      source2.start(0);
    } else {
      source1.start(0);
    }

    dispatch({
      type: "changeBeatCount"
    });

    if (stepsTotalData.beatCount == sum) {
      if (
        stepsTotalData.currentStepIndex + 1 <
        stepsTotalData.stepsData.length
      ) {
        dispatch({
          type: "playNextStep"
        });
      } else {
        setIsPlaying((prev) => !prev);
      }
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

  const resetCustomMetronome = () => {
    dispatch({
      type: "reset"
    });
  };

  return (
    <div className="container">
      <h1>Customize Metronome</h1>
      <button className="add-step-btn button-3" onClick={addStep}>
        Add Step
      </button>
      <Steps
        stepsTotalData={stepsTotalData}
        changeStepsData={changeStepsData}
        deleteStep={deleteStep}
      />
      <IconList
        beat={stepsTotalData.stepsData[stepsTotalData.currentStepIndex].beat}
        index={
          stepsTotalData.currentStepCount %
          stepsTotalData.stepsData[stepsTotalData.currentStepIndex].beat
        }
      />

      <div className="action-btns">
        <button onClick={playCustomMetronome} className="play-cus-btn button-1">
          {isPlaying ? "Pause" : "Play"}
        </button>
        <button
          onClick={resetCustomMetronome}
          disabled={isPlaying}
          className="button-1"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default CustomMetronome;
