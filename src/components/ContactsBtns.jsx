import React, { useState } from 'react';
import '../scss/components/_buttons.scss'

function ContactsBtns({ initialContent, toggledContent, style }) {
    const [contentVisible, setContentVisible] = useState(true);
    const [isDarkened, setIsDarkened] = useState(false);
    const [isActive, setIsActive] = useState(false);
  
      const handleClick = () => {
      setContentVisible(!contentVisible);
      setIsDarkened(!isDarkened);
      setIsActive(!isActive); // Toggle isActive only on click
    };
  
    return (
      <button
        className={`btn btn--blue btn--reveal ${isDarkened ? 'btn--darkened' : ''} ${isActive ? 'btn--active' : ''}`}
        onClick={handleClick}
        style={style}
      >
        <span className="btn__content">
          {contentVisible ? initialContent : toggledContent}
        </span>
      </button>
    );
  }
export default ContactsBtns;