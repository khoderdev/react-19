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
        <div ref={modalRef} className="bg-white-bg dark:bg-black-bg rounded-lg p-8 py-10 max-w-md w-full mx-2 z-10 relative">
            <span className="absolute top-2 right-4 sm:right-4 md:right-4 text-3xl text-green-pri hover:text-green-sec cursor-pointer" onClick={onClose}>&times;</span>
            {children}
        </div>
    </div>
    
    );
};

export default Modal;
