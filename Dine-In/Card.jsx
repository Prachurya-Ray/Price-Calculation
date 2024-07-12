import React, { useState } from 'react';
import Modal from './Modal';

const Card = ({ name, size }) => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    return (
        <div className="dineIn-menu-card m-2 p-2" onClick={openModal}>
            <span>{name}</span>
            <Modal isOpen={isOpen} closeModal={closeModal} name={name} size={size}/>
        </div>
    );
};

export default Card;
