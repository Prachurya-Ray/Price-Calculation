import React from 'react';
// import './Modal.css'; // Ensure this CSS file is correctly imported

const Modal = ({ isOpen, closeModal, name, size }) => {
    // console.log('Modal isOpen:', isOpen); // Log isOpen state

    if (!isOpen) return null;

    return (
        <div className="modal-overlay"onClick={e => e.stopPropagation()}>
                <h2>Choose Your Size</h2>
                <div className="flex-horizontal modal-container">
                    {
                        size.map((size) => {
                            return (
                                <span className="modal-content m-2 p-1" key={size.id}>
                                    {size.size}  :  {size.price}
                                    <button type="button" className="btn btn-success"
                                        
                                    >Add</button>
                                </span>
                            );
                        })
                    }

                </div>
                <button onClick={closeModal}>Close Modal</button>
        </div>
    );
};

export default Modal;
