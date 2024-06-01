import React, { useState, useEffect } from "react";
import "./ToggleStyle.css";

const Toggle = ({ id, isActive, onToggle }) => {
  const [active, setActive] = useState(isActive);

  useEffect(() => {
    setActive(isActive);
  }, [isActive]);

  const handleToggle = () => {
    setActive(!active);
    onToggle(id, !active);
  };

  return (
    <div onClick={handleToggle} className={`toggle ${active ? "active" : ""}`}>
      <div className={`spinner ${active ? "active" : ""}`}></div>
    </div>
  );
  {
    /* <div
        className={`toggle ${status ? "active" : ""}`}
        onClick={handleToggle}
        onChange={handleToggle}
      >
        <div className={`spinner ${status ? "active" : ""}`}></div>
      </div> */
  }
};

export default Toggle;
