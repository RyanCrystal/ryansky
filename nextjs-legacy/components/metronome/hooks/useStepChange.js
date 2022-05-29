// import React from "react";

const useStepChange = (index, changeStepData) => {
  const f = (type) => {
    if (type == "stressFirstBeat") {
      return function (e) {
        changeStepData(index - 1, type, e.target.checked);
      };
    }
    return function (e) {
      changeStepData(index - 1, type, e.target.value);
    };
  };

  return [
    f("measureNumber"),
    f("tempo"),
    f("stressFirstBeat"),
    f("timeSignature")
  ];
};

export default useStepChange;
