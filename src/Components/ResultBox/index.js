import React from "react";
import "./ResultBox.css";
import ButtonGrove from "../Button";
const ResultBox = ({ rate }) => {
  return (
    <div className="result-box">
      <h2>Here is your Annual Turnover Rate </h2>
      <p className="rate-result">{rate}%</p>
      <p>Reduce your turnover rate with our employee-first platform </p>
      <a
        href="https://portal.grovehr.com/sign-up"
        target="_blank"
        rel="noopener noreferrer"
      >
        <ButtonGrove label="Signup now" type="button" />
      </a>
      <p className="quote">It’s 100% free, forever</p>
    </div>
  );
};

export default ResultBox;
