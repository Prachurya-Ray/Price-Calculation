import React, { useState } from 'react';
import Modal from './Modal';

const Card = ({ name, size }) => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        // console.log('Opening Modal');
        setIsOpen(true);
    };

    const closeModal = () => {
        // console.log('Closing Modal');
        setIsOpen(false);
    };

    return (
        <div className="dineIn-menu-card m-2 p-2" onClick={openModal}>
            <span>{name}</span>
            <Modal isOpen={isOpen} closeModal={closeModal} size={size}/>
        </div>
    );
};

export default Card;
