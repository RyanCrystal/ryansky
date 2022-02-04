import React, { useState } from "react";
import ReactDOM from "react-dom";
import CustomMetronome from "./CustomMetronome/CustomMetronome";

import Speed from "./Metronome/Speed";

// import "./Metronome.css";

export default function Metronome() {
  const [mode, setMode] = useState("ordinary");
  const customHandler = () => {
    setMode(() => "custom");
  };
  const ordinaryHandler = () => {
    setMode(() => "ordinary");
  };

  return (
    <>
      <div className="mode container">
        <button className="button-3" onClick={ordinaryHandler}>
          Ordinary mode
        </button>
        <button className="button-3" onClick={customHandler}>
          Customized mode
        </button>
      </div>
      {mode == "ordinary" && <Speed />}
      {mode == "custom" && <CustomMetronome />}
    </>
  );
}
