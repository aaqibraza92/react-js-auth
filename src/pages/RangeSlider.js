import React, { useState, useCallback } from "react";
import debounce from "lodash.debounce";

const RangeSlider = () => {
  const [value, setValue] = useState(50); // Initial slider value

  // Debounced function (runs API call after user stops dragging)
  const debouncedApiCall = useCallback(
    debounce((newValue) => {
      console.log("API Called with value:", newValue);

    }, 1000), // 500ms delay after drag stops
    []
  );

  // Handle Slider Change
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  // Call API only on drag end (onMouseUp)
  const handleDragEnd = () => {
    debouncedApiCall(value);
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <input
        type="range"
        min="0"
        max="100"
        value={value}
        onChange={handleChange}
        onMouseUp={handleDragEnd} // Detect drag end
        onTouchEnd={handleDragEnd} // For mobile support
      />
      <p>Value: {value}</p>
    </div>
  );
};

export default RangeSlider;
