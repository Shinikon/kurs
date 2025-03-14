// Modal.jsx
import React from 'react';
import '../scss/components/_modal.scss';
import closeIcon from '../assets/img/close.svg';


const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;
    return (
      <div className="modal-overlay">
        <div className="modal">
          <button className="modal-close-button" onClick={onClose}>
            <img src={closeIcon} alt="Закрыть" />
          </button>
          {children}
        </div>
      </div>
    );
  };
  
  export default Modal;