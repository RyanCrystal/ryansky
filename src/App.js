import React from "react";
import ReactDOM from "react-dom";
import CustomMetronome from "./components/CustomMetronome/CustomMetronome";

import ExpenseItem from "./components/ExpenseItem";
import Speed from "./components/Metronome/Speed";

export default function App() {
  return (
    <>
      <Speed />
      <CustomMetronome />
    </>
  );
}
