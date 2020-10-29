import React from "react";

import "./SplitPane.css";
const sectionBorderStyle = {
  borderRadius: "4px",
  border: "solid 1px #e3ebf1",
  backgroundColor: "#ffffff",
  padding: "32px",
};
const SplitPane = ({ left, right }) => {
  return (
    <div className="splitpane-container" style={{ marginBottom: "32px" }}>
      {left ? (
        <div className="splitpane-left" style={sectionBorderStyle}>
          {left}
        </div>
      ) : (
        ""
      )}
      {right ? (
        <div className="splitpane-right" style={sectionBorderStyle}>
          {right}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default SplitPane;
