import "./_selectbox.scss";
import React, { useState } from "react";
import PropTypes from "prop-types";

function SelectBox(props) {
  const { options, placeholder, ariaLabelledBy, onChange } = props;
  const [isVisible, setIsVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const selectRef = React.createRef();
  const handleVisible = () => {
    setIsVisible(!isVisible);
  };
  const handleOption = (e) => {
    onChange(e);
    e.target.setAttribute("aria-selected", true);
    const selected = e.target.getAttribute("data-value");
    setSelectedOption(selected);
    handleVisible();
  };
  return (
    <div className="selectbox-wrapper">
      <div
        className={`selectbox-selected-item ${
          selectedOption ? "" : "non-selected"
        }`}
      >
        <button type="button" ref={selectRef} onClick={handleVisible}>
          {selectedOption || placeholder}
        </button>
      </div>
      <ul
        className={`selectbox-items ${isVisible ? "visible" : "hidden"}`}
        role="menu"
        aria-labelledby={ariaLabelledBy}
      >
        {options.length ? (
          options.map((option) => (
            <li
              role="option"
              key={option.id}
              className="selectbox-item"
              data-id={option.id}
              data-value={option.value}
              aria-selected={false}
              onClick={handleOption}
            >
              {option.value}
            </li>
          ))
        ) : (
          <li class="selectbox-item">There is no option!</li>
        )}
      </ul>
    </div>
  );
}

SelectBox.propTypes = {
  options: PropTypes.array,
  placeholder: PropTypes.string,
  ariaLabelledBy: PropTypes.string,
  onChange: PropTypes.func,
};

export default SelectBox;
