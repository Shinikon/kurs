import React, { useState } from 'react';
import Modal from './Modal';

const ModalTrigger = ({ children, modalContent, isReview = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const key = Math.random();

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <div style={{ cursor: 'pointer' }}>
      {React.cloneElement(children, { onClick: handleOpenModal })}
      <Modal key={key} isOpen={isOpen} onClose={handleCloseModal}>
        <div onClick={(e) => e.stopPropagation()} className={isReview ? 'review-modal' : ''}>
          {modalContent}
        </div>
      </Modal>
    </div>
  );
};

export default ModalTrigger;