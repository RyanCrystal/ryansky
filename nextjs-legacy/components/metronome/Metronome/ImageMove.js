import React, { useState } from "react";
import ReactDom from "react-dom";

// import "./ImageMove.css";

const ImageMove = (props) => {
  const conductor_stick = "../../../img/projects/conductor-stick.png";
  const [hideBaton, setHideBaton] = useState(false);
  if (!props.node) {
    return null;
  }
  const clickHideBatonHandler = () => {
    setHideBaton((prev) => !prev);
  };
  const beat = props.beat;
  const index = props.index;
  let active = false;
  if (beat == 4 && (index == 0 || index == 2)) {
    active = true;
  }
  if (beat == 2 && index == 0) {
    active = true;
  }
  if (beat == 3 && index == 1) {
    active = true;
  }
  let activeBeat3 = false;
  if (beat == 3 && index == 0) {
    activeBeat3 = true;
  }
  // console.log(props.node);

  return ReactDom.createPortal(
    <>
      {!hideBaton && (
        <div className="image-move-container">
          <div className="edge"></div>
          <div className="edge edge2"></div>
          {beat == 3 && <div className="edge edge3"></div>}
          <div
            className={`image-container ${active ? "active" : ""} ${
              activeBeat3 ? "activeBeat3" : ""
            }`}
          >
            <img src={conductor_stick} alt="baton" />
          </div>
        </div>
      )}
      <button
        className="button-3 hide-baton-btn"
        onClick={clickHideBatonHandler}
      >
        {hideBaton ? "Show Baton" : "Hide baton"}
      </button>
    </>,
    props.node
  );
};

export default ImageMove;
