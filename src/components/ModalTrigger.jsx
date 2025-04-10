import React, { useState, Children, cloneElement } from "react";
import Modal from "./Modal";
const ModalTrigger = ({ children, modalContent, isReview = false }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };
  const handleCloseModal = () => {
    setIsOpen(false);
  };
  const clonedChildren = Children.map(children, (child) => {
    return cloneElement(child, {
      onClick: handleOpenModal,
      style: {
        cursor: "pointer",
      },
    });
  });
  return (
    <>
      {clonedChildren}
      {isOpen && (
        <Modal isOpen={isOpen} onClose={handleCloseModal}>
          {modalContent}
        </Modal>
      )}
    </>
  );
};
export default ModalTrigger;







