import React, { useState } from "react";
import ReactDOM from "react-dom";
import CustomMetronome from "./components/CustomMetronome/CustomMetronome";

import ExpenseItem from "./components/ExpenseItem";
import Speed from "./components/Metronome/Speed";

import "./App.css";

export default function App() {
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
