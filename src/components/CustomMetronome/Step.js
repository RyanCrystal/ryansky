import React from "react";

const Step = (props) => {
  return (
    <div className="step-container">
      <h4>Step {props.index}</h4>
      <div className="time-signature">
        <div>Time signature</div>
        <select>
          <option>4/4</option>
          <option>2/4</option>
          <option>3/4</option>
        </select>
      </div>
      <div className="measures-numbers">
        <div>Measure numbers</div>
        <input type="number" value="3" />
      </div>
      <div className="tempo">
        <div>Tempo</div>
        <input type="number" value="110" />
      </div>
      <div className="accent">
        <div>Stress First Beat</div>
        <input type="checkbox" />
      </div>
    </div>
  );
};

export default Step;
