import React from "react";

import Step from "./Step";

import "./Steps.css";

const Steps = (props) => {
  const n = [...Array(props.stepsTotalData.stepNumber + 1).keys()].slice(1);
  return n.map((m) => (
    <Step
      key={m}
      index={m}
      stepData={props.stepsTotalData.stepsData[m - 1]}
      changeStepsData={props.changeStepsData}
      deleteStep={props.deleteStep}
    />
  ));
};

export default Steps;
