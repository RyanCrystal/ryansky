import React from "react";
import { useState } from "react";

import Steps from "./Steps";
import "./CustomMetronome.css";

const CustomMetronome = () => {
  const [stepNumber, setStepNumber] = useState(1);
  const addStep = () => {
    setStepNumber((prev) => prev + 1);
  };
  return (
    <div className="container">
      <h1>Customize Metronome</h1>
      <button className="add-step-btn" onClick={addStep}>
        Add Step
      </button>
      <Steps stepNumber={stepNumber} />
    </div>
  );
};

export default CustomMetronome;
