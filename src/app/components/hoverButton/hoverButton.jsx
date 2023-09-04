import React from "react";
import "./hoverButton.css";

const HoverButton = () => {
  return (
    <button className="button">
      <span className="actual-text">&nbsp;see project&nbsp;</span>
      <span className="hover-text" aria-hidden="true">
        &nbsp;see&nbsp;project&nbsp;
      </span>
    </button>
  );
};

export default HoverButton;
