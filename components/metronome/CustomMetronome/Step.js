import React from "react";
import useStepChange from "../hooks/useStepChange";

// import "./Step.css";
const Step = (props) => {
  const changeStepData = props.changeStepsData;
  const deleteStep = props.deleteStep;
  const index = props.index;
  // const onChangeMeasureHandler = (e) => {
  //   changeStepData(props.index - 1, "measureNumber", parseInt(e.target.value));
  // };
  // const onChangeTempoHandler = (e) => {
  //   changeStepData(props.index - 1, "tempo", parseInt(e.target.value));
  // };
  // const onChangeSressFirstBeat = (e) => {
  //   changeStepData(props.index - 1, "stressFirstBeat", e.target.checked);
  // };
  // const onChangeTimeSignature = (e) => {
  //   changeStepData(props.index - 1, "timeSignature", e.target.value);
  // };
  const [
    onChangeMeasureHandler,
    onChangeTempoHandler,
    onChangeSressFirstBeat,
    onChangeTimeSignature
  ] = useStepChange(index, changeStepData);

  const onDeleteStepHandler = () => {
    deleteStep(index - 1);
  };
  return (
    <div className="step-container">
      <h4>Step {props.index}</h4>
      <div className="time-signature">
        <div>Time signature</div>
        <select
          className="form-control"
          value={props.stepData.timeSignature}
          onChange={onChangeTimeSignature}
        >
          <option value="4/4">4/4</option>
          <option value="2/4">2/4</option>
          <option value="3/4">3/4</option>
        </select>
      </div>
      <div className="measures-numbers">
        <div>Measure numbers</div>
        <input
          type="number"
          className="form-control"
          value={props.stepData.measureNumber}
          onChange={onChangeMeasureHandler}
          min="4"
          max="200"
        />
      </div>
      <div className="tempo">
        <div>Tempo</div>
        <input
          type="number"
          className="form-control"
          value={props.stepData.tempo}
          onChange={onChangeTempoHandler}
          min="60"
          max="150"
        />
      </div>
      <div className="accent">
        <div>Stress First Beat</div>
        <input
          type="checkbox"
          className="form-control"
          checked={props.stepData.stressFirstBeat}
          onChange={onChangeSressFirstBeat}
        />
      </div>
      {index > 1 && (
        <div className="delete-step-btn" onClick={onDeleteStepHandler}>
          <button className="button-3 button-delete">Delete</button>
        </div>
      )}
    </div>
  );
};

export default Step;
