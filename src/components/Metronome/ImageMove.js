import React from "react";
import ReactDom from "react-dom";

import img from "../../../public/images/conductor-stick.png";

import "./ImageMove.css";

const ImageMove = (props) => {
  const beat = props.beat;
  const index = props.index;
  let active = false;
  if (beat == 4 && (index == 0 || index == 2)) {
    active = true;
  }
  if (beat == 2 && index == 0) {
    active = true;
  }
  if (beat == 3 && index == 0) {
    active = true;
  }
  let activeBeat3 = false;
  if (beat == 3 && index == 1) {
    activeBeat3 = true;
  }
  // console.log(props.node);
  if (!props.node) {
    return null;
  }
  return ReactDom.createPortal(
    <div className="image-move-container">
      <div className="edge"></div>
      <div className="edge edge2"></div>
      {beat == 3 && <div className="edge edge3"></div>}
      <div
        className={`image-container ${active ? "active" : ""} ${
          activeBeat3 ? "activeBeat3" : ""
        }`}
      >
        <img src={img} alt="baton" />
      </div>
    </div>,
    props.node
  );
};

export default ImageMove;
