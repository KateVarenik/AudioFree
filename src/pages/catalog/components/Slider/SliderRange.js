import "./SliderRange.css";
import Slider from "@material-ui/core/Slider";
import { useState } from "react";
import { Input } from "@material-ui/core";

function valuetext(value) {
  return value + "₽";
}

export default function SliderRange() {
  const [value, setValue] = useState([499, 8499]);
  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleInputChange = (index) => (event) => {
    setValue((prevValue) => {
      const currentValue =
        event.target.value === "" ? "" : Number(event.target.value);

      return index === 0
        ? [currentValue, prevValue[1]]
        : [prevValue[0], currentValue];
    });
  };
  const handleBlur = () => {
    if (value < 0) {
      setValue(0);
    } else if (value > 12000) {
      setValue(12000);
    }
  };

  return (
    <div className="slider-range">
      <div className="slider-range__inputs">
        <Input
          className="slider-range__input"
          value={value[0]}
          // value={value[0] + " ₽"}
          onChange={handleInputChange(0)}
          onBlur={handleBlur}
          disableUnderline={true}
          // readOnly={true}
          inputProps={{
            step: 100,
            min: 0,
            max: 12000,
            type: "number",
            "aria-labelledby": "input-slider",
          }}
        />
        &ndash;
        <Input
          className="slider-range__input"
          value={value[1]}
          // value={value[1] + " ₽"}
          disableUnderline={true}
          onChange={handleInputChange(1)}
          onBlur={handleBlur}
          // readOnly={true}
          inputProps={{
            step: 100,
            min: 0,
            max: 12000,
            type: "number",
            "aria-labelledby": "input-slider",
          }}
        />
      </div>

      <Slider
        className="slider-range__slider"
        value={value}
        onChange={handleSliderChange}
        aria-labelledby="range-slider"
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        getAriaLabel={(index) =>
          index === 0 ? "Minimum price" : "Maximum price"
        }
        min={0}
        max={12000}
      />
    </div>
  );
}
