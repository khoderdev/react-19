import React, { useEffect, useRef } from 'react';

const Modal = ({ isOpen, onClose, children }) => {
    const modalRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="fixed inset-0 bg-black-fg opacity-50"></div>
            <div ref={modalRef} className="bg-white-bg dark:bg-black-bg rounded-lg p-8 max-w-md w-full z-10">
                <span className="absolute text-3xl top-0 right-10 m-4 text-green-pri hover:text-green-sec cursor-pointer" onClick={onClose}>&times;</span>
                {children}
            </div>
        </div>
    );
};

export default Modal;
