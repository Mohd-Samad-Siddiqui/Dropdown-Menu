import React, { useState } from "react";
import "./DropdownMenu.css";

const DropdownMenu = () => {
  //Using State Hook for hovering section
  const [isOpen, setIsOpen] = useState(false);

  //Using 2nd time the State Hook to select the options
  const [selectedOption, setSelectedOption] = useState("");

  const handleHover = () => {
    setIsOpen(true);
  };

  const handleLeave = () => {
    setIsOpen(false);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div
      className="dropdown"
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
    >
      <div className="dropdown-trigger">
        <button className="button" aria-haspopup="true">
          <h3>Choose frontend framework</h3>
        </button>
      </div>
      {isOpen && (
        <div className="dropdown-menu">
          <ul className="dropdown-content">
            <li onClick={() => handleOptionClick("Angular")}>Angular</li>
            <li onClick={() => handleOptionClick("React")}>React</li>
            <li onClick={() => handleOptionClick("Vue")}>Vue</li>
            <li onClick={() => handleOptionClick("Meteor")}>Meteor</li>
            <li onClick={() => handleOptionClick("Svelte")}>Svelte</li>
          </ul>
        </div>
      )}
      {selectedOption && (
        <p>So your favourite framework is {selectedOption}. That's great.</p>
      )}
    </div>
  );
};

export default DropdownMenu;
