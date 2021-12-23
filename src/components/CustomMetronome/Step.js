import React from "react";

const Step = (props) => {
  return (
    <div className="step-container">
      <h4>Step 1</h4>
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
        <input type="number" />
      </div>
      <div className="tempo">
        <div>Tempo</div>
        <input type="number" />
      </div>
      <div className="accent">
        <div>Stress First Beat</div>
        <input type="checkbox" />
      </div>
      <button className="add-step-btn" onClick={props.addStep}>
        Add Step
      </button>
    </div>
  );
};

export default Step;
