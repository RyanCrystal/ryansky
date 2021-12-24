import React, { useEffect, useRef, useReducer } from "react";
import { useState } from "react";

import Steps from "./Steps";
import "./CustomMetronome.css";

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

  const playCustomMetronome = () => {};

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
      <div className="action-btns">
        <button onClick={playCustomMetronome}>Play</button>
      </div>
    </div>
  );
};

export default CustomMetronome;
