// src/ModalTrigger.jsx
import React, { useState, Children, cloneElement } from 'react';
import Modal from './Modal';

const ModalTrigger = ({ children, modalContent, isReview = false }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpenModal = () => {
        setIsOpen(true);
    };

    const handleCloseModal = () => {
        setIsOpen(false);
    };

    // Clone and add onClick to the button (and its content)
    const clonedChildren = Children.map(children, child => {
        return cloneElement(child, {
            onClick: handleOpenModal,
            style: {  // Apply any button-specific styles here, if needed
                cursor: 'pointer', // Show cursor
                // other styles like padding, background, etc.
            }
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