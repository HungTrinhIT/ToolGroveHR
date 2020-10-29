import React, { Component } from "react";
import RangeSlider from "../RangeSlider";
import "./TurnoverRate.css";
export default class TurnoverRate extends Component {
  state = {
    begin: 0,
    end: 0,
    leaving: 0,
  };
  handleOnChange = (key) => (value) => {
    this.setState(
      {
        [key]: value,
      },
      () => {
        const { begin, end, leaving } = this.state;
        let rate = (leaving / ((begin + end) / 2)) * 100;
        this.props.handleTurnOverRate(rate.toFixed(1));
      }
    );
  };
  render() {
    return (
      <div>
        <div className="turnover-rate" style={{ marginBottom: "40px" }}>
          <span className="icon user-icon" style={{ marginRight: "18px" }}>
            
          </span>
          <span className="section-title">Employee Turnover Rate </span>
        </div>
        <RangeSlider
          min={0}
          max={2000}
          step={1}
          defaultValue={0}
          label="Beginning number of employees"
          tooltipText="Beginning number of employees"
          onChange={this.handleOnChange("begin")}
        />
        <RangeSlider
          min={0}
          max={2000}
          step={1}
          defaultValue={0}
          label="Ending number of employees"
          tooltipText="Ending number of employees"
          onChange={this.handleOnChange("end")}
        />
        <RangeSlider
          min={0}
          max={2000}
          step={1}
          defaultValue={0}
          label="Leaving number of employees"
          tooltipText="Leaving number of employees"
          onChange={this.handleOnChange("leaving")}
        />
      </div>
    );
  }
}
