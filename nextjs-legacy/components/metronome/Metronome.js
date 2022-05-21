import React, { useState } from "react";
import ReactDOM from "react-dom";
import CustomMetronome from "./CustomMetronome/CustomMetronome";

import Speed from "./Metronome/Speed";

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
      <div className="metronome_mode metronome_container">
        <button
          onClick={ordinaryHandler}
          className={`button-3 mode-button ${
            mode == "ordinary" ? "active" : ""
          }`}
        >
          Ordinary mode
        </button>
        <button
          onClick={customHandler}
          className={`button-3 mode-button ${mode == "custom" ? "active" : ""}`}
        >
          Customized mode
        </button>
      </div>
      {mode == "ordinary" && <Speed />}
      {mode == "custom" && <CustomMetronome />}
      <style global jsx>{`
        body {
          background-color: #6fa3d1;
          background-image: none;
        }
        body:before {
          background: none;
        }
      `}</style>
    </>
  );
}
