import React, { useState } from "react";
import "./RangeSlider.css";
import { Slider, Tooltip, Row, Col, InputNumber } from "antd";
const RangeSlider = ({
  min,
  max,
  defaultValue,
  label,
  step,
  onChange,
  tooltipText,
}) => {
  const [tooltipVisible, setTooltipVisible] = useState(defaultValue !== 0);
  const [value, setValue] = useState(defaultValue);
  const handleOnChange = (value) => {
    setTooltipVisible(true);
    setValue(value);
    onChange(value);
  };
  const marksTemp = {};
  marksTemp[`${min}`] = {
    style: {
      fontSize: "13px",
      fontWeight: " 500",
      color: "#698194",
    },
    label: <span>{min}</span>,
  };
  marksTemp[`${max}`] = {
    style: {
      fontSize: "13px",
      fontWeight: " 500",
      color: "#698194",
    },
    label: <span>{max}</span>,
  };
  const marks = { ...marksTemp };
  const handleOnAfterChange = (value) => {
    //Fire when onmouseup is fired
  };
  return (
    <div className="rangeSlider-contianer">
      <div className="label">
        <p>{label}</p>
        <Tooltip
          placement="top"
          title={tooltipText}
          overlayClassName="icon-tooltip"
        >
          <i className="icon"></i>
        </Tooltip>
      </div>
      <div className="input-range">
        <Row>
          <Col span={20}>
            <Slider
              min={min}
              max={max}
              defaultValue={defaultValue}
              step={step}
              onChange={handleOnChange}
              tooltipVisible={tooltipVisible}
              marks={marks}
              onAfterChange={handleOnAfterChange}
              value={value}
              className="input-range-slider"
            />
          </Col>
          <Col span={4}>
            <InputNumber
              min={min}
              max={max}
              value={value}
              onChange={handleOnChange}
            />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default RangeSlider;
