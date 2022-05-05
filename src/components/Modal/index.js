/* eslint-disable no-unused-vars */
import React from 'react';

// compose the modal
const Modal = ({ onClose, currentPhoto }) => {
    const { name, description, category, index } = currentPhoto;
    return (
        // markup for modal
        <div className="modalBackdrop">
            <div className="modalContainer">
                <h3 className="modalTitle">{name}</h3>
                <img 
                src={require(`../../assets/large/${category}/${index}.jpg`)}
                alt="current category" />
                <p>{description}</p>
                <button type="button" onClick={onClose}>
                    Close this modal
                </button>
            </div>
        </div>
    );
}

export default Modal;