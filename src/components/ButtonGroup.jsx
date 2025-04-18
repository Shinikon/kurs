import React, { useState } from "react";
import "../scss/components/_buttonGroup.scss";
const ButtonGroup = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const buttons = [
    { label: "Архитектурная визуализация", index: 0 },
    { label: "3D-модели для видеоигр", index: 1 },
    { label: "Модели для рекламы", index: 2 },
  ];

  const handleButtonClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="button-group">
      {buttons.map(({ label, index }) => (
        <button
          key={index}
          className={`button ${activeIndex === index ? "active" : ""}`}
          onClick={() => handleButtonClick(index)}
        >
          {label}
        </button>
      ))}
    </div>
  );
};

export default ButtonGroup;
