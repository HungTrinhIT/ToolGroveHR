import React, { useState } from "react";
import "./App.css";
import TurnoverRate from "./Components/TurnoverRate";
import ResultBox from "./Components/ResultBox";
import SplitPane from "./Components/SplitPane/index";
import Signup from "./Components/FormSignUp";
import validator from "./services/validator";
import ToolContent from "./Components/ToolContent";

const App = () => {
  // Rate is turnover rate
  const [rate, setRate] = useState(0);
  const [done, setDone] = useState(false);
  const handleTurnOverRate = (value) => {
    setRate(value);
  };
  const handleDone = (value) => {
    setDone(value);
  };
  return (
    <div className="App">
      <SplitPane
        left={<TurnoverRate handleTurnOverRate={handleTurnOverRate} />}
        right={
          !done ? (
            <Signup validate={validator} handleDone={handleDone} />
          ) : (
            <ResultBox rate={rate} />
          )
        }
      />
      <SplitPane left={<ToolContent />} right="" />
    </div>
  );
};

export default App;
