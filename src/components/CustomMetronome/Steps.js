import React from "react";

import Step from "./Step";

import "./Steps.css";

const Steps = (props) => {
  const n = [...Array(props.stepNumber + 1).keys()].slice(1);
  return n.map((m) => <Step key={m} index={m} />);
};

export default Steps;
